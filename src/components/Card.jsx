import React from 'react'

export default function Card({details}) {
  // console.log("Details",details);
  const options = Object.keys(details.options[0])
  return (
    <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={details.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{details.name}</h5>
          <p className="card-text">{details.description}</p>
          <div className="container w-100">
            <select name="" id="" className="m-2 h-100 bg-sucess rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select name="" id="" className="m-2 h-100 bg-sucess rounded">
              {/* <option value="half">Half</option>
              <option value="full">Full</option> */}
              {options.map((option) => (
                <option value="half">{option}</option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
  )
}
