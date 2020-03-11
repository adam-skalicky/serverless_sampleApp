import React from 'react'


const Version = ({ version }) => {
  return (
    <div>
      <div className="version">
          <div className="version-div">
            <h5 className="version-h5">Version Info</h5>
            <p className="version-param">App Name: {version.name}</p>
            <p className="version-param">Version: {version.version}</p>
            <p className="version-param">Request ID: {version.guid}</p>
            <p className="version-param">Region: {version.region}</p>
          </div>
        </div>
    </div>
  )
};

export default Version