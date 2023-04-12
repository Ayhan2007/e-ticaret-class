////şifre resetleme sayfası
import React from 'react'
import styles from "./auth.module.scss"
import resetImg from "../../assets/forgot.png"
import Card from "../../components/card/Card"

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset" width="400"/>
      </div>
      <Card cardClass={styles.form}>
        <h2>Reset</h2>
        <button className="--btn --btn-primary --btn-block">Reset Password</button>
        <div className={styles.links}>

        </div>
      </Card>
    </section>
  )
}

export default Reset