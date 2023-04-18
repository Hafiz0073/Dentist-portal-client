import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signupError, setSignupError] = useState('')
    const navigate = useNavigate()
    const handleSignup = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error =>
                        console.log(error)
                    )
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register('name', { required: 'name  is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password',
                            {
                                message: 'password is required',
                                minLength: { value: 6, message: 'password must be minimum 6 digit or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=(.*[!@#$%^&*()\-__+.]){1,})/, message: 'uppercase special character and must a number' }
                            })}

                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" />
                    {signupError && <p className='text-red-500'>{signupError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to='/login'> Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;