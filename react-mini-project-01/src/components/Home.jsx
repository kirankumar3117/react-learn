import React from 'react'
import Products from './Products'
import Footer from './Footer'
import Images from './Images'
import styles from "./home.module.css"
const Home = () => {
  return (
    <div className={styles.container}>
       <Images/>
       <Products/>
       <Footer/>
    </div>
  )
}
export default Home