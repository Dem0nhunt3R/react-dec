import React from 'react';
import css from './Components.module.css'
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {nameValidator} from "../validators/mainValidator";
import {joiResolver} from "@hookform/resolvers/joi";


const Form = () => {
    const {reset, setValue, register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(nameValidator)
    });

    const dispatch = useDispatch();

    const catSubmit = ({catInput}) => {
        console.log(catInput);
        reset()
    }

    const dogSubmit = ({dogInput}) => {
        console.log(dogInput)
    }

    return (
        <div className={css.forms}>
            <form onSubmit={handleSubmit(catSubmit)}>
                <div>
                    <label>cat's name: <input type="text" {...register('catInput')}/></label>
                </div>
                <div>{errors.name && <span>{errors.name.message}</span>}</div>
                <button>add</button>
            </form>

            <form onSubmit={handleSubmit(dogSubmit)}>
                <input type="text" {...register('dogInput')}/>
                <button>add</button>
            </form>
        </div>
    );
};

export {Form};