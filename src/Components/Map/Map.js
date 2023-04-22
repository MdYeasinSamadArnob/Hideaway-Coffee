import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Map() {
  const position = [51.5112189, -0.1352673]

  return (
    <div className='w-full flex flex-col justify-center items-center mt-8'>
      
      <div className='w-full mx-4 md:mx-auto md:w-2/3  '>
      <h2 id="find-us" className='text-center text-5xl'>Find Us</h2>
      <MapContainer key={position[0]} center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%",  }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} >

          <Popup>
            Our coffee shop is located here.
            <a href="https://goo.gl/maps/xtSV1AEcbiqvMjuS8 " target="_blank" rel="noreferrer">
            <button className='bg-black text-white px-5 py-3 mt-1 rounded-md'>Go There</button>
            </a>
          </Popup>
        </Marker>
      </MapContainer>
        </div>
      <p>7 Farrier's Psge, London W1D 7DP,UK</p>
      <a href="https://goo.gl/maps/xtSV1AEcbiqvMjuS8 " target="_blank" rel="noreferrer">
      <button className='bg-black text-white px-5 py-3 mt-1 rounded-md'>Get Direction</button>
      </a>
      <a href="https://www.instagram.com/hideawaycoffee/" style={{ display: "block", marginTop: "20px" }}>
        <img src="/images/insta.webp" alt="Instagram" style={{ width: "50px", height: "50px" }} />
      </a>
    </div>
  )
}

export default Map
