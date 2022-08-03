import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import FruitsPage from "./Pages/FruitsPage/FruitsPage"
import VegetablesPage from "./Pages/VegetablesPage/VegetablesPage";
import FavoritePage from "./Pages/FavoritePage/FavoritePage"
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
function App() {
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={
                <Navigate to="/" replace/>
            }/>
            <Route path="/fruits" element={<FruitsPage/>} />
            <Route path="/vegetables" element={<VegetablesPage/>} />
            <Route path="/favorite" element={<FavoritePage/>} />
            <Route path="/product/:id" element={<ProductPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
