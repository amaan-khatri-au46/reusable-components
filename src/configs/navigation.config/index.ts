import type { NavigationTree } from '@/@types/navigation'

import dashboardsNavigationConfig from './deasboard.navigation.config'
import aboutNavigationConfig from './about.navigation.config'

const navigationConfig: NavigationTree[] = [
    ...dashboardsNavigationConfig,
    ...aboutNavigationConfig
]

export default navigationConfig
