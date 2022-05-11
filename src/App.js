import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Register from "./Components/Register/Register";
import AllComponents from "./AllComponents"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
           <AllComponents/>
         } />
        <Route path="register" element={
          <Register/>        
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
