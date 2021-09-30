import { useToast } from "../../Contexts";
import "./Toast.css";
export const Toast = () => {
  const { toastMessage, setToastDisplay } = useToast();
  return (
    <div className="component">
      <div className="alert-demo">
        <div className="alert type-success">
          <script src="https://cdn.lordicon.com//libs/frhvbuzj/lord-icon-2.0.2.js"></script>
          <lord-icon
            src="https://cdn.lordicon.com//ssdupzsv.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{ width: "12%", height: "auto" }}
          ></lord-icon>
          <p>{toastMessage}</p>
          <button className="close">
            <i
              className="fas fa-times"
              onClick={() => setToastDisplay("none")}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
