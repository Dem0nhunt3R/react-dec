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

    switch (type) {
        case 'catSubmit':
            return {...state, cats: [...state.cats, payload]};
        case 'dogSubmit':
            return {...state, dogs: [...state.dogs, payload]};
        case'dogDelete':
            const indexOfDogs = state.dogs.indexOf(payload);
            state.dogs.splice(indexOfDogs, 1);
            console.log('splicing dogs')
            return {...state, dogs: [...state.dogs]};
        case'catDelete':
            const indexOfCats = state.cats.indexOf(payload);
            state.cats.splice(indexOfCats, 1);
            console.log('splicing cat '+indexOfCats)
            return {...state, cats: [...state.cats]};
        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, [], init);
    const {register, reset, handleSubmit} = useForm();

    useEffect(() => {

    }, [state.dogs, state.cats]);


    const catSubmit = (cat) => {
        if (cat.catName) {
            if (state.cats.includes(cat.catName)) {
                alert('already exist');
            } else {
                dispatch({type: 'catSubmit', payload: cat.catName})
                reset();
            }
        } else {
            alert('empty cat\'s name')
        }
    }

    const dogSubmit = (dog) => {
        if (dog.dogName) {
            if (state.dogs.includes(dog.dogName)) {
                alert('already exist');
            } else {
                dispatch({type: 'dogSubmit', payload: dog.dogName})
                reset();
            }
        } else {
            alert('empty dog\'s name')
        }
    }

    const dogDelete=(dog)=> {
        dispatch({type: 'dogDelete', payload: dog});
    }

    const catDelete=(cat)=> {
        dispatch({type: 'catDelete', payload: cat});
    }

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
                    {state.cats && state.cats.map(cat => <Cat
                        key={state.cats.indexOf(cat)}
                        cat={cat}
                        catDelete={catDelete}
                    />)}
                </div>
                <div>
                    Dogs:
                    {state.dogs && state.dogs.map(dog => <Dog
                        key={state.dogs.indexOf(dog)}
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