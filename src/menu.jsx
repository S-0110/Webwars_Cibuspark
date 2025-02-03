import React from 'react'

const menu = () => {
  return (
    <div> <div className="container" id="where">
    <div className="content">
      <h5 className="section-title">WHERE TO FIND US</h5>
      <p>Find us at some address at some place.</p>
      <img src="./assets/2175358.png" alt="harsj" />
      <p>We offer full-service catering for any event, large or small...</p>
      <p><strong>Reserve</strong> a table or send us a message:</p>
      <form action="/action_page.php">
        <input type="text" placeholder="Name" required name="Name" />
        <input type="number" placeholder="How many people" required name="People" />
        <input type="datetime-local" placeholder="Date and time" required name="date" />
        <input type="text" placeholder="Message \ Special requirements" required name="Message" />
        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  </div></div>
  )
}

export default menu