import React from 'react'
import styles from '../styles/user.module.css'
import Card from './Card';
import { desc } from 'framer-motion/client'


const User = () => {

    const usercards = [
        {
            star: "⭐⭐⭐⭐⭐",
            description: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!"

        },
        
        {
            star: "⭐⭐⭐⭐⭐",
            description: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online"
        }, 
        
        {
            star: "⭐⭐⭐⭐⭐",
            description: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!"

        }, 
        
        {
            star: "⭐⭐⭐⭐⭐",
            description: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand"

        },
        
        {
            star: "⭐⭐⭐⭐⭐",
            description: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!"

        }, 
        
        {
            star: "⭐⭐⭐⭐⭐",
            description: "I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense"

        }
    ]

    return (
        <section>
            <div className={styles.userDescription}>
                What Our Users Say
            </div>

            <div className={styles.usercard}>

            <div className={`${styles.featuresList} row g-4`}>
                    {usercards.map((feature, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 p-0 ">
                            <Card title={feature.star} content={feature.description} />
                        </div>
                    ))}

                </div>
                </div>

                <div className={styles.UserBtnParent}>
                <button className={styles.UserBtn}>See More</button>
            </div>

        </section>
    )
}

export default User
