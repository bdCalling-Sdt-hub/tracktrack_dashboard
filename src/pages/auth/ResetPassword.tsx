import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../Redux/api/authApis";

const ResetPassword: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const onFinish = async ({
    newPassword,
    confirmPassword,
  }: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    const email = localStorage.getItem("email");

    if (!email) {
      setError("No email found. Please start the reset process again.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const resetData = {
      email: email,
      confirmPassword: confirmPassword,
      newPassword: newPassword,
    };

    try {
      const response = await resetPassword(resetData).unwrap();
      if (response.success) {
        message.success("Password reset successfully.");
        navigate("/login");
      } else {
        message.error(response.message);
        setError(response.message || "Failed to reset password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <Form
        className="bg-white shadow-md p-6 rounded-md w-full max-w-md"
        onFinish={onFinish}
        layout="vertical"
      >
        <h2 className="text-center text-2xl font-semibold mb-6">
          Reset Password
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            { required: true, message: "Please enter your new password." },
          ]}
        >
          <Input.Password placeholder="New Password" className="h-11" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[{ required: true, message: "Please confirm your password." }]}
        >
          <Input.Password placeholder="Confirm Password" className="h-11" />
        </Form.Item>

        <button
          type="submit"
          className={`w-full py-2 mt-4 rounded text-white font-medium ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-400"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Resetting Password..." : "Reset Password"}
        </button>
      </Form>
    </div>
  );
};

export default ResetPassword;
