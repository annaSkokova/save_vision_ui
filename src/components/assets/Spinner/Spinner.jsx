import * as React from "react";
import {BounceLoader} from "react-spinners";
import styles from "./Spinner.module.scss";


const Spinner = () => {
  return (
    <>
      <div className={styles.spinner}>
        <BounceLoader color={"white"}/>
      </div>
    </>
  );
}

export default Spinner