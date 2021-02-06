import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Result from './components/Result';
import User from './components/User';

export default function App() {
  const GET_USERS = gql`
    {
      getUser {
        id
        login
        avatar_url
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  return (
    <Result error={error} loading={loading} data={data}>
      <div className="row">
        {data?.getUser?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </Result>
  );
}
