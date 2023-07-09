import React from "react";
import { useState } from "react";
import './App.css'

const user = {
  name: 'Hedy Lamarr',
  imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

const products = [
  {title: 'Cabbage', id: 1, isFruit: false},
  {title: 'Garlic', id: 2, isFruit: false},
  {title: 'Apple', id: 3, isFruit: true}
]

function Profolio() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageURL}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick1() {
    setCount(count + 1)
  }

  function handleClick2() {
    setCount(0)
  }

  return (
    <>
      <button onClick={handleClick1}>Clicked {count} times</button><br/>
      <button onClick={handleClick2}>Reset</button>
    </>
  )
}

function MyButton2({count, onClick}) {
  return (
    <>
      <button onClick={onClick[0]}>Clicked {count} times</button><br/>
      <button onClick={onClick[1]}>Reset</button>
    </>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick1_2() {
    setCount(count + 1)
  }

  function handleClick2_2() {
    setCount(0)
  }

  const listItems = products.map(product => 
    <li key={product.id}
        style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}
    >
      {product.title}
    </li>
  )

  return (
    <>
      <h1>My React App</h1>
      <h3>Counters that update separately</h3>
      <MyButton /><br/>
      <MyButton />
      <h3>Counters that update together</h3>
      <MyButton2 count={count} onClick={[handleClick1_2, handleClick2_2]} /><br/>
      <MyButton2 count={count} onClick={[handleClick1_2, handleClick2_2]} />
      <Profolio />
      {listItems}
    </>
  );
}
