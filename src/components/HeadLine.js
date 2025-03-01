import React, { Component } from 'react'

export class HeadLine extends Component {
    myStyleLight= {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: '0px',
        height: '40px',
      }
      myStyleDark= {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'rgb(215, 215, 215)',
        backgroundColor: 'black',
        padding: '0px',
        height: '40px'
      }
      headingStyle = {
        width: '15%',
        color: 'black',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
      marqueeStyleLight = {
        width: '85%',
        fontSize: '18px',
        color: 'black',
        padding: '0px',
        height: '40px',
        fontFamily: 'Roboto'
      }
      marqueeStyleDark = {
        width: '85%',
        fontSize: '18px',
        color: 'white',
        padding: '0px',
        height: '40px',
        fontFamily: 'Roboto'
      }
  render() {
    let {mode} = this.props;

    return (
      <>
        <div className="news-container position-sticky top-0 z-1" style={mode==='light'?this.myStyleLight:this.myStyleDark}>
          <div className="heading" style={this.headingStyle}>
            <span><p className='h5' style={{fontFamily: 'Roboto', fontWeight: 'bolder'}}>Breaking News</p></span>
          </div>
          <div className="news" style={mode==='light'?this.marqueeStyleLight:this.marqueeStyleDark}>
          <marquee width="100%" direction="left" height="20px" className='my-1'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum enim porro incidunt recusandae eum unde nostrum totam provident voluptates sit! Quibusdam libero sed soluta ipsa aliquam fuga provident quasi? Obcaecati, recusandae soluta! Sapiente exercitationem sint ex odit et, magnam nulla eius, vero perferendis praesentium iure mollitia nam voluptas non tenetur eligendi facilis? Laboriosam dolore unde deserunt at tempore id reiciendis provident ducimus labore ipsa eveniet facere, assumenda, amet, vel culpa recusandae ut itaque maiores quibusdam? Dolores enim minima atque sunt voluptates nostrum vero tempore. Recusandae quasi, soluta vero voluptas repellat, dolor repellendus deleniti totam id ad quos, praesentium accusantium tenetur?</p>
          </marquee>
          </div>
        </div>
      </>
    )
  }
}

export default HeadLine
