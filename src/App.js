
import './App.css';
import Navbar from './coomponents/Navbar';
import Home from './coomponents/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
