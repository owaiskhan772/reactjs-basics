import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Header } from './Header';
import { Home } from './Home';

class App extends Component {
	onGreet() {
			alert("Hello! This function is passed from parent component(App) to child component(Home)");
	}

  render() {
		let user = {
			name: "John Doe",
			hobbies: ["Sports", "Computer Games", "Cooking", "Programming"]
		};
    return (
      <div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink="Home"/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Owais"} initialAge={26} user={user} greet={this.onGreet}>
							<p>This paragraph is passed as children from main component and will be accessed as "this.props.children"</p>
						</Home>
					</div>
				</div>
      </div>
    );
  }
}
export default App;
