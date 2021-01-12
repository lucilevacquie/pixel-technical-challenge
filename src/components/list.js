import React from "react"
import styled from "styled-components"
import ListItem from "./itemData"

const Container = styled.div`
  box-sizing: border-box;
  border: solid black 2px;
  background-color:${(props) => props.color};
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h2`
  padding-left: 15px;
`;

const ListComponent = ({ title, toolbar, data, onClickButton, buttonIcon, color }) => (
    <Container color={color}>
        <ListHeader>
            <Title>{title}</Title>
            {toolbar}
        </ListHeader>
        <div>
            {data.map(item =>
                <ListItem key={item.name} item={item} onClickButton={onClickButton} buttonIcon={buttonIcon} />
            )}
        </div>
    </Container>
)

export default ListComponent;