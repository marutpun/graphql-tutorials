import React from 'react';

export default function Result({ loading, error, data, children }) {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return <div className="container">{children}</div>;
  }
}
