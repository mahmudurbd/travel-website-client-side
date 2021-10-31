// import logo from './logo.svg';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddPackage from './Pages/AddPackage/AddPackage';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
 import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/booking/:bookingId'>
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/myorders'>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path='/addpackage'>
                <AddPackage></AddPackage>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
