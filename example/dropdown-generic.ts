interface DropdownItem<T> {
  value: T;
  selected: boolean; 
}

interface Email {
  value: string;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
  ];
  

  

  const numberOfProducts:DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<string> | DropdownItem<number>) {
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
  selectTag.appendChild(item);
});

// numberOfProducts.forEach(function (product)  {
//   const item = 
// }

// 제네릭 타입 제한

// function logTextLength<T>(text: T[]):T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   })
//   return text;
// }


// 제네릭 타입 제한 2 - 정의된 타입 이용하기 
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T):T {
  text.length;
  return text;
}

logTextLength(10);
logTextLength({ length: 10 });

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}
 // getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

