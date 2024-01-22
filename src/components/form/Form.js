import React from "react";
import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import "../../styles/form.scss";

const Form = () => {
  return (
    <div className="form-container" style={{ width: "50%" }}>
      <StepProgress />
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      <ProgressControl />
    </div>
  );
};

export default Form;
