import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const UsersForm = ({ add }) => {

    const userInput = React.createRef();

    const addUser = (event) => {
        event.preventDefault()
        add(userInput.current.value)

        userInput.current.value = ''
    };

    return (
        <form onSubmit={addUser}>
            <input ref={userInput} />
            <button type="submit">Add user</button>
        </form>
    )
};

const mapDispatchToProps = dispatch => ({
    add: user => dispatch(actions.add(user))
})

export default connect(null, mapDispatchToProps)(UsersForm);