import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(71vh - 103px);
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;
  & p {
    margin-bottom: 50px;
  }
`;

export const PatternStyled = styled.img`
  width: 100%;
  position: fixed;
  bottom: -80px;
  opacity: 0.2;
`;