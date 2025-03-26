import { useState } from "react";
import { useNavigate } from "react-router";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth0();
  const navigate = useNavigate();

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleProfileClick = () => {
    closeDropdown();
    navigate('/profile');
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-gray-800 dark:text-white/90">
            {user?.name || "User"}
          </span>
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            {user?.email || "user@example.com"}
          </span>
        </span>

        <span className="relative flex-shrink-0 size-11">
          <img
            src={user?.picture || "/images/user/user-01.png"}
            alt="User"
            className="rounded-full"
          />
        </span>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-4 w-[230px] rounded-lg border border-gray-200 bg-white p-2 shadow-theme-dropdown dark:border-gray-800 dark:bg-gray-dark"
      >
        <DropdownItem
          className="mb-2 flex items-center gap-3.5 rounded-lg px-4 py-2 text-sm text-gray-800 duration-200 hover:bg-gray-100 dark:text-white/90 dark:hover:bg-white/5"
          onItemClick={handleProfileClick}
        >
          My Profile
        </DropdownItem>

        <DropdownItem
          className="flex items-center gap-3.5 rounded-lg px-4 py-2 text-sm text-gray-800 duration-200 hover:bg-gray-100 dark:text-white/90 dark:hover:bg-white/5"
          onItemClick={() => {
            closeDropdown();
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          Sign Out
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
