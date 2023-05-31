// Install ES7+ extension in vs code
// Type rafce (react arrow function export component), this will automatically set up the function for you

import { ReactNode } from "react";

interface Props {
  // text: string;
  // children: string;
  children: ReactNode;
  buttonOnClick: () => void;
}
// By changing the variable name to children, you can treat the component as a HTML tag
// Ex: <Alert>Warning, be careful!</Alert>
// And changing the type of the variable to ReactNode allows you to out HTML tag within the component
// Ex: <Alert> <b>Warning</b>, be careful!</Alert>

const Alert = ({ children, buttonOnClick }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={buttonOnClick}
      ></button>
    </div>
  );
};

export default Alert;
