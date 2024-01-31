import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Button_modular from "./Button_modular/Button_modular.jsx";
import Button_inline from "./Button_inline.jsx";

/* External - can have a lot naming conflicts */
/* Modular */
/* Inline style - useful small isolated components with little styling */

function App() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Button_modular />
      <Button_inline />
    </>
  );
}

export default App;
