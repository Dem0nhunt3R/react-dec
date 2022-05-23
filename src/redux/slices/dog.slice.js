import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dogForUpdate: null
}
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            let newDog = {id: new Date().getTime(), name};
            state.dogs.push(newDog);
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex(value => value.id === id);
            state.dogs.splice(index, 1);
        },
        updateDog: (state, action) => {
            const {id, name} = action.payload;
            const index = state.dogs.findIndex(value => value.id === id);
            state.dogs[index].name = name;
            state.dogForUpdate = null;
        },
        setDogForUpdate: (state, action) => {
            const {dog} = action.payload;
            state.dogForUpdate = dog;
        }
    }
});

const {reducer: dogReducer, actions: {addDog, deleteDog, updateDog, setDogForUpdate}} = dogSlice;

export default dogReducer;
export const dogActions = {addDog, deleteDog, updateDog, setDogForUpdate};