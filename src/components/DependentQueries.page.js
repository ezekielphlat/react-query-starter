import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCoursesbyChannenlId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCoursesbyChannenlId(channelId), {
    enabled: !!channelId, // !! converts the value to boolean
  });
  return <div>DependentQueriesPage</div>;
};
