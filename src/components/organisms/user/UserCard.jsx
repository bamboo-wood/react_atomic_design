import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";

export const UserCard = memo((props) => {
  console.log("UserCard");
  const { user } = props;

  return (
    <Card>
      <UserIconWithName name={user.name} image={user.image} />
      <SDL>
        <dt>Email</dt>
        <dd>{user.email}</dd>

        <dt>Phone</dt>
        <dd>{user.phone}</dd>

        <dt>Company</dt>
        <dd>{user.company.name}</dd>

        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
});

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
