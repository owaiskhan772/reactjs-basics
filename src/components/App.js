import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Header } from './Header';
import { Home } from './Home';

class App extends Component {
	constructor() {
		super();
		this.state = {
			homeLink: "Home",
			homeMounted: true
		};
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	onGreet() {
			alert("Hello! This function is passed from parent component(App) to child component(Home)");
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

  render() {
		let user = {
			name: "Owais Khan",
			hobbies: ["Sports", "Computer Games", "Cooking", "Programming"]
		};

		let homeComp = "";
		if(this.state.homeMounted)
		{
			homeComp = <Home
										name={"Owais"}
										initialAge={26}
										user={user}
										greet={this.onGreet}
										changeLink={this.onChangeLinkName.bind(this)}
										initialLinkName={this.state.homeLink}
								>
								<p>This paragraph is passed as children from main component and will be accessed as "this.props.children"</p>
								</Home>;
		}

    return (
      <div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink}/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{homeComp}
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
					</div>
				</div>

      </div>
    );
  }
}
export default App;
