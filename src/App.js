import './App.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
  const name = useSelector(state => state.currentUser.name);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input onChange={(e) => {
        dispatch({
          type: 'change-current-user-name',
          payload: {
            name: e.target.value,
          },
        })
      }}
      value={name}
      />
      {name}
    </div>
  );
}

export default App;
