import './App.css';
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";
import  equipos from "../../static/json/smartphones.json";

function App() {
    return (
        <div className="re-container">
        <Sidebar/>
        <div className="re-prod-container">
        {equipos.map((smartphone) => {
            return <Product key={smartphone.id} equipo={smartphone.equipo} />
        })
        } 
        <Product/> 
        <Product/>
        <Product/> 
        </div>
        </div>
    );
}

export default App;
