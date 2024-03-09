import { APP_ICONS } from "@/components/shared/AppIcons";
import { AppLogo } from "@/components/shared/AppLogo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <header className="container flex items-center gap-8 h-16 ">
      <Link to="/">
        <AppLogo />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="#features">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#download">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Download
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="ml-auto">
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/register">
              <Button variant="ghost">Register</Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/app">
              <Button className="gap-3">
                {APP_ICONS.DASHBOARD({ size: 14 })}
                Dashboard
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
