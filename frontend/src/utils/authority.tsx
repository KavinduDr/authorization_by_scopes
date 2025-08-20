import { useUser } from "@asgardeo/react";
import React from "react";

/**
 * Reads current user authorities from localStorage.
 * Adapt this to read from your auth provider / user profile as needed.
 * Example: localStorage.setItem('user_authorities', JSON.stringify(['PLUGIN_EDIT','PLUGIN_VIEW']))
 */
export function GetCurrentUserAuthorities(): string[] {
  const user = useUser();
  const roles = user?.profile?.roles;
  return roles;
}

export function HasAllAuthorities(required: string[] = []): boolean {
  if (!required || required.length === 0) return true; // no requirement => allow
  const current = GetCurrentUserAuthorities();
  return required.every((r) => current.includes(r));
}

/**
 * Authorized component
 * - requiredAuthorities: array of authority strings required to render children
 * - fallback: optional node to render when not authorized (default: null)
 */
export const Authorized: React.FC<{
  requiredAuthorities?: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}> = ({ requiredAuthorities = [], fallback = null, children }) => {
  return HasAllAuthorities(requiredAuthorities) ? (
    <>{children}</>
  ) : (
    <>{fallback}</>
  );
};

/**
 * HOC: withAuthorization
 * Usage: export default withAuthorization(Component, ['SOME_AUTH'])
 */
export function WithAuthorization<P extends object>(
  Wrapped: React.ComponentType<P>,
  requiredAuthorities: string[]
) {
  return (props: P) => (
    <Authorized requiredAuthorities={requiredAuthorities}>
      <Wrapped {...props} />
    </Authorized>
  );
}
