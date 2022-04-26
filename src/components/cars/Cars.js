import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../car/Car";

const Cars = ({createdCar, setCarForUpdate, updatedCar}) => {

    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(() => {
        if (createdCar)
            setCars(prevState => [...prevState, createdCar])
        else
            carService.getCars().then(({data}) => setCars(data));
    }, [createdCar]);

    useEffect(() => {
        if (updatedCar) {
            const find = cars.find(car => car.id === updatedCar.id);
            Object.assign(find, updatedCar);
            setCars([...cars]);
        }
        else if(deletedCar){
            const filter = cars.filter(car=>car.id!==deletedCar.id);
            setCars([...filter])
        }
    }, [updatedCar,deletedCar]);

    return (
        <div>
            {cars.map(car => <Car
                key={car.id}
                car={car}
                setDeletedCar={setDeletedCar}
                setCarForUpdate={setCarForUpdate}
            />)}
        </div>
    );
};

export {Cars};