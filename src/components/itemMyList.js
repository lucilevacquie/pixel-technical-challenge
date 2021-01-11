import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
`;

const DeleteButton = styled.button``;

const Text = styled.div``;

const ItemMyList = ({item, onDelete}) => {
    return(
        <Container>
            <DeleteButton onClick={onDelete}>X</DeleteButton>
            <Text>{item.name}</Text>
        </Container>
    )
}

export default ItemMyList;