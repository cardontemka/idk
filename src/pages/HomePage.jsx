import styles from "../styles/pages/HomePage.module.css";
import scroll from "../styles/pages/ScrollPage.module.css";
import { useContext, useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import meet from "../assets/images/meeting.png";
import calicon from "../assets/images/calicon.png";
import notif from "../assets/images/notif.png";
import calendar from "../assets/images/calendar.png";
import { Review } from "../components";
import { ThemeContext } from "../providers/ThemeProvider";
import { Col, Container, Row } from "react-bootstrap";

export const HomePage = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className={`${styles.contain} ${isDark ? styles.dark : styles.light}`}>
            <Container bsPrefix={`${styles.firstContain} ${styles.bgwoman}`}>
                <Col className={styles.homeContain} sm={8} xs={12}>
                    <Col className={styles.title} sm={10} xs={12}>Instant collaborations for remote teams</Col>
                    <Col className={styles.text} sm={8} xs={12}>All in one for your remote team chats, collaboration and track projects</Col>
                    <Col className={styles.inputs} style={{ marginTop: 10 + 'vh' }} xs={12} md={8}>
                        <Col sm={8} xs={8}>
                            <input className={styles.email} placeholder='Email' />
                        </Col>
                        <Col sm={3} xs={3} className={styles.inputButton}>Get early access</Col>
                    </Col>
                </Col>
            </Container>
            <div className={scroll.contain}>
                <div className={`${scroll.textContain} ${isDark ? scroll.dark : scroll.light}`}>
                    <p className={scroll.title}>Your Hub for teamwork</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className={scroll.lrnmore}>Learn more <FaLongArrowAltRight /></p>
                </div>
                <div className={scroll.imageContain}>
                    <img className={scroll.coverImage} src={meet} />
                    <img className={scroll.calicon} src={calicon} />
                    <img className={scroll.notif} src={notif} />
                    <img className={scroll.event1} src={event1} />
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={scroll.imageContain}>
                    <div className={scroll.bgwoman1}></div>
                    <img className={scroll.event2} src={event2} />
                    <img className={scroll.event3} src={event3} />
                </div>
                <div className={`${scroll.textContain} ${scroll.textMargin} ${isDark ? scroll.dark : scroll.light}`}>
                    <p className={scroll.title}>Simple task management</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className={scroll.lrnmore}>Learn more <FaLongArrowAltRight /></p>
                </div>
            </div>
            <div className={scroll.contain}>
                <div className={`${scroll.textContain} ${isDark ? scroll.dark : scroll.light}`}>
                    <p className={scroll.title}>Scheduling that actually works</p>
                    <p className={scroll.text}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <p className={scroll.lrnmore}>Learn more <FaLongArrowAltRight /></p>
                </div>
                <div className={scroll.imageContain}>
                    <div className={scroll.bgwoman2}></div>
                    <img className={scroll.calendar} src={calendar}></img>
                </div>
            </div>
            <div className={`${scroll.wpsau} ${scroll.title} ${isDark ? scroll.dark : scroll.light}`}>What people say about us</div>
            <div className={scroll.reviewContain}>
                <div className={scroll.reviews}>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    )
}