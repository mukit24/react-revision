import React, { useState } from 'react'

const Car = (props) => {
    const {person,name,color} = props
    const carStart = () =>{
        alert('Broom Broom');
    }

    const [newCar, setnewCar] = useState({
        name : 'BMW',
        color: 'Red',
    })
    const changeColor = () =>{
        setnewCar(prevState => {
            return {...prevState, color: 'Black'}
        })
    }
    const sayName = name =>{
        alert(`Your Name is ${name}`)
    }
    const Cars = ['Ford', 'BMW', 'Audi']


  return (
    <>
    <h4>This is my car.My name is {person.name} and age is {person.age}</h4>
    <h5>Name = {name}</h5>
    <h5>Color = {color}</h5>
    <h5>Interested in buying following cars:</h5>
    <ul>
        {Cars.map((car) => <li key={car}> {car}</li>)}
    </ul>
    <button onClick={carStart}>Start Car</button>
    <button onClick={() => sayName(person.name)}>Say my name</button>
    <p>new car: {newCar.name} and {newCar.color} color</p>
    <button onClick={changeColor}>Change color to Black</button>
    </>
  )
}

export default Car