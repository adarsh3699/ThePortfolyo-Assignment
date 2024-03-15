import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';

const Layout = ({ isLoading }) => {
	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				<div>
					<CustomCursor />
					<Header />
					<Outlet />
					<Footer />
				</div>
			)}
		</>
	);
};
export default Layout;
