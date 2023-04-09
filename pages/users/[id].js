import { useRouter } from "next/router";

function userId() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  function showUserIdHandler() {
    // router.push("/users/reza");

    router.push({
      pathname: "/users/[id]",
      query: { id: "reza" },
    });
  }

  return (
    <div>
      <h2>User Id</h2>
      <button onClick={showUserIdHandler}>Show User ID</button>
    </div>
  );
}

export default userId;
