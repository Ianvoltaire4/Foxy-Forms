import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const Forms = () => {
  // Here I am Declaring all of my useStates like email, password, etc.
    const[email, setEmail]=useState('');
    const[firstName, setFirstName]=useState('');
    const[lastName, setLastName]=useState('');
    const[age, setAge]=useState(0);
    const[password, setPassword]=useState('');
    const[birthMonth, setBirthMonth]=useState('');
    const [foxImage, setFoxImage] = useState("");
    const [cardDis, setCardDis] = useState(false)

    // here I am creating a function called fetchFox that when it is ran will run an api call to get an image of a fox.
    const fetchFox = async () => {
      let response = await fetch("https://randomfox.ca/floof/");
      let data = await response.json();
      console.log(data);
      setFoxImage(data.image);
    };
  
    // The use effect is fetching data from fetchFox. 
    useEffect(() => {
      fetchFox();
    }, []);

// The handleSubmit is setting the setCardDis to true, and the preventDefault is making sure that if the event isn't handled properly it wont load.
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchFox()
        setCardDis(true)

    }










  return (
    
    <div>
      {/* This form is responsable for holding all of the fields that will render on screen. */}
        <Form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
            id='email'
            type='email'
            value={email}
            required
            onChange={(e)=> setEmail(e.target.value)}
            // This event listener is waiting for something to change in the email form box and then targeting the input field.
            />

            <label>First Name</label>
            <input
            id='FName'
            type='text'
            value={firstName}
            required
            onChange={(e)=> setFirstName(e.target.value)}
            />
            <label>Last Name</label>
            <input
            id='Lname'
            type='text'
            value={lastName}
            required
            onChange={(e)=> setLastName(e.target.value)}
            />
            <label>Age</label>
            <input
            id='Age'
            type='number'
            value={age}
            required
            onChange={(e)=> setAge(e.target.value)}
            />
            <label>Password</label>
            <input
            id='Password'
            type='password'
            value={password}
            required
            onChange={(e)=> setPassword(e.target.value)}
            />
            <label>BirthMonth</label>
            <input
            id='BMonth'
            type='month'
            value={birthMonth}
            required
            onChange={(e)=> setBirthMonth(e.target.value)}
            />
        <Button variant="primary" type='submit'>Submit</Button>
        {/* This button will submit all of the fields to the card from bootstrap */}
        </Form>

{cardDis ? (<Card style={{ width: '18rem' }}>
  {/* The cardDis is making sure the card doesnt render to the screen until the handle submit is run by pressing the submit button. */}
      <Card.Img variant="top" src={foxImage} />
      <Card.Body>
        <Card.Title>{firstName}{lastName}</Card.Title>
        <Card.Text>
        
        </Card.Text>
      </Card.Body>
      <ListGroup>
      <ListGroup.Item>Fox Age:{age}</ListGroup.Item>
      <ListGroup.Item>Birth Month:{birthMonth}</ListGroup.Item>
      </ListGroup>
    </Card>
          ) : (
            <>

            </>
        )}




    </div>
);
}

export default Forms