import React, { useState} from "react";
import PropTypes from "prop-types";


function Form() {
  const [name, setName] = useState("");
  const [Button, setButton] = useState(true);
  const [text, setText] = useState("");

 
  const handleSubmit = async (e) => {
    e.preventDefault();


    
  }
  function handleChange(e) {
    setName(e.target.value);
    if (name === "" || name === null) {
      setButton(true);
      setText(null);
    } else if (name !== "" && name.trim().length <= 10) {
      setButton(true);
      setText("This field must be up to 10 characters. There should be no spacing between letters");
    } else {
      setButton(false);
      setText("Great option!");
    }
  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function handleEmailChange(e) {
    if (!isValidEmail(e.target.value)) {
      setButton(true);
      setText("invalid mail");
    } else {
      setButton(false);
      setText(null);
    }
  }

  function Butt({ isDisabled, version }) {
    
    return <input type="submit" value="Sign in" disabled={isDisabled} className={ `btn btn-${version}`}/>;

    
  }


  Butt.defaultProps = {
    isDisabled: "false",
    version:'pry'
  };
  Butt.propTypes = {
    isDisabled: PropTypes.bool,
    version: PropTypes.string,
  };



  return (
    <div className="overall">
      <div className="container" >
      
<div className="header">
  
<h1>PROTECT YOUR DATA WITH US.</h1>
      <sub><b>230,100.04</b> People trust us!</sub>
</div>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="username"
          value={name}
          onChange={handleChange}
          placeholder='Username'
        />
        
        <label>Password</label>
        <input type="password" onChange={handleEmailChange} placeholder="***********" />
       

        <p>{text}</p>

      

        <Butt isDisabled={Button} />
       

        <em>
          Don't have an account? <a href="/signup" >Sign up</a>
        </em>
      </form>
    </div>
    </div>
  );
}

export default Form;
