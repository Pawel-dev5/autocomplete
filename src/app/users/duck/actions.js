import types from './types';

const add = item => ({
    type: types.ADD_USER,
    item
});

export default {
    add
}
