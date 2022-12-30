import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, signInWithGoogle, resetPassword } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/addtask'



    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true })
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                setLoginError(error.message)
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('signed in with google')
                navigate(from, { replace: true })
            })
    }

    const handleReset = () => {
        resetPassword(loginUserEmail)
            .then(() => {
                toast.success('reset link has been sent, please check email')
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        <input />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "password must be at least 6 characters or longer" },
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <button onClick={handleReset}><span className="label-text">Forget Password</span></button>
                        </label>
                        <input />
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div className='text-red-600'>
                        {
                            loginError &&
                            <p>{loginError}</p>
                        }
                    </div>
                </form>
                <br />
                <p>New to Doctors Portal <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;