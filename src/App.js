import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from "./SearchPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import VideoPlayerPage from "./VideoPlayerPage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLLH644J-gl4-M5_QmhC27O5ZLCTzPWTg",
  authDomain: "clone-b7b63.firebaseapp.com",
  projectId: "clone-b7b63",
  storageBucket: "clone-b7b63.appspot.com",
  messagingSenderId: "199578342790",
  appId: "1:199578342790:web:d66952e44d11e27a154807",
  measurementId: "G-THSVEV38WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm"
            element={<div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>}
          />
          <Route path="/watch/:videoId"
            element={
              <div className="app__page">
                {/* Sidebar can be optional on the video page, depending on your design */}
                <Sidebar />
                <VideoPlayerPage /> {/* Use VideoPlayerPage to render the video based on the videoId */}
              </div>
            }
          />
          <Route path="/"
            element={<div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>}
          />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
