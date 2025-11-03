import React from 'react'
import styles from '../styles/features.module.css'
import ImageWrapper from './ImageWrapper'
import heroImg from '/images/hero/mobile.webp'
import Card from './Card'
import InstallInformation from './InstallInformation'

const features = [
    {
        title: "🎥 Short Videos & Reels",
        content: "Share engaging, bite-sized content that keeps everyone entertained."
    },

    {
        title: "🔔 Smart Notifications",
        content: "Stay updated on what matters without the noise."
    },

    {
        title: "👥 Interest-Based Communities",
        content: "Join groups and discussions that match your passion."
    }
];
const MoreFeatures = () => {
  return (
    <div className={styles.moreFeaturesContainer}>
      <div className={styles.featuresFirstCol}>
            <ImageWrapper 
                src={heroImg}
                alt={"Features Image"}
                containerClassName={`${styles.featuresImage} ${styles.left}`}
            />
            <ImageWrapper 
                src={heroImg}
                alt={"Features Image"}
                containerClassName={`${styles.featuresImage} ${styles.right}`}
            />
      </div>
      <div className={styles.featuresSecondCol}>
        <div className={`${styles.title} text-start`}>
            Where Every Click Sparks a Connection!
        </div>
        <div>
            A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
        </div>
        <div>
            {features.map((feature, index) => (
                    <div key={index} className="mb-4">
                        <Card title={feature.title} content={feature.content} alignment="start" />
                    </div>
                ))
            }
        </div>
      </div>

    </div>

  )
}

export default MoreFeatures
