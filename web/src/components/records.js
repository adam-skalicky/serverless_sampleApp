import React from 'react'

const compareDate = (a, b) => {
  const recordDateA = a.date
  const recordDateB = b.date

  let comparison = 0;
  if (recordDateA > recordDateB) {
    comparison = 1;
  } else if (recordDateA < recordDateB) {
    comparison = -1;
  }
  return comparison * -1;
}

const Records = ({ records }) => {
  const recordsSorted = records.sort(compareDate)
  console.log(recordsSorted)
  return (
      <div className="records">
      <table>
        <thead>
          <th>recordID</th>
          <th>recordName</th>
          <th>recordDate</th>
        </thead>
        <tbody>
      {recordsSorted.map((recordsSorted) => (
            <tr className="tr">
                <td className="td">{recordsSorted.recordID}</td>
                <td className="td">{recordsSorted.name}</td>
                <td className="td">{recordsSorted.date}</td>
            </tr>
          ))}
          </tbody>
      </table>
      
    </div>

  )
};

export default Records