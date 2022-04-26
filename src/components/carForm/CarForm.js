import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services";
import {carValidator} from "../../validators";
import {joiResolver} from "@hookform/resolvers/joi";

const CarForm = ({setCreatedCar, carForUpdate, setUpdatedCar,setCarForUpdate}) => {

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue]);

    const mySubmit = async (car) => {
        if (carForUpdate) {
            const {data} = await carService.updateCar(carForUpdate.id, car);
            setUpdatedCar(data);
            setCarForUpdate(null);
        } else {
            const {data} = await carService.createCar(car);
            setCreatedCar(data);
        }
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <div><label>Model:<input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price:<input type="number" {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="number" {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{carForUpdate ? 'update' : 'create'}</button>
                <hr/>
            </form>
        </div>
    );
};

export {CarForm};