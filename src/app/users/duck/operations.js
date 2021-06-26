import store from "../../../store";
import actions from "./actions";

const API = 'https://jsonplaceholder.typicode.com/users'

const fetchMovies = async () => {
    const response = await fetch(`${API}`, { method: 'GET' })
    const json = await response.json()
    console.log(json)
    return json
}
export const getAllUsers = () =>
    async (dispatch) => {
        const users = await fetchMovies()
        console.log(users)
        // users.map(user => dispatch(actions.add(user.name)))
        // store.dispatch(users)
        dispatch(actions.add(users))
    }