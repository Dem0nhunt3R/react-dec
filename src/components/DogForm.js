import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {dogActions} from "../redux";


const DogForm = () => {
    const {reset, setValue, register, handleSubmit} = useForm();
    const {dogForUpdate} = useSelector(({dog}) => dog);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dogForUpdate)
            setValue('name', dogForUpdate.name)
    }, [dogForUpdate, setValue]);

    const dogSubmit = ({name}) => {
        if (dogForUpdate) {
            console.log(dogForUpdate.id)
            dispatch(dogActions.updateDog({id: dogForUpdate.id, name}));
            console.log('update')
        } else {
            dispatch(dogActions.addDog({name}));
            console.log('create');
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(dogSubmit)}>
            <input type="text" {...register('name')}/>
            <button>{dogForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {DogForm};