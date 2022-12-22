import RouteComponent from './components/common/RouteComponent';
import Auth from './pages/Auth';
import Main from './pages/Main';
import Todo from './pages/Todo';
import { PERMISSION_ALL, PERMISSION_LOGIN, PERMISSION_NOT_LOGIN } from './utils/permission';

const routes = [
  { path: '/', component: <RouteComponent permission={PERMISSION_ALL} component={Main} /> },
  { path: '/auth', component: <RouteComponent permission={PERMISSION_NOT_LOGIN} component={Auth} /> },
  { path: '/todo', component: <RouteComponent permission={PERMISSION_LOGIN} component={Todo} /> },
];

export default routes;
