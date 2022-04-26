import React from 'react';
import {carService} from "../../services";

const Car = ({car, setDeletedCar, setCarForUpdate}) => {

    const {id, model, price, year} = car;

    const deleteCar = async (id) => {
        await carService.deleteCar(id);
        setDeletedCar(car);
    }

    const getCarForUpdate = (car) => {
        setCarForUpdate(car);
    }

    return (
        <div>
            {car && <div>{id}-- {model} -- {price} -- {year}</div>}
            <button onClick={() => getCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export {Car};