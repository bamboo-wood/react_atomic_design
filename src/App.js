import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

function App() {
  const user = {
    name: "Taro",
    image: "https://picsum.photos/200/300",
    email: "cantate.1234.1234@gmail.com",
    phone: "090-1234-1234",
    company: {
      name: "1234Company",
    },
    website: "1234.com",
  };

  return (
    <div className="App">
      <PrimaryButton>PrimaryButton</PrimaryButton>
      <br />
      <SecondaryButton>SecondaryButton</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
