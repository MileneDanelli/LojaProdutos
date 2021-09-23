import React from 'react';
import Feed from './Feed';

const FeedGeneral = ({ user }) => {
  return (
    <div>
      <Feed user={user} />
    </div>
  );
};

export default FeedGeneral;
