// src/components/ProfilePage/ProfileEdit.tsx
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Upload } from 'antd'

const ProfileEdit = ({
  profile,
  image,
}: {
  profile: any
  image: File | null
}) => {
  const [error, setError] = useState<string | null>(null)

  const [form] = Form.useForm()

  // Pre-fill the form with the profile data when it's fetched
  useEffect(() => {
    form.setFieldsValue({
      name: profile?.name,
      email: profile?.email,
      address: profile?.address,
    })
  }, [profile, form])

  const onFinish = async (values: any) => {
    const { name, phoneNumber, address } = values

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', profile?.email) // Use the email from the profile
      formData.append('phoneNumber', phoneNumber)
      formData.append('address', address)
      if (image) {
        formData.append('profile_image', image) // Attach the selected image
      }

      const response = await fetch(
        'http://10.0.60.26:8001/admin/edit-profile',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        alert('Profile updated successfully!')
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Profile update failed. Please try again.')
    }
  }

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      {error && <p className="text-red-500">{error}</p>}

      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Name is required' }]}
      >
        <Input defaultValue={profile?.name} />
      </Form.Item>

      <Form.Item name="email" label="Email">
        <Input defaultValue={profile?.email} disabled />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[{ required: true, message: 'Phone number is required' }]}
      >
        <Input defaultValue={profile?.phoneNumber} />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: 'Address is required' }]}
      >
        <Input defaultValue={profile?.address} />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        disabled={false}
        className="w-full"
        style={{ backgroundColor: '#F1714F', padding: '10px' }}
      >
        Update Profile
      </Button>
    </Form>
  )
}

export default ProfileEdit
