import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Tag } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import { useNavigate } from "react-router-dom";
import {
  Group,
  Student,
  useGroupsQuery,
  User,
  useRemoveGroupMutation,
} from "../../../generated/graphql";

const GroupList = () => {
  const { data, loading } = useGroupsQuery();
  const [removeGroup] = useRemoveGroupMutation({ refetchQueries: ["groups"] });
  const navigate = useNavigate();

  const columns: ColumnsType<Group> = [
    {
      title: "Nazwa",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Semestr",
      dataIndex: "semester",
      key: "semester",
    },
    {
      title: "Wychowawca",
      dataIndex: "educator",
      key: "educator",
      render: (educator) => (
        <div>
          {educator?.user.firstName} {educator?.user.lastName}
        </div>
      ),
    },
    {
      title: "Uczniowie",
      dataIndex: "students",
      key: "students",
      render: (students: Student[]) => (
        <div>
          {students.map(({ user }) => (
            <Tag key={user.id}>
              {user.firstName} {user.lastName}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, group) => (
        <Space size="middle">
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              removeGroup({
                variables: { id: Number(group.id) },
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
      dataSource={data?.groups}
      onRow={(user) => ({
        onClick: () => navigate(user.id),
      })}
    />
  );
};

export default GroupList;
