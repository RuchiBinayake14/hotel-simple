import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Paradise Hotel</h1>
      </header>
      <section className="info">
        <h2>About Us</h2>
        <p>
          Paradise Hotel offers luxurious rooms, a swimming pool, and a
          world-class dining experience.
        </p>
      </section>
      <section className="booking">
        <h2>Book Your Stay</h2>
        <form>
          <label>Check-in Date:</label>
          <input type="date" />
          <label>Check-out Date:</label>
          <input type="date" />
          <label>Guests:</label>
          <input type="number" placeholder="Number of guests" />
          <button>Book Now</button>
        </form>
      </section>
      <footer>
        <p>📍 Paradise Hotel | Contact: info@paradisehotel.com</p>
      </footer>
    </div>
  );
}

export default App;
