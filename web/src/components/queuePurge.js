import React, { useState } from "react";
import Endpoints from '../endpoints.json'

const QueuePurge = (props) => {
    const [name, setName] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await fetch(Endpoints.queueRecordPurge.GET,)
        .then(res => res.json())
        .then((data) => {
          this.setState({ QueuePurge: data })
        })
        .catch(console.log)
        setTimeout(() => { window.location.reload(); }, 3000);
        
        
    }

  return (
    <div className="nameSubmission">
    <form onSubmit={handleSubmit}>
      <label>
        queuePurge Job: 
      </label>
      <input type="submit" value="Submit" />
      </form>
      </div>
  );
}

export default QueuePurge