import React, { useState } from 'react';
import Learner from './components/Learner';
import './app.css';

const App = () => {
// 2 Use the provided array of "learner" data below to 
  //initialize state as an object with a learners key in the < App > component.
  
  //3 Code the <App> component to display a <Learner> component for 
  //each learner object in the learners array being held in state.
  const [learnerData] = useState({
    learners: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
        scores: [
          { date: '2018-02-08', score: 77 },
          { date: '2018-04-22', score: 92 },
          { date: '2018-09-15', score: 68 }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae explicabo deserunt...',
        scores: [
          { date: '2018-12-14', score: 88 },
          { date: '2019-01-09', score: 79 },
          { date: '2019-02-23', score: 91 },
          { date: '2019-03-01', score: 95 }
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'Repudiandae veritatis recusandae quidem...',
        scores: [
          { date: '2018-10-11', score: 62 },
          { date: '2018-11-24', score: 74 },
          { date: '2018-12-19', score: 85 }
        ]
      }
    ]
  });

  return (
    <div className="app-container">
      <div className="app">
        {learnerData.learners.map((learner, index) => (
          <Learner 
            key={index}
            name={learner.name}
            bio={learner.bio}
            scores={learner.scores}
          />
        ))}
      </div>
    </div>
  );
};

export default App;