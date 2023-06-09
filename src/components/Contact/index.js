import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_civvs4e', 'template_9xzdtvs', refForm.current, '-NIIZBbiV2xwsjzVh')
            .then(
                () => {
                    alert('Message successfully sent!!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed yo sent the message, please try again')
                }
            )

    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a passionate professional in search of exciting
                        job opportunities, dedicated and committed with a
                        strong focus on continuous improvement.
                        Feel free to contact me through the form below
                        or through my social media links.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Bryan Martin Quispe Lavalle,
                    <br />
                    Perú - Lima,
                    <br />
                    Lima - La Victoria
                    <br />
                    Av. Bauzate y Meza 1163
                    <br />
                    <span>
                        ing.bryanmartin@gmail.com
                    </span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-12.063239, -77.019205]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[-12.063239, -77.019205]}>
                            <Popup>Bryan lives here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
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

export default Contact