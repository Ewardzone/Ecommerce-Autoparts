import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background-color: rgba(58, 170, 223, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem 0.6rem 4rem;
`;

export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a {
        padding: 1rem 1.5rem;
    }

    a:first-child {
        background: var(--blue-bg);
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`

export const LinkContainerStyled = styled.div`
    font-size: 1.2rem;
    color: ${props => (props.home ? "#3BBD34" : "#2A3797")};
`

export const CartNavStyled = styled.div`
    position: relative;
    cursor: pointer;

    span {
        position: absolute;
        background: var(--orange);
        height: 20px;
        width: 20px;
        text-align: center;
        border-radius: 1rem;
        border: 1px solid white;
        top: 0;
        color: white;
        font-size: 1rem;
    }
`
export const UserNavStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    span {
        color: white;
        font-size: 1rem;
        margin-right: 20px;
    }
`