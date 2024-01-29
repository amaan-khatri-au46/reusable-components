import { useMemo, lazy, Suspense } from 'react'

import Loading from '@/components/shared/Loading'
import {
    LAYOUT_TYPE_SIMPLE,
} from '@/constants/theme.constant'
import useAuth from '@/utils/hooks/useAuth'
import useDirection from '@/utils/hooks/useDirection'
import useLocale from '@/utils/hooks/useLocale'

const layouts = {
    [LAYOUT_TYPE_SIMPLE]: lazy(() => import('./SimpleLayout')),
}

const Layout = () => {
    const layoutType = "simple"

    const { authenticated } = useAuth()

    useDirection()

    useLocale()

    const AppLayout = useMemo(() => {
        if (authenticated) {
            return layouts[layoutType]
        }
        return lazy(() => import('./AuthLayout'))
    }, [layoutType, authenticated])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout />
        </Suspense>
    )
}

export default Layout
