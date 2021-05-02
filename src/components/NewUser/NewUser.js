import React, { useState } from 'react'

export const NewUser= () =>{
    var [userName, setUserName]=useState()
    var [password, setPassword]=useState()

    const nameUpdate=(event)=>{
        setUserName(event.target.value)
    }
    const passwordUpdate = (event)=>{
        setPassword(event.target.value)
    }

    const handleSubmit=()=> {
        const postURL ="mongodb+srv://appuser:pwd@cluster0.zvlmu.mongodb.net/applicationdb?retryWrites=true&w=majority"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'applicationdb/json',
                'Content-Type': 'applicationdb/json',
            },
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name: </label>
                <input required onChange={nameUpdate}></input>
                <label>Password</label>
                <input required onChange={passwordUpdate}></input>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default NewUser