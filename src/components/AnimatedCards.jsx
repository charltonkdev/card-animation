'use client'
import React, { useState } from 'react';
import styles from './AnimatedCards.module.css';

const AnimatedCards = () => {
  const [isChecked, setIsChecked] = useState('c1'); // Default checked state

  const handleChange = (id) => {
    setIsChecked(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          type="radio"
          name="slide"
          id="c1"
          checked={isChecked === 'c1'}
          onChange={() => handleChange('c1')}
          className='opacity-0'
        />
        <label
          htmlFor="c1"
          className={`${styles.card} ${isChecked === 'c1' ? styles.checked : ''}`}
          style={{ width: isChecked === 'c1' ? '600px' : '80px' }}
        >
          {isChecked === 'c1' ? (
            <>
              <div className={`${styles.description} ${styles.fadeIn} px-[35px] w-[600px]`}>
                <h4>New technologies</h4>
                <p>Space engineering becomes more and more advanced</p>
              </div>
              
            </>
          ) : (
            <>
              <div className={`${styles.icon} relative translate-x-[35px] -translate-y-[10px]`}>1</div>
            </>
          )}
        </label>

        <input
          type="radio"
          name="slide"
          id="c2"
          checked={isChecked === 'c2'}
          onChange={() => handleChange('c2')}
          className='opacity-0'
        />
        <label
          htmlFor="c2"
          className={`${styles.card} ${isChecked === 'c2' ? styles.checked : ''}`}
          style={{ width: isChecked === 'c2' ? '600px' : '80px' }}
        >
          {isChecked === 'c2' ? (
            <>
              <div className={`${styles.description} ${styles.fadeIn} px-[35px]`}>
                <h4>New technologies</h4>
                <p>Space engineering becomes more and more advanced</p>
              </div>
              
            </>
          ) : (
            <>
              <div className={`${styles.icon} relative translate-x-[35px] -translate-y-[10px]`}>2</div>
            </>
          )}
        </label>

        <input
          type="radio"
          name="slide"
          id="c3"
          checked={isChecked === 'c3'}
          onChange={() => handleChange('c3')}
          className='opacity-0'
        />
        <label
          htmlFor="c3"
          className={`${styles.card} ${isChecked === 'c3' ? styles.checked : ''}`}
          style={{ width: isChecked === 'c3' ? '600px' : '80px' }}
        >
          {isChecked === 'c3' ? (
            <>
              <div className={`${styles.description} ${styles.fadeIn} px-[35px]`}>
                <h4>New technologies</h4>
                <p>Space engineering becomes more and more advanced</p>
              </div>
              
            </>
          ) : (
            <>
              <div className={`${styles.icon} relative translate-x-[35px] -translate-y-[10px]`}>3</div>
            </>
          )}
        </label>

        <input
          type="radio"
          name="slide"
          id="c4"
          checked={isChecked === 'c4'}
          onChange={() => handleChange('c4')}
          className='opacity-0'
        />
        <label
          htmlFor="c4"
          className={`${styles.card} ${isChecked === 'c4' ? styles.checked : ''}`}
          style={{ width: isChecked === 'c4' ? '600px' : '80px' }}
        >
          {isChecked === 'c4' ? (
            <>
              <div className={`${styles.description} ${styles.fadeIn} px-[35px]`}>
                <h4>New technologies</h4>
                <p>Space engineering becomes more and more advanced</p>
              </div>
              
            </>
          ) : (
            <>
              <div className={`${styles.icon} relative translate-x-[35px] -translate-y-[10px]`}>4</div>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default AnimatedCards;
