send = document.querySelector("#send");
geo = document.querySelector("#geo");

function messageDiv(message, who){
    parent = document.querySelector('.messageWindow');
    if (who == 'human'){
        messageClass = 'messageHuman'
    }
    else{
        messageClass = 'messageEcho'
    }
    div = `<div class = '${messageClass}'>${message}</div>`;
    parent.insertAdjacentHTML('beforeend', div)
}

function findGeo(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        a_link =  `<a href='https://www.openstreetmap.org/#map=18/${latitude}/${longitude}'>Геолокация</a>`;
        messageDiv(a_link, 'human');
    })
    }
}

const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');

send.addEventListener('click', () => {
    message = document.querySelector('input').value;
    messageDiv(message, 'human');
      websocket.send(message);
      websocket.onmessage = function(evt) {
        messageDiv(evt.data, 'bot');
        }

})

geo.addEventListener('click', findGeo)