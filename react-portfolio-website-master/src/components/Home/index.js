import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import profilepic from '../../assets/images/my photo.png'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 'e', 'e', 'd']
 
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            
          </h1>
          <h2>FullStack Software Developer </h2>
          <Link to="/contact" className="flat-button">
            SAY HI 🖐🏾
          </Link>
        </div>
        <Logo />
        <div className="profile-pic-container">
          <img src={profilepic} alt="Profile" className="profile-pic" />
        </div>
      </div>
      
      

      <Loader type="pacman" />
    </>
  

  )
}

export default Home
