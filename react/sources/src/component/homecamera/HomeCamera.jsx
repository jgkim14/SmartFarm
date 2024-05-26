import React, { useRef, useState, useEffect } from 'react';
import './homecamera.css';

function HomeCamera() {
  const videoRef = useRef(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedBlobs, setRecordedBlobs] = useState([]);

  const startWebRTC = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    startRecording(stream);
  };

  const startRecording = (stream) => {
    const options = { mimeType: 'video/webm; codecs=vp9' };
    let newRecorder;
    try {
      newRecorder = new MediaRecorder(stream, options);
      setMediaRecorder(newRecorder);
    } catch (e) {
      console.error('Exception while creating MediaRecorder:', e);
      return;
    }

    newRecorder.onstop = (event) => {
      const blob = new Blob(recordedBlobs, { type: 'video/webm' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'recorded.webm';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    };

    newRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        setRecordedBlobs((prevBlobs) => [...prevBlobs, event.data]);
      }
    };

    newRecorder.start();
    console.log('MediaRecorder started', newRecorder);
  };

  useEffect(() => {
    startWebRTC();
  }, []);



  return (
    <div className="HomeCameraContainer">
      <video className="HomeCameraVideo" ref={videoRef} autoPlay></video>
    </div>
  );
}

export default HomeCamera;
