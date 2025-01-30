const exp = (new Date()).getFullYear() - 2016;

const About = () => {
    return (
        <article className="w-full py-8 px-8 md:px-20 flex flex-col gap-2">
            <h2 className="text-5xl mb-2">Who am I?</h2>
            <p>
                I am a professional software developer with {exp} years of experience 
                working with a variety of software technologies, from <strong>web development</strong> to <strong>app development</strong> and <strong>backend development</strong> in technologies 
                like <strong>Node.js</strong>, <strong>Spring Boot</strong>, <strong>Quarkus</strong> and <strong>ASP.NET</strong> among others.
            </p>

            <p>
                Programming is more than just a career for me, it's a passion I'm always eager to learn more about, and I love working on my own skills and helping my team grow.
            </p>

            <hr />

            <h2 className="text-5xl my-2">Experience</h2>

            <div className="flex flex-nowrap sm:flex-wrap flex-col md:flex-row gap-4 md:gap-2 justify-between">
                <div>
                    <h3 className="text-2xl mb-2">Frontend</h3>
                    <ul>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Angular</li>
                        <li>React native</li>
                        <li>Android Native Development</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl mb-2">Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Spring boot</li>
                        <li>Quarkus</li>
                        <li>ASP.NET</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl mb-2">Database</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>SQL Server</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl mb-2">Infrastructure</h3>
                    <ul>
                        <li>Linux - SSH</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>
            </div>

            <hr />

            <p>If there is anything at all about IT I can help you with, I'd be more than happy to help.</p>

            <p className="text-sm text-gray-500"><i>Portfolio section: in progress...</i></p>
        </article>
    )
}

export default About;
