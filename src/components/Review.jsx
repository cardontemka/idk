import styles from '../styles/components/Review.module.css'
import { AiFillStar } from "react-icons/ai";
import any from "../assets/images/Avatar.png"
import { useContext, useState } from 'react';
import { ThemeContext } from "../providers/ThemeProvider";

export const Review = () => {
    const { isDark } = useContext(ThemeContext);
    const rating = new Array(5).fill(true, 0, 5)
    const [star, setStar] = useState(rating)
    const handleStars = (ratingNumber) => {
        setStar((prev) => prev.map((el, index) => { return ratingNumber == 0 && !prev[1] && index <= ratingNumber ? !el : index <= ratingNumber }))
    }
    return (
        <div className={`${styles.contain} ${isDark ? styles.dark : styles.white} ${isDark ? styles.dark : styles.white}`}>
            <div className={styles.starsContain}>
                {star.map((bool, index) => <AiFillStar key={index} className={`${bool ? styles.starColor : styles.gray} ${styles.star}`} onClick={() => handleStars(index)} />)}
            </div>
            <div className={styles.textBox}>
                Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.
            </div>
            <div className={styles.account}>
                <img src={any} className={styles.profile} />
                <p className={styles.name}>Amy Klassen</p>
            </div>
        </div>
    )
}