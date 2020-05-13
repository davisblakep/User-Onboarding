import React, { useState } from 'react';

const Form = (props) => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        team: "",
        role: "",
        terms: false,
    })

    const inputChange = (e) => {
        let value = e.target.type === "checkbox" ? e.target.checked: e.target.value;
        setFormState({...formState, [e.target.name]: value})
    }

    const submitMember = (e) => {
        e.preventDefault();
        props.addMember(formState);
        setFormState({name: "", email:"", password: "", team: "", role: "", terms: false})
    }

    return(
        <div>
            <form onSubmit={submitMember}>
                <label htmlFor="name">
                    Name:
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor="team">
                Team:
                <select
                value={formState.team}
                name="team"
                id="team"
                onChange={inputChange}
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
                >
                <option value="">--Select Role--</option>
                <option value="Driver">Driver</option>
                <option value="Crew">Crew</option>
                <option value="Sponsor">Sponsor</option>
                <option value="Media">Media</option>
                </select>
                </label>
                <label htmlFor="terms">
                    <input 
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                    />
                    I agree to the Terms and Conditions.
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;