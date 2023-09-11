export default function Drawer(params) {
  return (
    <div className="drawer">
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
          <li>
            <label htmlFor="pokename">Search by name</label>
          <input id="pokename" type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
          </li>
        </ul>
      </div>
    </div>
  );
}
