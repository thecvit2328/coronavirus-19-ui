import React, { FC } from 'react';
import { HomePage } from './views';
import './styles/index.scss';

const App: FC = () => (
  <div className="App">
    <React.Suspense fallback="...Loading">
      <HomePage />
    </React.Suspense>
  </div>
);

export default App;
