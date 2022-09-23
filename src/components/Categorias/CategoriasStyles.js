import styled from "styled-components";
import {motion} from 'framer-motion'

export const CategoriasContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    align-items: center;
    user-select: none;
`
export const CardCategoria = styled(motion.div)`
    background-color: ${({ selected }) => selected ? 'var(--skyblue)' : 'var(--gray-bg)'};
    width: 15vw;
    height: 17vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0.5rem;
    gap: 0.5rem;
    cursor: pointer;

    h2 {
        font-size: 1rem;
    }

    img {
        width: 60px;
        padding-top: 7px;
        padding-bottom: 7px;
    }

`

export const BorderDecoration = styled.div`
    height: 5px;
    width: 30%;
    background: var(--btn-gradient);
    border-radius: 15px;
`