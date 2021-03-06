import {React, Component} from "react";
import './Login.css'
import {Button} from 'react-bootstrap'


class Login extends Component {

    render(){



        return(
            <div className="Login">
                <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fa fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email"/> 
				</div>
				<div className="login__field">
					<i className="login__icon fa fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"/> 
				</div>
				<button className="button login__submit">
					<span className="button__text"> Log In Now </span>
					<i className="button__icon fa fa-chevron-right"></i>
				</button>		
				<Button href="/Register" className="button login__submit">
					<span className="button__text"> Register</span>
					<i className="button__icon fa fa-chevron-right"></i>
				</Button>			
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="/" className="social-login__icon fa fa-instagram">.</a>
					<a href="/" className="social-login__icon fa fa-facebook">.</a>
					<a href="/" className="social-login__icon fa fa-twitter">.</a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
            </div>
        )
    }
}

export default Login