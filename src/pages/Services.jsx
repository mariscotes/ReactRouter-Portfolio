import React from 'react'
import { Link } from 'react-router-dom'

const services = [
    { id: 1, title: "Portfolio Website Development", description: "Creating personal portfolio websites for students, freelancers, or small businesses using HTML, CSS, and JavaScript." },

    { id: 2, title: "Landing Page Design", description: "Designing and developing responsive landing pages for marketing campaigns or product showcases." },

    { id: 3, title: "Bug Fixing & Code Debugging", description: "Helping fix small front-end or HTML-related bugs in existing codebases." },

    { id: 4, title: "Basic Git & GitHub Setup", description: "Setting up Git repositories, creating branches, and guiding basic version control workflows." },

    { id: 5, title: "Form Integration with Email or Google Sheets", description: "Creating and connecting contact forms to email or Google Sheets using tools like Formspree or Google Apps Script." },

    { id: 6, title: "UI Component Design", description: "Designing simple and reusable UI components in React or plain HTML/CSS for web applications." }
]


const Services = () => {
    return (
        <div className="text-transparent bg-gradient-to-r from-pink-200 to-purple-400 text-white py-13" id="services">
            <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">

                <h2 className="text-4xl text-gray-800 font-bold font-serif text-center mb-10 transform  transition-transform duration-300 hover:scale-125"
                    style={{ textShadow: '2px 2px 4px rgb(183, 0, 168)' }}>
                    My Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="bg-gray-300 p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 border-3 border-black"
                        >
                            <div className="text-3xl font-bold bg-clip-text text-black mb-2">
                                {service.id < 10 ? `0${service.id}` : service.id}
                            </div>
                            <h3 className="text-2xl font-semibold font-serif  bg-clip-text text-blue-700 mb-2"
                                style={{ textShadow: '2px 2px 4px rgba(11, 175, 239, 0.9)' }}>
                                {service.title}
                            </h3>
                            <p className="text-black font-serif mb-3">{service.description}</p>
                            <Link
                                to={`services/${service.id}`}
                                className="inline-block text-sm font-medium text-blue-400 hover:text-black-400 transition-colors duration-200"
                            >
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
