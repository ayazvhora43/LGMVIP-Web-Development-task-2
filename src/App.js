import Users from "./Components/userCards";
import './App.css';
import { trackPromise } from 'react-promise-tracker';
import React, { Component, useState } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
	this.state = {users_data :[]}
	this.updateuserState = this.updateuserState.bind(this)
  }
  

  updateuserState(){
      const link="https://reqres.in/api/users?page=1";
      trackPromise( 
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        this.setState({users_data :users.data,
        })
       console.log(users.data);
      })
      );
 }
 

 
  render(){
    return (<>
      <nav>
        <div className="nav-container">
            
          <div className="headtxtdiv">
            <h2>ZIPPY</h2>
          </div>
          <div className="btndiv">
            <button class="getusersbtn"  onClick={this.updateuserState}>Get Users</button>
          </div>
            
        </div>
      </nav>
      <div className="lastdiv">
          <Users users={this.state.users_data}/>
        </div>
       </>
    )
  }
}
export default App;