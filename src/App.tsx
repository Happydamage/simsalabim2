import { AppRouter } from './app/router/AppRouter.tsx';
import './App.css';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';

export const App: FC = observer(() => {
  return <AppRouter />;
});

export default App;
