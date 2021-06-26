import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../duck/operations';

const FormContainer = (props) => {
    const users = useSelector(state => state.users)
    const [data, setData] = useState(users.list);
    console.log(users)
    const dispatch = useDispatch();
    useEffect(() => {
        // setData(users)
        dispatch(getAllUsers());
        // getAllUsers()
        setData(users.list)
    }, []);

    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);


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
    console.log(data)
    console.log(suggestions
    )
    return (
        <>
            <input
                type='text'
                onChange={e => onChangeHandler(e.target.value)}
                value={text} j
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
            {/* <>
                <ul>
                    {users.list.map((user) => {
                        console.log(user)
                        return (
                            <li key={user.id}>{user}</li>
                        )
                    }
                    )}
                </ul>
            </> */}
        </>
    )
}

export default FormContainer;