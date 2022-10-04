import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import { useNavigate } from "react-router-dom";
import {
  User,
  useRemoveUserMutation,
  useUsersQuery,
} from "../../../generated/graphql";

const UserList = () => {
  const { data, loading } = useUsersQuery();
  const [removeUser] = useRemoveUserMutation({ refetchQueries: ["users"] });
  const navigate = useNavigate();
  const columns: ColumnsType<User> = [
    {
      title: "Imię",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Nazwisko",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rola",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, user) => (
        <Space size="middle">
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              removeUser({
                variables: { id: Number(user.id) },
              });
            }}
          />
        </Space>
      ),
    },
  ];

  // TODO: Resolve this error
  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={data?.users}
      onRow={(user) => ({
        onClick: () => navigate(user.id),
      })}
    />
  );
};

export default UserList;
