import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import user from "./components/social-profile/user.json";
import statistics from "./components/statistics/data.json";
import friends from "./components/friend-list/friends.json";
import transactions from "./components/transaction-history/transactions.json";
// import '/index.css';
// import 'modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={{ user, statistics, friends, transactions }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
