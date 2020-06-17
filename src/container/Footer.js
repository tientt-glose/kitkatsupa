import React, { Component} from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        
        return (
            <footer id="footer" className="dark">
                <div className="bottom-bar">
            <span style={{ marginRight: 12 }}>Make with <span role="img" aria-labelledby="double_heart">💕</span> by HI01. Enjoy!</span>
                </div>
            </footer>
            // <footer className="footer">
            //     <p>Some footer nonsense!</p>
            // </footer>
        );
    }
}

export default Footer;
