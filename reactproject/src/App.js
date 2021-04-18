import React from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch,Route,Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Service from './Service';
import News from './News';
import Team from './Team';
class App extends React.Component{
  render(){
    return(
    <div className="_0123">
            <section id="topbar" className="d-none d-lg-block">
                    <Topbar/>
            </section>
          <header id="header">
            <Header/>
          </header>

            <Switch>
                <Route path="/contact" component={Contact} exact/>
                <Route path='/home' component={Home} exact/>
                <Route path='/about' component={About} exact />
                <Route path='/service' component={Service} exact />
                <Route path='/news' component={News} exact />
                <Route path='/member' component={Team} exact />
            </Switch>

      <footer id="footer">
        <Footer/>
      </footer>
    </div>
    
      
    
    );
  }
}

export default App;
