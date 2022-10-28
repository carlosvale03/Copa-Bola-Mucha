import styles from './matches.module.css'
import sibAS from '../img/logo-AS.png'
import sibAd from '../img/brasil-ico.svg'

function Matches() {
    return (
        <main>
            <ul className={styles.matches}>
                <li>
                    <p className={styles.schedule}>
                        24/11 16h - 1ª RODADA
                    </p>

                    <div className={styles.teams}>
                        <p className={styles.team}>
                            <img src={sibAS} alt="Simbolo do AS"></img>
                            Alto Sereno
                        </p>

                        <p className={styles.score} id="jg-01">0 x 0</p>

                        <p className={styles.team}>
                            Adversario
                            <img src={sibAd} alt="Simbolo do adversario"></img>
                        </p>
                    </div>
                </li>
            </ul>
        </main>

        
    )
}

export default Matches