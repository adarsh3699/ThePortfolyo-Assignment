import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getData } from './Data';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Page404 from './components/404/Page404';
import BlogDetails from './components/Blog/BlogDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Layout2 from './components/Layout/Layout2';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	useEffect(() => {
		Aos.init({ once: true });
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
				);
				const data = await response.json();
				console.log(data);
				if (data.success) {
					const { about, email, services, skills, timeline, projects, testimonials, social_handles, blogs } =
						data.user;
					console.log(blogs);

					const DataTemplate = getData(
						about,
						email,
						services,
						skills,
						timeline,
						projects,
						testimonials,
						social_handles,
						blogs
					);
					setData(DataTemplate);
				} else {
					console.error('Something went wrong');
				}
			} catch (error) {
				console.error('There was an error:', error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout isLoading={isLoading} />}>
					<Route index element={<Home data={data} />} />
					<Route path="home-v3" element={<Home3 data={data} />} />
					<Route path="home-v4" element={<Home4 data={data} />} />
					<Route path="*" element={<Page404 />} />
					<Route path="blog/blog-details" element={<BlogDetails />} />
				</Route>
				<Route path="/home-v2" element={<Layout2 isLoading={isLoading} />}>
					<Route index element={<Home2 data={data} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
