const fs = require('fs');
const users = JSON.parse(fs.readFileSync('user.json', 'utf-8')).users;

async function userSearch(req, res, next) {

  const { query, page, size } = req.body;
  let filteredUsers 
  if(query || page || size) {
     filteredUsers = users.filter((user) => {
      return Object.keys(query).every((key) => {
        if (query[key]) {
          return user[key] && user[key].toLowerCase().includes(query[key].toLowerCase());
        }
        return true;
      });
    });
  }

  const startIndex = (page - 1) * size;
  const paginatedUsers = filteredUsers?.slice(startIndex, startIndex + size);

  res.json({
    users: paginatedUsers,
    totalItems: filteredUsers?.length,
  });
}

module.exports = {
    userSearch,
}