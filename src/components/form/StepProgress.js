import { ReactComponent as Complete } from "../../assets/icons/complete.svg";

export default function StepProgress({ shopStage }) {
  return (
    <div className="step-progress">
      <h3>結帳</h3>
      <div
        className="step-group"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="step-group-1 step-group-sub">
          {shopStage > 1 ? (
            <div className="step-group-sub-icon">
              <Complete />
            </div>
          ) : (
            <div className="step-group-sub-icon">1</div>
          )}
          <p>寄送地址</p>
        </div>
        <div className="step-group-line"></div>
        <div className="step-group-2 step-group-sub">
          {shopStage > 2 ? (
            <div className="step-group-sub-icon">
              <Complete />
            </div>
          ) : (
            <div
              className="step-group-sub-icon"
              style={{
                borderColor: shopStage === 2 ? "#2a2a2a" : "gray",
                color: shopStage === 2 ? "#2a2a2a" : "gray",
              }}
            >
              2
            </div>
          )}
          <p style={{ color: shopStage === 2 ? "#2a2a2a" : "gray" }}>
            運送方式
          </p>
        </div>
        <div className="step-group-line"></div>
        <div className="step-group-3 step-group-sub">
          {shopStage > 3 ? (
            <div className="step-group-sub-icon">
              <Complete />
            </div>
          ) : (
            <div
              className="step-group-sub-icon"
              style={{
                borderColor: shopStage === 3 ? "#2a2a2a" : "gray",
                color: shopStage === 3 ? "#2a2a2a" : "gray",
              }}
            >
              3
            </div>
          )}
          <p style={{ color: shopStage === 3 ? "#2a2a2a" : "gray" }}>
            付款資訊
          </p>
        </div>
      </div>
    </div>
  );
}
