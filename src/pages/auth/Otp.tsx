import { Form, FormProps, Input } from "antd"
import { OtpFieldType } from "../../Types/DataTypes"
import { useNavigate } from "react-router-dom"
const Otp = () => {
    const navigate = useNavigate()
    const onFinish: FormProps<OtpFieldType>['onFinish'] = (value) => {
        navigate('/reset-password')
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
                <p className="text-center text-3xl uppercase">Verify Otp </p>
                <Form.Item<OtpFieldType>
                    name="otp"
                    label='Otp'
                    rules={[
                        {
                            required: true,
                            message: 'Otp is required'
                        }
                    ]}
                >
                    <Input.OTP length={6} className="bg-[var(--black-600)]  p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
                </Form.Item>

                <button style={{
                    justifyContent: 'center'
                }} className="sidebar-button-orange">
                    Verify otp
                </button>
            </Form>
        </div>
    )
}
export default Otp
