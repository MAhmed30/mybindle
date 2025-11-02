import React from 'react'
import styles from '../../styles/widget.module.css'

const RoundedButton = ({text, smallHeading, icon}) => {
  return (
    <button className={styles.roundedButton}>
        {icon && <div className={styles.buttonIcon}>{icon}</div>}
        <div>
            {smallHeading && <div className={styles.buttonSmallHeading}>{smallHeading}</div>}
            <div className={styles.buttonText}>{text}</div>
        </div>
    </button>
  )
}

export default RoundedButton
