import Comments from "./Comments";
import Posts from "./Posts";
import Users from "./Users";

function App() {
    return (
        <div className="App">
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;
