// Images and gifs imports
import loginSignupImage from '../assets/login-animation.gif';

// React Icons imports
import { BiShow, BiHide } from "react-icons/bi"

// React imports
import { useState } from 'react';

// React Router Dom imports
import { Link, useNavigate } from 'react-router-dom';

// Utility imports
import { imageToBase64 } from '../utils/imageToBase64';

const Signup = () => {
    // navigate
    const navigate = useNavigate();

    // Show Password function
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(preve => !preve);
    }

    // Show Confirm Password function
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(preve => !preve);
    }

    // Data
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: "",
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

    // Upload Profile Image function
    const handleUploadProfileImage = async (e) => {
        const data = await imageToBase64(e.target.files[0])
        setData((preve) => {
            return {
                ...preve,
                image: data,
            };
        });
    }

    // Submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, email, password, confirmPassword } = data
        if (firstName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert("Successful");
                navigate("/login");
            } else {
                alert("Password and Confirm Password do not match");
            }
        } else {
            alert("Please enter other required fields");
        }
    }

    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
                <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
                    <img src={data.image ? data.image : loginSignupImage} alt="" className="w-full h-full" />

                    <label htmlFor="profileImage">
                        <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
                            <p className='text-sm p-1 text-white'>Upload</p>
                        </div>
                        <input type={"file"} onChange={handleUploadProfileImage} id="profileImage" accept="image/*" className="hidden" />
                    </label>
                </div>

                <form onSubmit={handleSubmit} action="" className="w-full py-3 flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input type={"text"} value={data.firstName} onChange={handleOnChange} id="firstName" name="firstName" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-300" />

                    <label htmlFor="lastName">Last Name</label>
                    <input type={"text"} value={data.lastName} onChange={handleOnChange} id="lastName" name="lastName" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-300" />

                    <label htmlFor="email">Email</label>
                    <input type={"email"} value={data.email} onChange={handleOnChange} id="email" name="email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-300" />

                    <label htmlFor="password">Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-green-300'>
                        <input type={showPassword ? "text" : "password"} value={data.password} onChange={handleOnChange} id="password" name="password" className="w-full bg-slate-200 border-none outline-none" />
                        <span onClick={handleShowPassword} className='flex text-xl cursor-pointer'>{showPassword ? <BiShow /> : <BiHide />}</span>
                    </div>

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-green-300'>
                        <input type={showConfirmPassword ? "text" : "password"} value={data.confirmPassword} onChange={handleOnChange} id="confirmPassword" name="confirmPassword" className="w-full bg-slate-200 border-none outline-none" />
                        <span onClick={handleShowConfirmPassword} className='flex text-xl cursor-pointer'>{showConfirmPassword ? <BiShow /> : <BiHide />}</span>
                    </div>

                    <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Sign up</button>
                </form>
                <p className="text-center text-sm mt-2">Already have account? {" "}
                    <Link to={"/login"} className="text-red-500 underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;