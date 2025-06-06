/* eslint-disable import/no-anonymous-default-export */
import { HomeIcon, LayoutDashboardIcon } from "lucide-react";

export default {
  index: {
    display: "hidden",
  },
  document: (
    <div className="flex items-center gap-2">
      <HomeIcon height="16" />
      Getting Started
    </div>
  ),
  component: (
    <div className="flex items-center gap-2">
      <LayoutDashboardIcon height="16" />
      Components
    </div>
  ),
};
