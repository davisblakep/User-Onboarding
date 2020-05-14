import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Must be a valid email address").required("Must include email address"),
    password: yup.string().required("Must include a password"),
    team: yup.string(),
    role: yup.string(),
    terms: yup.boolean().oneOf([true], "Please agree to the terms and conditions")
});


const Form = (props) => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        team: "",
        role: "",
        terms: false,
    });

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        password: "",
        team: "",
        role: "",
        terms: "",
    })

    const validate = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(valid => {
            setErrorState({
                ...errorState, [e.target.name]: ""
            });
        })
        .catch(err => {
            console.log(err.errors);
            setErrorState({
                ...errorState, [e.target.name]: err.errors[0]
            });
        });
    };

    const inputChange = (e) => {
        e.persist();
        validate(e);
        let value = e.target.type === "checkbox" ? e.target.checked: e.target.value;
        setFormState({...formState, [e.target.name]: value})
    }

    let history = useHistory();

    const SubmitButton = () =>{
           return history.push("/members");   
    }

    

    const submitMember = (e) => {
        e.preventDefault();
        // props.addMember(formState);
        setFormState({name: "", email:"", password: "", team: "", role: "", terms: false})
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {console.log(response); props.addMember(response.data)})
        .catch(err => console.log(err));
        SubmitButton()
    }


    return(
        <div className="form-container">
            <form onSubmit={submitMember}>
                <label htmlFor="name">
                    Name:
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter First and Last Name"
                    value={formState.name}
                    onChange={inputChange}
                    required
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={formState.email}
                    onChange={inputChange}
                    required
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Please Create a Strong Password"
                    value={formState.password}
                    onChange={inputChange}
                    required
                    />
                </label>
                <label htmlFor="team">
                Team:
                <select
                value={formState.team}
                name="team"
                id="team"
                onChange={inputChange}
                required
                >
                <option value="">--Select Team--</option>
                <option value="Avenger">Avenger</option>
                <option value="Blue Thunder">Blue Thunder</option>
                <option value="Gravedigger">Gravedigger</option>
                <option value="Megalodon">Megalodon</option>
                </select>
                </label>
                <label htmlFor="role">
                Role: 
                <select
                value={formState.role}
                name="role"
                id="role"
                onChange={inputChange}
                required
                >
                <option value="">--Select Role--</option>
                <option value="Driver">Driver</option>
                <option value="Crew">Crew</option>
                <option value="Sponsor">Sponsor</option>
                <option value="Media">Media</option>
                </select>
                </label>
                <br />
                <label htmlFor="terms">
                    <input 
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                    required
                    />
                    I agree to the Terms and Conditions.
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;