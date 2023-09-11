import useThemeStore from "@/stores/themeStore";
import ButtonSearch from "./ButtonSearch";
export default function Drawer(params) {
  const { theme } = useThemeStore();
  return (
    <div className="drawer" data-theme={theme} >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-auto pt-5">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Search pokemon
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <ButtonSearch />
        </ul>
      </div>
    </div>
  );
}
