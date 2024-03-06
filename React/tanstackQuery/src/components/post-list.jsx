import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";

//----------------------------------------------------------------

const PostList = () => {
  const {
    data: postData,
    isLoading,
    error,
    isError
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

//----------------------------------------------------------------

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

//----------------------------------------------------------------

  const queryClient = useQueryClient();

//----------------------------------------------------------------

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
        queryClient.invalidateQueries(["posts"])
    }
  });

  //----------------------------------------------------------------


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if (!title || !tags) return;
    mutate({ id: postData.length + 1, title, tags });
    e.target.reset();
  };
  //----------------------------------------------------------------


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="postBox"
          name="title"
          placeholder="Enter your post..."
        />
        <div className="tags">
          {tagsData?.map((tag) => (
            <div key={tag}>
              <input name={tag} id={tag} type="checkbox" />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
      </form>
      {postData.map((post) => (
        <div key={post.id} className="post">
          <div>{post.title}</div>
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;
