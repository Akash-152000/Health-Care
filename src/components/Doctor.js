import React, { Component } from 'react';
import Navbar from './Navbar'
import Alert from './Dialog'
import DocButton from './DocButton'
import Profile from './Profile'
import UploadProfile from './UploadProfile'
import './App.css'


class Doctor extends Component {

 
  render() {
    console.log("lkmclskdc",this.props.profiles.length)
    return (
      <div className="super">
      {
        this.props.account=="0x39D6c7da6AC160402Bd00499e2322F39f05132ee"?  
              this.props.account=="0x39D6c7da6AC160402Bd00499e2322F39f05132ee" && this.props.profiles.length==0 ?
                <UploadProfile account={this.props.account} uploadProfile={this.props.uploadProfile} captureFile={this.props.captureFile} account1={this.props.account1}
                          account2={this.props.account2}
                          account3={this.props.account3}/>

              :<div className="row ">
                <div className="column">
                  <DocButton account={this.props.account} 
                           images={this.props.images}
                            captureFile={this.props.captureFile}
                            medicines={this.props.medicines}
                            uploadImage={this.props.uploadImage}
                            buttonFunction={this.buttonFunction}
                            profiles1={this.props.profiles1}
                            profiles2={this.props.profiles2}
                            tipImageOwner={this.props.tipImageOwner}/>
               </div>
            <div className="column1">
              <Profile profiles={this.props.profiles}/>
            </div>
          </div>
        :<Alert/>
      }
    </div>
    );
  }
}

export default Doctor;
