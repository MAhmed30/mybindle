import React from 'react'
import ImageWrapper from './ImageWrapper' 
import Primarybutton from './buttons/PrimaryButton'
import styles from '../styles/hero.module.css'
import heroImg from '/images/hero/mobile.webp'

export default function Hero() {
    return (
        <section className={styles.heroContainer}>

                <div className={styles.heroFirstCol}>
                    
                    <div className={styles.heroTitle}>
                        <h1>
                            Stay Connected 
                        </h1>
                        <h1>
                            Stay Social
                        </h1>
                        <h1>
                            Stay You!
                        </h1>
                    </div>

                    <p className={styles.heroSubtitle}>
                        A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
                    </p>

                    <Primarybutton onButtonClick={() => alert()} buttonLabel={"Get Started"} />
                </div>

                {/* Image Column */}
                <div className={styles.heroSecondCol}>
                    <ImageWrapper
                        src={heroImg}
                        alt={"Hero Image"}
                        width="100%"
                        height="auto"
                        className={styles.heroImage}
                    />
                </div>
                
        </section>
    )
}
