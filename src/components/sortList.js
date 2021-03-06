import React from "react"
import styled from "styled-components"
import ArrowDropDownCircleTwoToneIcon from '@material-ui/icons/ArrowDropDownCircleTwoTone';

const Button = styled.button`
    border: none;
    background-color: transparent;
`;

const ArrowIcon = styled(ArrowDropDownCircleTwoToneIcon)`
    transform:${(props) => props.rotate};
`;

const SortList = ({sortTheList, sortOrder}) => (
    <Button onClick={sortTheList}>
        <ArrowIcon rotate={sortOrder ? "rotate(180deg)" : "rotate(0)"}/>
    </Button>
)

export default SortList;