import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      response = await response.json()
      setData(response)
    }
    fetchMyAPI()
  }, [])

  console.log(data)

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = data.filter(data => {
        const regex = new RegExp(`${text}`, "gi");
        return data.name.match(regex)
      })
    }
    setSuggestions(matches)
    setText(text)
  }

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }
  return (
    <div className="App">
      <main>
        <h2>Sign in</h2>
        <input
          type='text'
          onChange={e => onChangeHandler(e.target.value)}
          value={text}
          placeholder='Username'
        />
        {suggestions && suggestions.map((suggestions, i) =>
          <div
            key={i}
            className='suggestion'
            onClick={() => onSuggestHandler(suggestions.name)}
          >
            {suggestions.name}
          </div>
        )}
        <input
          type='password'
          placeholder='Password'
        />
        <button>
          Sign in
        </button>
      </main>
    </div>
  );
}

export default App;
