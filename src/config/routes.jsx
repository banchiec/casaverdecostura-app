import { Navigate } from 'react-router-dom'
import HomePage from '../pages/home-page/HomePage'
import Shopping from '../pages/shopping/Shopping'
import Login from '../pages/LogIn'
import Signup from '../pages/Signup'
import { Cart } from '../pages/cart-page/cart-page'
import Checkout from '../components/checkout/checkout'
import * as PATHS from '../utils/paths'
import Admin from '../pages/admin/Admin'
import { Details } from '../pages/details/Details'
import { Favorites } from '../pages/favorites-page/favorites-page'
import { AllCollections } from '../pages/AllCollections/AllCollections'
import { Search } from '../pages/search-page/search-page'
import { BlogDetails } from '../components/BlogDetails/BlogDetails'
import { AboutUs } from '../pages/about-us-page/AboutUs'
import { Sewing } from '../components/Seving/Sewing'

const routes = (props) => {
	const { user } = props
	return [
		{
			path: PATHS.COLLECTIONS,
			element: <AllCollections {...props} />,
		},

		{
			path: PATHS.ABOUTUS,
			element: <AboutUs {...props} />,
		},
		{
			path: PATHS.BLOGDETAILS,
			element: <BlogDetails {...props} />,
		},
		{
			path: PATHS.SEWING,
			element: <Sewing {...props} />,
		},
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage {...props} />,
		},
		{
			path: PATHS.FAVORITES,
			element: <Favorites {...props} />,
		},
		{
			path: PATHS.SEARCH,
			element: <Search {...props} />,
		},
		{
			path: PATHS.CHECKOUT,
			element: <Checkout {...props} />,
		},
		{
			path: PATHS.CART,
			element: <Cart {...props} />,
		},
		{
			path: PATHS.DETAILS,
			element: <Details {...props} />,
		},

		{
			path: PATHS.SHOPPING,
			element: <Shopping {...props} />,
		},
		{
			path: PATHS.SIGNUPPAGE,
			element: <Signup {...props} />,
		},
		{
			path: PATHS.LOGINPAGE,
			element: <Login {...props} />,
		},
		{
			path: PATHS.ADMIN,
			element:
				user?.role === 'admin' ? (
					<Admin {...props} />
				) : (
					<Navigate to={PATHS.LOGINPAGE} replace />
				),
		},
		{
			path: PATHS.CREATEPRODUCT,
			element:
				user?.role === 'admin' ? (
					<Admin {...props} />
				) : (
					<Navigate to={PATHS.LOGINPAGE} replace />
				),
		},
	]
}

export default routes
