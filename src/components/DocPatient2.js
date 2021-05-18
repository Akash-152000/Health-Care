import React, { Component } from 'react';
import Navbar from './Navbar'
import Dialog from './Dialog'
import Profile from './Profile'
import Log from './Log'
import './Patient.css'


class DocPatient2 extends Component {

 
  render() {
    return (
      <div className="super">   
        <div className="row">
          <div className="column">
            <Log images={this.props.images} medicines={this.props.medicines} account={this.props.account} date={ this.props.currentDateTime }/>
          </div>
          <div className="column1">
            <Profile profiles={this.props.profiles2}/>
            <form onSubmit={(event) => {
                      event.preventDefault()
                      const description = this.imageDescription.value
                      const num=2
                      this.props.uploadImage1(description,num)
                  
                      }} >
                        <div className="form-group mr-sm-2">
                          <br></br>
                            <textarea
                              id="imageDescription"
                              row="4"
                              type="text"
                              ref={(input) => { this.imageDescription = input }}
                              className="form-control"
                              placeholder="Prescribe to Patient 2"
                              required />
                        </div>
                      <button style={{marginBottom:"10px",backgroundColor:"red"}} type="submit" className="btn btn-primary btn-block btn-lg">Prescribe</button>
                    </form>
        </div>
      </div>
    </div>
    );
  }
}

export default DocPatient2;