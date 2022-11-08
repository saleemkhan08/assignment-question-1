import styles from "./HeaderTitle.module.css";

const HeaderTitle = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className={styles.container}>
      <h1>{primaryTitle}</h1>
      <div>{secondaryTitle}</div>
    </div>
  );
};

export default HeaderTitle;
