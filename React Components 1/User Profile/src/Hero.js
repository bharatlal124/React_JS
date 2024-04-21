// Create component here to display the Basic information such as
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <>
        <p className="name">Name: Pranav sharad Yeole</p>
        <p>Email: pranav@google.com</p>
        <p>Phone: 67483677</p>
        <p>Address: ABC, xyz Street.</p>
      </>
    );
  }
}
export default Hero;
