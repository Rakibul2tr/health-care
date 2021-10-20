
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Abouts from './Components/AboutPage/Abouts';
import Footer from './Components/Footer/Footer';
import BannerSlide from './Components/HomePage/Carousel/BannerSlide';
import Menubar from './Components/HomePage/Headers/Menubar';
import Login from './Components/LoginForm/Login';
import Signup from './Components/LoginForm/Signup';
import NotFound from './Components/NotFound/NotFound';
import Allservice from './Components/ServicePage/Allservice';
import ServiceDetails from './Components/ServicePage/ServiceDetails';
import Services from './Components/ServicePage/Services';
import Teams from './Components/Teams/Teams';
import ContextProvider from './ContextApi/ContextProvider';
import PraivatRout from './PraivetRout/PraivatRout';


function App() {
  return (
    <div className="bodycolor">
      <ContextProvider>
        <Router>
            <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
                <BannerSlide></BannerSlide>
                <Services></Services>
                <Abouts></Abouts>
                <Teams></Teams>
            </Route>
            <Route exact path="/home">
                <BannerSlide></BannerSlide>
                <Services></Services>
                <Abouts></Abouts>
                <Teams></Teams>
            </Route>
            <Route exact path="/about">
                <Abouts></Abouts>
            </Route>
            <Route exact path="/teams">
                <Teams></Teams>
            </Route>
            <PraivatRout exact path="/service">
              <Allservice></Allservice>
            </PraivatRout>
            <PraivatRout exact path="/service/:detailId">
              <ServiceDetails></ServiceDetails>
            </PraivatRout>
            <Route exact path="/login">
                <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
              <Footer></Footer>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
