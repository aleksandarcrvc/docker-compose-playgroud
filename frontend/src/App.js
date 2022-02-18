import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/accounts")
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
