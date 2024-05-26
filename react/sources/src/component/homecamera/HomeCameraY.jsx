import React, { useRef, useState, useEffect } from 'react';
import './homecamera.css';

function HomeCameraY() {
    const iframeMarkup = {
        __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P_3AGeQxGoA?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      };



  return (
    <div className="HomeCameraContainer">
    {/* 유튜브 실시간 스트리밍 영상 재생 */}
    <div dangerouslySetInnerHTML={iframeMarkup} />
  </div>
  );
}

export default HomeCameraY;
