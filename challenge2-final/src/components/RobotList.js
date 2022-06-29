import { useState } from 'react';
import { getRobot } from '../api/api';

const RobotList = () => {
  const [input, setInput] = useState('');
  const [robotList, setRobotList] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.length === 0) {
      setError('Please enter a robot name');
      return;
    }
    getRobot(input)
      .then((response) => {
        setRobotList([...robotList, input]);
        setInput('');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleRemove = (robot) => {
    setRobotList(robotList.filter((r) => r !== robot));
  };

  return (
    <div>
      <h2>Robot List</h2>
      <div>
        <input className="input" value={input} onChange={handleChange}></input>
        <button className="btn" onClick={handleClick}>
          Add Image
        </button>
      </div>
      <div className="list">
        {robotList.map((robot, i) => (
          <div className="robot" key={i} onClick={() => handleRemove(robot)}>
            <img
              src={`https://robohash.org/${robot}`}
              alt={`${robot}`}
              height="100px"
              width="100px"
            />
          </div>
        ))}
      </div>
      {error.length > 0 ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default RobotList;
