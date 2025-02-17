import React, {useState} from 'react'

const Greeting = () => {
  let [name, setName] = useState('')
  const handleChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
        <label htmlFor="name">Enter your name:</label>
        <br /> <br />
        <input type="text" onChange={handleChange} />
        <p>{name.trim() !== '' ? `Hello ${name}!`: ''}</p>
    </div>
  )
}

export default Greeting