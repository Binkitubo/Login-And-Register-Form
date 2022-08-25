import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
			<input type="checkbox" id="toggle" />
			<div className="signin">
				<h1 className="fw-bold">Sign In</h1>
				<form>
					<div className="social">
						<a href="#"><i className="fab fa-google-plus-g"></i></a>
						<a href="#"><i className="fab fa-facebook-f"></i></a>
						<a href="#"><i className="fab fa-linkedin-in"></i></a>
					</div>
					<p>Or enter your info</p>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<small>Forgot Password?</small>
					<input type="submit" value="Login" />
					<small>Don't have an account? <label for="toggle">Sign Up</label></small>
				</form>
			</div>
			
			<div className="signup">
				<h1 className="fw-bold">Create an account</h1>
				<form>
					<div className="social">
						<a href="#"><i className="fab fa-google-plus-g"></i></a>
						<a href="#"><i className="fab fa-facebook-f"></i></a>
						<a href="#"><i className="fab fa-linkedin-in"></i></a>
					</div>
					<p>Or enter your info</p>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Confirm Password" />
					<input type="submit" value="Create Account" />
					<small>Already have an account? <label for="toggle">Sign In</label></small>
				</form>
			</div>
		</div>
	);
};
