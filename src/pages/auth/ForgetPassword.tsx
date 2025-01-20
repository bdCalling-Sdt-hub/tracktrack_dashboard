import { useState } from "react";
import { Form, Input, FormProps, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useForgetEmailPostMutation } from "../../Redux/api/authApis";

interface LoginFieldType {
  email: string;
}

const ForgetPassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [forgotPassword, { isLoading }] = useForgetEmailPostMutation();
  const navigate = useNavigate();

  const onFinish: FormProps<LoginFieldType>["onFinish"] = async (values) => {
    const { email } = values;
    const emailData = {
      email: email,
    };
    try {
      const response = await forgotPassword(emailData).unwrap();
      if (response.success) {
        message.info("Look on your eamil for OTP");
        localStorage.setItem("email", email);
        navigate("/otp");
      } else {
        setError(response.message || "An unexpected error occurred.");
        message.error("something went wrong!");
      }
    } catch (err: any) {
      console.error("Request failed:", err);
      setError(
        err?.data?.message || "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <Form
        style={{ minWidth: "500px" }}
        className="bg-white shadow-md p-6 rounded-md w-full max-w-md"
        onFinish={onFinish}
        layout="vertical"
      >
        <p className="text-center text-3xl uppercase">Forget Password</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Enter a valid email address" },
          ]}
        >
          <Input
            type="email"
            placeholder="Email"
            className="h-11 bg-white text-black rounded px-3 focus:outline-none focus:ring focus:ring-orange-500"
          />
        </Form.Item>

        <button
          className="sidebar-button-orange"
          style={{ justifyContent: "center" }}
          disabled={isLoading}
        >
          {isLoading ? "Sending OTP..." : "Send Verify OTP"}
        </button>
      </Form>
    </div>
  );
};

export default ForgetPassword;
