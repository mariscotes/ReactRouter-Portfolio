import React from 'react';
import AkopoIto from '../assets/jer.png';

const Contact = () => {
    return (
        <section
            className="bg-gradient-to-r from-gray-500 to-blue-200 text-gray-800 text-center px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-128px)] border-b-4 border-pink-600"
            id="contact"
        >
            <img
                src={AkopoIto}
                alt="Profile"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mb-6 object-cover transform transition-transform duration-300 border-2 border-pink-500 rounded-md"
            />

            <h3 className="text-4xl text-black font-bold font-serif text-center mb-10 transform  transition-transform duration-300 hover:scale-125"
                style={{ textShadow: '2px 2px 4px rgb(183, 0, 168)' }}>
                Let's Talk
            </h3>

            <p className="mb-6 text-base sm:text-lg leading-relaxed max-w-2xl px-2 text-black">
                I'm always open to exciting new projects, business partnerships, and collaborations.
                If you have an idea or opportunity, feel free to reach out, and let's create something amazing together.
            </p>

            <h2 className="text-2xl text-black font-bold font-serif text-center mb-10 px-2 "
                style={{ textShadow: '2px 2px 4px rgb(183, 0, 168)' }}>Contact</h2>


            <p>Email: <a href="mailto:jercelmariscotes09@gmail.com">jercelmariscotes09@gmail.com</a></p>
            <p>Phone: 09664675648</p>
            <div className="mb-5 socials">
                <a href="https://www.facebook.com/jercel.mariscotes" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrsr">📸</a>
                <a href="https://www.tiktok.com/@jerce07?_t=ZS-8w9q75Wx4B6&_r=1" target="_blank" rel="noopener noreferrer ">🎵</a>
            </div>


            <ul className="mb-10space-y-3 text-sm sm:text-base text-black">
                <li>Brgy. Bigo, Pagbilao, Quezon, Philippines</li>
            </ul>
        </section>
    );
};

export default Contact;
