export default {
  Query: {
    allStorage: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const DBStrings = await DBString.find();
      return DBStrings.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    createDBString: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const individual = await new DBString(args).save();
      individual._id = individual._id.toString();
      return individual;
    },
  },
};
