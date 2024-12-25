import styles from "../styles/Detail.module.css";

function Detail({ bgC, icon, name, value, color }) {
  return (
    <div
      style={{ color: color, backgroundColor: bgC }}
      className={styles.detailBox}
    >
      <div>
        <img src={icon} className={styles.detailIcon} />
        {name}
      </div>
      <div>
        <span className={styles.blackValue}>{value}</span>
        <span className={styles.greyValue}>/ 100</span>
      </div>
    </div>
  );
}

export default Detail;
