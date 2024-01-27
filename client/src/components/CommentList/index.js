import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h2
        style={{ textAlign: "center", fontSize: "56px" }}
      >
        Comments
      </h2>
      <div className="postBox">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12">
              <div className="p-3 text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
