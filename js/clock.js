//#id input=해당 id안에 있는 input가리킴
//h2 #id = h2태그 중 해당 id 가리킴
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
}

//getClock함수가 나온 이유는 setInterval로 1초 기다리지 않고 바로 시간 보여주려고
getClock();
setInterval(getClock, 1000);
