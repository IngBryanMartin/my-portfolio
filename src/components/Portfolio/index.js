import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    console.log(portfolio);

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img
                                    src={port.image}
                                    className='portfolio-image'
                                    alt='portfolio' />
                                <div className='content'>
                                    <p className='title'>{port.name}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn' onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>
                    {renderPortfolio(portfolio)}
                </div>
            </div>
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
    );
}

export default Portfolio;