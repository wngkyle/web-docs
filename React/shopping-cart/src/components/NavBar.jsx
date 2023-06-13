import React, { Component } from "react";

// This is a stateless components
// In cases like this, we can just convert the component into a function 

// Since this is not a class, we cannot use this.props here
// So remember to pass 'props' in as parameter of function and remove 'this' from the code
// However, calling 'props.' everytime you want to access a property can be annoying
// So we use OBJECT DESTRUCTURING
// Instead of passing 'props' in the parameter, we pass in {property-name}, so {totalElement}
const NavBar = ({totalElement}) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid" style={{ fontSize: "25px" }}>
          Total number of items to be purchased:
          <span
            className="badge badge-pill badge-secondary m-3 center"
            style={{ fontSize: "25px" }}
          >
            {totalElement}
          </span>
        </div>
      </nav>
    </>
  );
}
 
// class NavBar extends Component {
//   render() {
//     return (
//       <>
//         <nav className="navbar bg-body-tertiary">
//           <div className="container-fluid" style={{ fontSize: "25px" }}>
//             Total number of items to be purchased:
//             <span
//               className="badge badge-pill badge-secondary m-3 center"
//               style={{ fontSize: "25px" }}
//             >
//               {this.props.totalElement}
//             </span>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

export default NavBar;
