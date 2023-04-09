import { useRouter } from "next/router";

function userId() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h2>User Id</h2>
    </div>
  );
}

export default userId;
