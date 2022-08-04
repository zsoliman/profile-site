import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'

const App = () => {

  // useRef allows scroll-to-element
  const titleRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()
  const resumeRef = useRef()

  const handleTitleClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleResumeClick = () => {
    resumeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMenu = () => {

  }

  return (
    <div className="App">

      <div className="Nav">
        <h3 onClick={handleTitleClick}>ZS &nbsp;&nbsp;&nbsp;</h3>
        <button onClick={toggleMenu} className="menuButton">Menu</button>
        <a onClick={handleAboutClick} > about &nbsp;&nbsp;&nbsp;</a>
        <a onClick={handleProjectClick} > projects &nbsp;&nbsp;&nbsp;</a>
        <a onClick={handleContactClick} > contact &nbsp;&nbsp;&nbsp;</a>
        <a onClick={handleResumeClick} > resume</a>
      </div>


      <div ref={titleRef} className="Header">
        <p
        style={{paddingTop: '20px'}}
        className="Subtitle"
        >hi, my name is...</p>
        <h1 className="Title">Zach Soliman</h1>
        <p className="Subtitle">and I'm a...</p>
        <h2
        style={{paddingBottom: '20px'}}
        className="Title"
        >Software Engineer</h2>
      </div>

      <div ref={aboutRef} className="section">
        <h2 className="Title">About</h2>
        <p className="Subtitle">A little bit about myself...</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>

      <div ref={projectRef} className="section">
        <h2 className="Title">Projects</h2>
        <p className="Subtitle">Here's some work I've done...</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>

      <div ref={contactRef} className="section">
        <h2 className="Title">Contact</h2>
        <p className="Subtitle">A few ways to get in touch...</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>

      <div ref={resumeRef} className="section">
        <h2 className="Title">Resume</h2>
        <p className="Subtitle">A few ways to get in touch...</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>

      <div className="buttonDiv">
        <button className="button" onClick={handleTitleClick}>Back to Top</button>
      </div>
      <p style={{marginBottom: '0px', color: '#191919'}}>.</p>

    </div>
  );
}

export default App;
