//// bazı işlemlerde beklemek gerektiğinde loader.gif çalıştırılır
import React from 'react'
import styles from "./Loader.module.scss"
import loaderImg from "../../assets/loader.gif"
import ReactDom from "react-dom"

const Loader = () => {
  return ReactDom.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Loading.."/>
      </div>
    </div>,document.getElementById("loader")
  )
}

export default Loader