import React from 'react'
import AkopoIto from '../assets/me.png'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

const Landing = () => {
    return (
        <div className='bg-gradient-to-r from-purple-200 to-gray-400 text-white text-center px-4 flex items-center justify-center min-h-[calc(100vh-128px)] '>

            <div>

                <img
                    src={AkopoIto}
                    className='mx-auto mb-8 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover transform transition-transform duration-300  border-4 border-orange-500'
                />

                <h1 className='text-3xl text-white md:text-4xl font-bold leading-tight'
                    style={{ textShadow: '2px 2px 4px rgb(0, 0, 0)' }}>
                    I'm{" "}
                    <span className='text-black font-serif font-bold'
                        style={{ textShadow: '2px 2px 4px rgb(0, 119, 183)' }}>
                        Jercel Mariscotes
                    </span>
                    , an Aspiring Web Designer
                </h1>

                <p
                    className="mt-15 text-lg text-black bg-gradient-to-r from-blue-200 to-purple-200 text-center py-8 px-6 rounded-lg shadow-lg font-serif font-medium"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
                >
                    I specialize in designing and developing beautiful and functional websites.
                </p>

                <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Link to="/contact" className='w-full sm:w-auto'>
                        <button className='w-full sm:w-auto text-black
                        bg-white px-6 py-2 rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-300'>
                            <FaEnvelope className='text-2xl mr-2' />
                            Contact Me!
                        </button>
                    </Link>
                    <Link to="/projects" className='w-full sm:w-auto'>
                        <button className='w-full sm:w-auto bg-white text-black px-9 py-2 rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-105 border-b-4 border-blue-300'>
                            <FaProjectDiagram className='text-2xl mr-2' />
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
