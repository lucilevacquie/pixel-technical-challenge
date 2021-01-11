import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Checkbox = styled.input``;

const ItemWrapper = styled.div``;

const Name = styled.div``;

const Email = styled.div``;

const ItemData = ({item}) => {
    return(
        <Container>
            <Checkbox type="checkbox"></Checkbox>
            <ItemWrapper>            
                <Name>{item.name}</Name>
                <Email>{item.email}</Email>
            </ItemWrapper>
        </Container>
    )
}

export default ItemData;