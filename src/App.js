import React, {useEffect, useState} from "react"
import styled from "styled-components"
import './App.css';
import ItemData from "./components/itemData"
import ItemMyList from "./components/itemMyList"

const Container = styled.div``;

const DataListContainer = styled.div``;

const DataList = styled.div``;

const ListContainer = styled.div``;

const List = styled.ul``;


const dataUrl = "https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users"

const App = () => {

  const [display, setDisplay] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataUrl)
      const {data} = await response.json()
      setDisplay(data)
    }
    fetchData()
  },[])

  useEffect(() => {
  }, [display])
  


  return (
    <Container>
      <DataListContainer>
        <DataList>
          {display.map(item => {
            return(
              <ItemData item={item}/>
            )
          })}
        </DataList>
      </DataListContainer>
      <ListContainer>
        <List/>
      </ListContainer>
    </Container>
  )
}

export default App;
