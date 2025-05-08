import React from 'react';

const About = () => {
    return (
        <section className="bg-gradient-to-r from-blue-300 to-purple-200 text-gray text-center px-4 flex items-center justify-center min-h-[calc(100vh-128px)] border-b-5 border-pink-600" id="about">

            <div className="max-w-screen-xl mx-auto w-full">
                <h2 className="text-4xl md:text-4xl font-serif font-bold py-5 leading-tight bg-clip-text text-black mb-5"
                    style={{ textShadow: '2px 2px 4px rgb(183, 0, 168)' }}>About Me</h2>

                <div className="flex flex-col md:flex-row items-center gap-15">


                    <div className="flex-1">
                        <p className="text-lg mb-8 text-black-300">
                            Hi I’m a second-year BSIT student at Dalubhasaan ng Lungsod ng Lucena, aspiring to become a web developer
                            and digital creator (if di papalarin model nalang).
                        </p>

                        <div class="space-y-5">
                            <div class="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded bg-gray-100 hover:scale-105  border-3 border-pink-400 shadow-sm">
                                <span class="sm:w-2/12 font-bold text-sm ">HTML & CSS</span>
                                <p class="text-sm text-black-800">
                                    Learning how to structure web pages with HTML and style them using CSS. I’ve practiced building simple layouts and understanding the box model, positioning, and basic responsive design.
                                </p>
                            </div>

                            <div class="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded bg-gray-100 hover:scale-105  border-3 border-blue-400 shadow-sm">
                                <span class="sm:w-2/12 font-bold text-sm">Python Basics</span>
                                <p class="text-sm text-black-800">
                                    Getting comfortable with Python fundamentals such as variables, data types, conditionals, loops, and functions. I’ve written small scripts and beginner-level programs to practice logic and syntax.
                                </p>
                            </div>

                            <div class="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded bg-gray-100 hover:scale-105  border-3 border-purple-400 shadow-sm">
                                <span class="sm:w-2/12 font-bold text-sm">Responsive Design</span>
                                <p class="text-sm text-black-800">
                                    Starting to understand how to make websites look good on different screen sizes using media queries and flexible layouts like Flexbox and Grid.
                                </p>
                            </div>

                            <div class="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded bg-gray-100 hover:scale-105  border-3 border-blue-400 shadow-sm">
                                <span class="sm:w-2/12 font-bold text-sm">VS Code</span>
                                <p class="text-sm text-black-800">
                                    Using Visual Studio Code as my main code editor. I’ve explored basic features like extensions, keyboard shortcuts, and the integrated terminal.
                                </p>
                            </div>

                            <div class="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded bg-gray-100 hover:scale-105  border-3 border-pink-400 shadow-sm">
                                <span class="sm:w-2/12 font-bold text-sm">Basic Debugging</span>
                                <p class="text-sm text-black-800">
                                    Developing the habit of using browser dev tools and Python error messages to identify and fix simple issues in my code.
                                </p>
                            </div>
                        </div>

                        {/* 3 stats pang padami */}
                        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 bg-clip-text">2</h3>
                                <p className="text-sm text-gray-900 py-2">Years of Learning</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 bg-clip-text">100%</h2>
                                <p className="text-sm text-gray-900 py-2">Willingness </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900 bg-clip-text ">10+</h3>
                                <p className="text-sm text-gray-900 py-2">Works</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
