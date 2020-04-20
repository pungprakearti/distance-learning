import React from 'react';
import Selector from './Selector'
import './App.scss';

function App() {
  const tasks = [
    {
      name: 'Theo',
      tasks: [
        ['Daily check-in'],
        ['Daily video'],
        ['Reading 20 minutes, and filling out the reading log'],
        ['Singing the Phonics Song and reviewing phonic sounds'],
        ['Completing a Eureka Math lesson'],
        ['Practicing your math facts', ['sprint', 'flash cards', 'Zearn']],
        ['Counting and/or writing numbers', ['1s', '2s', '5s', '10s']],
        ['Completing a writing activity',['journal entry', 'animal unit writing activity']],
        ['Use Lexia, for at least 20-30 minutes'],
        ['Selecting 1-2 tasks from the included packet'],
        ['P. E.'],
        ['Brain break']
      ]
    },
    {
      name: 'Violet',
      tasks: [
        ['Activity book'],
        ['Practice writing', ['numbers', 'letters']],
        ['Coloring'],
        ['Blocks'],
        ['Art project'],
        ['P. E.'],
        ['Brain break']
      ]
    }
  ]

  return (
    <div className='App'>
      <Selector tasks={tasks} />
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
