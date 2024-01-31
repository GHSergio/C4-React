import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/FontAwesome";
import { useContext } from "react";
import { FormContext } from "./FormContext";
import { CartContext } from "../CartContext";

export default function ProgressControl({ step, setStep }) {
  const { formValues } = useContext(FormContext);
  const { cartTotal } = useContext(CartContext);

  const handleButtonClick = () => {
    if (step === 3) {
      console.log("formValues:", formValues);
      console.log("cartTotal:", cartTotal);
    }
  };

  const handleClick = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
    handleButtonClick();
  };

  return (
    <div
      className="progress-control"
      style={{
        borderTop: "1px solid ",
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* 假如step1,則隱藏 */}
      <span style={{ visibility: step === 1 ? "hidden" : "visible" }}>
        {/* click則觸發step-1 */}
        <button onClick={() => setStep(step - 1)}>
          <ArrowLeftIcon />
          上一步
        </button>
      </span>
      {/*符合ste !== 3, click則觸發step+1*/}
      <button onClick={handleClick}>
        {/* innerText的條件渲染 */}
        {step === 3 ? "確認下單" : "下一步"}
        <ArrowRightIcon />
      </button>
    </div>
  );
}
