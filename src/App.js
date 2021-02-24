import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
//   let person = {
//     name: "Sabbir",
//     job: "B.sc in CSE"
// }
//   let person2 = {
//     name: "Sabbir",
//     job: "B.sc in CSE"
// }
// let style ={
//   color: "red",
//   backgroundColor: "yellow"
// }
  const products = [
    {name: "Photoshop", price: "$90.99"},
    {name: "Illustrator", price:"$60.99"},
    {name: "PDF Reader", price: "$6.00"},
    {name: "Premiere El", price: "$249.99"}
    ]
    const friends = ["Sabbir", "Komol", "Salkin", "Mizan","Shafa","Zafrin"];
    // const productNames = products.map(product => product.name)
    // console.log(productNames);
    const friendsName = friends.map(friend => friend);
    console.log(friendsName);
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a React Person</p>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Counter></Counter>
        <Users></Users>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My Heading: {person.name + " "+ person.job}</h1>
        <h3>My Heading: {person2.name + " "+ person2.job}</h3>
        <p>My first React Paragraph</p> */}

        <ul>
        {
          friends.map(friend => <li>{friend}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
          
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left"
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: "2px solid yellow", width: "400px"}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
