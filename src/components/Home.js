import React, { Component }from 'react';
import './App.js'
import './App.css'
import Navbar from './Navbar'
import Web3 from 'web3';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ca from '../components/img/ca.jpg'
import cb from '../components/img/cb.jpg'
import cc from '../components/img/cc.jpg'   
// import ipfs from './ipfs';
// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class Home extends Component{




  render(){
    return(
      <React.Fragment>
        <p class="h5"><b><strong>HealthCare</strong></b><small class="text-muted"><b> has been integarted in this project with the following HOSPITALS (इस परियोजना में निम्नलिखित अस्पतालों के साथ पूर्णता की गई है)</b></small></p>
        <section id="card">
          <div class="row">
            <div class="card col-sm" style={{width:"18rem"}}>
              <p>
                <a href="https://tmc.gov.in/index.php/en/aboutus/collegium">
                 <img src="https://909175.smushcdn.com/2205684/wp-content/uploads/2016/12/tata_new_bld318-300x170.png?lossy=1&strip=1&webp=1" class="card-img-top"/>
                </a>
              </p>
              <div class="card-body">
                <p class="card-text"><b>TATA MEMORIAL HOSPITAL (टाटा मेमोरियल अस्पताल)</b></p>
              </div>
            </div>
            <div class="card col-sm" style={{width:"18rem"}}>
              <p>
                <a href="https://www.tnmcnair.com/home/admn.html">
                  <img src="https://mumbaimirror.indiatimes.com/thumb/msid-77137566,width-1200,height-900,resizemode-4/.jpg" class="card-img-top"/>
                </a>
              </p>
              <div class="card-body">
                <p class="card-text"><b>NAIR HOSPITAL (नायर अस्पताल)</b></p>
              </div>
              </div>
              <div class="card col-sm" style={{width:"18rem"}}>
                <p>
                  <a href="https://www.kem.edu/">
                    <img src="https://www.kem.edu/wp-content/uploads/2017/05/DSC00028-1-1000x250.jpg" class="card-img-top"/>
                  </a>
                </p>
              <div class="card-body">
                <p class="card-text"><b>K.E.M HOSPITAL (केईएम अस्पताल)</b></p>
              </div>
            </div>
            <div class="card col-sm" style={{width:"18rem"}}>
              <p>
                <a href="https://ggmcjjh.com/">
                  <img src="https://909175.smushcdn.com/2205684/wp-content/uploads/2016/12/JJHospital-300x167.jpg?lossy=1&strip=1&webp=1" class="card-img-top"/>
                </a>
              </p>
              <div class="card-body">
                <p class="card-text"><b>J.J HOSPITAL (जे जे अस्पताल)</b></p>
              </div>
            </div>
          </div>
        </section>
        <section id="info">
          <p class="h2 text-center"><b>ABOUT</b> <b><strong>HealthCare</strong></b></p>
          <div class="row">
            <div class="card col-sm" style={{width:"18rem"}}>
              <p>
                <img src= {ca} class="card-img-top info-card"/>
              </p>
            </div>
            <div class="card col-sm" style={{width:"18rem"}}>
              <p>
                <img src= {cb} class="card-img-top info-card"/>
              </p>
            </div>
            <div class="card col-sm" style={{width:"18rem"}}>
              <p>
                <img src= {cc} class="card-img-top info-card"/>
              </p>
            </div>
          </div>
          <p class="h4 text-center"><b><strong>HealthCare</strong></b> is a project and a step towards providing better healthcare services in the rural areas.We bring a platform were <b>IoT</b> reduces the human exertion and <b>Blockchian</b> keeps your data secure.Our aim is to get the rural people treated from the best professional medical team.</p>
          <p class="h4 text-center"><b>So lets take a step forwards towards development of our countries healthcare service विकासशील देश की स्वास्थ्य सेवा की दिशा में कदम</b></p>
        </section>   
      </React.Fragment>
      )
  }

}

export default Home
