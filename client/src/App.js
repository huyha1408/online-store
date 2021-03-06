// React-router-dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import SigninPage from './pages/SigninPage';
import ProfilePage from './pages/ProfilePage';
import OrderPage from './pages/OrderPage';
import ListUserPage from './pages/ListUserPage';
import ListProductPage from './pages/ListProductPage';
import ListOrderPage from './pages/ListOrderPage';
import UserEditPage from './pages/UserEditPage';
import ProductEditPage from './pages/ProductEditPage';

//Import provider
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import { OrderProvider } from './contexts/OrderContext';
import { PaymentProvider } from './contexts/PaymentContext';

function App() {
    return (
        <Router>
            <UserProvider>
                <ProductProvider>
                    <div className='bg-white'>
                        <CartProvider>
                            <OrderProvider>
                                <PaymentProvider>
                                    <Header />
                                    <Cart />
                                    <Route
                                        path='/'
                                        component={HomePage}
                                        exact
                                    />
                                    <Route
                                        path='/search/:keyword'
                                        component={HomePage}
                                        exact
                                    />
                                    <Route
                                        path='/page/:pageNumber'
                                        component={HomePage}
                                        exact
                                    />
                                    <Route
                                        path='/search/:keyword/page/:pageNumber'
                                        component={HomePage}
                                        exact
                                    />
                                    <Route
                                        path='/login'
                                        component={SigninPage}
                                        exact
                                    />
                                    <Route
                                        path='/profile'
                                        component={ProfilePage}
                                    />
                                    <Route
                                        path='/product/:id'
                                        component={ProductPage}
                                    />
                                    <Route
                                        path='/checkout/:id?'
                                        component={CheckoutPage}
                                    />
                                    <Route
                                        path='/order/:id'
                                        component={OrderPage}
                                    />
                                    <Route
                                        exact
                                        path='/admin/users'
                                        component={ListUserPage}
                                    />
                                    <Route
                                        exact
                                        path='/admin/user/:id/edit'
                                        component={UserEditPage}
                                    />
                                    <Route
                                        exact
                                        path='/admin/product/:id/edit'
                                        component={ProductEditPage}
                                    />
                                    <Route
                                        exact
                                        path='/admin/products'
                                        component={ListProductPage}
                                    />
                                    <Route
                                        exact
                                        path='/admin/products/:pageNumber'
                                        component={ListProductPage}
                                    />
                                    <Route
                                        exact
                                        path='/admin/orders'
                                        component={ListOrderPage}
                                    />
                                </PaymentProvider>
                            </OrderProvider>
                        </CartProvider>

                        <Footer />
                    </div>
                </ProductProvider>
            </UserProvider>
        </Router>
    );
}

export default App;
