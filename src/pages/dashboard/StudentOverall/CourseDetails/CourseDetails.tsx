import { Collapse } from "antd";
import { CourseDetailsFieldsFragment } from "../../../../generated/graphql";

type Props = {
  course: CourseDetailsFieldsFragment;
};

const CourseDetails = ({ course }: Props) => {
  return <p>test</p>;
};

export default CourseDetails;
