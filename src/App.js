import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  // state = {
  //   progress: 0
  // }
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exect path="/" element={<News setProgress={setProgress} key="general" country="in" category="science" />} />
          <Route exect path="/Business" element={<News setProgress={setProgress} key="business" country="in" category="business" />} />
          <Route exect path="/Entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />} />
          <Route exect path="/General" element={<News setProgress={setProgress} key="general" country="in" category="general" />} />
          <Route exect path="/Health" element={<News setProgress={setProgress} key="health" country="in" category="health" />} />
          <Route exect path="/Sports" element={<News setProgress={setProgress} key="sports" country="in" category="sports" />} />
          <Route exect path="/Science" element={<News setProgress={setProgress} key="science" country="in" category="science" />} />
          <Route exect path="/Technology" element={<News setProgress={setProgress} key="technology" country="in" category="technology" />} />
        </Routes>
      </Router>
    </>
  )
}



export default App;
