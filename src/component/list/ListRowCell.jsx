import styles from "./ListRowCell.module.css";

const ListRowCell = ({ children }) => {
  return <td className={styles.cell}>{children}</td>;
};

export default ListRowCell;
