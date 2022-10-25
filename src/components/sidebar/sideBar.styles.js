import styled from "styled-components";

export const Aside = styled.aside`
  width: 14.375rem;
  background-color: ${(props) => props.theme.lightGray};
  padding: 0.3125rem;
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export const List = styled.section`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 90px));
  grid-auto-rows: 100px;
  flex: 1 1 auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
