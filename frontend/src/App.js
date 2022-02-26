import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST}/accounts`)
      .then((res) => res.json())
      .then((data) => console.log(data) || setAccounts(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {accounts.map((item) => (
          <div key={item.id}>{item.username}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
