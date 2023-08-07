import React, { useState } from "react";

import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, timestamps, selectedCurrency }) => {

  const exchangeRates = {
    USD: 1,
    GBP: 0.73,
    JPY: 110.5,
    EUR: 0.85, 
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = rows.filter((row) =>
    row["&id"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader setSearchQuery={setSearchQuery}>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <ListRow key={row["&id"]}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {timestamps[index]?.timestamps.orderSubmitted || "N/A"}
            </ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume.USD * exchangeRates[selectedCurrency]} {selectedCurrency}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;