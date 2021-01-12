import React from "react"
import styled from "styled-components"
import SortOutTool from "./sortList"
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const Container = styled.div`
    display: flex;
`;

const ClearAll = styled.button`
    border: none;
    background-color: transparent;
`;

const Tools = ({onClear, sortTheList, sortOrder}) => (
    <Container>
        <SortOutTool sortTheList={sortTheList} sortOrder={sortOrder}/>
        <ClearAll onClick={onClear}>
            <DeleteTwoToneIcon/>
        </ClearAll>
    </Container>
)

export default Tools;