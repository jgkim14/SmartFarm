const socket = new WebSocket('ws://localhost:8765');

socket.addEventListener('message', function (event) {
    console.log(event.data);//1분마다 들어온 json을 로그로 출력
});