import { Component } from "react";


class Person extends Component {
  removePerson = () => {
    const { email } = this.props.person;
    alert(`Removed: ${email}`);
    this.props.onRemove(this.props.person);
  };

  render() {
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={this.removePerson}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
