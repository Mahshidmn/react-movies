import {useState} from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function LoginPage({submitUser}) {
    const [loginData, setLoginData] = useState({
        name: "",
      });

      function handleChange(event) {
       const newLoginData = {
          ...loginData,
          [event.target.name]: event.target.value
       };
       setLoginData(newLoginData);
      }
        
      function handleSubmit(event) {
        // event.preventDefault();
        submitUser(loginData);
      }
    return (
        <main>
           <h1>LoginPage</h1>
           <SignUpForm  loginData={loginData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </main>
    
    );
}

export default LoginPage;