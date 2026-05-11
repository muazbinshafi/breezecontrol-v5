import { Link } from "@tanstack/react-router";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<ComponentProps<typeof Link>, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <Link
        ref={ref as never}
        {...(props as ComponentProps<typeof Link>)}
        activeProps={{ className: cn(className, activeClassName) }}
        inactiveProps={{ className: cn(className, pendingClassName) }}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
