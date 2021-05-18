import React, { Component } from 'react';
import './App.js'
import Web3 from 'web3';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import Alert from './Dialog'

class Doctor extends Component{
  render(){
    return(
      <React.Fragment>
        {this.props.account?
            this.props.images.map((image, key) => {
                  return(
                    <div>
                      <div className="card mb-4" key={key} >
                        <ul id="imageList" className="list-group list-group-flush">
                          <li className="list-group-item">
                            <p><b>Date: {image.date}</b></p>
                            <p className="text-center"><iframe src={`https://ipfs.infura.io/ipfs/${image.hash}`} width="500px" height="500px"/></p>
                            <p><b>Patient message: </b>{image.description}</p>
                            <p><b>Hash of file: </b>{image.hash}</p>
                            
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

export default Doctor
