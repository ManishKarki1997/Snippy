import { APP_ICONS } from "@/components/shared/AppIcons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { AuthUserAvatar } from "@/features/auth/components/AuthUserAvatar";
import { useUserStore } from "@/features/auth/hooks/useUserStore";

export const AppHeader = () => {
  const { logout } = useUserStore();

  return (
    <div className="w-full h-16 px-4 py-4 bg-background shadow border border-b border-gray-200 flex items-center justify-between">
      <Input
        className="w-full md:max-w-lg"
        placeholder="Search your snippets"
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <AuthUserAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 cursor-pointer">
              {APP_ICONS.ASTRONAUT({})}
              Profile
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 cursor-pointer">
              {APP_ICONS.SETTINGS({})}
              Settings
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout()}>
            <div className="flex items-center gap-2 cursor-pointer text-red-500">
              {APP_ICONS.LOGOUT({})}
              Logout
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
