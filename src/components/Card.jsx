import React from 'react'
import styles from '../styles/widget.module.css'

const Card = ({title, content, alignment="center"}) => {
  return (
    <div className={`${styles.card} align-items-${alignment}`}>
        {title && <h2 className={styles.cardTitle}>{title}</h2>}
        {content && <p className={`${styles.cardContent} text-${alignment}`}>{content}</p>}
    </div>
  )
}

export default Card
