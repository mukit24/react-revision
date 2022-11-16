import {useState} from 'react';

const Form = () => {
    const [favMovie,setFavMovie] = useState('');
    const [inputs,setInputs] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Fav Movie: ${favMovie}`);
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]: value}))
    }
  return (
    <>
    <h3>My Forms:</h3>
    <form onSubmit={handleSubmit}>
        <label>Enter fav Movie:
            <input type="text" value={favMovie} onChange={(e) => setFavMovie(e.target.value)}/>
            <input type="submit" value="Submit" />
        </label>
    </form>
    <h3>Multi Input Form:</h3>
    <form>
        <input type="text" placeholder='Write Name' name='name' value={inputs.name} onChange={handleChange} />
       <input type="number" placeholder='Write age' name='age' value={inputs.age} onChange={handleChange} />
    </form>
    </>
  )
}

export default Form