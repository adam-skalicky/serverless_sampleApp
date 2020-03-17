import React, { useState } from "react";
import Endpoints from '../endpoints.json'

const Purge = (props) => {
    const [name, setName] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await fetch(Endpoints.purgeRecords.GET,)
        .then(res => res.json())
        .then((data) => {
          this.setState({ Purge: data })
        })
        .catch(console.log)
        window.location.reload();
        
    }

  return (
    <div className="nameSubmission">
    <form onSubmit={handleSubmit}>
      <label>
        Purge: 
      </label>
      <input type="submit" value="Submit" />
      </form>
      </div>
  );
}


export default Purge