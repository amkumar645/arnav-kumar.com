import './index.scss';
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="page">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout