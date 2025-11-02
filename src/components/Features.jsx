import React, { useContext } from 'react'
import styles from '../styles/features.module.css'
import Card from './Card';
import { ThemeContext } from '../context/ThemeContext';
import MoreFeatures from './MoreFeatures';

const features = [
    {
        title: "🔥 Seamless Connections",
        content: "Stay in touch with friends, family, and like-minded people with just a tap."
    },
    {
        title: "📸 Share Your Story",
        content: "Upload photos, videos, and updates to let the world know what’s happening in your life."
    },
    {
        title: "💬 Real-Time Chat",
        content: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging."
    }, 
    {
        title: "🔒 Privacy First",
        content: "Your data, your control. We prioritize your privacy with world-class security."
    }, 
    {
        title: "🌎 Discover & Explore",
        content: "Find trending content, join communities, and follow pages that match your interests."
    },
     {
        title: "💼 Grow Your Business",
        content: "Use our platform to market your brand, connect with customers, and build meaningful relationships."
    },

];
const Features = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <section className={`${styles.featuresContainer}`}>
                <div>
                    <h1 className={styles.title}>Features That Keep You Hooked!</h1>
                    <p className={styles.subTitle}>Meet, Chat, Share – Anytime, Anywhere!</p>
                </div>

                <div className={`${styles.featuresList} row g-4`}>
                    {features.map((feature, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 p-0">
                            <Card title={feature.title} content={feature.content} />
                        </div>
                    ))}

                </div>
            </section>
            <MoreFeatures />
        </>
    )
}

export default Features
