// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Home from '../views/pages/home';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Detail from '../views/pages/detail';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
