import Say from './Say';

const App = () => {
  return <Say />;
};

export default App;

const array = [
  {id: 1, value: true},
  {id: 2, value: true},
  {id: 3, value: true},
];

let nextArray = array.concat({id: 4});
console.log(nextArray);
console.log(nextArray[0].id);
const thirdArray = nextArray.filter(item=>item.id !== 2);
console.log(thirdArray);
const forthArray = thirdArray.map(item=>(item.id ===1 ? {...item, value: false} : item));
console.log(forthArray);
