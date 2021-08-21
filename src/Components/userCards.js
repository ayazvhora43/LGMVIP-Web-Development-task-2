import React from 'react'

const Users = ({users}) => {
    return (
          <div id="content">
             {users.map(user =>
                      <div className="userprofilescontainer">
                        <div className="singleprofile">
                          <img src={user.avatar} alt={user.avatar} className="useravatar"></img>
                          <h1 className="username">{user.first_name} {user.last_name}</h1>
                          <p className="useremail">{user.email}</p>
                          <p class="userid">USER ID: {user.id}</p>
                        </div>
                      </div>
                )
              }
          </div>
       )
}
export default Users;
