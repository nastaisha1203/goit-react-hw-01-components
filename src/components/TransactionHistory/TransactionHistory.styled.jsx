import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  border-collapse: collapse;
  width: 80%;
  /* border: 1px solid #2a2a2a; */
`;
export const Header = styled.thead`
  background-color: #36cdb6;
  /* color: white;
  border: 1px solid #868282; */
`;

export const TableHeader = styled.th`
  color: white;
  padding: 10px;
  border: 1px solid #868282;
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #868282;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #eae5dd;
  }
`;
