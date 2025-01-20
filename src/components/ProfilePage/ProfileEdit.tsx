import { Form, FormProps, message, Spin } from "antd";
import { userProfileFieldType } from "../../Types/DataTypes";
import { useUpdateProfileDataMutation } from "../../Redux/api/profileApis";

interface ProfileEditProps {
  image: File | null;
  defaultImage: string;
  data: userProfileFieldType & { profile_image?: string };
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ image, data }) => {
  const [form] = Form.useForm<userProfileFieldType>();
  const [setProfileUpdate, { isLoading: isProfileUpdate }] =
    useUpdateProfileDataMutation();
  const onFinish: FormProps<userProfileFieldType>["onFinish"] = async (
    values
  ) => {
    const updateData = {
      name: values.name,
      email: values.email,
      address: values.address,
      phoneNumber: values.phoneNumber,
    };

    const formData = new FormData();
    Object.keys(updateData)?.map((key) => {
      formData.append(key, updateData[key as keyof typeof updateData]);
    });

    if (image) {
      formData.append("profile_image", image);
    }
    try {
      await setProfileUpdate(formData);
      message.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        name: data?.name || "",
        email: data?.email || "",
        phoneNumber: data?.phoneNumber || "",
        address: data?.address || "",
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Name is required",
          },
        ]}
      >
        <input
          placeholder="Name"
          className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
        />
      </Form.Item>

      <Form.Item name="email" label="Email">
        <input
          disabled
          type="email"
          placeholder="Email"
          className="cursor-not-allowed bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
        />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Phone number is required",
          },
        ]}
      >
        <input
          placeholder="Phone Number"
          className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
        />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: "Address is required",
          },
        ]}
      >
        <input
          placeholder="Address"
          className="bg-[var(--black-600)] p-2 w-full outline-none focus:bg-[var(--black-700)] hover:bg-[var(--black-700)] active:bg-[var(--black-700)] border-none h-11 text-[var(--white-600)]"
        />
      </Form.Item>

      <button
        disabled={isProfileUpdate}
        style={{
          width: "200px",
          justifyContent: "center",
        }}
        className={`sidebar-button-orange mx-auto`}
      >
        {isProfileUpdate ? <Spin /> : "Update Profile"}
      </button>
    </Form>
  );
};

export default ProfileEdit;
