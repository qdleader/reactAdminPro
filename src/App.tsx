import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import Router from "./routes";

const App = () => {
  return (
    <HashRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ed6c00"
          }
        }}
      >
        <Router />
      </ConfigProvider>
    </HashRouter>
  );
};

export default App;
