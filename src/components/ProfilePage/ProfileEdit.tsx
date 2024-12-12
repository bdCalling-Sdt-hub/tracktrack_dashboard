import { Form, FormProps, Input } from "antd"
import { userProfileFieldType } from "../../Types/DataTypes"

const ProfileEdit = () => {
    const [form] = Form.useForm()
    const onFinish: FormProps<userProfileFieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            <Form.Item<userProfileFieldType>
                name="name"
                label='name'
                rules={[
                    {
                        required: true,
                        message: 'name is required'
                    }
                ]}
            >
                <input placeholder="name" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>

            <Form.Item<userProfileFieldType>
                name="email"
                label='email'
                rules={[
                    {
                        required: true,
                        message: 'name is required'
                    }
                ]}
            >
                <input type="email" placeholder="email" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>

            <Form.Item<userProfileFieldType>
                name="phoneNumber"
                label='phone number'
                rules={[
                    {
                        required: true,
                        message: 'phone number is required'
                    }
                ]}
            >
                <input placeholder="phone number" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>

            <Form.Item<userProfileFieldType>
                name="address"
                label='address'
                rules={[
                    {
                        required: true,
                        message: 'address is required'
                    }
                ]}
            >
                <input type="address" placeholder="address" className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>
            
            <button
                style={{
                    width: '200px',
                    justifyContent: 'center'
                }}
                className={`sidebar-button-orange mx-auto`}
            >Update Profile</button>
        </Form>
    )
}

export default ProfileEdit
