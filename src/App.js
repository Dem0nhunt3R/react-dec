import React, {useReducer} from 'react';

const init = (initCount) => {
    return {count1: initCount, count2: initCount, count3: initCount}
};

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'count1':
            return {...state, count1: state.count1 + payload};
        case 'count2':
            return {...state, count2: state.count2 + payload};
        case 'count3':
            return {...state, count3: state.count3 + payload};

        case 'reset1':
            return {...state, count1: 0};
        case 'reset2':
            return {...state, count2: 0};
        case 'reset3':
            return {...state, count3: 0};

        default:
            return state;
    }
}


const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div>
                <p>count 1 = {state.count1}</p>
                <button onClick={() => dispatch({type: 'count1', payload: 1})}>inc</button>
                <button onClick={() => dispatch({type: 'count1', payload: -1})}>dec</button>
                <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
            </div>
            <div>
                <p>count 2 = {state.count2}</p>
                <button onClick={() => dispatch({type: 'count2', payload: 1})}>inc</button>
                <button onClick={() => dispatch({type: 'count2', payload: -1})}>dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
            </div>
            <div>
                <p>count 3 = {state.count3}</p>
                <button onClick={() => dispatch({type: 'count3', payload: 1})}>inc</button>
                <button onClick={() => dispatch({type: 'count3', payload: -1})}>dec</button>
                <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
            </div>
        </div>
    );
};

export {App};