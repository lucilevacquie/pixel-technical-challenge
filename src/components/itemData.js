import React from "react"
import styled from "styled-components"
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

const Container = styled.div`
    display: flex;
    margin: 0.5rem;
`;

const Button = styled.button`
    margin: 0.5rem;
    border: none;
    background-color: transparent;
`;

const ItemWrapper = styled.div``;

const Name = styled.div``;

const Email = styled.div`
    color: blue;
`;

const ItemData = ({item, onChecked}) => {
    return(
        <Container>
            <Button name="contact" onClick={() => onChecked(item)}>
                <AddCircleTwoToneIcon/>
            </Button>
            <ItemWrapper>            
                <Name>{item.name}</Name>
                <Email>{item.email}</Email>
            </ItemWrapper>
        </Container>
    )
}

export default ItemData;