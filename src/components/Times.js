import React from 'react';
import timedata from '../assets/times.json';
function Times() {
  console.log(timedata);
  return (
    <div className="container-fluid">
      <div className="row">
        {Object.keys(timedata).map((title, index) => (
          <>
            {index < 4 ? (
              <div key={index} className="col-lg-3">
                <table className="table table-sm table-dark">
                  {' '}
                  <thead>
                    <tr>
                      <th scope="col">
                        <a href="#halo2">{title}</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(timedata[title]).map((level, i) => (
                      <tr key={i}>
                        <td>{level}</td>
                        <td>{timedata[title][level]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </>
        ))}
      </div>
      <div className="row">
        {Object.keys(timedata).map((title, index) => (
          <>
            {index >= 4 ? (
              <div key={index} className="col-lg-3">
                <table className="table table-sm table-dark">
                  {' '}
                  <thead>
                    <tr>
                      <th scope="col">
                        <a href="#halo2">{title}</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(timedata[title]).map((level, i) => (
                      <tr key={i}>
                        <td>{level}</td>
                        <td>{timedata[title][level]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default Times;
