import styles from "../styles/Result.module.css";
import data from "../assets/data.json";
import { useMemo } from "react";

function Result() {
  const sum = useMemo(() => {
    return data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.score;
    }, 0);
  }, [data]);

  const average = useMemo(() => {
    return Math.round(sum / data.length);
  }, [sum, data.length]);

  return (
    <div className={styles.resultMainBox}>
      <h1 className={styles.resultMainHeader}>Your Result</h1>
      <div className={styles.circle}>
        <p className={styles.circleHeader}>{average}</p>
        <p className={styles.circleContent}>of 100</p>
      </div>
      <div className={styles.resultMessage}>
        <p className={styles.resultHeader}>Great</p>
        <p className={styles.resultFooter}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Result;
