import RouteComponent, { PERMISSION_ALL, PERMISSION_LOGIN, PERMISSION_NOT_LOGIN } from './components/RouteComponent';
import Auth from './pages/Auth';
import Main from './pages/Main';
import Todo from './pages/Todo';

const routes = [
  { path: '/', component: <RouteComponent permission={PERMISSION_ALL} component={Main} /> },
  { path: '/auth', component: <RouteComponent permission={PERMISSION_NOT_LOGIN} component={Auth} /> },
  { path: '/todo', component: <RouteComponent permission={PERMISSION_LOGIN} component={Todo} /> },
];

export default routes;
