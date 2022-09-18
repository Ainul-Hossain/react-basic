import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let products = [
    {name: 'Photoshop', price: '99.99$'},
    {name: 'Illustrator', price: '85.99$'},
    {name: 'PDF Reader', price: '70$'},
    {name: 'Adobe Premire Pro', price: '89.90$'}
  ]
  let names = ['Ainul', 'Sakib', 'Arif', 'Hossain', 'Razzak'];

  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        {
          products.map((product)=> <Product product={product}></Product>)
        }

        <ul>
          {names.map((name)=><li>{name}</li>)}
        </ul>

        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        
      </header>
    </div>
  );
}

function Counter (){
  let [count, setCount] = useState(9);
  let counterStyle = {
    marginBottom: '10px'
  }

  return (
    <div style={counterStyle}>
      <Users></Users>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)} style={{marginRight:"5px"}}>Decrease</button>
      <button onClick={()=>setCount(count+1)} >Increase</button>
    </div>
  )
}

function Users(props){
  let [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map((val)=><li style={{listStyleType: 'number'}}>Name: {val.name} Email: {val.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  let style = {
    backgroundColor: 'lightgray',
    float: 'left',
    borderRadius: '2px',
    width: '200px',
    border: '2px solid gray',
    color: 'black'
  }
  let {name, price} = props.product;

  return (
    <div style={style}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
