import "./Pages.css";
import "./Work.css";

const Work = () => {
  return (
    <section className="hero">
      <h3>Projects</h3>
      <div className="work-section">
        <div href="https://sprout-nest-fe.vercel.app/" className="work">
          <img src="../../src/assets/sproutnest.png" />
          <div className="work-details">
            <div className="work-header">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>                
                <h4>Plant Store</h4>
            </div>            
            <code>
              <p>const project = {'{'}</p>
              <p>Name: 'Sproutnest App',</p>
              <p>
                Tools: ['React JS', 'Redux Thunk', 'Mongo DB', 'Express', 'Node
                JS', 'Bootstrap']
              </p>
              <p>
                Description: Sprout Nest is an online store for plants and
                gardening products. I developed the front-end using React.js,
                Bootstrap, Redux, and Redux Thunk, implementing features like
                product browsing, filtering, cart, and checkout. I also built
                the back-end with Node.js and Express, and connected it to the
                front-end using Redux Thunk for API integration.
                {'}'}
              </p>
            </code>
          </div>
        </div>
        <div href="https://dish-deck-fe.vercel.app//" className="work">
          <img src="../../src/assets/dishdeck.png" />
          <div className="work-details">
          <div className="work-header">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>                
                <h4>Recipe Finder</h4>
            </div>  
            <code>
              <p>const project = {'{'}</p>
              <p>Name: 'Sproutnest App',</p>
              <p>
                Tools: ['React JS', 'Redux Thunk', 'Mongo DB', 'Express', 'Node
                JS', 'Bootstrap']
              </p>
              <p>
                Description: Sprout Nest is an online store for plants and
                gardening products. I developed the front-end using React.js,
                Bootstrap, Redux, and Redux Thunk, implementing features like
                product browsing, filtering, cart, and checkout. I also built
                the back-end with Node.js and Express, and connected it to the
                front-end using Redux Thunk for API integration.
                {'}'}
              </p>
            </code>
          </div>
        </div>
        <div href="https://eventura-fe.vercel.app/" className="work">
          <img src="../../src/assets/eventura.png" />
          <div className="work-details">
          <div className="work-header">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>                
                <h4>Event Management</h4>
            </div>  
            <code>
              <p>const project = {'{'}</p>
              <p>Name: 'Sproutnest App',</p>
              <p>
                Tools: ['React JS', 'Redux Thunk', 'Mongo DB', 'Express', 'Node
                JS', 'Bootstrap']
              </p>
              <p>
                Description: Sprout Nest is an online store for plants and
                gardening products. I developed the front-end using React.js,
                Bootstrap, Redux, and Redux Thunk, implementing features like
                product browsing, filtering, cart, and checkout. I also built
                the back-end with Node.js and Express, and connected it to the
                front-end using Redux Thunk for API integration.
                {'}'}
              </p>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
