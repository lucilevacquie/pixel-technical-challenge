import React from "react"
import styled from "styled-components"
import Arrow from "../assets/arrow-up.png"

const Container = styled.div``;

const Button = styled.button`
`;

const ArrowUp = styled.img`
    width: 20px;
`;

const ArrowDown = styled.img`
    width: 20px;
    transform: rotate(180deg);
`;

const SortList = ({sortTheList, clicked}) => {
    return(
        <Container>
            {clicked ? 
            (<Button onClick={sortTheList}><ArrowUp src={Arrow} alt="ascending"/></Button>):
            (<Button onClick={sortTheList}><ArrowDown src={Arrow} alt="descending"/></Button>)
            }
        </Container>
    )
}

export default SortList;