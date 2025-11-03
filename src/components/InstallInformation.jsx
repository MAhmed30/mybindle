import React from 'react'
import styles from '../styles/installInformation.module.css'
import Card from './Card';

const InstallInformation = () => {

    const installdata = [
        {
            title: "Download ",
            content: "Open Play Store or App Store"
        },
        {
            title: "Install App ",
            content: "The app will install automatically."
        },
        {
            title: "Ready to Use",
            content: "Sign up or log in to start exploring!"
        },];

    return (
        <div className={styles.installInformationContainer}>
            <div className={styles.installInformationdescription}>
                How to Install Our App
            </div>
            <div className={styles.installInformationtitle}>
                Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
            </div>

            <div className={styles.installInformationmainContainerdownlaod}>

                <div className={styles.installInformationContainerdownlaod}>
                    <div className={styles.installInformationdownlaod}>
                        <div className={styles.installInformationdownloadnumber}>
                            01
                        </div>
                        <div className={styles.installInformationdownline}>

                        </div>
                    </div>
                </div>

                <div className={styles.installInformationContainerdownlaod}>
                    <div className={styles.installInformationdownlaod}>

                        <div className={styles.installInformationdownloadnumbercolor}>
                            02
                        </div>

                    </div>
                </div>

                <div className={styles.installInformationContainerdownlaod}>
                    <div className={styles.installInformationdownlaod}>
                        <div className={styles.installInformationdownline}>

                        </div>
                        <div className={styles.installInformationdownloadnumbercolorthird}>
                            03
                        </div>
                    </div>

                </div>
            </div>

            <section className={`${styles.featuresContainer}`}>
                <div>
                    <h1 className={styles.title}>Features That Keep You Hooked!</h1>
                    <p className={styles.subTitle}>Meet, Chat, Share – Anytime, Anywhere!</p>
                </div>

                <div className={`${styles.featuresList} row g-4`}>
                    {installdata.map((feature, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 p-0">
                            <Card title={feature.title} content={feature.content} />
                        </div>
                    ))}

                </div>
            </section>
        </div>
    )
}

export default InstallInformation
