import React, {useState} from "react"
import axios from 'axios'

const PersonForm = () => {
    const [message, setMessage] = useState('Loading...')
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(response => {
            console.log(response)
            console.log(response.data)})
        .catch(err => console.log(err))
    }

    return (
        <div className="wrapper" style={{marginTop:"30px"}}>
            <form onSubmit = {submitHandler}>
                <label htmlFor="first name">First Name: </label>
                <input type="text" onChange = {(e) => setFirstName(e.target.value)} />
                <br />
                <label htmlFor="last name">Last Name: </label>
                <input type="text" onChange = {(e) => setLastName(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default PersonForm