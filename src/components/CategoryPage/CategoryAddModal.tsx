import { Form, FormProps, Input, Upload } from "antd"
import { CategoryFieldType } from "../../Types/DataTypes"
import { FaImage } from "react-icons/fa"
import { CategoryModalProps } from "../../Types/PageProps"

const CategoryAddModal = ({ closeModal }: CategoryModalProps) => {
    // form controller 
    const [form] = Form.useForm()

    // form SubmitHandle 
    const onFinish: FormProps<CategoryFieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="bg-[var(--black-200)] p-3 rounded-md "
            autoFocus={false}
        >
            <p className="text-xl text-[var(--white-600)] text-center">Add New Category</p>
            <Form.Item<CategoryFieldType>
                label={<span className="text-[var(--white-600)]">category name</span>}
                name="name"
                rules={[{ required: true, message: 'Please input category name' }]}
            >
                <input className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
            </Form.Item>
            <Form.Item<CategoryFieldType>
                label={<span className="text-[var(--white-600)]">category name</span>}
                name="category_image"
                rules={[{ required: true, message: 'Please input category Image' }]}
            >
                <Upload
                    multiple={false}
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    className="w-full"
                >
                    <div className="center-center flex-col">
                        <FaImage className="text-[var(--white-600)]" />
                        <p className="text-[var(--white-600)]">Upload Image</p>
                    </div>
                </Upload>
            </Form.Item>
            <div className="center-center mt-10">
                <button onClick={() => {
                    closeModal()
                    form.resetFields()
                }} className="p-2 px-4 border border-[var(--gray-600)] rounded-md text-[var(--orange-600)]">
                    Cancel
                </button>
                <button onClick={() => {
                    closeModal()
                    form.resetFields()
                }} className="p-2 px-4 border border-[var(--orange-600)] rounded-md text-[var(--white-600)] bg-[var(--orange-600)]">
                    Save
                </button>
            </div>
        </Form>
    )
}

export default CategoryAddModal
