import React, { useState } from "react";
import Endpoints from '../endpoints.json'

const AddName = (props) => {
    const [name, setName] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await fetch(Endpoints.addRecord.POST, {
            method: 'post',
            body: JSON.stringify({
                name: `${name}`
            })
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({ AddName: data })
          
        })
        .catch(console.log)
        window.location.reload();
        
    }

  return (
    <div className="nameSubmission">
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
      </form>
      </div>
  );
}


export default AddName