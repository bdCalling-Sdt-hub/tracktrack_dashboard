// src/components/ForgetPassword/ForgetPassword.tsx
import { useState } from 'react'
import { Form, Input, FormProps } from 'antd'
import { useForgotPasswordMutation } from '../../services/authForgetPasswordSlice' // Import the forgot password hook
import { LoginFieldType } from '../../Types/DataTypes' // Assuming you have this defined
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
  const [error, setError] = useState<string | null>(null)

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation() // RTK Query mutation hook for forgot password
  const navigate = useNavigate()

  const onFinish: FormProps<LoginFieldType>['onFinish'] = async (values) => {
    const { email } = values

    try {
      const response = await forgotPassword({ email }).unwrap() // Call unwrap() to get the raw response

      console.log('Response:', response) // Log the response for debugging

      if (response.success) {
        // Store email in localStorage to pass it to the OTP page
        localStorage.setItem('email', email)
        navigate('/otp') // Navigate to OTP page
      } else {
        setError(response.message) // Set the error message
      }
    } catch (err) {
      console.error('Request failed:', err) // Log the error for debugging
      setError('Request failed. Please try again.')
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
        <p className="text-center text-3xl uppercase">Forget Password</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <Input
            type="email"
            placeholder="Email"
            className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
          />
        </Form.Item>

        <button
          className="sidebar-button-orange"
          style={{ justifyContent: 'center' }}
          disabled={isLoading}
        >
          {isLoading ? 'Sending OTP...' : 'Send Verify OTP'}
        </button>
      </Form>
    </div>
  )
}

export default ForgetPassword
