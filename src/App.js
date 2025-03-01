import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import News from './components/News';
import Alerts from './components/Alerts';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

export default class App extends Component {
  
  state = {
    progress: 0,
    mode: 'light',
    alert: null,
    country: 'in'
  }

  setProgress = (prg) => {
    this.setState({ progress: prg });
  }

  handleOnDropDownChange = (value) => {
    this.setState({ country: value });
  }

  showAlert = (st, msg) => {
    this.setState({ alert: { st, msg } });
    setTimeout(() => this.setState({ alert: null }), 1500);
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#02071e';
      document.body.style.color = 'white';
      this.showAlert('success', 'Dark theme enabled.');
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      this.showAlert('success', 'Light theme enabled.');
    }
  }

  pageSize = 6;

  render() {
    return (
      <>      
        <Router>
          <LoadingBar color='#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} height={3} />
          
          <header className='position-sticky top-0' style={{ zIndex: '100' }}>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} onDropDownChange={this.handleOnDropDownChange} />
          </header>

          <Alerts alert={this.state.alert} />

          {/* ✅ Wrap all routes inside ONE <Routes> block */}
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key='general' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='general' />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='entertainment' />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key='sports' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='sports' />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} key='business' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='business' />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key='technology' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='technology' />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} key='science' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='science' />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} key='health' mode={this.state.mode} pageSize={this.pageSize} country={this.state.country} category='health' />} />
          </Routes>

          <Footer />
        </Router>
      </>
    )
  }
}
