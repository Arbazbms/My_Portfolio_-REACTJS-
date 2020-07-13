import React, { Component } from "react";
import Roll from "react-reveal/Roll";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <Roll left>
          <br />
          <br />
          <h5>Designed & Developed By </h5>
          <h5>Arbaz Ahmed</h5>
          <h5>&copy; 2020</h5>
        </Roll>
      </div>
    );
  }
}

export default Footer;
