pragma solidity ^0.5.0;

contract Decentragram {
  string public name;
  uint public patient1Count = 0;
  uint public prescCount1=0;
  mapping(uint => Data1) public data1;
  mapping(uint => Image1) public images1;

  uint public patient2Count = 0;
  uint public prescCount2=0;
  mapping(uint => Data2) public data2;
  mapping(uint => Image2) public images2;

  struct Image1 {
    uint id;
    string hash;
    string description;
    string date;
    uint num;
    uint tipAmount;
    address payable author;
  }


  event ImageCreated1(
    uint id,
    string hash,
    string description,
    string date,
    uint num,
    uint tipAmount,
    address payable author
  );


  struct Image2 {
    uint id;
    string hash;
    string description;
    string date;
    uint num;
    uint tipAmount;
    address payable author;
  }


  event ImageCreated2(
    uint id,
    string hash,
    string description,
    string date,
    uint num,
    uint tipAmount,
    address payable author
  );

  constructor() public {
    name = "Decentragram";
  }

  function uploadImage(string memory _imgHash, string memory _description,string memory _date,uint _num) public {
    // Make sure the image hash exists
    require(bytes(_imgHash).length > 0);
    // Make sure image description exists
    require(bytes(_description).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));
    if(_num==1){
      // Increment image id
      patient1Count ++;

      // Add Image to the contract
      images1[patient1Count] = Image1(patient1Count, _imgHash, _description,_date, _num,0, msg.sender);
      // Trigger an event
      emit ImageCreated1(patient1Count, _imgHash, _description,_date,_num, 0, msg.sender);
    }
    else{
      // Increment image id
      patient2Count ++;

      // Add Image to the contract
      images2[patient2Count] = Image2(patient2Count, _imgHash, _description,_date ,_num,0, msg.sender);
      // Trigger an event
      emit ImageCreated2(patient2Count, _imgHash, _description,_date,_num,0, msg.sender);
    }

  }


  struct Data1{
    uint id;
    string prescription;
    uint num;
    address payable author;
  }

  event DataCreated1(
    uint id,
    string prescription,
    uint num,
    address payable author
    );

  struct Data2{
    uint id;
    string prescription;
    uint num;
    address payable author;
  }

  event DataCreated2(
    uint id,
    string prescription,
    uint num,
    address payable author
    );

  function set(string memory _prescription,uint _num) public {
    if(_num==1){
      prescCount1 ++;
      data1[prescCount1]=Data1(prescCount1,_prescription,_num,msg.sender);
      emit DataCreated1(prescCount1,_prescription,_num,msg.sender);
    }
    else{
      prescCount2 ++;
      data2[prescCount2]=Data2(prescCount2,_prescription,_num,msg.sender);
      emit DataCreated2(prescCount2,_prescription,_num,msg.sender);
    }


  }



uint public profileCount=0;    
mapping(uint => Profile) public profile;


struct Profile{
    uint id;
    string hash;
    string name;
    uint phoneNumber;
    string bloodGroup;
    uint num;
    address payable author;
  }

  event ProfileCreated(
    uint id,
    string hash,
    string name,
    uint phoneNumber,
    string bloodGroup,
    uint num,
    address payable author
    );



uint public profileCount2=0;    
mapping(uint => Profile2) public profile2;


struct Profile2{
    uint id;
    string hash;
    string name;
    uint phoneNumber;
    string bloodGroup;
    uint num;
    address payable author;
  }

  event ProfileCreated2(
    uint id,
    string hash,
    string name,
    uint phoneNumber,
    string bloodGroup,
    uint num,
    address payable author
    );


uint public profileCount3=0;    
mapping(uint => Profile3) public profile3;


struct Profile3{
    uint id;
    string hash;
    string name;
    uint phoneNumber;
    string bloodGroup;
    uint num;
    address payable author;
  }

  event ProfileCreated3(
    uint id,
    string hash,
    string name,
    uint phoneNumber,
    string bloodGroup,
    uint num,
    address payable author
    );


  function uploadProfile(string memory _hash,string memory _name,uint _phoneNumber,string memory _bloodGroup,uint _num) public {
     
     if(_num==1){
        profileCount ++;
        profile[profileCount]=Profile(profileCount,_hash,_name,_phoneNumber,_bloodGroup,_num,msg.sender);
        emit ProfileCreated(profileCount,_hash,_name,_phoneNumber,_bloodGroup,_num,msg.sender);
      }
      else if(_num==2){
        profileCount2 ++;
        profile2[profileCount2]=Profile2(profileCount2,_hash,_name,_phoneNumber,_bloodGroup,_num,msg.sender);
        emit ProfileCreated2(profileCount2,_hash,_name,_phoneNumber,_bloodGroup,_num,msg.sender);
      }
      else{
        profileCount3 ++;
        profile3[profileCount3]=Profile3(profileCount3,_hash,_name,_phoneNumber,_bloodGroup,_num,msg.sender);
        emit ProfileCreated3(profileCount3,_hash,_name,_phoneNumber,_bloodGroup,_num,msg.sender);
      }
    }


}