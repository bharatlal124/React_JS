import { posts } from "./data";
import { usePostsValue } from "./postContext";

export const List = () => {
  // Use values from the context using the custom hook
  const { savePost, isPostSaved } = usePostsValue();

  return (
    <div className="list">
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <h3>{p.text}</h3>
          <img src={p.img} alt={p.text} />
          {/* Add the onclick event on the save button */}
          <img
            src={!isPostSaved(p) ? "https://cdn-icons-png.flaticon.com/512/102/102279.png" : "https://files.codingninjas.in/bookmark-26237.png"}
            alt="save"
            onClick={() => savePost(p)}
          />
        </div>
      ))}
    </div>
  );
};
