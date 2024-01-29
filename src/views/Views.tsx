/** @format */

import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import type { LayoutType } from "@/@types/theme";
import AppRoute from "@/components/route/AppRoute";
import AuthorityGuard from "@/components/route/AuthorityGuard";
import ProtectedRoute from "@/components/route/ProtectedRoute";
import PublicRoute from "@/components/route/PublicRoute";
import Loading from "@/components/shared/Loading";
import PageContainer from "@/components/template/PageContainer";
import appConfig from "@/configs/app.config";
import { protectedRoutes, publicRoutes } from "@/configs/routes.config";
import { useAppSelector } from "@/store";
import useHistoryTracker, {
  HistoryContext,
} from "@/utils/hooks/useHistoryTracker";

interface ViewsProps {
  pageContainerType?: "default" | "gutterless" | "contained";
  layout?: LayoutType;
}

type AllRoutesProps = ViewsProps;

const { authenticatedEntryPath } = appConfig;

const AllRoutes = (props: AllRoutesProps) => {
  const { authority, pagePermission } = useAppSelector(
    (state) => state.auth.user
  );
  const historyStack = useHistoryTracker();
  return (
    <HistoryContext.Provider value={historyStack}>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path="/"
            element={<Navigate replace to={authenticatedEntryPath} />}
          />
          {protectedRoutes.map((route, index) => (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <AuthorityGuard
                  userAuthority={authority}
                  authority={route.authority}
                  pagePermission={pagePermission}
                  routeKey={route.key}
                >
                  <PageContainer {...props} {...route.meta}>
                    <AppRoute
                      routeKey={route.key}
                      component={route.component}
                      {...route.meta}
                    />
                  </PageContainer>
                </AuthorityGuard>
              }
            />
          ))}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AppRoute
                  routeKey={route.key}
                  component={route.component}
                  {...route.meta}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </HistoryContext.Provider>
  );
};

const Views = (props: ViewsProps) => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <AllRoutes {...props} />
    </Suspense>
  );
};

export default Views;
