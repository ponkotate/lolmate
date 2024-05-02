import HeaderUser from "./HeaderUser";

export default function Header() {
  return (
    <div className="flex justify-between bg-white p-8">
      <div>
        <span>ろるめいと</span>
      </div>
      <HeaderUser />
    </div>
  );
}
