/** @format */

import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import useAuthority from "@/utils/hooks/useAuthority";
import useCheckRoutePermission from "@/utils/hooks/useCheckRoutePermission";

type AuthorityGuardProps = PropsWithChildren<{
  userAuthority?: string[];
  authority?: string[];
  pagePermission?: string[];
  routeKey: string | undefined;
}>;

const AuthorityGuard = (props: AuthorityGuardProps) => {
  const {
    userAuthority = [],
    authority = [],
    children,
    pagePermission,
    routeKey,
  } = props;

  const roleMatched = useAuthority(userAuthority, authority);
  const routePermission = useCheckRoutePermission(
    pagePermission,
    routeKey as string,
  );

  return (
    <>
      {roleMatched ? (
        routePermission ? (
          children
        ) : (
          <Navigate to="/access-denied" />
        )
      ) : (
        <Navigate to="/access-denied" />
      )}
    </>
  );
};

export default AuthorityGuard;
