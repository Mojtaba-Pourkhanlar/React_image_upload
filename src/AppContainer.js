import { Route, Routes } from "react-router-dom";
import ShowData from "./components/ShowData";
import Content from "./Content";

const AppContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/gallery" element={<ShowData />} />
      </Routes>
    </>
  );
};

export default AppContainer;
