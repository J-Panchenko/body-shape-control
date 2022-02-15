import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header';

const Layout = () => (
  <>
    <header className="header">
      <AppHeader />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
