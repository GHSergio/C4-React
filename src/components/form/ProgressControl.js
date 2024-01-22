import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/FontAwesome";
export default function ProgressControl() {
  return (
    <div
      className="progress-control"
      style={{ borderTop: "1px solid ", paddingTop: "10px" }}
    >
      <button>
        <ArrowLeftIcon />
        上一步
      </button>
      <button>
        下一步
        <ArrowRightIcon />
      </button>
    </div>
  );
}
