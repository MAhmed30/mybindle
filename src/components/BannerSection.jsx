import React from 'react'
import styles from '../styles/bannersection.module.css'
import ImageWrapper from './ImageWrapper'
import BannerImg from '/images/bannerSectionImg.webp'
import BannerImgPrimary from '/images/bannerSectionImgPrimary.webp'

const BannerSection = () => {
    return (
        <>
            <section className={styles.bannerSecContainer}>
                <div className={styles.bannerSecTextParent}>
                    <div className={styles.bannerSecDescription}>
                        Be the Reason <br /> Someone Smiles Today!
                    </div>

                    <div className={styles.bannerSecTitle}>
                        Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!
                    </div>

                    <div>
                        <button className={styles.bannerSecButton}>Donate Now</button>
                    </div>
                </div>

                <div className={styles.bannerSecImageParent}>

                    <ImageWrapper
                       className={styles.bannerSecImagePrimary}
                        src={BannerImgPrimary}
                        alt={"Banner Image"}  
                    />
                    
                    <ImageWrapper
                       className={styles.bannerSecImage}
                        src={BannerImg}
                        alt={"Banner Image"}
                        
                    />

                </div>
            </section>
        </>
    )
}

export default BannerSection
