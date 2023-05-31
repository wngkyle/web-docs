import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

// To run the web server, type '$ npm run dev' in the terminal, and copy paste the url (localhost sth) on the browser

function App() {
  let items = [
    "Mercedes",
    "BMW",
    "Ford",
    "McLaren",
    "Honda",
    "Audi",
    "Volvo",
    "Renault",
    "Alfa Romeo",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setAlertVisibility(true);
  }

  const [alertVisibility, setAlertVisibility] = useState(false);

  const alertButtonOnClick = () => {
    setAlertVisibility(false);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Car Brands"
        onSelectItem={handleSelectItem}
      />
      {alertVisibility && <Alert buttonOnClick={alertButtonOnClick}>Warning!!!!</Alert>}
      <Button onClick={handleClick}>
        Test Button
      </Button>
    </div>
  );
}

export default App;
