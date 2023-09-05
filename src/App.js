
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
const App=()=> {
  const[progress,setProgress]=useState(0);

    return(
    <>
    <BrowserRouter>
    <LoadingBar
        color='#00ffe2'
        progress={progress}
        height={2}
      />
    <Navbar tittle="News App"/>
      <Routes>
        <Route exact path="/" element={<News  setprogress={setProgress}key='general' category="general" newstype="General"/>}/>
        <Route exact path="/business" element={<News  setprogress={setProgress}key='business' category="business" newstype="Business"/>}/>
        <Route exact path="/entertainment" element={<News  setprogress={setProgress}category="entertainment" newstype="Entertainment"/>}/>
        <Route exact path="/health" element={<News  setprogress={setProgress}key='health' category="health"newstype="Health"/>}/>
        <Route exact path="/science" element={<News  setprogress={setProgress}key='science' category="science"newstype="Science"/>}/>
        <Route exact path="/sports" element={<News  setprogress={setProgress}key='sports'category="sports"newstype="Sports"/>}/>
        <Route exact path="/technology" element={<News  setprogress={setProgress}key='technology' category="technology"newstype="Technology"/>}/> 
      </Routes>
    </BrowserRouter>
    </>
    );
}
export default App;
