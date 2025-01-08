// src/components/ResetPassword/ResetPassword.tsx
import { useState } from 'react'
import { Form, Input, FormProps } from 'antd'
import { useResetPasswordMutation } from '../../services/authForgetPasswordSlice' // Import the reset password hook
import { ResetFieldType } from '../../Types/DataTypes' // Assuming you have this defined
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const [error, setError] = useState<string | null>(null)
  const [resetPassword, { isLoading }] = useResetPasswordMutation() // RTK Query mutation hook for resetting password
  const navigate = useNavigate()

  const onFinish: FormProps<ResetFieldType>['onFinish'] = async (values) => {
    const email = localStorage.getItem('email')
    const { newPassword, confirmPassword } = values

    console.log(values)
    try {
      const response = await resetPassword({
        email: email || '',
        newPassword,
        confirmPassword,
      }).unwrap()

      if (response.success) {
        // Redirect to login page after successful password reset
        navigate('/login')
      } else {
        setError(response.message)
      }
    } catch (err) {
      setError('Password reset failed. Please try again.')
    }
  }

  return (
    <div className="center-center bg-[var(--black-100)] h-screen">
      <Form
        style={{ minWidth: '500px' }}
        className="bg-[var(--black-100)] p-4 rounded-md"
        onFinish={onFinish}
        layout="vertical"
      >
        <p className="text-center text-3xl uppercase">Reset Password</p>

        {error && <p className="text-red-300 text-center">{error}</p>}

        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[{ required: true, message: 'New password is required' }]}
        >
          <Input.Password
            placeholder="New Password"
            className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[{ required: true, message: 'Confirm password is required' }]}
        >
          <Input.Password
            placeholder="Confirm Password"
            className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
          />
        </Form.Item>

        <button
          className="sidebar-button-orange"
          style={{ justifyContent: 'center' }}
          disabled={isLoading}
        >
          {isLoading ? 'Resetting Password...' : 'Reset Password'}
        </button>
      </Form>
    </div>
  )
}

export default ResetPassword
