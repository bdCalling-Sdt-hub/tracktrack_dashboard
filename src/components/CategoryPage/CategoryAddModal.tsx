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
// add
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
      className=" p-3 rounded-md"
    >
      <p className="text-xl  text-center">Add New Category</p>

      {/* Category Name */}
      <Form.Item
        label={<span className="">Category Name</span>}
        name="name"
        rules={[{ required: true, message: "Please input category name" }]}
      >
        <Input
          style={{
            border: "1px solid #111",
            background: "red",
          }}
          className=" p-2 w-full h-12 border bg-red-500 border-black"
        />
      </Form.Item>

      {/* Category Image */}
      <Form.Item
        label={<span className="">Category Image</span>}
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
            <FaImage className="" />
            <p className="">Upload Image</p>
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
          className="border "
        >
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={isAdding}
          className=" border-none "
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
