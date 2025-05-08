import "./Pages.css";
import "./Work.css";

const Work = () => {
  return (
    <section className="hero">
      <h3>Projects</h3>
      <div className="work-section">
        <div className="work">
          <a href="https://sprout-nest-fe.vercel.app/" target="_blank">
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
                  front-end using Redux Thunk for API integration.</p>
                <p>{'}'}</p>
              </code>
            </div>
          </a>
        </div>
        <div className="work">
          <a href="https://dish-deck-fe.vercel.app/" target='_blank'>
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
                <p>Name: 'DishDeck',</p>
                <p>
                  Tools: ['React JS', 'Redux', 'Redux Thunk', 'Axios', 'Mongo DB', 'Express', 'Node
                  JS', 'Bootstrap']
                </p>
                <p>
                  Description:DishDeck is a powerful and user-friendly recipe organizer designed for food enthusiasts. 
                    I developed the front-end using React.js, Bootstrap, Redux, and Redux Thunk. The app allows users to search, 
                    filter, and view detailed recipes with ingredients and instructions. I built the back-end with Node.js and Express, 
                    using Axios for data fetching and MongoDB for storing user-generated recipes and favorites.</p>
                <p>{'}'}</p>
              </code>
            </div>
          </a>
        </div>
        <div className="work">
          <a href="https://eventura-fe.vercel.app/" target="_blank">
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
              <p>Name: 'Eventura',</p>
              <p>
                Tools: ['React JS', 'Mongo DB', 'Express', 'Node
                JS', 'Bootstrap']
              </p>
              <p>
                Description: Eventura is an intuitive event listing app that allows users to discover and explore local events based on their interests. 
                I developed the front-end using React.js and Bootstrap, and the back-end using Node.js and Express. 
                Users can browse event categories, view event details, and save favorite events. The application uses MongoDB for data storage 
                and offers a seamless experience with responsive design and smooth navigation.
                {'}'}
              </p>
            </code>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
