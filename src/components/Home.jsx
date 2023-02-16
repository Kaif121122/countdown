import React, { useEffect, useState } from 'react'
import fbIcon from '../images/icon-facebook.svg'
import instaIcon from '../images/icon-instagram.svg'
import pinterestIcon from '../images/icon-pinterest.svg'

const Home = () => {

    const [currenDays, setDays] = useState();
    const [currentHours, setHours] = useState();
    const [currentMinutes, setMinutes] = useState();
    const [currentSeconds, setSeconds] = useState();

    let interval;

    const startTimer = () => {

        const countDownDate = new Date('Jan 5, 2024').getTime();

        interval = setInterval(() => {

            let now = new Date().getTime();

            let distance = countDownDate - now;


            const days = Math.floor(distance / (1000 * 60 * 60 * 24));


            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // console.log(days,hours,minutes,seconds)

            if (distance < 0) {

                clearInterval(interval.current)
            } else {

                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }

        });

    }

    useEffect(() => {
        startTimer()

    }, [])


    return (

        <main className="main-container">
            <h1 className="heading"> We're launching soon</h1>

            <div className="countdown-container">

                <div className="common-countdown-container">
                    <div className="timer day-num">
                        {currenDays}
                    </div>
                    <p className="common-para">days</p>
                </div>

                <div className="common-countdown-container">
                    <div className="timer hour-num">
                        {currentHours}
                    </div>
                    <p className="common-para">hours</p>
                </div>

                <div className="common-countdown-container">
                    <div className="timer minute-num">
                        {currentMinutes}
                    </div>
                    <p className="common-para">minutes</p>
                </div>

                <div className="common-countdown-container">
                    <div className="timer second-num">
                        {currentSeconds}
                    </div>
                    <p className="common-para">seconds</p>
                </div>
            </div>


            <div className="footer">

                <div className="logo-container">
                    <img src={fbIcon} alt="" className="logo" />
                    <img src={instaIcon} alt="" className="logo" />
                    <img src={pinterestIcon} alt="" className="logo" />
                </div>
            </div>

        </main>


    )
}

export default Home