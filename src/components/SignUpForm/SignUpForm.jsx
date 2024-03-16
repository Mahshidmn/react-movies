

function SignUpForm({loginData, handleChange, handleSubmit}) {
   
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={loginData.name} onChange={handleChange} required />
               
                <button type="submit" >SIGN UP</button>
              </form>
            </div>
          </div>
        );
      }

      export default SignUpForm;