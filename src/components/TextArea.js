import styles from "./TextArea.module.css";

const TextArea = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.tabsParent}>
        <div className={styles.tabs}>
          <div className={styles.notes}>
            <div className={styles.notes1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.email}>Notes</div>
          </div>
          <div className={styles.activityTab}>
            <div className={styles.notes1}>
              <img
                className={styles.notes1Child}
                alt=""
                src="/group-1000000930.svg"
              />
            </div>
            <div className={styles.activity}>Activity</div>
          </div>
          <div className={styles.call}>
            <div className={styles.notes12}>
              <img
                className={styles.iconlylightcall}
                alt=""
                src="/iconlylightcall1.svg"
              />
            </div>
            <div className={styles.email}>Call</div>
          </div>
          <div className={styles.call}>
            <div className={styles.notes13}>
              <img className={styles.mailIcon} alt="" src="/mail.svg" />
            </div>
            <div className={styles.email}>Email</div>
          </div>
        </div>
        <div className={styles.vendorReport}>
          <div className={styles.activity}>Vendor Report</div>
          <img
            className={styles.iconlyboldarrowDown3}
            alt=""
            src="/iconlyboldarrow--down-3.svg"
          />
        </div>
      </div>
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> */}
      <div className={styles.frameGroup}>
        <div className={styles.timeWrapper}>
          <img className={styles.timeIcon} alt="" src="/time.svg" />
        </div>
        <div className={styles.inputFeild}>
          <div className={styles.activity}>22 Oct 2022</div>
        </div>
        <div className={styles.inputFeild1}>
          <div className={styles.activity}>h:mm PM</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.activity}>-</div>
        </div>
        <div className={styles.inputFeild1}>
          <div className={styles.activity}>h:mm PM</div>
        </div>
        <div className={styles.date}>
          <div className={styles.activity}>22 Oct 2022</div>
        </div>
        <div className={styles.externalWrapper}>
          <div className={styles.external}>#External</div>
        </div>
        <div className={styles.insertTemplate}>
          <div className={styles.activity}>+ Insert Template Text</div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
