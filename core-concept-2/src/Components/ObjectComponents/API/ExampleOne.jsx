import React, { useEffect, useState } from "react";

const ExampleOne = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, []);

  console.log(posts);
  

  return (
    <div>
      {
        console.log(posts)        
      }
      {
        posts.slice(0, 5).map(post => {
          return <p key={post.id}>{post.title}</p>
        })
      }
    </div>
  );
};

export default ExampleOne;
