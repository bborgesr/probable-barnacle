import React from "react";

class Header extends React.Component {
  render() {
    return (
      <h1
        className="header"
        style={{ color: Math.random() < 0.5 ? "limegreen" : "green" }}
      >
        {this.props.title}
      </h1>
    );
  }
}

// function Header({title}) {
//   return (
//     <div className="header">
//       {title}
//     </div>
//   );
// }

export default Header;
