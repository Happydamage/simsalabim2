import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { FC } from 'react';
import { ErrorBoundary } from './ErrorBoundary.tsx';
import { CodeWarsModule } from '../CodeWarsModule/CodeWarsModule.tsx';
import { AppPage } from '../AppPage/AppPage.tsx';
import { routes } from './routes.ts';
import { CodeWarsAddForm } from '../CodeWarsModule/CodeWarsAddForm.tsx';
import { TypeScriptChallengesModule } from '../TypeScriptChallengesModule/TypeScriptChallengesModule.tsx';
import { LoginForm } from '../Components/LoginForm/LoginForm.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<AppPage />}>
        <Route path={routes.home()} element={''} />
        <Route path={routes.loginForm.main()} element={<LoginForm />} />
        <Route path={routes.codeWars.main()} element={<CodeWarsModule />} />
        <Route path={routes.codeWars.add()} element={<CodeWarsAddForm />} />
        <Route
          path={routes.typeScriptChallenge.main()}
          element={<TypeScriptChallengesModule />}
        />
        {/*<Route path={routes.miniDrawer.main()} element={<MiniDrawer />} />*/}
        <Route path={routes.miniDrawer.main()} element={<LoginForm />} />
      </Route>
    </Route>
  )
);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
