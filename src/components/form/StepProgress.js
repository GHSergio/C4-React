import { ReactComponent as Complete } from "../../assets/icons/complete.svg";

export default function StepProgress({ step }) {
  return (
    <div className="step-progress">
      <h3>結帳</h3>
      <div
        className="step-group"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* CSS設定透明度,obvious則透明度:1 */}
        <div
          className={`step-group-1 step-group-sub ${
            step >= 1 ? "obvious" : ""
          }`}
        >
          {/* 三元運算,當step>1則添加勾勾,否則就顯示1 */}
          <div className="step-group-sub-icon">
            {step > 1 ? <Complete /> : 1}
          </div>
          <p>寄送地址</p>
        </div>
        <div className="step-group-line"></div>
        <div
          className={`step-group-2 step-group-sub ${
            step >= 2 ? "obvious" : ""
          }`}
        >
          <div className="step-group-sub-icon">
            {step > 2 ? <Complete /> : 2}
          </div>
          <p>運送方式</p>
        </div>
        <div className="step-group-line"></div>
        <div
          className={`step-group-3 step-group-sub ${
            step === 3 ? "obvious" : ""
          }`}
        >
          <div className="step-group-sub-icon">
            {step > 3 ? <Complete /> : 3}
          </div>
          <p>付款資訊</p>
        </div>
      </div>
    </div>
  );
}
