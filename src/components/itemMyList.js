import React from "react"
import styled from "styled-components"
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

const Container = styled.div`
    display:flex;
    margin: 0.5rem;
    align-items: center;
`;

const DeleteButton = styled.button`
    margin: 0.5rem;
    border: none;
    background-color: transparent;
`;

const Text = styled.div``;

const ItemMyList = ({item, onDelete}) => {
    return(
        <Container>
            <DeleteButton onClick={e => onDelete(item)}>
                <HighlightOffTwoToneIcon/>
            </DeleteButton>
            <Text>{item.name}</Text>
        </Container>
    )
}

export default ItemMyList;