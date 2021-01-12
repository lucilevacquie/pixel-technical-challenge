import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    margin: 0.5rem;
    align-items: center;
`;

const DeleteButton = styled.button`
    margin: 0.5rem;
`;

const Text = styled.div``;

const ItemMyList = ({item, onDelete}) => {
    return(
        <Container>
            <DeleteButton onClick={e => onDelete(item)}>X</DeleteButton>
            <Text>{item.name}</Text>
        </Container>
    )
}

export default ItemMyList;