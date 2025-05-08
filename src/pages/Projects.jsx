import { useEffect, useState } from 'react';
import axios from 'axios';

const Spinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500 border-solid"></div>
    </div>
);

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setTimeout(async () => {
                    const response = await axios.get('https://api.github.com/users/mariscotes/repos');
                    setRepos(response.data);
                    setLoading(false);
                }, 1500);
            } catch (error) {
                console.error('Failed to fetch repos:', error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div id="projects">
            <div>
                <h2 className="bg-gradient-to-r from-purple-300 to-blue-200 py-7 text-3xl font-bold font-serif text-center text-black mb-2"
                    style={{ textShadow: '2px 2px 4px rgb(183, 0, 168)' }}>🚀 My Projects</h2>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <Spinner />
                    </div>
                ) : (
                    <div>
                        {repos.map((repo, index) => (
                            <div key={repo.id}
                                className="bg-gradient-to-r from-blue-300 to-purple-200 rounded-lg border-2 border-gray-300 shadow-sm p-6 transition-shadow duration-300 py-3 mb-4">
                                <div className="text-1xl font-bold text-gray-800 mb-1">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                <h3 className="text-1xl font-bold text-gray-900 font-serif bg-clip-text text-blue-700 mb-2">{repo.name}</h3>

                                <div className="flex gap-4">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-black text-1xl bg-white px-4 py-1 rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110 border-b-4 border-purple-400'
                                    >
                                        View Repo
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='text-black text-1xl bg-white px-4 py-1 rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110 border-b-4 border-blue-400'
                                        >
                                            View Site
                                        </a>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;