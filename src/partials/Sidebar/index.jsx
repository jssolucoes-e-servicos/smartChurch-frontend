import items from "~/configs/sidebar.json";
import { SectorImg, Sidebarcontaner } from "~/partials/AssideLeft/styles";
import SidebarItem from "./SidebarItem";
export default function Sidebar() {
  return (
    <Sidebarcontaner id="SiderMan">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </Sidebarcontaner>
  );
}
