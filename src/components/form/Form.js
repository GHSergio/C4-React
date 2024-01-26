import { React, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import "../../styles/form.scss";

const Form = () => {
  const [step, setStep] = useState(1);
  // 對應每一個步驟的組件
  const steps = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
  };
  return (
    <div className="form-container" style={{ width: "50%" }}>
      <StepProgress step={step} />
      {/* 根據 step 的值來選擇要渲染的組件 */}
      {steps[step]}
      <ProgressControl setStep={setStep} step={step} />
    </div>
  );
};

export default Form;
