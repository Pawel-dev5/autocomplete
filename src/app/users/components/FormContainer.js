
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../duck/operations';
import { useSelector } from 'react-redux';

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers())
})

const FormContainer = ({ getAllUsers }) => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const { list } = useSelector(state => state.users);

    useEffect(() => {
        getAllUsers()
    }, [])

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = list.filter(list => {
                const regex = new RegExp(`${text}`, "gi");
                return list.name.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
    }

    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }
    if (list !== undefined) {
        return (
            <div className='form-container'>
                <h1>Sign in</h1>
                <form>
                    <input
                        type='text'
                        onChange={e => onChangeHandler(e.target.value)}
                        value={text}
                        placeholder='Username'
                    />
                    <ul>
                        {suggestions && suggestions.map((suggestions, i) =>
                            <li
                                key={i}
                                className='suggestion'
                                onClick={() => onSuggestHandler(suggestions.name)}
                            >
                                {suggestions.name}
                            </li>
                        )}
                    </ul>
                    <input
                        type='password'
                        placeholder='Password'
                    />
                    <button type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        )

    } else return (
        <div className="App">
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        </div>
    )
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(FormContainer)