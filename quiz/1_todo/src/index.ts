// typing(타이핑) => 타입이 정의되지않은 코드에 타입을 입혀주는 행위

// any 타입 => 자바스크립트의 원래 성질인 
// 실행하는 시점에 타입을 구분해서 타입을 할당해주는 관점에서 any가 있다고 보면 된다.
// 타입 모르면 any가 치트키인 느낌..?


// 할 일 항목을 위한 인터페이스 정의
interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

let todoItems:  Array<TodoItem>;


// api
function fetchTodoItems() {
  const todos : Array<TodoItem> = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Array<TodoItem> {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo : TodoItem) {
  todoItems.push(todo);
}

function deleteTodo(index : number) {
  todoItems.splice(index, 1);
}

function completeTodo(index : number, todo : TodoItem) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
