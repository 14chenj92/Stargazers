import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StarList.css';

const StarList = ({
  thoughts,
  quotetitle,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Stars Yet</h3>;
  }

  return (
    <div className="starPage">
      {showTitle && <h3>{quotetitle}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div className="starBox">
          <div className="container postBox">
          <div key={thought._id} className="mb-4">
            <div className='titleBox'><div className="titleText">{thought.title}</div> 
            <div className='usernameText'>{thought.thoughtAuthor} saw this star on {thought.createdAt}</div>
            </div>
            <div className="textBox p-2 mt-2">
              <span>{thought.thoughtText}</span>
            </div>
            </div>
            </div>
            <Link
              className="btn postBtn"
              to={`/thoughts/${thought._id}`}
            >
              Post your thoughts on this star.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default StarList;
