import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    margin: 0.5rem;
`;

const Button = styled.button`
    margin: 0.5rem;
    border: none;
    background-color: transparent;
`;

const Email = styled.div`
    color: blue;
`;

const ItemData = ({item, onClickButton, buttonIcon}) => (
    <Container>
        <Button name="contact" onClick={() => onClickButton(item)}>
            {buttonIcon}
        </Button>
        <div>            
            <div>{item.name}</div>
            <Email>{item.email}</Email>
        </div>
    </Container>
)

export default ItemData;