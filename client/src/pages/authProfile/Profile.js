import React from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

import ProfileInfo from '../../components/profileInfo/ProfileInfo'

const Profile = () => {
    const auth = useSelector(state => state.auth)
    return (
        (auth._id ? (
            <>
                <ProfileInfo />
            </>
        ) : (
            <>
                <Redirect to="/signup" />
            </>
        ))
    )
}

export default Profile
