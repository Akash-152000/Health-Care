import React, { Component} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Upload from './Upload'
import Log from './Log'
import Prescription from './Prescription'
import Patient from './Patient'
import './App.css'

class Buttons extends Component {

  constructor(props) {
      super(props)
      this.state = {
        bool:"one" 

      }
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
      this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick1 = () =>{
      this.setState({ bool:"two" });
  }
    handleClick2 = () =>{
      this.setState({ bool:"three" });
  }

    handleClick3 = () =>{
      this.setState({ bool:"four" });
  }

  render() {
    return (
    <div className="card mb-4">
      <div className="roww">
        <div className="colum1">
          <button type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={this.handleClick1}>
            <b>Upload your file</b>
          </button>
        </div>
        <div className="column2">
          <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={this.handleClick2}>
            <b>View History</b> 
          </button>
        </div>
        <div className="column3">
          <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={this.handleClick3}>
            <b>View Prescription History</b>
          </button>
        </div>
      </div>


      {
          (() => {
             if (this.state.bool=="two")
                return (
                    <div style={{ marginLeft: '20%', marginTop: '60px', width: '50%',border:'solid 1px', height:'100%'  }}>
                      <Upload account={this.props.account} images={this.props.images}
                          captureFile={this.props.captureFile}
                          uploadImage={this.props.uploadImage}
                          account1={this.props.account1}
                          account2={this.props.account2}
                          account3={this.props.account3}
                          tipImageOwner={this.props.tipImageOwner}/>  
                    </div>
                  )
             else if(this.state.bool=="three")
                return (
                  <div style={{ marginLeft: '20%', marginTop: '60px', width: '65%',border:'solid 1px', height:'100%'  }}>
                    <Log images={this.props.images} medicines={this.props.medicines} account={this.props.account} date={ this.props.currentDateTime }/>  
                  </div>
                  )
             else if(this.state.bool=="four")
                return (
                  <div>
                    {
                    this.props.account=="0x9931A61c7387A9ad06f9D3d02bbB23228E7C31eE"?
                      <div style={{ marginLeft: '20%', marginTop: '60px', width: '65%',border:'solid 1px', height:'100%'  }}>
                       <Prescription images={this.props.images} medicines={this.props.medicines1} account={this.props.account} date={ this.props.currentDateTime }/>  
                      </div>
                    :<div style={{ marginLeft: '20%', marginTop: '60px', width: '65%',border:'solid 1px', height:'100%'  }}>
                       <Prescription images={this.props.images} medicines={this.props.medicines2} account={this.props.account} date={ this.props.currentDateTime }/>  
                      </div>
                    }
                    
                  </div>
                )
          })()
      }



    </div>
    );
  }
}

export default Buttons;
