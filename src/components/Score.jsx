// 5 Code the <Score> component so that it renders the score object's date & score properties.

import React from 'react';

const Score = ({ date, score }) => (
  <div style={{ marginBottom: '5px' }}>
    <p>Date: {date}</p>
    <p>Score: {score}</p>
  </div>
);

export default Score;