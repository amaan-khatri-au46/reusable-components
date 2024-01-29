/** @format */

import Header from "@/components/template/Header";
import HorizontalNav from "@/components/template/HorizontalNav";
import UserDropdown from "@/components/template/UserDropdown";
import { FaFacebookSquare } from "react-icons/fa";
import View from "@/views";

const HeaderActionsStart = () => {
  return (
    <div className="ml-14" style={{ fontSize: "22px" }}>
      {/* <FaFacebookSquare /> */}
    </div>
  );
};

const HeaderActionsEnd = () => {
  return (
    <div className="mr-14">
      <UserDropdown hoverable={false} />
    </div>
  );
};

const SimpleLayout = () => {
  return (
    <div className="app-layout-simple flex flex-auto flex-col min-h-screen">
      <div className="flex flex-auto min-w-0">
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <Header
            container
            className="sticky shadow dark:shadow-2xl"
            headerStart={<HeaderActionsStart />}
            headerMiddle={<HorizontalNav />}
            headerEnd={<HeaderActionsEnd />}
          />
          <View pageContainerType="contained" />
        </div>
      </div>
    </div>
  );
};

export default SimpleLayout;
