// Code the <Learner> component so that it:
//Renders the learners's name & bio properties.
//Renders a <Score> component for each score object in the learner's scores property.


import React from 'react';
import Score from './Score';

const Learner = ({ name, bio, scores }) => (
  <div className="learner">
    <h2>{name}</h2>
    <p>{bio}</p>
    <div>
      {scores.map((scoreObj, index) => (
        <Score key={index} date={scoreObj.date} score={scoreObj.score} />
      ))}
    </div>
  </div>
);

export default Learner;