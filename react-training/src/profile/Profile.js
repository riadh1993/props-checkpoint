import React from "react";
import PropTypes from "prop-types";



 
const Profile = () => {
  return (
    <div style={{fontSize: "30px",fontWeight: "bold",margin: "30px",color: "purple"}}>
    <FullName {FullName: "John Wick"}></FullName>
    <Biography {Biography:"Born in 1973 and still killing people for money"}></Biography>
    <Profession {Profession:"An assasin"}></Profession>
    <Alert {Alert: "Fullname is John Wick"}></Alert>

    </div>
  )
}
  const FullName = props => {
    return (
      <div>
        <h1>FullName: {props.FullName} </h1>
      </div>
    )
  }
  const Biography = props => {
    return (
      <div>
        <h1>Biography: {props.Biography} </h1>
      </div>
    )
  }
  const Profession = props => {
    return (
      <div>
        <h1>Profession: {props.Profession} </h1>
      </div>
    )
  }
  const Alert = (props) => {
     return(
       <h1>Alert: {props.Alert} </h1>
     )
  }
  
  FullName.defaultProps = {
    FullName : "John Wick"
  };
  
  Biography.defaultProps = {
    Biography : "Born in 1973 and still killing people for money"
  }
  Profession.defaultProps = {
    Profession : "An assasin"
  };
  Alert.defaultProps = {
    Alert: "Fullname is John Wick"
  }

 Biography.protoTypes = {
  booleanProp: PropTypes.string,
 }


export default Profile;
