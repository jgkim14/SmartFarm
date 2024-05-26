import React, { useState } from "react";      
import './homehistory.css';

// props 객체에서 tempData를 구조 분해 할당
export default function HistroyBool(){
    const host = '192.168.219.112';
    const port = '8008';
    const apiPath = '/api/senddata';
    const url = `http://${host}:${port}${apiPath}`;

    const sendDataToServer = async (bool_led, bool_fan) => {
        try {
          const response = await fetch(url, {
            method: 'POST', // 또는 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              LED: bool_led,
              SYSFAN: bool_fan
            })
          });
          
          console.log(bool_led)
          if (!response.ok) {
            throw new Error('서버 응답 오류');
          }
          const jsonResponse = await response.json();
          console.log('서버로부터의 응답:', jsonResponse);
        } catch (error) {
          console.error('에러:', error);
        }
      };
      

      const [ledOn, setLedOn] = useState(false);
      const [fanOn, setFanOn] = useState(false);
  
      // sendDataToServer 함수를 여기에 정의하거나 가져옵니다.
      // 예: const sendDataToServer = async (bool_led, bool_fan) => { ... };
  
      return (
          <div className="HomeHistoryBox">
              <div className="HomeHistoryIn">
                  <div className="HomeHistoryContainer">
                      <span className="HomeHistoryFont">
                          LED : <h3 onClick={() => {
                              setLedOn(!ledOn);
                              sendDataToServer(!ledOn, fanOn);
                          }} className="SidebarText">{ledOn ? 'ON' : 'OFF'}</h3>
                          <br/>
                          FAN : <h3 onClick={() => {
                              setFanOn(!fanOn);
                              sendDataToServer(ledOn, !fanOn);
                          }} className="SidebarText">{fanOn ? 'ON' : 'OFF'}</h3>
                      </span>
                  </div>
              </div>
          </div>
      );
}
