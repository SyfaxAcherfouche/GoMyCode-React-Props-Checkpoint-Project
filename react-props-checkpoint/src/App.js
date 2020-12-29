import React from "react";
import './App.css';
import ProfileComponents from "./Profile/ProfileComponents"
import PropTypes from 'prop-types';

function App(props) {
  const { fullName } = props
  const handleName = e => {
    e.preventDefault();
    alert('Profile User Name is : Syfax Acherfouche');
};
  ProfileComponents.defaultProps = {
    fullName: "FirstName FamilyName",
    bio: "Your bio",
    profession: "Your profession"
};
  ProfileComponents.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};
  return (
    <div className="App" style={{display:"grid", placeItems: "center", alignItems:'center', justifySelf:'center',width:"100%", height:"100vh", backgroundColor:"#B388FF"}}>
      <ProfileComponents  fullName={'Syfax Acherfouche'} bio={"I am a web developer who is in love with programming, I enjoy learning about new technologies and have passion for web developement, if I am not on my computer, I am swiming, diving, reading or spending time with familly"} profession={'Full-Stack Developer'} handleName={handleName}>
      <img src={'./Assets/img.jpg'} style={{position:"relative", top:'-5em' ,width:"10em", height:"auto", borderRadius:"50%", border:"solid 5px #651FFF"}} alt="Profile" /> 
      </ProfileComponents>
    </div>
  );
}
//I AM A WEB DEVELOPER WHO IS IN LOVE WITH PROGRAMMING, I ENJOY LEARNING ABOUT NEW TECHNOLOGIES AND HAVE PASSION FOR WEB DEVELOPEMENT, IF I AM NOT ON MY COMPUTER, I AM SWIMING, DIVING, READING OR SPENDING TIME WITH FAMILLY 
export default App;
