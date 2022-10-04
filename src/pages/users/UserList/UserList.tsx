import { List } from "antd";
import { useUsersQuery } from "../../../generated/graphql";

const UserList = () => {
  const { data, loading } = useUsersQuery();

  return (
    <List
      size="large"
      bordered
      split
      loading={loading}
      dataSource={data?.users}
      renderItem={({ firstName, lastName }, index) => (
        <List.Item>
          {index + 1}. {firstName} {lastName}
        </List.Item>
      )}
    />
  );
};

export default UserList;
