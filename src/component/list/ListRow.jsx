import styles from "./ListRow.module.css";

const ListCell = ({ children, onSelect, row }) => {
  return (
    <tr onClick={() => onSelect(row)} className={styles.cell}>
      {children}
    </tr>
  );
};

export default ListCell;
