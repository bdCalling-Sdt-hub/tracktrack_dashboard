// src/components/Otp/Otp.tsx
import React, { useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { useVerifyOtpMutation } from '../../services/authForgetPasswordSlice' // Import the verify OTP hook
import { OtpFieldType } from '../../Types/DataTypes' // Assuming you have this defined
import { useNavigate } from 'react-router-dom'

const Otp = () => {
  const [error, setError] = useState<string | null>(null)
  const [otp, setOtp] = useState<string>('') // Store OTP value in state
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation() // RTK Query mutation hook for verifying OTP
  const navigate = useNavigate()

  const onFinish: FormProps<OtpFieldType>['onFinish'] = async () => {
    const email = localStorage.getItem('email') // Retrieve the email from localStorage
    console.log('Submitting OTP:', otp) // Log OTP value being submitted

    if (!email) {
      setError('Email not found. Please try again.')
      return
    }

    try {
      const response = await verifyOtp({ email, code: otp }).unwrap()

      console.log('Backend response:', response) // Log the backend response for debugging

      if (response.success) {
        // Redirect to reset password page on successful verification
        navigate('/reset-password')
      } else {
        setError(response.message)
      }
    } catch (err) {
      console.error('Error during OTP verification:', err) // Log error for debugging
      setError('OTP verification failed. Please try again.')
    }
  }

  const handleOtpChange = (value: string) => {
    // Handle OTP change
    if (value.length <= 6) {
      setOtp(value) // Update OTP state when user types
    }
  }

  return (
    <div className="center-center bg-[#959596] h-screen flex items-center justify-center">
      <Form
        style={{ minWidth: '500px' }}
        className="bg-[var(--black-100)] p-4 rounded-md"
        onFinish={onFinish}
        layout="vertical"
      >
        <p className="text-center text-3xl uppercase mb-5">Verify OTP</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* OTP Input Fields (6 individual fields) */}
        <Form.Item
          name="otp"
          rules={[{ required: true, message: 'OTP is required' }]}
        >
          <Row gutter={8}>
            {[...Array(6)].map((_, index) => (
              <Col span={4} key={index}>
                <Input
                  maxLength={1}
                  value={otp[index] || ''}
                  onChange={(e) => {
                    const updatedOtp = otp.split('')
                    updatedOtp[index] = e.target.value
                    handleOtpChange(updatedOtp.join('')) // Update OTP state
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    marginRight: '8px',
                  }}
                />
              </Col>
            ))}
          </Row>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          disabled={isLoading}
          style={{ backgroundColor: '#F1714F', padding: '20px' }}
        >
          {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
        </Button>
      </Form>
    </div>
  )
}

export default Otp
