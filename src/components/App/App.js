import './App.css';
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <div className="re-container">
      <div className="re-ecom-filter">
        <Sidebar/>
      </div>
      <div className="re-prod-container">
          <Product/>  <Product/> <Product/> 
        </div>
    </div>
  );
}

export default App;
