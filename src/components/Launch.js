import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year} = launch;
    const {mission_patch_small} = launch.links;

    if (launch_year !== '2020')
        return (
            <div>
                <h3>{mission_name} -- {launch_year}</h3>
                <img src={mission_patch_small} alt="launch"/>
            </div>
        );
}

export default Launch;