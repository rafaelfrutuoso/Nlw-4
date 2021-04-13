import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ExperienceBar.module.css';
import { useContext } from 'react';

export function ExperienceBar(){
    const {currentExperience,experienceToNextLevel} = useContext(ChallengesContext)
    const parcentToNextLevel = Math.round(currentExperience *100) / experienceToNextLevel;
    return (
       <header className={styles.experienceBar}>
           <span>@ xp</span>
            <div>
                <div style={{width: `${parcentToNextLevel}%`}}></div>
                <span className={styles.currentExperience} style={{left: `${parcentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
           <span>{experienceToNextLevel} xp</span>
       </header>
      
       
    );
}