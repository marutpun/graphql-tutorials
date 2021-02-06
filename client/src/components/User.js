import React from 'react';

export default function User({ user }) {
  return (
    <div className="col-3">
      <div className="card">
        <img alt="avatar" className="card-img-top" src={user.avatar_url} />
        <div className="card-body">
          <h5 class="card-title text-center">{user.login}</h5>
          <a
            href={`https://github.com/${user.login}`}
            className="btn btn-link"
            target="_blank"
            rel="noreferrer"
          >
            See profile
          </a>
        </div>
      </div>
    </div>
  );
}
