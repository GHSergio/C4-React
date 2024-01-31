import { useContext } from "react";
import { FormContext } from "./FormContext";
import "../../styles/step3.scss";

export default function Step3() {
  //onChange --> 取得input value
  const { handleInputChange } = useContext(FormContext);

  return (
    <div className="step-content">
      <form className="" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body">
          <div className="">
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="">
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                name="cardName"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input
                type="text"
                placeholder="MM/YY"
                name="date"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input
                type="text"
                placeholder={123}
                name="CCV"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
