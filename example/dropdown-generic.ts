// const emails = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// const numberOfProducts = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function createDropdownItem(item) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

//- --- -- - - - - -  -- - - -- -- -- - -- - -- -- - ---

// 일일히 인터페이스 만들어서 타입지정해주는것보다 제네릭 쓰는게 나음

// interface 에 제네릭을 선언하는 방법
interface DropdownItem<T> {
  value : T;
  selected : boolean;
}

// interface email {
//   value :string;
//   selected : boolean;
// }

// interface numOfProducts {
//   value : number;
//   selected : boolean;
// }

// interface TrueFalse {
//   value : boolean;
//   selected : boolean;
// }



const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];


const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item : DropdownItem<string> | DropdownItem<number>) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

function createDropdownItem< T extends { toString(): string } > (item : DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag?.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag?.appendChild(item);
})