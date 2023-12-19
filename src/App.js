import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  console.log(props);
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
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              onPostChange={props.onPostChange} />} />


            <Route path="/profile" element={<Profile
              name="Bart Simpson"
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              onPostChange={props.onPostChange}
            />} />


            <Route path='/dialogs' element={<Dialogs
              dialogPage={props.state.dialogPage}
              addMessage={props.addMessage}
              newDialogText={props.state.dialogPage.newDialogText} 
              onDialogChange={props.onDialogChange}
              />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;


