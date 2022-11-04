import { SectorImg, Sidebarcontaner } from "src/Components/AssideLeft/styles";
import items from "src/data/sidebar.json";
import SidebarItem from "./SidebarItem";
export default function Sidebar() {
  return (
    <Sidebarcontaner id="SiderMan">
      <SectorImg
        src="/assets/img/logo.png"
        width="100px"
        heigth="50px"
      />
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </Sidebarcontaner>
  );
}
