import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <br />
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
