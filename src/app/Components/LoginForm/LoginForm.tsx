import { FC, useContext, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { Context } from '../../../main.tsx';
import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';

const cnLoginForm = cn('LoginForm');

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = observer((props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className={cnLoginForm(undefined, [props.className])}>
      <Typography variant={'h5'}>
        {store.isAuth
          ? `Пользователь авторизован ${store.user.email}`
          : 'Автроизуйтесь'}
      </Typography>

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder={'Email'}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder={'password'}
      />
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.registration(email, password)}>
        Registration
      </button>
    </div>
  );
});
