import { Form, Input, Upload, Button, message, Spin, UploadFile } from "antd";
import { FaImage } from "react-icons/fa";
import { CategoryModalProps } from "../../Types/PageProps";
import { RcFile } from "antd/lib/upload";
import React from "react";
import { useAddNewCategoryMutation } from "../../Redux/api/categoryApis";
import { LoadingOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";

const CategoryAddModal = ({ closeModal }: CategoryModalProps) => {
  const [form] = Form.useForm();
  const [setNewData, { isLoading: isAdding }] = useAddNewCategoryMutation();
  const [file, setFile] = React.useState<RcFile | null>(null);
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const handleFileChange = ({ fileList }: UploadChangeParam) => {
    setFileList(fileList);
    setFile(fileList.length ? (fileList[0].originFileObj as RcFile) : null);
  };

  const onFinish = async (values: { name: string }) => {
    if (!file) {
      message.error("Please upload a category image");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("category_image", file);

    try {
      await setNewData(formData).unwrap();
      form.resetFields();
      setFile(null);
      setFileList([]);
      message.success("Category added successfully");
      closeModal();
    } catch (error) {
      message.error("Failed to add category. Please try again.");
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="bg-[var(--black-200)] p-3 rounded-md"
    >
      <p className="text-xl text-[var(--white-600)] text-center">
        Add New Category
      </p>

      {/* Category Name */}
      <Form.Item
        label={<span className="text-[var(--white-600)]">Category Name</span>}
        name="name"
        rules={[{ required: true, message: "Please input category name" }]}
      >
        <Input className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]" />
      </Form.Item>

      {/* Category Image */}
      <Form.Item
        label={<span className="text-[var(--white-600)]">Category Image</span>}
        rules={[{ required: true, message: "Please upload a category image" }]}
      >
        <Upload
          beforeUpload={() => false}
          onChange={handleFileChange}
          listType="picture-card"
          maxCount={1}
          accept="image/*"
          fileList={fileList} // Explicitly control file list
        >
          <div className="center-center flex-col">
            <FaImage className="text-[var(--white-600)]" />
            <p className="text-[var(--white-600)]">Upload Image</p>
          </div>
        </Upload>
      </Form.Item>

      {/* Action Buttons */}
      <div className="center-center mt-10 flex justify-between">
        <Button
          onClick={() => {
            closeModal();
            form.resetFields();
            setFile(null);
            setFileList([]); // Clear uploaded file list on cancel
          }}
          className="border border-[var(--gray-600)] text-[var(--orange-600)]"
        >
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={isAdding}
          className="bg-[var(--orange-600)] border-none text-[var(--white-600)]"
        >
          {isAdding ? (
            <Spin indicator={<LoadingOutlined spin />} size="small" />
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </Form>
  );
};

export default CategoryAddModal;
