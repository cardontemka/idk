import styles from '../styles/components/Footer.module.css'
import logo from "../assets/images/team.png";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import items from "../assets/mock/apps.json"
import data from "../assets/mock/data.json"

const icons = [
    <AiFillFacebook />,
    <AiOutlineInstagram />,
    <AiOutlineTwitter />
]
export const Footer = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.columnContain}>
                <img src={logo} className={`${styles.logo} ${styles.title}`} />
                {items.map((item, index) => {
                    return (
                        <div key={index} className={styles.word}>{icons[item.icon]}{' '}{item.name}</div>
                    )
                })}
            </div>
            {data.map((item, index) => {
                return (
                    <div className={styles.columnContain}>
                        <div key={index} className={`${styles.logo} ${styles.title}`}>
                            {item.title}
                            {data.map((data, index) => {
                                return (
                                    <div key={index} className={styles.word}>{data.words}</div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}