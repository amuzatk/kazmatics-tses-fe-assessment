
"use client";

import { useGetPostsQuery, useGetUsersQuery } from "@/features/api/apiSlice";

export default function DashboardPage() {
  const { data: posts, isLoading: postsLoading } = useGetPostsQuery();
  const { data: users, isLoading: usersLoading } = useGetUsersQuery();

  if (postsLoading || usersLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-8">
      <h2 className="font-bold text-yellow-950 text-4xl">
        RTK ToolKit & RTK Query Demonstration
      </h2>
      <h2 className="font-bold text-yellow-950 text-4xl">Users List:</h2>

      {users?.map((user) => (
        <p className="font-bold text-amber-600" key={user.id}>
          {user.name}
        </p>
      ))}

      <h2 className="font-bold text-yellow-950 text-4xl pt-9">Posts List:</h2>

      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}