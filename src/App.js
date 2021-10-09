import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';


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
