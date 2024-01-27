import React from 'react';
import { useQuery } from '@apollo/client';

import StarList from '../components/StarList';
import StarForm from '../components/StarForm';
import '../styles/StarList.css';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 mt-3 mb-3 p-3"
        >
          <StarForm />
        </div>
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <StarList
              thoughts={thoughts}
              quotetitle='"Keep your eyes on the stars, and your feet on the ground."'
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
