import { useContext, useState, useEffect } from 'react';
import { ContextConfig } from '../App';
import './style.css';

const UserList = () => {
  const context = useContext(ContextConfig);
  const [users, setUsers] = useState(context.users);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * users.length);
      const randomUser = users[randomNumber];
      randomUser.online = !randomUser.online;
      const usersCopy = users.filter((u) => u.name !== randomUser.name);
      setUsers([...usersCopy, randomUser]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <div>
        {users.map((user, i) => (
          <div key={i} className="user">
            <span className="username">{user.name}</span>
            <span className="status">
              <span className={`${user.online ? 'active' : 'inactive'}`}>
                &nbsp; &nbsp; &nbsp;
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
