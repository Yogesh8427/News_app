import React from 'react'
const Newsitems = (props) => {
  let { tittle, discription, imgurl, url, author, date, source } = props;
  return (
    <>
      <div className="card bg-dark" style={{ width: "21rem", height: "100%", color: "white", boxShadow: "4px 0px 40px black" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ top: "-2%", left: "0%", fontSize: "85%" }}>{source}</span>
        <img src={imgurl === null ? "https://thumbs.dreamstime.com/b/news-18194300.jpg" : imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{discription}</p>
          <a href={url} target='_blank' rel="noreferrer" style={{ backgroundColor: "Black", color: "white" }} className="btn">Read More</a>
          <p className="card-text"><small className="text-success">By: {author ? author : "Unknow"}<br></br> Date: {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </>
  )
}
export default Newsitems;
