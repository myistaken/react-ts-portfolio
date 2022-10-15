import React from 'react'
import './AppBar.css'

const AppBar = () => {
  return (
    <div className='appbar'>
        <div className='header'>
            <div className='logo'>Mustafa YILMAZ</div>
            <div className='list'>
                <ul>
                    <li>Hakkında</li>
                    <li>Yetenekler</li>
                    <li>Projeler</li>
                    <li>İletişim</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AppBar