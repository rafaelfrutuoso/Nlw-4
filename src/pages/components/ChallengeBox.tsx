import { useContext } from 'react'
import {ChallengesContext} from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext'
import styles from '../../styles/components/ChallengeBox.module.css'
export function ChallengeBox(){
    const {activeChallenge,resetChallenge,completeChallenge} = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }
    //const  hasActiveChallenge = true
    return (
        
        <div className={styles.challengeBoxContainer}>
            {/* // hasActiveChallenge o que era agora é activeChallenge*/}
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganha {activeChallenge.amount} xp</header>
                   <main>
                     <img src={`icons/${activeChallenge.type}.svg`} />
                     <strong>Novo desafio</strong>
                     <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <button type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}>Falhei</button>
                       <button type="button" 
                       className={styles.challengeSucceededButton}
                       onClick={handleChallengeSucceeded}>Completei</button>
                   </footer>
                </div>
            ) : (
                   <div className={styles.challengeNoActive}>
                   <strong>Finalize um ciclo para receber um desafio</strong>
                   <p><img src="icons/level-up.svg" alt="Level up que é uma certa para cirma da cor verde"/>Avance de level completando os desafios</p>
               </div>
            )}
        </div>
    )
}