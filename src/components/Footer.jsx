import React from 'react'
import styles from '../styles/footer.module.css'
import ImageWrapper from './ImageWrapper'
import footerImg from '../../public/images/mobile.webp';
import RoundedButton from './buttons/RoundedButton';
import { Apple, StoreIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>

        <div className={styles.textContainer}>
            <div className={styles.title}>Join the Fun – Download MyBindle Now!</div>
            <div className={styles.subtitle}>Your Social Network, Your Way Download MyBindle Now and Be a Part of a Community That’s Always Evolving!</div>
            <div className={styles.buttonGroup}>
                <RoundedButton icon={<Apple/>} smallHeading={'DOWNLOAD ON THE'} text={'App Store'}/>
                <RoundedButton icon={<StoreIcon/>} smallHeading={'GET IT ON'} text={'Google Play'}/>
            </div>
        </div>

        <div className={styles.imageContainer}>
            <ImageWrapper
                src={footerImg}
                alt={"Footer Image"}
                className={styles.footerImageFirst}
                containerClassName={styles.footerImageWrapperFirst}
            />
            <ImageWrapper
                src={footerImg}
                alt={"Footer Image"}
                width="100%"
                height="100%"
                className={styles.footerImage}
            />
        </div>
        
    </footer>
  )
}

export default Footer
