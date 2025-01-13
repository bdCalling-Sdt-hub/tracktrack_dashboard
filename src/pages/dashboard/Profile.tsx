// src/components/ProfilePage/Profile.tsx
import React, { useState, useEffect } from 'react'
import { FaEdit } from 'react-icons/fa'
import ProfileEdit from '../../components/ProfilePage/ProfileEdit' // Profile editing form
import ChangePassword from '../../components/ProfilePage/ChangePassword' // Password change form
import { useNavigate } from 'react-router-dom'

const Tabs = ['Edit Profile', 'Change Password']

const Profile = () => {
  const [tab, setTab] = useState(Tabs[0]) // Tab state
  const [image, setImage] = useState<File | null>(null) // Image state
  const [profileData, setProfileData] = useState<any>(null) // State for profile data
  const [loading, setLoading] = useState<boolean>(true) // Loading state
  const navigate = useNavigate()

  // Fetch profile data using useEffect
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://10.0.60.26:8001/admin/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        const data = await response.json()
        if (data.success) {
          setProfileData(data.data) // Set profile data
        }
      } catch (error) {
        console.error('Error fetching profile data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfileData() // Call the function to fetch profile data
  }, [])

  const handleImageChange = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      if (e.target?.files?.length) {
        setImage(e.target.files[0]) // Update the image state with the selected file
      }
    }
    input.click() // Trigger the file selection dialog
  }

  if (loading) return <p>Loading...</p>
  if (!profileData) return <p>Error loading profile.</p>

  return (
    <>
      {/* Profile Image Section */}
      <div className="max-w-[700px] mx-auto bg-[var(--black-200)] p-4 rounded-md">
        <div className="w-full center-center">
          <div className="w-24 h-24 rounded-full relative">
            <img
              className="w-full h-full object-cover rounded-full"
              src={
                image
                  ? URL.createObjectURL(image)
                  : profileData.profile_image || 'https://placehold.co/400'
              }
              alt="profile-picture"
            />
            <FaEdit
              size={24}
              className="absolute right-0 bottom-2 text-[var(--white-600)]"
              onClick={handleImageChange} // Trigger the image change on click
            />
          </div>
        </div>
        <p className="text-2xl text-center text-[var(--white-600)] mt-2">
          {profileData?.name || 'Name not found'}
        </p>
      </div>

      {/* Tabs for Editing Profile or Changing Password */}
      <div className="w-full center-center my-3">
        {Tabs.map((item) => (
          <button
            style={{ width: '200px', justifyContent: 'center' }}
            className={`${
              item === tab ? 'sidebar-button-orange' : 'sidebar-button-black'
            }`}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Render profile update form or password change form */}
      <div className="max-w-[700px] mx-auto bg-[var(--black-200)] p-4 rounded-md">
        {tab === 'Edit Profile' ? (
          <ProfileEdit profile={profileData} image={image} />
        ) : (
          <ChangePassword />
        )}
      </div>
    </>
  )
}

export default Profile
