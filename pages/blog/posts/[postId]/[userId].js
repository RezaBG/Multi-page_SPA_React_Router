import { useRouter } from "next/router";

function UserPost() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h2>User Post</h2>
    </div>
  );
}

export default UserPost;
