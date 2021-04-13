import { ExperienceBar } from './components/ExperienceBar'
import {Profile} from './components/Profile'
import {CompletedChallenges} from './components/CompletedChallenges'
import {Countdown} from './components/Countdown'
import styles from '../styles/pages/Home.module.css'
import {ChallengeBox} from './components/ChallengeBox'
import Head from 'next/head'
import { CountdownProvider } from '../contexts/CountdownContext'
import {GetServerSideProps} from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext'
interface HomeProps {
  level:number,
  currentExperience:number,
  challengesCompleted:number
}
export default function Home(props:HomeProps) {
  
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
  
    <ExperienceBar></ExperienceBar>
    <CountdownProvider>
    <section>
      <div>
        <Profile/>
        <CompletedChallenges></CompletedChallenges>
        <Countdown/>
      </div>
      <div>
        <ChallengeBox></ChallengeBox>
      </div>
    </section>
    </CountdownProvider>
   
  </div>
  </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // e obrigatorio ter o nome getServerSideProps 
 
  const {level,currentExperience,challengesCompleted} = ctx.req.cookies
    return {
      // level:Number(level) tambem pode conveter usado level:+level
      props:{
        level:Number(level),
        currentExperience: +currentExperience,
        challengesCompleted: +challengesCompleted
      }
    }
}
