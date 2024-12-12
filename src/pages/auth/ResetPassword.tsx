import { Form, FormProps, Input } from "antd"
import { ResetFieldType } from "../../Types/DataTypes"
import { useNavigate } from "react-router-dom"
const ResetPassword = () => {
    const navigate = useNavigate()
    const onFinish: FormProps<ResetFieldType>['onFinish'] = (value) => {
        navigate('/')
    }
    return (
        <div className="center-center bg-[var(--black-100)] h-screen">
            <Form
                style={{
                    minWidth: '500px'
                }}
                className="bg-[var(--black-100)] p-4 rounded-md"
                onFinish={onFinish}
                layout="vertical"
            >
                <p className="text-center text-3xl uppercase">Reset Password </p>
                <Form.Item<ResetFieldType>
                    name="newPassword"
                    label='New Password'
                    rules={[
                        {
                            required: true,
                            message: 'New Password is required'
                        }
                    ]}
                >
                    <Input.Password className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
                </Form.Item>

                <Form.Item<ResetFieldType>
                    name="confirmPassword"
                    label='Confirm Password'
                    rules={[
                        {
                            required: true,
                            message: 'Confirm Password is required'
                        }
                    ]}
                >
                    <Input.Password className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
                </Form.Item>
                <button style={{
                    justifyContent: 'center'
                }} className="sidebar-button-orange">
                   Reset Password
                </button>
            </Form>
        </div>
    )
}

export default ResetPassword
