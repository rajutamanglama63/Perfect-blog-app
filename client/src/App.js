import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getBlogs} from './redux/actions/blogAction';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import Home from './pages/home/Home';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';
import AuthHome from './pages/authHome/AuthHome';
import BlogForm from './pages/blogForm/BlogForm';
import Profile from './pages/authProfile/Profile';


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [currentId, dispatch]);

  return (
    <div>
      <Navbar click={() => setSideToggle(true)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/signin' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/authhome' render={(props) => <AuthHome {...props} currentId={currentId} setCurrentId={setCurrentId} />} />
        <Route exact path='/form' render={(props) => <BlogForm {...props} currentId={currentId} setCurrentId={setCurrentId} />}  />
      </Switch>
    </div>
  );
}

export default App;
