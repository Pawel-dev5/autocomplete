
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
    const { name } = useSelector(state => state.users);

    useEffect(() => {
        getAllUsers()
    }, [])

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = name.filter(name => {
                const regex = new RegExp(`${text}`, "gi");
                return name.name.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
    }

    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }
    if (name !== undefined) {
        return (
            <div className='form-container'>
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
            </div>
        )

    } else return <p>nie ma nic</p>
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(FormContainer)