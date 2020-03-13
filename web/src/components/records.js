import React from 'react'


const Records = ({ records }) => {
  return (
      <div className="records">
      <table className="recordsTable">
        <th>recordID</th>
        <th>recordName</th>
        <th>recordDate</th>
      {records.map((record) => (
            <tr class="record">
                <td class="recordID">{record.recordID}</td>
                <td class="recordName">{record.name}</td>
                <td class="recordDate">{record.date}</td>
            </tr>
          ))}
      </table>
    </div>

  )
};

export default Records