//import logo from './logo.svg';
import React from 'react';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import CreateJob from './components/CreateJob';
import JobList from './components/JobList';
import NotificationHistory from './components/NotificationHistory';

import './App.css';


const App = () => {
  return (
    <div>
      <SignIn />
      <SignOut />
      <CreateJob />
      <JobList />
      <NotificationHistory />
    </div>
  );
};

function App() {

  const register=async ()=>{

  };

  const login=async ()=>{
    
  };

  const logout=async ()=>{
    
  };


  return (
    <div className="App">

      <div>
        <h3> Register User </h3>
        <input placeholder='Email...'/>
        <input placeholder='Password...'/>
        <button> Create User </button>
      </div>
      <div>
        <h3> Login </h3>
        <input placeholder='Email...'/>
        <input placeholder='Password...'/>
        <button> Login </button>
      </div>
      <h4> User Logged In: </h4>

      <button> Sign Out </button>
      </div>
      
  );
}

export default App;
