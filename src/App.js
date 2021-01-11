import React, {useEffect, useState} from "react"
import styled from "styled-components"
import './App.css';
import ItemData from "./components/itemData"
import ItemMyList from "./components/itemMyList"

const Container = styled.div``;

const DataListContainer = styled.div``;

const DataList = styled.div``;

const ListContainer = styled.div``;

const List = styled.div``;


const dataUrl = "https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users"

const App = () => {

  const [data, setData] = useState([])
  const [selectedContact, setSelectedContact] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataUrl)
      const {data} = await response.json()
      setData(data)
    }
    fetchData()
  },[])

  useEffect(() => {
  }, [data])
  
  
  const getContactSelected = (item) => {
    const myList = [...selectedContact, item]
    setSelectedContact(myList)
  }

  const deleteContact = (selectedContact, item) => {
    
  }


  return (
    <Container>
      <DataListContainer>Contact
        <DataList>
          {data.map(item => {
            return(
              <ItemData item={item} onChecked={getContactSelected}/>
            )
          })}
        </DataList>
      </DataListContainer>
      <ListContainer>Selected contact
        <List>
          {selectedContact.map(item =>
            <ItemMyList item={item} onDelete={deleteContact}/>
          )}
        </List>
      </ListContainer>
    </Container>
  )
}

export default App;
