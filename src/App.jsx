import React from "react";
import Profile from "./components/social-profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import Container from "./components/container/Container";
import TransactionHistory from "./components/transaction-history/TransactionHistory";

export const App = ({ data }) => {
  return (
    <Container>
      <Profile {...data.user} />
      <Statistics title="Upload stats" data={data.statistics} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </Container>
  );
};
