import React from 'react';
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'
import errorAnime from "../../assets/89922-404-page.json"


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='App flex flex-col min-h-[700px] justify-center items-center max-w-lg mx-auto'>
            <Lottie animationData={errorAnime} loop={true}></Lottie>
            <br />
            {error && (
                <div>
                    <p className='text-red-500'>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            )}
            <Link to='/'>Back to home</Link>
        </div>
    );
};

export default ErrorPage;