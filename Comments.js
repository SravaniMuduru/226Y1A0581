
import React, { useState, useEffect } from 'react';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://20.244.56.144/test/posts/${postId}/comments`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      <h2>Comments for Post ID: {postId}</h2>
      {isLoading ? (
        <p>Loading comments...</p>
      ) : (
        <ul>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))
          ) : (
            <p>No comments available for this post.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Comments;
