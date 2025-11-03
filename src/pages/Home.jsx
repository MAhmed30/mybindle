import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import InstallApp from '../components/InstallInformation'
import Footer from '../components/Footer'
import BannerSection from '../components/BannerSection'
import User from '../components/User'
import { Helmet } from 'react-helmet-async'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | MyBindle</title>
                <meta name="description" content="A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet." />
                <meta name="keywords" content="React, Bootstrap, Framer Motion, Responsive Design, Web App, Modern UI" />
                <meta name="author" content="Your Name" />
            </Helmet>
            <Hero />
            <Features />
            <InstallApp />
            <BannerSection />
            <User/>
            <Footer />
        </>
    )
}
