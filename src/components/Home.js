import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: props.initialLinkName
    };
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
