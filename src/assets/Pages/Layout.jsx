import { Outlet } from 'react-router-dom';
import SidebarNav from './SidebarNav';

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarNav />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;