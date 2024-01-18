import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route exact path="/" element={<Profile
              name="Bart Simpson"
              profilePage={props.state.profilePage}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch} />} />


            <Route path="/profile" element={<Profile
              name="Bart Simpson"
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
              newPostText={props.state.profilePage.newPostText}
            />} />


            <Route path='/dialogs' element={<Dialogs
              dialogPage={props.state.dialogPage}
              dispatch={props.dispatch}
              newDialogText={props.state.dialogPage.newDialogText}
            />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;


