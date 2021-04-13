import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css'
export function Profile(){
    const {level} = useContext(ChallengesContext)
    return (
      
        <div className={styles.profileContainer}>
          <img src="https://avatars.githubusercontent.com/u/73318464?v=4" alt="rafael"/>
          <div>
              <strong>Rafael</strong>
              <p>
                  <img src="icons/level.svg" alt="Level que é uma certa para cima da cor verde "/>
                  Level {level}
                  </p>
          </div>
        </div>
    );
}