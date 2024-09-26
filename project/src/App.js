
import './App.css';
import Counter from './Counter'
function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
      const namesList = names.map((name) => <li>{name}</li>);
  return (
   <div>
    <ul>{namesList}</ul>
<Counter/>
    </div>
  );
}

export default App;
