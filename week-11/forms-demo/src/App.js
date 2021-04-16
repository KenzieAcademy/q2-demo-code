import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");
  const [selected, setSelected] = useState("0");
  const [options, setOptions] = useState({
    pizza: false,
    burgers: false,
    cookies: false,
    nothing: false,
  });
  const [guests, setGuests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuests((state) => [...state, name]);
    setName("");
    setEmail("");
    setRadio("");
    setSelected("0");
    setOptions({
      pizza: false,
      burgers: false,
      cookies: false,
      nothing: false,
    });
    console.log("its working");
  };

  return (
    <div className="App">
      <h1>Welcome to the Party! RSVP Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          placeholder="john@doe.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <label>
            Going
            <input
              type="radio"
              value="yes"
              checked={radio === "yes"}
              onChange={(e) => setRadio(e.target.value)}
            />
          </label>
          <label>
            Not Going
            <input
              type="radio"
              value="no"
              checked={radio === "no"}
              onChange={(e) => setRadio(e.target.value)}
            />
          </label>
        </div>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div>
          {Object.keys(options).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                onChange={(e) =>
                  setOptions((state) => ({
                    ...state,
                    [e.target.name]: !options[e.target.name],
                  }))
                }
                name={key}
                checked={options[key]}
              />
              {key}
            </label>
          ))}
        </div>
        <input type="submit" value="Submit" />
        <ol>
          {guests.map((guest) => (
            <li key={guest}>{guest}</li>
          ))}
        </ol>
      </form>
    </div>
  );
}

export default App;
