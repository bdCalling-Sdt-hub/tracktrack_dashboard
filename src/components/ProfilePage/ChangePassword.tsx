import { Form, FormProps, Input } from "antd"
import { userChangePassword } from "../../Types/DataTypes"

const ChangePassword = () => {
    const [form] = Form.useForm()
    const onFinish: FormProps<userChangePassword>['onFinish'] = (values) => {
        console.log('Success:', values);
    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            <Form.Item<userChangePassword>
                name="oldPassword"
                label='Old Password'
                rules={[
                    {
                        required: true,
                        message: 'name is required'
                    }
                ]}
            >
                <Input.Password placeholder="name" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>

            <Form.Item<userChangePassword>
                name="newPassword"
                label='New Password'
                rules={[
                    {
                        required: true,
                        message: 'name is required'
                    }
                ]}
            >
                <Input.Password placeholder="email" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>

            <Form.Item<userChangePassword>
                name="confirmPassword"
                label='Confirm Password'
                rules={[
                    {
                        required: true,
                        message: 'phone number is required'
                    }
                ]}
            >
                <Input.Password placeholder="phone number" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>

            <button
                style={{
                    width: '200px',
                    justifyContent: 'center'
                }}
                className={`sidebar-button-orange mx-auto`}
            >Update password</button>
        </Form>
    )
}

export default ChangePassword
