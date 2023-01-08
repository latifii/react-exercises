import React from 'react';
import data from './data';
import Questions from './Questions';
function App() {
  return (
    <main>
      <Questions data={data} />
    </main>
  )
}

export default App;
