const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //username이 이 함수 안에 있는 이유: 
  //username을 함수밖에서 선언하면 submit하기 전에 input에 있는 value가 username에 저장됨. 
  //현재 input의 value는 값이 없어서 username에는 빈 값이 저장됨. 
  //따라서 submit할때 username에 loginInput.value를 저장해줘야 입력한 값이 저장됨. 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //1))여기서 username은 loginInput.value이고 
  paintGreetings(username);
}

//괄호안 username은 const username 과 상관 없이 함수 안에서 사용할 변수의 이름을 임의로 지어주는 것뿐임.
//그래서 `Hello ${username} `여기에서도 username이라고 해야 함
function paintGreetings(username) {
  greeting.innerText = `Hello ${username} `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greeting h1
  //2))여기서 localStorage에서 꺼내오는 상수 USERNAME_KEY에 대응하는 키 username의 입력된 이름value가 username자리에 간다. 
  paintGreetings(savedUsername);
}
