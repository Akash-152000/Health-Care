import Decentragram from '../abis/Decentragram.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Patient from './Patient'
import Home from './Home'
import Doctor from './Doctor'
import DocPatient1 from './DocPatient1'
import DocPatient2 from './DocPatient2'
import Web3 from 'web3';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Log from './Log'
import Alert from './Dialog'
import moment from "moment"



//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Decentragram.networks[networkId]

   

    if(networkData) {
      const decentragram = new web3.eth.Contract(Decentragram.abi, networkData.address)
      this.setState({ decentragram })

    const profileCount1 = await decentragram.methods.profileCount().call()
        
        for (var i = 1; i <=profileCount1; i++) {
          const profile1 = await decentragram.methods.profile(i).call()
          this.setState({
            profiles1: [...this.state.profiles1, profile1]
          })
        }

    const profileCount2 = await decentragram.methods.profileCount2().call()
        
        for (var i = 1; i <=profileCount2; i++) {
          const profile2 = await decentragram.methods.profile2(i).call()
          this.setState({
            profiles2: [...this.state.profiles2, profile2]
          })
        }

      if(this.state.account=="0xB83538eeC0294f890993f11579FC86AbD47728C3"){
        this.setState({patientName:"Patient1"})
        const profileCount = await decentragram.methods.profileCount().call()
        
        for (var i = 1; i <=profileCount; i++) {
          const profile = await decentragram.methods.profile(i).call()
          this.setState({
            profiles: [...this.state.profiles, profile]
          })
        }

        this.setState({p1:1})
        const imagesCount = await decentragram.methods.patient1Count().call()
        this.setState({ imagesCount })
        
        for (var i = imagesCount; i >=1; i--) {
          const image = await decentragram.methods.images1(i).call()
          this.setState({
            images: [...this.state.images, image]
          })
        }

        const count1=await decentragram.methods.prescCount1().call()
        for(var i=count1; i>=1; i--){
          const medicine1= await decentragram.methods.data1(i).call()
          this.setState({
            medicines1:[...this.state.medicines1,medicine1]
          })

        }
      }
      else if(this.state.account=="0x25fF8fC33E39B8AA236f6dD6d8447DB306f06a04"){
        const imagesCount = await decentragram.methods.patient2Count().call()
        this.setState({ imagesCount })
        this.setState({patientName:"Patient2"})
        this.setState({p2:1})
        const profileCount = await decentragram.methods.profileCount2().call()
        
        for (var i = 1; i <=profileCount; i++) {
          const profile = await decentragram.methods.profile2(i).call()
          this.setState({
            profiles: [...this.state.profiles, profile]
          })
        }


        for (var i = imagesCount; i >=1; i--) {
          const image = await decentragram.methods.images2(i).call()
          this.setState({
            images: [...this.state.images, image]
          })
        }

        const count2=await decentragram.methods.prescCount2().call()
        for(var i=count2; i>=1; i--){
          const medicine2= await decentragram.methods.data2(i).call()
          this.setState({
            medicines2:[...this.state.medicines2,medicine2]
          })

        }
      }
      else if(this.state.account=="0x39D6c7da6AC160402Bd00499e2322F39f05132ee"){
        const imagesCount1 = await decentragram.methods.patient1Count().call()
        this.setState({patientName:"Doctor"})
        this.setState({d:1})

        const profileCount = await decentragram.methods.profileCount3().call()
        
        for (var i = 1; i <=profileCount; i++) {
          const profile = await decentragram.methods.profile3(i).call()
          this.setState({
            profiles: [...this.state.profiles, profile]
          })
        }


        for (var i = imagesCount1; i >=1; i--) {
          const image1 = await decentragram.methods.images1(i).call()
          this.setState({
            images1: [...this.state.images1, image1]
          })
        }

        const count1=await decentragram.methods.prescCount1().call()

        for(var i=count1; i>=1; i--){
          const medicine1= await decentragram.methods.data1(i).call()
          this.setState({
            medicines1:[...this.state.medicines1,medicine1]
          })

        }


        const imagesCount2 = await decentragram.methods.patient2Count().call()        
        for (var i = imagesCount2; i >=1; i--) {
          const image2 = await decentragram.methods.images2(i).call()
          this.setState({
            images2: [...this.state.images2, image2]
          })
        }

        const count2=await decentragram.methods.prescCount2().call()
        for(var i=count2; i>=1; i--){
          const medicine2= await decentragram.methods.data2(i).call()
          this.setState({
            medicines2:[...this.state.medicines2,medicine2]
          })
          console.log("almight",this.state.images2)

        }
      }



      // Sort images. Show highest tipped images first
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount )
      })
      this.setState({ loading: false})
    } else {
      window.alert('Decentragram contract not deployed to detected network.')
    }
  }

  captureFile = event => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadImage = description => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      if(this.state.account=="0xB83538eeC0294f890993f11579FC86AbD47728C3"){
        this.state.decentragram.methods.uploadImage(result[0].hash, description,this.state.date,1).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })}
      else if(this.state.account=="0x25fF8fC33E39B8AA236f6dD6d8447DB306f06a04" ){
        this.state.decentragram.methods.uploadImage(result[0].hash, description,this.state.date,2).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })}

    })
  }


  uploadImage1=(prescription,num)=>{
    this.setState({ loading: true })
    this.state.decentragram.methods.set(prescription,num).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
    })    
  }

  uploadProfile=(name,phone,blood,num)=>{
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      this.state.decentragram.methods.uploadProfile(result[0].hash,name,phone,blood,num).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }



  tipImageOwner(id, tipAmount) {
    this.setState({ loading: true })
    this.state.decentragram.methods.tipImageOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      decentragram: null,
      images: [],
      medicines:[],
      loading: true,
      patientName:'',
      images1:[],
      images2:[],
      medicines1:[],
      medicines2:[],
      profiles:[],
      profiles1:[],
      profiles2:[],
      account1:"0xa9Cb8f881315FD769d632F2041b1db784F9eE1A8",
      account2:"0xE78C062Ab6BE0C49A9ef39B1c61ACCab5ee4Bb1E",
      account3:"0x3e4238617812E5aAB17E09e284c87ed91d30b9f2",
      p1:0,
      p2:0,
      d:0,
      date: moment().format("DD-MM-YYYY hh:mm:ss" )
    }

    this.uploadImage = this.uploadImage.bind(this)
    this.uploadImage1 = this.uploadImage1.bind(this)
    this.tipImageOwner = this.tipImageOwner.bind(this)
    this.uploadProfile = this.uploadProfile.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }

  render() {
    return (
      <div>
      <div>
         
      </div>
      <Navbar account={this.state.account} name={this.state.patientName} profiles={this.state.profiles}/>
        <Router>
        
          <Route path = "/Patient" exact render = {(props) =>(
            <>
              <Patient
                account={this.state.account} 
                images={this.state.images}
                p1={this.state.p1}
                p2={this.state.p2}
                profiles={this.state.profiles}
                d={this.state.d}
                medicines1={this.state.medicines1}
                medicines2={this.state.medicines2}
                captureFile={this.captureFile}
                uploadImage={this.uploadImage}
                uploadProfile={this.uploadProfile}
                account1={this.state.account1}
                account2={this.state.account2}
                account3={this.state.account3}
                tipImageOwner={this.tipImageOwner}/>
            </>
          )} />

          <Route path = "/Doctor" exact render = {(props) =>(
            <>
              <Doctor
                account={this.state.account} 
                images={this.state.images}
                medicines={this.state.medicines}
                captureFile={this.captureFile}
                uploadImage={this.uploadImage}
                uploadProfile={this.uploadProfile}
                profiles={this.state.profiles}
                profiles1={this.state.profiles1}
                profiles2={this.state.profiles2}
                account1={this.state.account1}
                account2={this.state.account2}
                account3={this.state.account3}
                tipImageOwner={this.tipImageOwner}/>
            </>
          )} />
          <Route path='/DocPatient1' exact render = {(props) =>(
            <>
                <DocPatient1 
                  account={this.state.account} 
                  images={this.state.images1}
                  medicines1={this.state.medicines1}
                  captureFile={this.captureFile}
                  uploadImage={this.uploadImage}
                  uploadImage1={this.uploadImage1}
                  profiles1={this.state.profiles1}
                  account1={this.state.account1}
                  account2={this.state.account2}
                  account3={this.state.account3}
                  tipImageOwner={this.tipImageOwner}/></>
          )} />

          <Route path='/DocPatient2' exact render = {(props) =>(
            <>
                <DocPatient2 
                  account={this.state.account} 
                  captureFile={this.captureFile}
                  images={this.state.images2}
                  medicines={this.state.medicines1}
                  uploadImage={this.uploadImage}
                  uploadImage1={this.uploadImage1}
                  profiles2={this.state.profiles2}
                  account1={this.state.account1}
                  account2={this.state.account2}
                  account3={this.state.account3}
                  tipImageOwner={this.tipImageOwner}/></>
          )} />

          <Route path='/UploadProfile' exact render = {(props) =>(
            <>
                <DocPatient2 
                  account={this.state.account} 
                  captureFile={this.captureFile}
                  images={this.state.images2}
                  medicines={this.state.medicines1}
                  uploadImage={this.uploadImage}
                  uploadImage1={this.uploadImage1}
                  account1={this.state.account1}
                  account2={this.state.account2}
                  account3={this.state.account3}
                  tipImageOwner={this.tipImageOwner}/></>
          )} />

          <Route path='/Home'><Home/></Route>
          <Route path='/Log'><Log images={this.state.images} medicines={this.state.medicines} account={this.state.account} date={ this.state.currentDateTime }/></Route>
        </Router>
        
      </div>
    );
  }
}

export default App;