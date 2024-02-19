// typing(타이핑) => 타입이 정의되지않은 코드에 타입을 입혀주는 행위

// any 타입 => 자바스크립트의 원래 성질인 
// 실행하는 시점에 타입을 구분해서 타입을 할당해주는 관점에서 any가 있다고 보면 된다.
// 타입 모르면 any가 치트키인 느낌..?

// let todoItems : object[];      // object[] => object로 이루어진 배열이라는 뜻.

// 👏👏👏 타입 지정 첫번째 방법 : 인터페이스 이전에 type 이라는 키워드를 사용해서도, type 변수를 만들 수 있음. 타입별칭 이라고 부른다.
// type Todo = {
//   id: number,
//   title: string,
//   done: boolean
// }

// 👏👏👏 타입 지정 두번째 방법 : 인터페이스 사용
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems : Todo[]; 

// api
function fetchTodoItems() {
  const todos : Todo[] = [
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
function addTodo(todo : Todo) : void {
  todoItems.push(todo);
}

function deleteTodo(index : number) : void {
  todoItems.splice(index, 1);
}

function completeTodo(index : number, todo : Todo) : void {
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
