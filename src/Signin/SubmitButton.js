import React from 'react';
import './Signin.css'

   class submitButton extends React.Component {
        render(){
            return (
                <div className="submitButton">
                    <button 
                    	className='btn'
                    	disabled={this.props.disabled}
                    	onClick={ () => this.props.onClick()}
                    >
                    	  {this.props.text }

                    </button>
                </div>
            );
    }
}
export default submitButton;
