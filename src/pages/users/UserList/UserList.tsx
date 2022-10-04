import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import {
  User,
  useRemoveUserMutation,
  useUsersQuery,
} from "../../../generated/graphql";

const UserList = () => {
  const { data, loading } = useUsersQuery();
  const [removeUser] = useRemoveUserMutation({ refetchQueries: ["users"] });
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
      title: "Action",
      key: "action",
      render: (_, user) => (
        <Space size="middle">
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() =>
              removeUser({
                variables: { id: Number(user.id) },
              })
            }
          />
        </Space>
      ),
    },
  ];

  // TODO: Resolve this error
  return <Table columns={columns} loading={loading} dataSource={data?.users} />;
};

export default UserList;
