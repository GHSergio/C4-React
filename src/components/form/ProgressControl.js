import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/FontAwesome";

export default function ProgressControl({ step, setStep }) {
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
      <span style={{ visibility: step === 1 ? "hidden" : "visible" }}>
        <button onClick={() => setStep(step - 1)}>
          <ArrowLeftIcon />
          上一步
        </button>
      </span>
      <button onClick={() => step !== 3 && setStep(step + 1)}>
        {step === 3 ? "確認下單" : "下一步"}
        <ArrowRightIcon />
      </button>
    </div>
  );
}
