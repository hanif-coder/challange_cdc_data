import React from 'react';
import './App.css';
import DataList from './components/DataList/DataList.tsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>CDC Data Visualization</h1>
      </header> */}
      <main>
        <DataList />
      </main>
    </div>
  );
}

export default App;
