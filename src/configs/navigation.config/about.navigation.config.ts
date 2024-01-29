/** @format */

import type { NavigationTree } from "@/@types/navigation";
import {
  NAV_ITEM_TYPE_ITEM,
} from "@/constants/navigation.constant";
import { ADMIN, USER } from "@/constants/roles.constant";
import { APP_PREFIX_PATH } from "@/constants/route.constant";

const aboutNavigationConfig: NavigationTree[] = [
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/about`,
    title: "ABOUT",
    translateKey: "nav.Dashboards",
    icon: "",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER],
    subMenu: [],
  },
];
export default aboutNavigationConfig;
