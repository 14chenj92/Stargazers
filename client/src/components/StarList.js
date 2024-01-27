import React from "react";
import { Link } from "react-router-dom";
import "../styles/StarList.css";

const StarList = ({
  thoughts,
  quotetitle,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h2>No Stars Yet</h2>;
  }

  return (
    <div className="starPage">
      {showTitle}
      <h2>Star Posts</h2>
      {thoughts &&
        thoughts.map((thought) => (
          <div className="startalk-section">
            <div className="thought-posts">
              <div className="container postBox">
                <div key={thought._id} className="mb-4">
                  <div className="titleBox">
                    <div className="titleText">{thought.title}</div>
                    <div className="usernameText">
                      {thought.thoughtAuthor} saw this star on{" "}
                      {thought.createdAt}
                    </div>
                  </div>
                  <div className="textBox p-2 mt-2">
                    <span>{thought.thoughtText}</span>
                  </div>
                </div>
                <div className="">
                  <Link className="btn" to={`/thoughts/${thought._id}`}>
                    Comment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StarList;
