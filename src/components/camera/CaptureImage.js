import React, { Component } from 'react'

class CaptureImage extends Component {
    captureImage() {    
        const context = this.canvas.getContext("2d")
        context.drawImage(this.videoStream, 0, 0, 800, 600)
        const image = this.canvas.toDataURL('image/jpeg', 0.5)
        return image
      }
      render() {
        return (
         <div>
          <video 
            ref={(stream) => { this.videoStream = stream }}
            width='800'
            height='600'
            style={{display: 'none'}}>
          </video>
          <canvas
            ref={(canvas) => { this.canvas = canvas }}
            width='800'
            height='600'
            style={{display: 'none'}}>
          </canvas>
        </div>
       )
      }
}

export default CaptureImage
