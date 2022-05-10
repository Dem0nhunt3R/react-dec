import React from 'react';

const Dog = ({dog,dogDelete}) => {
    return (
        <div>
            {dog}
            <button onClick={()=>dogDelete(dog)}>delete</button>
        </div>
    );
};

export {Dog};