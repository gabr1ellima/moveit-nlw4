import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
        
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma cmaminha da de 3 minutos.</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : ( 
        <div className={styles.challengeNotActive}>
          <strong>Finaliza um ciclo para receber um desafio</strong>   
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />  
            Avançe de level completando desafios.
          </p>   
        </div>
      ) }
    </div>
  )
}