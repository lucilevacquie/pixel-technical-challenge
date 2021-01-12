import React, {useEffect, useState} from "react"
import styled from "styled-components"
import './App.css';
import ListComponent from "./components/list"
import LoadingIcon from "./assets/loading-icon.gif"
import Tools from "./components/tools"
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 335px);
  grid-gap: 1.5rem;
  font-family: 'Quicksand', sans-serif;
  margin: 1.5rem;
`;

const dataUrl = "https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users" //endpoint for user data

const App = () => {

  const [contactData, setContactData] = useState([]) //contacts from endpoint
  const [selectedContactsData, setSelectedContactsData] = useState([]) //selected contact list 
  const [sortOrder, setSortOrder] = useState(true) //sort button clicked
  const [isLoading, setIsLoading] = useState(true) //isLoading true when data is fetching

  //on the first load of page, fecth the data from endpoint
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataUrl) //get the response
      const {data} = await response.json() //get the destructure data from response
      setContactData(data)
      setIsLoading(false)
    }
    fetchData()
  },[])
  
  //add contact to selected contacts list
  const onClickContact = (item) => {
    const myList = [...selectedContactsData, item]
    if(selectedContactsData.find(el => el.name === item.name)){
      return
    }
    setSelectedContactsData(myList)
  }

  //delete one contact from the selected contacts list
  const onDeleteContact = (item) => {
    const updatedList = selectedContactsData.filter(el => el.name !== item.name)
    setSelectedContactsData(updatedList)
  }

  //delete the whole selected contacts list
  const onDeleteAll = () => {
    const updateList = []
    setSelectedContactsData(updateList)
  }

  //sort the selected contacts list by alphabetical order
  const sortContacts = () => {
    const updatedList = selectedContactsData.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if(nameA > nameB){
        return sortOrder ? 1 : -1
      } else if (nameA < nameB) {
        return sortOrder ? -1 : 1
      }
      return 0
    })
    setSelectedContactsData(updatedList)
    setSortOrder(!sortOrder)
  }

  return (
    <Container>
      {isLoading? 
        (<img src={LoadingIcon} alt="Loading"/>) :
        (
          <ListComponent 
            title="Contacts" 
            color="cornflowerblue" 
            data={contactData} 
            onClickButton={onClickContact}
            buttonIcon={<AddCircleTwoToneIcon/>}
          />
          )
        }

      {selectedContactsData.length > 0 &&
        <ListComponent 
          title="Selected contacts" 
          color="aliceblue" 
          data={selectedContactsData} 
          onClickButton={onDeleteContact}
          buttonIcon={<HighlightOffTwoToneIcon/>}
          toolbar={
            <Tools onClear={onDeleteAll} sortTheList={sortContacts} sortOrder={sortOrder}/>
          }
        />
      }
    </Container>
  )
}

export default App;
