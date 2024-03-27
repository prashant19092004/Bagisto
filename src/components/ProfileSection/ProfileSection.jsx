import React from 'react'

const ProfileSection = (props) => {
  return (
    <div className='profile-section d-flex gap-5' style={{flexDirection : props.data.row==='simple' ? 'row' : 'row-reverse' }}>
        <div className='profile-section-pic'>
            <img src={props.data.image} alt='' />
        </div>
        <div className='profile-section-content d-flex flex-column gap-4'>
            <h1>Get Ready for our new Bold Collections!</h1>
            <p>Introducing Our New Bold Collections! Elevate your style with daring designs and vibrant statements. Explore striking patterns and bold colors that redefine your wardrobe. Get ready to embrace the extraordinary!</p>
            <button className='profile-section-button'>View All</button>
        </div>
    </div>
  )
}

export default ProfileSection