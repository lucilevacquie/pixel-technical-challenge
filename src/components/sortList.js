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

const SortList = ({sortTheList, sortOrder}) => {
    return(
        <>
            <Button onClick={sortTheList}>
            {sortOrder ? 
                <ArrowIcon rotate="rotate(180deg)"/> :
                <ArrowIcon/>
            }
            </Button>
        </>
    )
}

export default SortList;