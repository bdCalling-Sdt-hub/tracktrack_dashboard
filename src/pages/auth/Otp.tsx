import { useState } from "react";
import { Form, Input, Button } from "antd";
import { FormProps } from "antd/lib/form";
import { OtpFieldType } from "../../Types/DataTypes";
import { useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../../Redux/api/authApis";

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChange }) => {
  const [otpArray, setOtpArray] = useState<string[]>(Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/\d/.test(value) && value !== "") return;
    const newOtpArray = [...otpArray];
    newOtpArray[index] = value;
    setOtpArray(newOtpArray);

    if (value && index < length - 1) {
      const nextInput = document.getElementById(
        `otp-input-${index + 1}`
      ) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }

    onChange(newOtpArray.join(""));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      const prevInput = document.getElementById(
        `otp-input-${index - 1}`
      ) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div
      className="otp-input-container"
      style={{ display: "flex", gap: "8px" }}
    >
      {otpArray.map((_, index) => (
        <Input
          key={index}
          id={`otp-input-${index}`}
          value={otpArray[index]}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{ width: "40px", textAlign: "center" }}
        />
      ))}
    </div>
  );
};

const Otp: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [otp, setOtp] = useState<string>("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const navigate = useNavigate();

  const onFinish: FormProps<OtpFieldType>["onFinish"] = async () => {
    const email = localStorage.getItem("email");
    console.log("Submitting OTP:", otp);
    const data = {
      email: email,
      code: otp,
    };
    try {
      const response = await verifyOtp(data).unwrap();
      console.log("OTP Verified:", response);
      navigate("/reset-password");
    } catch (err) {
      console.error(err);
      setError("Invalid OTP. Please try again.");
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
        <p className="text-center text-3xl uppercase mb-5">Verify OTP</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* OTP Input Fields */}
        <Form.Item
          name="otp"
          rules={[{ required: true, message: "OTP is required" }]}
          className="flex items-center justify-center w-full"
        >
          <OtpInput length={6} onChange={(e) => setOtp(e)} />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          disabled={isLoading}
          style={{ backgroundColor: "#F1714F", padding: "20px" }}
        >
          {isLoading ? "Verifying OTP..." : "Verify OTP"}
        </Button>
      </Form>
    </div>
  );
};

export default Otp;
