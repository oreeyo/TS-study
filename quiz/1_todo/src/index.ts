// typing(타이핑) => 타입이 정의되지않은 코드에 타입을 입혀주는 행위

// any 타입 => 자바스크립트의 원래 성질인 
// 실행하는 시점에 타입을 구분해서 타입을 할당해주는 관점에서 any가 있다고 보면 된다.
// 타입 모르면 any가 치트키인 느낌..?

// let todoItems : object[];      // object[] => object로 이루어진 배열이라는 뜻.

// showComplted 함수에서 done도 타입을 지정해줘야하기 때문에, 이렇게 일일히 타입 지정을 해줌,
// 아마 인터페이스 배우기 전이라 일부러 이렇게하는 느낌.
let todoItems : {id: number, title: string, done: boolean}[]; 


// api
function fetchTodoItems() {
  const todos : {id: number, title: string, done: boolean}[] = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

// 함수의 반환 값이 없을 땐 , 명시적으로 return 타입을 void로 지정해줘야 한다.
function addTodo(todo : {id: number, title: string, done: boolean}) : void {
  todoItems.push(todo);
}

function deleteTodo(index : number) : void {
  todoItems.splice(index, 1);
}

function completeTodo(index : number, todo : {id: number, title: string, done: boolean}) : void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() : object{
  return todoItems[0];
}

function showCompleted() : object[] {
  return todoItems.filter(item => item.done);
/*
  todoItems.filter(function(item){
    if(item.done === true){
      return item;
    }
  })
*/

}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() : void {
  
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.

const item4 = {id: 4, title: 'item4', done: false }
addTodo(item4)
addTodo({id: 5, title: 'item5', done: false })  


}

// NOTE: 유틸 함수
function log() : void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
