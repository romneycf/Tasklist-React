import React from 'react';
import CenteredLayout from './components/centered-layout/centered-layout';
import TasklistApp from './modules/tasklist-app/tasklist-app';



function App() {
  return (
    <div className="App">
      <CenteredLayout>
        <TasklistApp />
      </CenteredLayout>
    </div>
  );
}

export default App;
