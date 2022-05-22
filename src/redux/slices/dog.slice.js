import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: []
}
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const newDog = {id: new Date().getTime(), name};
            state.dogs.push(newDog);
        },
        updateDog: (state, action) => {
            const {dog} = action.payload;
            console.log(dog)
            const index = state.dogs.findIndex(value => value.id === dog.id);
            state.dogs.splice(index, 1, dog);
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            console.log(id)
            const index = state.dogs.findIndex(dog => dog.id === id);
            state.dogs.splice(index, 1);
        }
    }
});

const {reducer: dogReducer, actions: {addDog, updateDog, deleteDog}} = dogSlice;

export default dogReducer;
export const dogActions = {addDog, updateDog, deleteDog};
