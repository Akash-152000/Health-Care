import React, { Component } from 'react';
import './App.css'


class Profile extends Component {

 
  render() {

    return (
    <div style={{ marginLeft: '100px', marginTop: '10px', width: '300px',border:'Solid 1px', height:'500px' }}>
      {this.props.profiles.map((profile, key) => {
                  return(
                    <div>
                      <div className="card mb-4" key={key} >
                        <ul id="imageList" className="list-group list-group-flush">
                          <li className="list-group-item">
                          	<div className="wrap">
                            	<p className="text-center"><iframe className="frame" frameBorder='0' scrolling='no' src={`https://ipfs.infura.io/ipfs/${profile.hash}`} width="100px" height="100px"/></p>
                            </div>
                            <p><b>Name: </b>{profile.name}</p>
                            <p><b>Phone Number: </b>{profile.phoneNumber}</p>
                            <p><b>Blood Group: </b>{profile.bloodGroup}</p>
                            <p>{this.props.date}</p>
                          </li>    
                        </ul>
                      </div>

                    </div>
                  )
                })}
    </div>

    );
  }
}

export default Profile;