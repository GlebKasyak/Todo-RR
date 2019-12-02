import React from 'react';

import ToDo from './containersToDo/Todo';
import Title from './components/Title/Title';

const App = () => (
    <>
      <Title title="ToDo App" />
      <ToDo />
    </>
);

export default App;