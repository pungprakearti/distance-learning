import React from 'react';
import DistanceLearning from './DistanceLearning'
import './App.scss';

function App() {
  return (
    <div className='App'>
      <DistanceLearning />
      <div className='App_Github'>
        <a
          className='App_GithubLink'
          href='https://github.com/pungprakearti/distance-learning'
        >
          Github repository
        </a>
      </div>
    </div>
  );
}

export default App;
