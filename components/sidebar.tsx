export default function Sidebar() {
  return (
    <div className="flex flex-col border-r border-t border-gray-200 bg-white">
      <SidebarItem />
    </div>
  );
}

const SidebarItem = () => (
  <div className="w-72 p-8">
    <span>test</span>
  </div>
);
