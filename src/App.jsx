import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Button_modular from "./Button_modular/Button_modular.jsx";
import Button_inline from "./Button_inline.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ClickableButton from "./ClickableButton.jsx";
import ProfilePicture from "./ProfilePicture.jsx";

/* External - can have a lot naming conflicts */
/* Modular */
/* Inline style - useful small isolated components with little styling */

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 150 },
    { id: 2, name: "Orange", calories: 223 },
    { id: 3, name: "Banana", calories: 79 },
    { id: 4, name: "Pineapple", calories: 187 },
    { id: 5, name: "Coconut", calories: 248 },
    { id: 6, name: "Watermelon", calories: 209 },
    { id: 7, name: "Pear", calories: 96 },
    { id: 8, name: "Clementine", calories: 67 },
    { id: 9, name: "Kiwi", calories: 23 },
    { id: 10, name: "Papaya", calories: 450 },
    { id: 11, name: "Kaki", calories: 118 },
    { id: 12, name: "Wine", calories: 100 },
  ];

  const vegetables = [
    { id: 13, name: "Potato", calories: 50 },
    { id: 14, name: "Carrot", calories: 23 },
    { id: 15, name: "Onion", calories: 9 },
    { id: 16, name: "Peas", calories: 87 },
    { id: 17, name: "Beans", calories: 48 },
    { id: 18, name: "Garlic", calories: 9 },
  ];

  return (
    <>
      <UserGreeting isLoggedIn={true} username="DavidSzotek" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Button_modular />
      <Button_inline />
      <ClickableButton />
      <ProfilePicture />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={40} isStudent={false} />
      <Student name="Mr.Crabs" age={50} isStudent={true} />
      <Student />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
    </>
  );
}

export default App;
