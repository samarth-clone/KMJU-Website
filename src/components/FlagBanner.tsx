import React from 'react';
import styles from '../styles/FlagBanner.module.css';

const FlagBanner: React.FC = () => (
  <div className={styles.flagContainer}>
    <div className={styles.topSection}>
      <div className={styles.kannadaHeading}>
        ಕರ್ನಾಟಕ ಮೀಡಿಯಾ ಜರ್ನಲಿಸ್ಟ್ ಯೂನಿಯನ್
      </div>
    </div>
    <div className={styles.bottomSection}>
      <div className={styles.englishHeadingContainer}>
        <div className={styles.englishHeading}>
          Breaking News: New Initiatives by KMJU for Journalists' Welfare ...
        </div>
      </div>
    </div>
  </div>
);

export default FlagBanner