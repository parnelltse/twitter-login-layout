import styles from './Button.module.css';

export default function Button() {
  return (
    <div>
      <button className={styles.button}>Sign in with Google</button>
      <button className={styles.button2}>Sign in with Apple</button>
    </div>
  );
}
