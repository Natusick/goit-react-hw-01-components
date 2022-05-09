import PropTypes from "prop-types";
import getRandomHexColor from "./getRandomHexColor";
import s from "./Statistics.module.css";

const Statistics = ({ title = "", data }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}> {title} </h2>
      {/* {title && <h2  class =" title "> {title} </h2>} */}
      <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
