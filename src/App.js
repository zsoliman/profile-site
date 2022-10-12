import './App.css';
import React, { useRef, useEffect } from 'react'
import AmbulanceLights from './video/ambulanceLights.mp4';

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

  useEffect(() => {
    const handleScroll = () => {
      // console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // function hideButton(handleScroll) {
  //   return (handleScroll ? true : false)
  // }

  //   console.log(hidebutton(true))

  return (

    <div className="App">

      <div className="Nav">
        <h3 onClick={handleTitleClick}>ZS</h3>
        <button className="menuButton">Menu</button> {/* hidden menu button, not currently doing anything */}
        <a onClick={handleAboutClick} >about</a>
        <a onClick={handleProjectClick} >projects</a>
        <a onClick={handleContactClick} >contact</a>
        <a onClick={handleResumeClick} >resume</a>
      </div>


      <div ref={titleRef} className="Header">
        <div className='HeaderContainer'>
          <p style={{ paddingTop: '20px' }} className="Subtitle">hi, my name is...</p>
          <h1 className="Title">Zach Soliman</h1>
          <p className="Subtitle">and I'm a...</p>
          <h2
            style={{ paddingBottom: '20px' }}
            className="Title"
          >Software Engineer</h2>
        </div>
      </div>

      <div ref={aboutRef} className="aboutSection">
        <video
          className='video'
          autoPlay
          loop
          muted>
          <source src={AmbulanceLights} type='video/mp4' />
        </video>

        <div className='aboutBox'>

          <h2 className="Title">About</h2>
          <p className="Subtitle">A little bit about myself... <br /> <br /> New York City Paramedic turned Software Engineer: <br /> Learning to code has always been an interest of mine, but only recently has it become a reality. After eight years working in the world of EMS, I dedicated my time to changing careers into something I can truly see myself doing.</p>

        </div>
      </div>

      <div ref={projectRef} className="section">

        <h2 className="Title">Projects</h2>
        <p className="Subtitle">Here's some work I've done...</p>

      </div>

      <div ref={contactRef} className="section">
        <h2 className="Title">Contact</h2>
        <p className="Subtitle">A few ways to get in touch...</p>
        <div className='contact'>

          <a href="https://github.com/zsoliman" target="_blank">
            <img
              className='contactIcon'
              src="https://img.icons8.com/glyph-neue/344/github.png"
              style={{ height: '200px', width: 'auto' }}
            /></a>

          <a href="https://www.linkedin.com/in/zachsoliman/" target='_blank'>
            <img
              className='contactIcon'
              src="https://img.icons8.com/glyph-neue/344/linkedin.png"
              style={{ height: '200px', width: 'auto' }}
            /></a>

          <a href="https://medium.com/@zachsoliman" target='_blank'>
            <img
              className='contactIcon'
              src="https://img.icons8.com/ios-filled/344/medium-monogram--v1.png"
              style={{ height: '200px', width: 'auto' }}
            /></a>

        </div>


      </div>

      <div ref={resumeRef} className="section">
        <h2 className="Title">Resume</h2>
        <p className="Subtitle">Take a look...</p>

      </div>

      {/* <div className="buttonDiv">
        <button className="button" onClick={handleTitleClick}>&#8593;</button>
      </div> */}


    </div>
  );
}

export default App;
