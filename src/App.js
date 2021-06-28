import './App.css';
import FormContainer from './app/users/components/FormContainer';

function App({ getAllUsers }) {
  return (
    <div className="App">
      <main>
        <FormContainer getAllUsers={getAllUsers} />
      </main>
    </div>
  )
}

export default App