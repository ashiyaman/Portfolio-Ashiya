import './Tech.css'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

const Tech = () => {
    return (
        <section className="hero">
            <h3>Tech Stack</h3>
            <div className="tech-section">                
                <div className="flex">
                    <FaHtml5 title="HTML5" size={40} />
                    <p>HTML</p>
                </div>
                <div>
                <FaCss3Alt title="CSS" size={40} />
                    <p>CSS</p>
                </div>
                <div>
                <FaJs title="JS" size={40} />
                    <p>JS</p>
                </div>
                <div>
                <FaReact title="React" size={40} />
                    <p>React</p>
                </div>
                <div>
                <SiRedux title="Redux" size={40} />
                    <p>Redux</p>
                </div>
                <div>
                <FaGithub title="Github" size={40} />
                    <p>Github</p>
                </div>
                <div>
                <SiMongodb title="MongoDB" size={40} />
                    <p>Mongodb</p>
                </div>
                <div>
                <SiNodedotjs title="NodeJS" size={40} />
                    <p>Node</p>
                </div>
                <div>
                <SiExpress title="Express" size={40} />
                    <p>Express</p>
                </div>
            </div>
        </section>
    )
}

export default Tech;



