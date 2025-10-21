import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/beraanik201");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.props;
    const { login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Github Login: {login}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: +91 7872450163</h4>
      </div>
    );
  }
}

export default UserClassComponent;
