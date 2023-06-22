// Images and gifs imports
import loginSignupImage from '../assets/login-animation.gif';

// React Icons imports
import { BiShow, BiHide } from "react-icons/bi"

// React imports
import { useState } from 'react';

// React Router Dom imports
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    // navigate
    const navigate = useNavigate();

    // Show Password function
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(preve => !preve);
    }

    // Data
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    console.log(data);

    // On Change function
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value,
            };
        });
    }

    // Submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = data
        if (email && password) {
            alert("Successful");
            navigate("/")
        } else {
            alert("Please enter other required fields");
        }
    }

    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
                <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
                    <img src={loginSignupImage} alt="" className="w-full h-full" />
                </div>

                <form onSubmit={handleSubmit} action="" className="w-full py-3 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type={"email"} value={data.email} onChange={handleOnChange} id="email" name="email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-300" />

                    <label htmlFor="password">Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-green-300'>
                        <input type={showPassword ? "text" : "password"} value={data.password} onChange={handleOnChange} id="password" name="password" className="w-full bg-slate-200 border-none outline-none" />
                        <span onClick={handleShowPassword} className='flex text-xl cursor-pointer'>{showPassword ? <BiShow /> : <BiHide />}</span>
                    </div>

                    <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Login</button>
                </form>
                <p className="text-center text-sm mt-2">Not having any account? {" "}
                    <Link to={"/signup"} className="text-red-500 underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;