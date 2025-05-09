import { useEffect, useState } from "react";
import "./Home.css"; 

const Home = () => {
  const text = 'I  build things for the web, front to back.'
  const [typingText, setTypingText] = useState('')
  useEffect(() => {   
    let i = 0
    const interval = setInterval(() => {
      if(i < text.length - 1){
        setTypingText(prev => prev + text[i])
        i++
      }
      else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])
  return (    
      <div className="hero">        
        <section className="hero-text">
            <p className="intro">
            <b>Hi, My Name is</b>{" "}
            </p>
            <h2 className="name">Ashiya Banu.</h2>
            <h2 className="name typing">{typingText}</h2>
            <p className="description">
              I’m a MERN stack developer who loves turning ideas into fast,
              functional, and beautiful web apps. Whether it’s crafting React UIs or
              building powerful APIs.
            </p>
        </section>
      </div>

  );
};

export default Home;
