import './App.css';
import React, { useRef, useEffect, useState } from 'react'
import AmbulanceLights from './video/ambulanceLights.mp4';
import drinkupnav from './video/drinkupnav.png';
import favicon from './video/favicon.ico';
import ZSolimanResume from './resume/ZSolimanResume.pdf'

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

  const [projectDescription, setProjectDescription] = useState(false)

  return (

    <div className="App">

      <div className="Nav">
        <h3 onClick={handleTitleClick}>ZS</h3>
        <button className="menuButton">Menu</button> {/* hidden menu button, not currently doing anything */}
        <a onClick={handleAboutClick} >about</a>
        <a onClick={handleProjectClick} >projects</a>
        <a onClick={handleContactClick} >contact</a>
        <a
          // onClick={handleResumeClick}
          href={ZSolimanResume} target="_blank" >resume</a>
      </div>


      <div ref={titleRef} className="Header">
        <div className='HeaderContainer'>
          {/* <p style={{ paddingTop: '20px' }} className="Subtitle">hi, my name is...</p> */}
          <h1 className="HomeTitle">Zach Soliman</h1>
          {/* <p className="Subtitle">and I'm a...</p> */}
          <h2
            style={{ paddingBottom: '20px' }}
            className="HomeSubTitle"
          >Software Engineering<br />Web Development<br />Based in Brooklyn</h2>
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

          <h2 className="Title" style={{ paddingTop: '10vh' }}>About</h2>
          <p className="Subtitle">
            New York City Paramedic turned Software Engineer: <br /> <br />Learning to develop code has always been of interest, but only recently has it become a reality. After nearly 8 years of NYC EMS, I've learned valuable skills including leadership, teamwork, and making important decisions under pressure. These are some of the many skills being carried over into the tech industry. <br /> <br />
            I'm Zach, a full-stack software developer with a focus in React.js, Ruby on Rails, and much much more.

          </p>

        </div>
      </div>

      <div ref={projectRef} className="section">

        <h2 className="Title">Projects</h2>
        <p className="Subtitle">Here's some work I've done...</p>

        <div className='projectlist'>

          <a className='drinkup' href="https://github.com/zsoliman/drink-up" target='_blank' >
            <img className='projectimg' src={drinkupnav} />
          </a>

          <div className={`projectCard${projectDescription ? ', hidden' : ''}`}>
            <a>Created as a final project <br />at the Flatiron School.</a> <br />
            <a>Cocktail API-based user <br /> interface to search drink <br /> recipies and save liked <br /> selections.</a> <br />
            <a>React.js front end, utilizing <br /> Redux and an outside API.</a><br />
            <a>Ruby on Rails back end<br /> built witha PostgreSQL <br /> based database, storing <br /> users, favorites, and selected <br />recipes.</a> <br />
            <a href="https://github.com/zsoliman/drink-up" target='_blank'>Click to see the github!</a>
          </div>

          <a className='projectbtn' href='https://github.com/zsoliman/profile-site' target='_blank'>
            <img className='projectimg' src={favicon} />
          </a>
        </div>

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

      {/* <div ref={resumeRef} className="section">
        <h2 className="Title">Resume</h2>
        <div className='resume-container'>
          <div className='resume-column1'>
            <h3>Technical Skills:</h3>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>REST API</li>
            <li>PostgreSQl</li>
            <li>SQLite</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Version Control</li>
            <li>HTML</li>
            <li>CSS</li>
          </div>

          <div className='resume-column2'>

            <h3>Experience:</h3>
            <p style={{ textDecoration: 'underline' }}>Freelance Software Engineer</p>
            <li>Created custom profile sites for clients.</li>
            <li>Researched similar products already deployed on the web and utilizing the clients vision to design the product.</li>
            <li>Built custom React.js web applications for use by the client in their buisness ventures.</li>
            <p style={{ textDecoration: 'underline' }}>Flatiron School</p>
            <li>Full Stack intensive software engineering bootcamp.</li>
            <li>3.5 months of daily learning focused on React.js and Ruby on Rails development.</li>
            <p style={{ textDecoration: 'underline' }}>NYC Paramedic</p>
            <li>Lead teams of first responders in organized responses through constantly developing scenarios.</li>
            <li>Responded to 911 calls for medical emergencies throughout the City of New York.</li>
            <li>Treated and stabilized patients experiencing potentially life threatening emergencies.</li>
          </div>

        </div>
      </div > */}

      <div className='footer'>
        <p>Zach Soliman © 2022</p>
      </div>

      {/* <div className="buttonDiv">
        <button className="button" onClick={handleTitleClick}>&#8593;</button>
      </div> */}


    </div >
  );
}

export default App;
