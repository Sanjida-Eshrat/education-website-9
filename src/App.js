
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllCourseContainer from './components/AllCourseContainer/AllCourseContainer';
import CourseContainer from './components/CourseContainer/CourseContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import TopBanner from './components/TopBanner/TopBanner';
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          
          {/* Redirect to Home page */}
          <Route exact path ="/">
            <TopBanner></TopBanner>
            <About></About>
            <CourseContainer></CourseContainer>
          </Route>

          {/* Redirect to Home page */}
          <Route path ="/home">
            <TopBanner></TopBanner>
            <About></About>
            <CourseContainer></CourseContainer>
          </Route>

          {/* Redirect to About page */}
          <Route path ="/about">
            <About></About>
          </Route>

          {/* Redirect to Courses page */}
          <Route path ="/courses">
            <h2 className="text-center mt-5 pt-5">Available Courses</h2>
            <AllCourseContainer></AllCourseContainer>
          </Route>

          {/* Redirect to Courses page */}
          <Route path ="/contact">
            <ContactUs></ContactUs>
          </Route>

          {/* Redirect to Not Found page */}
          <Route path ="*">
            <NotFound></NotFound>
          </Route>

        </Switch> 
        <Footer></Footer>
        
      </Router>
    </div>
  );
}

export default App;
