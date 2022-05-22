import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: []
};
const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat = {id: new Date().getTime(), name}
            state.cats.push(newCat);
        },
        updateCat: (state, action) => {
            const {id, name} = action.payload;
            state.cats.find((cat) => Object.assign((cat.id === id), name));
        },
        deleteCat: (state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex(value => value.id === id);
            const splice = state.cats.splice(index, 1);
            console.log(splice);
        }
    }
});

const {reducer: catReducer, actions: {addCat, updateCat, deleteCat}} = catSlice;

export default catReducer;
export const catActions = {addCat, updateCat, deleteCat};