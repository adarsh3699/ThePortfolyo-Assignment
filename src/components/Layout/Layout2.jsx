import Header2 from '../Header/Header2';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';

const Layout2 = ({ isLoading }) => {
	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				<div className="st-get-sidebar">
					<CustomCursor />
					<Header2 />
					<Outlet />
					<Footer />
				</div>
			)}
		</>
	);
};
export default Layout2;
