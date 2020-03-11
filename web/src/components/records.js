import React from 'react'


const Records = ({ records }) => {
  return (
      <div className="records">
      <table className="recordsTable">
        <th>Name</th>
        <th>ID</th>
      {records.map((record) => (
            <tr class="record">
                <td class="record-name">{record.name}</td>
                <td class="record-ID">{record.recordID}</td>
            </tr>
          ))}
      </table>
    </div>

  )
};

export default Records