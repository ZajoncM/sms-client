import { Card, PageHeader, Tabs, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useGroupQuery } from "../../../generated/graphql";
import Courses from "./Courses/Courses";
import UpdateUserForm from "./UpdateGroupForm/UpdateGroupForm";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading } = useGroupQuery({
    variables: { id: Number(id) },
  });

  if (!data || loading) return <div>Loading...</div>;

  return (
    <>
      <PageHeader onBack={() => navigate(-1)} title="Edytuj klasę" />

      <Card>
        <PageHeader title="Dane Ogólne" />
        <UpdateUserForm group={data.group} />
      </Card>
      <Card>
        <PageHeader title="Kursy" />
        <Courses courses={data.group.courses} groupId={data.group.id} />
      </Card>
    </>
  );
};

export default UpdateUser;
