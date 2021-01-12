import React from "react"
import styled from "styled-components"
import ArrowDropDownCircleTwoToneIcon from '@material-ui/icons/ArrowDropDownCircleTwoTone';

const Container = styled.div``;

const Button = styled.button`
    border: none;
    background-color: transparent;
`;

const ArrowIcon = styled(ArrowDropDownCircleTwoToneIcon)`
    transform:${(props) => props.rotate};
`;


const SortList = ({sortTheList, clicked}) => {
    return(
        <Container>
            <Button onClick={sortTheList}>
            {clicked ? 
                <ArrowIcon rotate="rotate(180deg)" alt="ascending"/> :
                <ArrowIcon alt="descending"/>
            }
            </Button>
        </Container>
    )
}

export default SortList;