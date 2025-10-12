import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import SidebarNav from './SidebarNav';
import '../Css/HubStyles.css';

function Layout() {
  return (
    <div className="app-container">
      <MainHeader />
      <main className="main-content">
        <SidebarNav />
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;