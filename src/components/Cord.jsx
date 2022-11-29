import styles from "../styles/components/Cord.module.css";
import any from "../assets/images/Avatar.png"

export const Cord = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.cover}></div>
            <div className={styles.textContain}>
                <p className={styles.data}>Data-Driven Design is Killing Our Instincts</p>
                <p className={styles.word}>Our latest updates and blogs about managing your team</p>
                <p className={styles.word}>Our latest updates and blogs about managing your team</p>
            </div>
            <div className={styles.user}>
                <img src={any} className={styles.profile} />
                <p>Jane Cooper</p>
                <div className={styles.vl}></div>
                <p>2nd January,2022</p>
            </div>
        </div>
    );
};