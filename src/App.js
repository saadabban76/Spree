import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ElectronicsPage from './Components/ElectronicsPage';
import FashionPage from './Components/FashionPage';
import ProductDetails from './Components/ProductDetails';
import CartFunctionality from './Actions/CartFunctionality';
import CheckoutFunctionality from './Actions/checkout/CheckoutFunctionality';
import LoginFunctionality from './Actions/LoginFunctionality';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS  >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path='/electronics'>
              <Navbar h1title={'Enjoy a save shopping experience this holiday season .'} h1description={'shop with us to avail exciting prizes !'} />
              <ElectronicsPage />
          </Route>
          <Route path='/fashion'>
          <Navbar h1title={'Enjoy a save shopping experience this holiday season .'} h1description={'shop with us to avail exciting prizes !'} />
            <FashionPage />
          </Route>
          <Route path='/productDetails/:id'>
            <Navbar />
            <ProductDetails />
          </Route>
          <Route path='/login'>
            <LoginFunctionality />
          </Route>
          <Route path='/cart' >
          <Navbar h1title={'Enjoy a save shopping experience this holiday season .'} h1description={'shop with us to avail exciting prizes !'} />
            <CartFunctionality />
          </Route>
          <Route path='/checkout'>
            <Navbar h1title={'Enjoy a save shopping experience this holiday season .'} h1description={'shop with us to avail exciting prizes !'} />
            <CheckoutFunctionality />
          </Route>
          <Route path='/'>
              <Navbar h1title={'Enjoy a save shopping experience this holiday season .'} h1description={'shop with us to avail exciting prizes !'} />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
