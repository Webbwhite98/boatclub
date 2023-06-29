import "./styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import Footer from "./components/navigation/Footer"
import AdminHome from "./admin/AdminHome";
import AdminNav from "./admin/AdminNav";
import AdminPromotions from "./admin/AdminPromotions";


function App() {






  return (
   <BrowserRouter>



            <div>
                <Header/>
           <div style={{paddingBottom:'2vh'}} className={'cbc-wrapper'}>
               <Routes>
                   <Route path={"/"} element={<Home/>}/>

               </Routes>

           </div>
            </div>


              <Routes>

                  <Route path={"/admin"} element={<AdminHome/>}/>
                  <Route path={"/promotions"} element={<AdminPromotions/>}/>
              </Routes>

       <Footer />



   </BrowserRouter>
  );
}

export default App;
