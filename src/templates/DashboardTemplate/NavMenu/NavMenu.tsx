import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { UserRoleEnum } from "../../../generated/graphql";
import { useUserContext } from "../../../providers/UserProvider";

type MenuItem = Required<MenuProps>["items"][number];

export const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  roles?: UserRoleEnum[],
  children?: MenuItem[],
  type?: "group"
) => ({
  key,
  icon,
  children,
  label,
  type,
  roles,
});

const allItems = [
  getItem("Kokpit", "dashboard", <HomeOutlined />),
  getItem("Użytkownicy", "users", <UserOutlined />, [UserRoleEnum.Admin]),
  getItem("Klasy", "groups", <UserOutlined />, [UserRoleEnum.Admin]),
];

const NavMenu = () => {
  const navigate = useNavigate();
  const currentUser = useUserContext();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };

  const items = allItems.filter(({ roles }) => {
    if (!roles) return true;

    if (!currentUser?.role) return false;

    return roles.includes(currentUser?.role);
  });

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, marginTop: 60 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default NavMenu;
