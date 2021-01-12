import React, {useEffect, useState} from "react"
import styled from "styled-components"
import './App.css';
import ItemData from "./components/itemData"
import ItemMyList from "./components/itemMyList"
import LoadingIcon from "./assets/loading-icon.gif"
import Tools from "./components/tools"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 335px);
  grid-gap: 1.5rem;
  font-family: 'Quicksand', sans-serif;
  margin: 1.5rem;
`;

const Loading = styled.img``;

const ListContainer = styled.div`
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

const List = styled.div``;


const dataUrl = "https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users"

const App = () => {

  const [data, setData] = useState([])
  const [selectedContact, setSelectedContact] = useState([])
  const [clicked, setClicked] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataUrl)
      const {data} = await response.json()
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  },[])

  useEffect(() => {
  }, [data])
  
  
  const getContactSelected = (item) => {
    const myList = [...selectedContact, item]
    if(selectedContact.find(el => el.name === item.name)){
      return
    }
    setSelectedContact(myList)
  }

  const deleteContact = (item) => {
    const updatedList = selectedContact.filter(el => el.name !== item.name)
    setSelectedContact(updatedList)
  }

  const deleteAll = () => {
    const updateList = []
    setSelectedContact(updateList)
  }

  const sortedContact = () => {
    const updatedList = selectedContact.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if(nameA > nameB){
        return clicked ? 1 : -1
      } else if (nameA < nameB) {
        return clicked ? -1 : 1
      }
      return 0
    })
    setSelectedContact(updatedList)
    setClicked(!clicked)
  }

  return (
    <Container>
      {isLoading? 
        (<Loading src={LoadingIcon}/>) :
        (
          <ListContainer color="cornflowerblue">
            <Title>Contacts</Title>
            <List>
              {data.map(item => {
                return(
                  <ItemData key={item.name} item={item} onChecked={getContactSelected}/>
                  )
                })}
            </List>
          </ListContainer>
          
          )
        }
      {selectedContact.length > 0 &&
        <ListContainer color="aliceblue">
          <ListHeader>
            <Title>Selected contact</Title>
            <Tools onClear={deleteAll} sortTheList={sortedContact} clicked={clicked}/>
          </ListHeader>
          <List>
            {selectedContact.map(item =>
              <ItemMyList key={item.name} item={item} onDelete={deleteContact}/>
            )}
          </List>
        </ListContainer>
      }
    </Container>
  )
}

export default App;
