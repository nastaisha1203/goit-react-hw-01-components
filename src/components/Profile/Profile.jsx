import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Description,
  Label,
  Name,
  Quantity,
  StatsItem,
  StatsList,
  UserTag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const keys = Object.keys(stats);
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="120" />
        <Name>{username}</Name>
        <UserTag>@{tag}</UserTag>
        <p>{location}</p>
      </Description>
      <StatsList>
        {keys.map(element => {
          return (
            <StatsItem key={stats[element]}>
              <Label>{element}</Label>
              <Quantity>{stats[element]}</Quantity>
            </StatsItem>
          );
        })}
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
