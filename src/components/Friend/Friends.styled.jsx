import styled from 'styled-components';

export const Friends = styled.ul`
  margin-bottom: 20px;
`;

export const FriendCard = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const FriendItem = styled.div`
  width: 200px;
  padding: 5px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')}; ;
`;
