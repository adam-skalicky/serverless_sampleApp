import React from 'react'


const Version = ({ version }) => {
  return (
    <div>
      <center><h1>Version Info</h1></center>
        <div className="version">
          <div className="version-div">
            <h5 className="version-name">App Name: {version.name}</h5>
            <p className="version-versionID">Version: {version.version}</p>
            <p className="version-guid">Request ID: {version.guid}</p>
            <p className="version-region">Region: {version.region}</p>
          </div>
        </div>
    </div>
  )
};

export default Version