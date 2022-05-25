import React from 'react';
import { Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import superchargeData from './data/superchargeData.json'






function App() {


  return (
    <div>
      <MapContainer center={[43.604, 1.44305]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {superchargeData.map(tesla => (
          <Marker
            key={tesla.id}
            position={[tesla.gps.latitude, tesla.gps.longitude]}>
            <Popup className='test'>
              {tesla.status}<br />
              {tesla.name}<br />
              {tesla.address.street}<br />
              {tesla.address.country}<br />

            </Popup>
          </Marker>
        ))}


      </MapContainer>
    </div>
  );
}

export default App;
