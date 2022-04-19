import React, {useEffect, useState} from 'react';
import Launch from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value))
    }, []);

    return (
        <div>
            {launches.map(item => <Launch key={item.mission_name} launch={item}/>)}
        </div>
    );
};

export default Launches;