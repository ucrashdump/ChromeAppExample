const toDoForm = document.querySelector(".js-toDoForm"), toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function filterFn(toDo){
  return toDo.id === 1
}

function deleteToDo(event){
  // console.dir(event.target);
  // console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // const cleanToDos = toDos.filter(filterFn);

  //filter는 array의 모든 아이템을 통해서 함수를 실행하고,
  //filterFn을 통해서 걸러진 아이템만을 통해서
  //새로운 array를 만든다.
  // console.log(cleanToDos);
  //-> goEat만 나오고 이를 지우면 아무것도 안나옴.//todo.id === 1 기준
  const cleanToDos = toDos.filter(function(toDo){
    // console.log(toDo.id,li.id);
    return toDo.id !==parseInt(li.id);
    });
  toDos = cleanToDos;//텍스트만 전달하므로
  saveToDos();//여기서 아이디를 알아서 정렬함.
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML="X";
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  delBtn.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.id = newId;//<li에 id 입력 
  toDoList.appendChild(li);
  const toDoObj = {
    text:text,
    id: newId
  }
  toDos.push(toDoObj);//[]부분에 직접적으로 밀어넣음. const를 써도 되는 이유.
  saveToDos();//그러나 직접 저장은 못함. key hello value true -> 오브젝트저장.
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
// parsedToDos.forEach(something); //로 사용할 경우
function something (toDo){
  console.log(todo.text);
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
    // parsedToDos.forEach(something);

  }
}


function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}

init();