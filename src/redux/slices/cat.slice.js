import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate: null
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
            const index = state.cats.findIndex(value => value.id === action.payload.id);
            state.cats[index].name = action.payload.name;
            state.catForUpdate = null;
        },
        catForUpdate: (state, action) => {
            const {cat} = action.payload;
            state.catForUpdate = cat;
        },
        deleteCat: (state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex(value => value.id === id);
            state.cats.splice(index, 1);
        }
    }
});

const {reducer: catReducer, actions: {addCat, updateCat, deleteCat, catForUpdate}} = catSlice;

export default catReducer;
export const catActions = {addCat, updateCat, deleteCat, catForUpdate};