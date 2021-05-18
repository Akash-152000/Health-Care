import React, { Component } from 'react';
import './App.js'
import Web3 from 'web3';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import Alert from './Dialog'

class Prescription extends Component{
  render(){
    return(
      <React.Fragment>
        {this.props.account?
            this.props.medicines.map((image, key) => {
                  return(
                    <div>
                      <div className="card mb-4" key={key} >
                        <ul id="imageList" className="list-group list-group-flush">
                          <li className="list-group-item">
                            <p><b>Prescription: </b>{image.prescription}</p>
                            <p>{this.props.date}</p>
                          </li>    
                        </ul>
                      </div>

                    </div>
                  )
                })
        :<Alert />
      }

      </React.Fragment>
      )
  }

}

export default Prescription
