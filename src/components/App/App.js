import './App.css';
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";
import equipos from '../../static/json/smartphones.json';
import { equiposContext } from '../../context/equiposContext';

function App() {
    return (
      <equiposContext.Provider value={equipos}>
        <div className="re-container">
        <Sidebar/>
        <div className="re-prod-container">
            <Product/>
        </div>
        </div>
      </equiposContext.Provider>
    );
}

export default App;
