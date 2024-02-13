import React, { Component } from 'react'

function Navitems(props) {
  let { title, description, imgUrl, url, author, source, updated } = props;
  return (
    <div className="card" >
      <span className="position-absolute top-4 translate-middle badge rounded-pill bg-danger" style={{ left: "95%", zIndex: 1 }}>
        {source.name}
      </span>
      <img src={!imgUrl ? "https://c.ndtvimg.com/2023-07/83n5a6vo_x-logo-_625x300_29_July_23.jpg" : imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary">By <strong className='text-danger'>{!author ? "Unknown" : author}</strong> updated at {new Date(updated).toDateString()}</small></p>
        <a href={url} target='_blank' className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default Navitems
