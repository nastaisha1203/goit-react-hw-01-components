import PropTypes from 'prop-types';
import {
  Section,
  StatisticItem,
  StatisticLabel,
  StatisticList,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <StatisticLabel>{label}</StatisticLabel>
            <span>{percentage}%</span>
          </StatisticItem>
        ))}
      </StatisticList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
