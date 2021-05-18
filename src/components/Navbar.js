import React, { Component } from 'react';
import './App.css'


class Navbar extends Component {

  render() {
    return (
      <section id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
          <div className="container-fluid"><strong><b>
            <a className="navbar-brand Nav" href="/Home">Health-Care</a></b></strong>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/HOME"><b>HOME</b></a>
                <a className="nav-link" href="/Patient"><b>PATIENT</b></a>
                <a className="nav-link" href="/Doctor"><b>DOCTOR</b></a>
                <div className="userInfo">
                  <b>Account: {this.props.account}</b>
                  {this.props.profiles.length>0?
                    <b aria-current="page">{this.props.profiles.map((image, key) => {return(<p>Logged in as: {image.name}</p>)})}</b>
                    :<b className="nav-link" aria-current="page">Logged in as:</b>
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      
    );
  }
}

export default Navbar;