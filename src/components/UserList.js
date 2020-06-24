import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSuccess, fetchFailed } from './../store/actions/actions';
import { fetchUsers } from './../api/remote';
import User from './User';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      try {
        const data = await fetchUsers();
        dispatch(fetchSuccess(data));
        setUsers(data);
      } catch (err) {
        dispatch(fetchFailed(err));
      }
    })();
  }, []);

  return (
    <div className="w3-container">
        {users.map((user, index) => 
          <User
            key={index}
            id={user.id}
          />
        )}
    </div>
  )
}