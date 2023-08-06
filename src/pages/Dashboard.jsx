import { useState, useMemo } from "react";

// Data
import mockData from "../assets/data.json";
// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [filteredRows, setFilteredRows] = useState(mockData.results);
  const handleRowSelect = (rowData) => {
    setSelectedOrderDetails(rowData.executionDetails);
    setSelectedOrderTimeStamps(rowData.timestamps);
  };

  useMemo(() => {
    if (searchText) {
      const filteredData = mockData.results.filter((row) =>
        row["&id"].toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRows(filteredData);
    } else {
      setFilteredRows(mockData.results);
    }
  }, [searchText]);

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={
            searchText
              ? `${filteredRows.length} orders (filtered)`
              : `${mockData.results.length} orders`
          }
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={[
              "AUD",
              "BGN",
              "BRL",
              "CAD",
              "CHF",
              "CNY",
              "CZK",
              "DKK",
              "EUR",
              "GBP",
              "HKD",
              "HRK",
              "HUF",
              "IDR",
              "ILS",
              "INR",
              "JPY",
              "KRW",
              "MXN",
              "MYR",
              "NOK",
              "NZD",
              "PHP",
              "PLN",
              "RON",
              "SEK",
              "SGD",
              "THB",
              "TRY",
              "USD",
              "ZAR",
            ]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order TimeStamps"
          />
        </div>
        <List rows={filteredRows} cur={currency} onSelect={handleRowSelect} />
      </div>
    </div>
  );
};

export default Dashboard;
