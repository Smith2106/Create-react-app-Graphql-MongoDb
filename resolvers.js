const resolvers = {
  Query: {
    allStorage: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const dbstrings = await DBString.find();
      return dbstrings.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    oneDBString: async (parent, {name}, { DBString }) => {
      const individual = await DBString.findOne({'name': name});
      return individual;
    },
  },
  Mutation: {
    createDBString: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const individual = await new DBString(args).save();
      individual._id = individual._id.toString();
      return individual;
    },
    removeDBString: async (parent, {name}, { DBString }) => {
      const individual = await DBString.remove(DBString.findOne({'name': name}));
      const dbstrings = await DBString.find();
      return dbstrings.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
};

module.exports = resolvers;
