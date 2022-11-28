import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendCard, Friends } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendCard>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
