import { NavigationTree } from "@/@types/navigation";
import { NAV_ITEM_TYPE_ITEM } from "@/constants/navigation.constant";
import { ADMIN, USER } from "@/constants/roles.constant";
import { APP_PREFIX_PATH } from "@/constants/route.constant";

const dashboardsNavigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: 'HOME',
    translateKey: 'nav.Dashboards',
    icon: 'welcome',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER], 
    subMenu: []
  },
]
export default dashboardsNavigationConfig;