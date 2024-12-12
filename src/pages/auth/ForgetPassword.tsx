import { Form, FormProps, Input } from "antd"
import { LoginFieldType } from "../../Types/DataTypes"
import { useNavigate } from "react-router-dom"
const ForgetPassword = () => {
    const navigate = useNavigate()
    const onFinish: FormProps<LoginFieldType>['onFinish'] = (value) => {
        navigate('/otp')
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
                <p className="text-center text-3xl uppercase">Forget Password </p>
                <Form.Item<LoginFieldType>
                    name="email"
                    label='email'
                    rules={[
                        {
                            required: true,
                            message: 'name is required'
                        }
                    ]}
                >
                    <Input type="email" placeholder="email" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
                </Form.Item>

                <button style={{
                    justifyContent: 'center'
                }} className="sidebar-button-orange">
                    Send Verify otp
                </button>
            </Form>
        </div>
    )
}

export default ForgetPassword
