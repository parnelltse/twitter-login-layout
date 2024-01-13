import styles from './Form.module.css';

export default function Form() {
    return (
        <div className={styles.formOuterContainer}>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="text"
                        placeholder="Phone, email or username"
                        className={styles.placeHolder}
                    />
                </form>
                <button className={styles.nextButton}>Next</button>
                <button className={styles.forgotButton}>Forgot password?</button>
            </div>
        </div>

    );
}
