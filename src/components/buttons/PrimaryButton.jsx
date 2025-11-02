import React, { useContext } from 'react'
import styles from '../../styles/widget.module.css'
import { ThemeContext } from '../../context/ThemeContext';
const Primarybutton = (
    {onButtonClick,
    buttonLabel
}
) => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            <button
                onClick={onButtonClick}
                className={`${styles.primaryButton} ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}
            >
                {buttonLabel}
            </button>
        </div>
    )
}

export default Primarybutton
