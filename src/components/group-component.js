import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./group-component.module.css";

const GroupComponent = ({
  className = "",
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propGap,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.featureIconsFirstRow}>
        <div className={styles.featureIconsFirstPair}>
          <img
            className={styles.groupsBlack24dp11}
            loading="lazy"
            alt=""
            src={groupsBlack24dp11}
          />
          <div className={styles.firstRowLabels}>
            <h2 className={styles.people}>{people}</h2>
          </div>
        </div>
        <div className={styles.findATeacher}>{findATeacherCoachOrExpert}</div>
      </div>
      <button className={styles.navLabel}>
        <div className={styles.connect}>{connect}</div>
      </button>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  groupsBlack24dp11: PropTypes.string,
  people: PropTypes.string,
  findATeacherCoachOrExpert: PropTypes.string,
  connect: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default GroupComponent;