
import { Link } from "react-router";

import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {

   const {createUser} = use(AuthContext);
    

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        createUser(email, password)
        .then(result => {
            console.log(result.user);
            alert('User created Successfully!')
            e.target.reset()
        })
        .catch(error => console.log(error))


    }
  return (
    
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                     
                    <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p>Already have an account? Please <Link to='/login' className="text-blue-500 underline">Login</Link> </p>
          </div>
        </div>
  );
};

export default Register;
