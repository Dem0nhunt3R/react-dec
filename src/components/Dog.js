import React from 'react';

const Dog = ({dog,dogDelete}) => {
    const {id,dogName} = dog;

    return (
        <div>
            {id}. {dogName}
            <button onClick={()=>dogDelete(dog)}>delete</button>
        </div>
    );
};

export {Dog};