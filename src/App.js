import React, {useEffect, useReducer} from 'react';

import css from './App.module.css';
import {Dog} from "./components/Dog";
import {Cat} from "./components/Cat";
import {useForm} from "react-hook-form";

const init = (dogsInit = [], catsInit = []) => {
    return {cats: catsInit, dogs: dogsInit};
}

const reducer = (state, action) => {
    const {type, payload} = action;
    const {cats, dogs} = state;

    switch (type) {
        case 'catSubmit':
            console.log(payload)
            return {...state, cats: [...cats, payload]};
        case 'dogSubmit':
            return {...state, dogs: [...dogs, payload]};
        case'dogDelete':
            const indexOfDogs = dogs.indexOf(payload);
            if (dogs.includes(payload)) {
                dogs.splice(indexOfDogs, 1);
            }
            return {...state, dogs};
        case'catDelete':
            const indexOfCats = cats.indexOf(payload);
            if (cats.includes(payload)) {
                cats.splice(indexOfCats, 1);
            }
            return {...state, cats};
        default:
            return state;
    }
}

const App = () => {
    const {register, reset, handleSubmit} = useForm();
    const [state, dispatch] = useReducer(reducer, [], init);

    useEffect(() => {
    }, [state]);


    const catSubmit = (cat) => {
        const {catName} = cat;
        if (catName) {
            if (state.cats.includes(catName)) {
                alert('already exist');
            } else {
                dispatch({type: 'catSubmit', payload: catName})
                reset();
            }
        } else {
            alert('empty cat\'s name')
        }
    }

    const dogSubmit = (dog) => {
        const {dogName} = dog;
        if (dogName) {
            if (state.dogs.includes(dogName)) {
                alert('already exist');
            } else {
                dispatch({type: 'dogSubmit', payload: dogName})
                reset();
            }
        } else {
            alert('empty dog\'s name')
        }
    }

    const dogDelete = (dog) => {
        dispatch({type: 'dogDelete', payload: dog});
    }

    // const catDelete=(cat)=> {
    //     dispatch({type: 'catDelete', payload: cat});
    // }

    return (
        <div>
            <div className={css.box}>
                <form onSubmit={handleSubmit(catSubmit)}>
                    <label>Cat's name <input type="text" {...register('catName')}/></label>
                    <button>create</button>
                </form>
                <form onSubmit={handleSubmit(dogSubmit)}>
                    <label>Dog's name <input type="text" {...register('dogName')}/></label>
                    <button>create</button>
                </form>
            </div>
            <hr/>
            <div className={css.pets}>
                <div>
                    Cats:
                    {state.cats.map(cat => <Cat
                        cat={cat}
                        dispatch={dispatch}
                    />)}
                </div>
                <div>
                    Dogs:
                    {state.dogs && state.dogs.map(dog => <Dog
                        dog={dog}
                        dogDelete={dogDelete}
                    />)}
                </div>
            </div>
        </div>
    )
        ;
};

export {App};