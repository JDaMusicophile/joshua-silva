import React from 'react';
import styles from '../styles/Poster.module.css';

const Poster = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Research Title</h1>
      <div className={styles.section}>
    <h2 className={styles['section-title']}>Introduction</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
    </div>

      <div className={styles.section}>
        <h2>Introduction</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
      </div>
      <div className={styles.section}>
        <h2>Methods</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
      </div>
      <div className={styles.section}>
        <h2>Results</h2>
        <img src="graph.png" alt="Graph of results" />
      </div>
      <div className={styles.section}>
        <h2>Discussion</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
      </div>
      <div className={styles.section}>
        <h2>Conclusion</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
      </div>
      <div className={styles.section}>
        <h2>Acknowledgments</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
      </div>
      <div className={styles.section}>
        <h2>References</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sapien est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ipsum at urna hendrerit, sed ullamcorper leo ultricies. Sed vel nisi semper, pulvinar dolor nec, bibendum enim.</p>
      </div>
    </div>
  )}
