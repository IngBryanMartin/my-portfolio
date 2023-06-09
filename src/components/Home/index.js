import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import PhotoDev from '../../assets/images/foto_perfil.png';
import Loader from 'react-loaders';

function Image() {
    return (
        <div className='image-container'>
            <div class="box">
                <b></b>
                <img className='solid-image' src={PhotoDev} alt='Profile dev' />
                <div class="content">
                    <h2>Bryan Martin Quispe Lavalle<br /><span>Systems and Informatics Engineering</span></h2>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'B', 'r', 'y', 'a', 'n', ' ', 'Q', 'u', 'i', 's', 'p', 'e']
    const jobArray = ['F', 'u', 'l', 'l', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
                    </h1>
                    <h2>Developer / Java Expert / Cybersecurity </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Image />
            </div>
            <Loader type='' />
            <div class="loader">
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
                <span style={{ '--i': 4 }}></span>
                <span style={{ '--i': 5 }}></span>
                <span style={{ '--i': 6 }}></span>
                <span style={{ '--i': 7 }}></span>
                <span style={{ '--i': 8 }}></span>
                <span style={{ '--i': 9 }}></span>
                <span style={{ '--i': 10 }}></span>
            </div>
        </>
    )
}

export default Home