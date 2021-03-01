import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    const {challengeCompleted} = useContext(ChallengesContext)
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span> {challengeCompleted} </span>
        </div>
    )
}