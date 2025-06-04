import {FC, useContext, useState} from 'react';
import {cn} from "@bem-react/classname";
import {Context} from "../../../main.tsx";

const cnLoginForm = cn('LoginForm');

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

    return (
        <div className={cnLoginForm(undefined, [props.className])}>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder={'Email'}
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder={'password'}
            />
            <button onClick={() => store.login(email, password)}>Login</button>
            <button onClick={() => store.registration(email, password)}>Registration</button>
        </div>
    );
};