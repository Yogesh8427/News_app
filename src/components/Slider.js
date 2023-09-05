import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
      <div className='container'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{width:"70%"}}>
    <div className="carousel-item active" style={{width:"100%",height:"250px"}}>
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU" alt="First slide" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item" style={{width:"100%",height:"250px"}}>
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU" alt="Second slide"/>
    </div>
    <div className="carousel-item" style={{width:"100%",height:"250px"}}>
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    )
  }
}

export default Slider
