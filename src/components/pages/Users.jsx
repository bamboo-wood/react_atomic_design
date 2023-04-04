import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Taro${val}`,
    image: "https://picsum.photos/200/300",
    email: "email@gmail.com",
    phone: "090-1234-1234",
    company: {
      name: "1234Company",
    },
    website: "1234.com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput></SearchInput>

      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;