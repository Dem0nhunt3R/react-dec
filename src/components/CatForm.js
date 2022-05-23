import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {catActions} from "../redux";

const CatForm = () => {
    const {reset, handleSubmit, register, setValue} = useForm();
    const {catForUpdate, cats} = useSelector(({cat}) => cat);
    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            setValue('name', catForUpdate.name)
        }
    }, [catForUpdate, setValue, cats]);

    const save = ({name}) => {
        if (!catForUpdate) {
            console.log('create');
            dispatch(catActions.addCat({name}));
        } else {
            console.log('update')
            dispatch(catActions.updateCat({name, id: catForUpdate.id}));
        }
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('name')}/>
                <button>{catForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CatForm};