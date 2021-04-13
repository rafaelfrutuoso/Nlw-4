import { useState,useEffect, useContext } from 'react'
import {ChallengesContext} from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext'
import styles from '../../styles/components/Countdown.module.css'
export function Countdown(){
    const{
        hasFinished,
        isActive,
        minutes,
        resetCountdown,
        seconds,
        startCountdown
    } = useContext(CountdownContext)
    /*let valueMinute = 0.1;
    const {startNewChallenge} = useContext(ChallengesContext)
   
    
    let countdownTimeout : NodeJS.Timeout;
    

    const [time, setTime] = useState(valueMinute * 60);
    const [isActive,setIsactive] = useState(false)
    const [hasFinished,setHasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    */

    const [minuteLeft,minuteRight] =  String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] =  String(seconds).padStart(2,'0').split('');

   /* 
    function startCountdown(){
        setIsactive(true)
      /*
        const a = document.getElementById('test')
       if(isActive == false){
        setIsactive(true)
        setTimeout(() => {
            a.innerText = 'presione novamente para pausa'
            a.classList.add(styles.countdownButtonActive)
        },1000)
    }else if(isActive == true){
        a.innerText = 'Iniciar um ciclo' 
        a.classList.remove(styles.countdownButtonActive)
         clearTimeout(countdownTimeout)
            setIsactive(false)
            setTime(25*60)
    }
    
    }
    
    function resetCountdown(){
            clearTimeout(countdownTimeout)
            setIsactive(false)
            setTime(valueMinute*60)
    }
    useEffect(() =>{
       if(isActive && time > 0){
         countdownTimeout =  setTimeout(() => {
               setTime(time - 1)
           },1000)
       }else if(isActive && time == 0) {
          setHasFinished(true)
          setIsactive(false)
          startNewChallenge()             
       }
       
    },[isActive,time])
    */
    return (
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        {hasFinished ? (
            <button 
            disabled
            className={styles.countdownButton}
            id='test'
            >Ciclo encerrado
            </button>
            
        ): (
            <>
             {isActive ? (
             <button 
             type='button' 
             className={ `${styles.countdownButton} ${styles.countdownButtonActive}`}
             //id='test'
             onClick={resetCountdown}> Abandonar um ciclo
             </button>
        ): (
            <button 
          type='button' 
          className={styles.countdownButton}
          //id='test'
          onClick={startCountdown}>Iniciar um ciclo
          </button>
        )}
            </>
        )}
        {/* <button 
          type='button' 
          className={styles.countdownButton}
          id='test'
          onClick={startCountdown}>Iniciar um ciclo
          </button>
         */} 
          
        </div>
    )
}