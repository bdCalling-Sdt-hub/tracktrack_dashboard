import { useState } from "react";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { usePostLoginInofMutation } from "../../Redux/api/authApis";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [login, { isLoading }] = usePostLoginInofMutation();
  const navigate = useNavigate();

  const onFinish = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await login({ email, password }).unwrap();
      if (response.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        navigate("/");
      } else {
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (err: any) {
      setError(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <Form
        className="bg-white shadow-md p-6 rounded-md w-full max-w-md"
        onFinish={onFinish}
        layout="vertical"
      >
        <h2 className="text-center text-2xl font-semibold text-black mb-6">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <Form.Item
          name="email"
          label={<span className="bg-white text-black">Email</span>}
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-11 bg-white text-black rounded px-3 focus:outline-none focus:ring focus:ring-orange-500"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="text-black">Password</span>}
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password
            placeholder="Enter your password"
            className="h-11 bg-white text-black rounded px-3 focus:outline-none focus:ring focus:ring-orange-500"
          />
        </Form.Item>

        <button
          type="submit"
          className={`w-full py-2 mt-4 rounded text-black font-medium ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-400"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center text-black">
          Forgot your password?{" "}
          <Link to="/forget-password" className="text-orange-500 underline">
            Reset password
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
