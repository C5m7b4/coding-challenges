import axios from 'axios';

async function getRobot(robotName) {
  let json = await axios({
    method: 'GET',
    cors: true,
    headers: {
      'Content-Type': 'application/json',
    },
    url: 'https://robohash.org/' + robotName,
  });

  return json;
}

export { getRobot };
