import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AutheProvider from "./components/context/AutheProvider";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";

function App() {
    return (
        <div>
            <AutheProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Shop></Shop>
                        </Route>
                        <Route path="/shop">
                            <Shop></Shop>
                        </Route>
                        <Route path="/review">
                            <OrderReview></OrderReview>
                        </Route>
                        <Route path="/inventory">
                            <Inventory></Inventory>
                        </Route>
                        <PrivateRoute path="/placeorder">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>
                        <PrivateRoute path="/shipping">
                            <Shipping></Shipping>
                        </PrivateRoute>

                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </AutheProvider>
        </div>
    );
}

export default App;
