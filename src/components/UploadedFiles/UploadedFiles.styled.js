import styled from 'styled-components';

export const FilesContainer = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 6px;
`;

export const TableProp = styled.h4`
  margin-bottom: 4px;
  text-decoration: underline;
`;

export const TableVal = styled.h5`
  margin-bottom: 4px;
  word-wrap: break-word;
  word-break: break-all;
`;

export const GridTable = styled.div`
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  // > ${TableVal}:nth-child(n+6), ${TableVal}:nth-child(-n+10) {
  //   background-color: lightgreen;
  // }
`;

export const TableLink = styled.a``;
