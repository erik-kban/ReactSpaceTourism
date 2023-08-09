import "./Main.css";
import "./styles/body.css";
import NavBar from "./components/NavBar";
import MainDescription from "./components/MainDescription";
import { Routes, Route } from 'react-router-dom';
import Destination from "./components/Destination"

const Main = () => {
  return (
    <>
      <body>
        <NavBar />
        <Routes>
          <Route path='/' element={<MainDescription/>}/>
          <Route path='/destination' element={<Destination/>}/>
        </Routes>
        {/* <MainDescription /> */}
      </body>
    </>
  );
};

export default Main;
