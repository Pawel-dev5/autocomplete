import actions from "./actions";
const API = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
    const response = await fetch(`${API}`, { method: 'GET' })
    const json = await response.json()
    return json
}
export const getAllUsers = () =>
    async (dispatch) => {
        const users = await fetchUsers()
        dispatch(actions.add(users))
    }