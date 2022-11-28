import styled from 'styled-components';

export const Card = styled.div`
  width: 280px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const Description = styled.div`
  background-color: white;
  padding: 18px;
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Avatar = styled.img`
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const UserTag = styled.p`
  margin-bottom: 6px;
`;

export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  border-top: 1px solid #7d4949;
  background-color: #dea2a2;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  &:not(:last-child) {
    border-right: 1px solid #7d4949;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
