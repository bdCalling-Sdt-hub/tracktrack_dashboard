import { useState } from 'react'
import { Form, Input, FormProps } from 'antd'
import { useLoginMutation } from '../../services/authApiSlice' // Import the login hook
import { LoginFieldType } from '../../Types/DataTypes'
import { Link, useNavigate } from 'react-router-dom' // Import useNavigate for React Router v6

const Login = () => {
  const [error, setError] = useState<string | null>(null)
  const [login, { isLoading }] = useLoginMutation() // RTK Query mutation hook for login
  const navigate = useNavigate() // useNavigate hook to navigate after login

  const onFinish: FormProps<LoginFieldType>['onFinish'] = async (values) => {
    const { email, password } = values
    try {
      const response = await login({ email, password }).unwrap()

      if (response.success) {
        // Store the tokens in localStorage
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)

        // Redirect to the dashboard after successful login
        navigate('/') // Use navigate to go to the dashboard page
      } else {
        setError(response.message)
      }
    } catch (err) {
      setError('Login failed. Please try again.')
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
        <p className="text-center text-3xl uppercase">Login</p>
        {error && <p className="text-red-400  text-center">{error}</p>}

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

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Password is required' }]}
        >
          <Input.Password
            placeholder="Password"
            className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
          />
        </Form.Item>

        <button
          className="sidebar-button-orange"
          style={{ justifyContent: 'center' }}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <p className="mt-2 text-center">
          Forgot your password?{' '}
          <Link to={`/forget-password`} className="underline">
            Reset password
          </Link>
        </p>
      </Form>
    </div>
  )
}

export default Login
