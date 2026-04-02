import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaCO3Powder } from './pages/CaCO3Powder';
import { WhiteStone } from './pages/WhiteStone';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'caco3-powder', Component: CaCO3Powder },
      { path: 'white-stone', Component: WhiteStone },
      { path: 'news', Component: News },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
