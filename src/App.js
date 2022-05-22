import {Form} from "./components/Form";
import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";
import css from './App.module.css';

function App() {

    return (
        <div>
            <div>
                <Form/>
            </div>
                <hr/>
            <div className={css.content}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
}

export default App;
