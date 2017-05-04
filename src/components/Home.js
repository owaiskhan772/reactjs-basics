import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      status: 0,
      age: props.initialAge,
      homeLink: props.initialLinkName
    };

    setTimeout(() => {
      this.setState({
        status: 1
      });
    },2000);
    console.log("Home component constructor called.");
  }

  //Demonastration of Component Lifecycle
  componentWillMount() {
    console.log("componentWillMount called: immediately before initial rendering.");
  }

  componentDidMount() {
    console.log("componentDidMount called: immediately after initial rendering.");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps called: when component receive new props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called: before rendering, after receiving new props or state", nextProps, nextState);
    return true; //return false to prevent rendering!
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate called: before rendering, after receiving new props or state", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called: after component's updates are flushed to DOM", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called: immediately before removing component from DOM");
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  makeMeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  render() {
    return (
      <div>
        <p>Your name is: {this.props.name} and your age is: {this.state.age}</p>
        <button onClick={this.makeMeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.props.greet} className="btn btn-primary">Greet Func from Parent</button>
        &nbsp;&nbsp;&nbsp;
        <input type="text"
               value={this.state.homeLink}
               onChange={(event) => this.onHandleChange(event)}
        /> &nbsp;&nbsp;&nbsp;
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
        <hr/>
        <h2>Other User</h2>
        <p>Other User name is: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>) }
          </ul>
        </div>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}

//PropTypes are used for adding restrictions or validation on props
Home.PropTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
}
