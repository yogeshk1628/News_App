import React, { Component } from 'react'
import { Link} from 'react-router-dom';

export class Navbar extends Component {

    handleCountryChange = (e) => {
        this.props.onDropDownChange(e.target.value);
    }
  render() {
    let {mode, toggleMode} = this.props;

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode === 'light'?'dark':'light'} bg-${mode === 'light'?'dark':'light'}`} style={{transition: '0.5s'}}>
            <a className="navbar-brand mx-3" href="/">NewZ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center justify-content-center mx-4">
                <div className="mx-2">
                    <select className="form-select" aria-label="Default select example" style={{backgroundColor: 'transparent', color: mode==='light'?'white':'black', border: `solid 1px ${mode==='light'?'#ffffff80':'#0000006e'}`}} onChange={this.handleCountryChange}>
                        <option value='in' style={{backgroundColor: 'white', color: 'black'}}>India</option>
                        <option value="us" style={{backgroundColor: 'white', color: 'black'}}>USA</option>
                        <option value="ru" style={{backgroundColor: 'white', color: 'black'}}>Russia</option>
                        <option value="au" style={{backgroundColor: 'white', color: 'black'}}>Australia</option>
                    </select>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
                    <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault" style={{color: mode==='light'?'white':'black'}}>Dark Theme</label>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
