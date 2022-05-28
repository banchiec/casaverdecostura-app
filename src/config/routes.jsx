import { Navigate } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import Shopping from "../pages/shopping/Shopping";
import Login from "../pages/LogIn"; 
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";  
import { Cart } from "../pages/cart-page/cart-page";
import Checkout from "../components/checkout/checkout";
import * as PATHS from "../utils/paths";
import Admin from "../pages/admin/Admin"
import { Details } from "../pages/details/Details";  
import { Favorites } from "../pages/favorites-page/favorites-page";  
import { AllCollections } from "../pages/AllCollections/AllCollections";
import { Search } from "../pages/search-page/search-page";  
import { SpringCollectionPage } from "../pages/spring-collection-page/SpringCollectionPage"; 
import { SummerCollectionPage } from "../pages/summer-collection-page/SummerCollectionPage";
import { WinterCollectionPage } from "../pages/winter-collection-page/WinterCollectionPage";
const routes = (props) => { 
  const { user } = props;
  return [ 
    {
      path: PATHS.COLLECTIONS,
      element: <AllCollections {...props} />,
    },  
    {
      path: PATHS.SUMMER,
      element: <SummerCollectionPage {...props} />,
    },  
   
    {
      path: PATHS.SPRING,
      element: <SpringCollectionPage {...props} />,
    },
    {
      path: PATHS.WINTER,
      element: <WinterCollectionPage {...props} />,
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
      path:  PATHS.DETAILS,
      element: <Details {...props} /> 
    }, 

    {
      path: PATHS.SHOPPING,
      element: <Shopping {...props}/>
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
      element: user?.role === 'admin' ?(
        <Admin {...props}/>
      ):(
        <Navigate to={PATHS.LOGINPAGE} replace />
      )
    },
    {
      path: PATHS.CREATEPRODUCT,
      element: user?.role === 'admin' ?(
        <Admin {...props}/>
      ):(
        <Navigate to={PATHS.LOGINPAGE} replace />
      )
    },
  ];
};

export default routes;
