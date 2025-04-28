import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="container d-flex justify-content-center mt-5"
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="border shadow-lg p-4 rounded bg-white">
          <h1 className="text-center mb-4">Sign In</h1>
          <div className="form-group">
            <label>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
          {errors}
          <button type="submit" className="btn btn-primary mt-4 w-100">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};
