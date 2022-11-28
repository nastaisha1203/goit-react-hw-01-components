import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
  color: grey;
`;

export const StatisticList = styled.ul`
  display: flex;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 4);
  padding: 8px 15px;
  color: white;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const StatisticLabel = styled.span`
  margin-bottom: 8px;
`;
