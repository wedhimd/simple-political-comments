import Navbar from './coomponents/navbar/Navbar';
import Home from './coomponents/home/Home';


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
