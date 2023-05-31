import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
  onClick: () => void;
}
// Adding a question mark behind the the variable name 'color' tells the typescript compiler that this property is optional
// Without the question mark, it will cause an error in the App.tsx file, saying the Button component is missing a parameter
// By setting the value of color to a set of predetermined value prevents users from passing an invalid argument to the color parameter

const Button = ({ children, onClick, color="primary"}: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
    </button> 
  ); 
};

export default Button;
