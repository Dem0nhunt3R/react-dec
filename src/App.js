import {CatForm} from "./components/CatForm";
import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";
import css from './App.module.css';
import store from "./redux/store";
import {DogForm} from "./components/DogForm";

function App() {

    return (
        <div>
            <div className={css.forms}>
                <CatForm/>
                <DogForm/>
            </div>
            <hr/>
            <div className={css.content}>
                <Cats/>
                <Dogs/>
            </div>
            <button onClick={() => console.log(store.getState())}>get store</button>
        </div>
    );
}

export default App;
