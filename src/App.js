import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Testimonials from './components/Testimonials'
import ReviewCard from './components/ReviewCard';
import reviews from './review_data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       	<Navbar/>
		    <Splash/>
        <Testimonials/>
    		<div className = "container">
    			<div className="row">

          </div>
    		</div>
    </div>
    );
  }
}

export default App;
