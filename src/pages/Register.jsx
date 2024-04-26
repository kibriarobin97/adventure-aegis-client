import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {

    const [showPass, setShowPass] = useState(false)

    return (
        <div className="max-w-md mx-auto min-h-[calc(100vh-341px)] p-8 space-y-3 rounded-xl text-black">
            {/* <Helmet>
                <title>Residential Roosts | Register</title>
            </Helmet> */}
            <h1 className="text-2xl font-bold text-center">Register Now</h1>
            <p className="text-sm text-center text-gray-500">Register to create a account</p>
            <form className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-black">Name</label>
                    <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block text-black">Photo URL</label>
                    <input type="text" name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-black">Password</label>
                    <div className="relative">
                        <input
                            type={showPass ? "text" : "password"}
                            name="password" id="password" required placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" />
                        <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-2">
                            {
                                showPass ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />
                            }
                        </span>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-md font-bold bg-orange-400 text-white hover:bg-orange-600 duration-400">Register</button>
            </form>
            <p className="text-xs text-center sm:px-6 text-black">Already have an account?
                <Link to='/login' className="underline text-primary"> Login</Link>
            </p>
        </div>
    );
};

export default Register;