import EventsWrite from "../../../../src/components/units/events/write/EventsWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_POST = gql`
  query fetchPost($postId: String!) {
    fetchPost(postId: $postId) {
      id
      title
      address
      description
      dateStart
      dateEnd
      category
      viewCount
      uploadedAt
      likedUsers {
        id
      }
    }
  }
`;

export default function EventsListPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_POST, {
    variables: { postId: router.query._id },
  });
  return <EventsWrite isEdit={true} data={data} />;
}
