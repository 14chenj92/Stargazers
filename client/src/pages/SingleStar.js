import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleStar = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
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
  </div>
      <h2 className="m-3 p-4">
        <CommentList comments={thought.comments} />
      </h2>
      <div className="m-3 p-4">
        <CommentForm thoughtId={thought._id} />
      </div>
    </>
  );
};

export default SingleStar;
