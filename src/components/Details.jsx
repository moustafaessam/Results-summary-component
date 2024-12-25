import styles from "../styles/Details.module.css";

function Details({ children }) {
  return (
    <div className={styles.summaryBox}>
      <div className={styles.detailsSummary}>Summary</div>
      <div>{children}</div>
      <butto className={styles.continueButton}>Continue</butto>
    </div>
  );
}

export default Details;
