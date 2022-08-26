import React from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Err } from "./src/pages/Err";
import { Reactjs } from "./src/pages/Reactjs";
import { Typescript } from "./src/pages/Typescript";
import { Sass } from "./src/pages/Sass";
import { Home } from "./src/pages/Home";

const Router: React.FC = () => {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reactjs" element={<Reactjs />}/>
        <Route path="/typescript" element={<Typescript />}/>
        <Route path="/sass" element={<Sass />}/>
        <Route path="*" element={<Err />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;