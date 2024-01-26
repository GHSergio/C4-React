import { ReactComponent as Complete } from "../../assets/icons/complete.svg";

export default function StepProgress({ step }) {
  return (
    <div className="step-progress">
      <h3>結帳</h3>
      <div
        className="step-group"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          className={`step-group-1 step-group-sub ${
            step === 1 ? "active" : step > 1 ? "checked" : ""
          }`}
        >
          {step > 1 ? (
            <div className="step-group-sub-icon">
              <Complete />
            </div>
          ) : (
            <div className="step-group-sub-icon">1</div>
          )}
          <p>寄送地址</p>
        </div>
        <div className="step-group-line"></div>
        <div
          className={`step-group-2 step-group-sub ${
            step === 2 ? "active" : step > 2 ? "checked" : ""
          }`}
        >
          {step > 2 ? (
            <div className="step-group-sub-icon">
              <Complete />
            </div>
          ) : (
            <div className="step-group-sub-icon">2</div>
          )}
          <p>運送方式</p>
        </div>
        <div className="step-group-line"></div>
        <div
          className={`step-group-3 step-group-sub ${
            step === 3 ? "active" : step > 3 ? "checked" : ""
          }`}
        >
          {step > 3 ? (
            <div className="step-group-sub-icon">
              <Complete />
            </div>
          ) : (
            <div className="step-group-sub-icon">3</div>
          )}
          <p>付款資訊</p>
        </div>
      </div>
    </div>
  );
}
