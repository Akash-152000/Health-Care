import React, { Component} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Upload from './Upload'
import Log from './Log'
import Patient from './Patient'
import './App.css'

class DocButton extends Component {

  constructor(props) {
      super(props)
      this.state = {
        bool:"one" 

      }
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1 = () =>{
      this.setState({ bool:"two" });
  }
    handleClick2 = () =>{
      this.setState({ bool:"three" });
  }

  render() {

    return (
    <div>
      <div >
        <button type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={this.handleClick1}>
          <a className="docLink" href="/DocPatient1">{this.props.profiles1.map((image, key) => {return(<p>{image.name}</p>)})}</a>
        </button>
      </div>
      <div style={{marginTop:"10px"}}>
        <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={this.handleClick2}>
          <a className="docLink" href="/DocPatient2">{this.props.profiles2.map((image, key) => {return(<p>{image.name}</p>)})}</a>
        </button>
      </div>

    </div>
    );
  }
}

export default DocButton;
