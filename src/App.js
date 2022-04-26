import React, {useState} from 'react';
import {CarForm} from "./components/carForm/CarForm";
import {Cars} from "./components/cars/Cars";

const App = () => {

    const [createdCar, setCreatedCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div>
            <CarForm
                setCreatedCar={setCreatedCar}
                carForUpdate={carForUpdate}
                setUpdatedCar={setUpdatedCar}
                setCarForUpdate={setCarForUpdate}
            />
            <Cars
                createdCar={createdCar}
                setCarForUpdate={setCarForUpdate}
                updatedCar={updatedCar}
            />
        </div>
    );
};

export default App;