import React from 'react';
import {useSelector} from "react-redux";
import {Dog} from "./Dog";

const Dogs = () => {
    const {dogs} = useSelector(({dog}) => dog);

    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};