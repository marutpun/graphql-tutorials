const axios = require('axios');

const resolvers = {
  Query: {
    // Resolver has to match the appropriate schema by name.
    getUser: async () => {
      try {
        const users = await axios.get('https://api.github.com/users');
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = resolvers;
