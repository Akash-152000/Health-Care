import React, { Component } from 'react';
import Navbar from './Navbar'


class UploadProfile extends Component {

  render() {
    return (
    <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <h2>Upload your profile</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const name = this.exampleName.value
                const phone = this.examplePhone.value
                const blood = this.exampleBlood.value

            		if(this.props.account=="0xB83538eeC0294f890993f11579FC86AbD47728C3")
            			return(this.props.uploadProfile(name,phone,blood,1))
            		else if(this.props.account=="0x25fF8fC33E39B8AA236f6dD6d8447DB306f06a04")
            			return(this.props.uploadProfile(name,phone,blood,2))
            		else
            			return(this.props.uploadProfile(name,phone,blood,3))

            	}
                } >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif , .csv, .pdf,.txt" onChange={this.props.captureFile} />
                <div className="form-group mr-sm-2">
	                <br></br>


	                <label htmlFor="exampleInputEmail1">Name</label>
					<input 
						type="text" 
						className="form-control" 
						id="exampleName" 
						placeholder="Enter your full name"
						ref={(input) => { this.exampleName = input }}
					/><br></br>
	                
	                <label htmlFor="exampleInputEmail1">Phone number</label>
					<input 
						type="text" 
						className="form-control" 
						id="examplePhone" 
						placeholder="Enter your Phone number"
						ref={(input) => { this.examplePhone = input }}
					/>  <br></br>

	                <label htmlFor="exampleInputEmail1">Blood group</label>
					<input 
						type="text" 
						className="form-control" 
						id="exampleBlood" 
						placeholder="Enter your Blood group"
						ref={(input) => { this.exampleBlood = input }}
					/>  
					<button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>              
            	</div>
                

              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default UploadProfile;


