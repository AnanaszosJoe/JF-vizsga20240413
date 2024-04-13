import React from 'react'
import { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    const feedbackData = {
      email,
      message,
      timestamp: Date.now(),
    }
    console.log(feedbackData);

  }
  return (
    <div className='container shadow p-5 contact'>
      
        <h2>Lépj velünk kapcsolatba</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" 
            value={email}
            onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Üzenet:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message}
            onChange={e=>setMessage(e.target.value)}></textarea>
          </div>
          <button className='btn btn-primary ' onClick={handleSubmit}>Küldés</button>
        </form>
    </div>
  )
}

