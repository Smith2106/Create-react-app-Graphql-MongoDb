const resolvers = {
  Query: {
    allStorage: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const DBStrings = await DBString.find();
      return DBStrings.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    oneCat: async (parent, {name}, { Cat }) => {
      const oneKitty= await Cat.findOne({'name': name});
      return oneKitty;
    },
  },
  Mutation: {
    createDBString: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const individual = await new DBString(args).save();
      individual._id = individual._id.toString();
      return individual;
    },
    removeCat: async (parent, {name}, { Cat }) => {
      var oneKitty= await Cat.remove(Cat.findOne({'name': name}));
      const cats = await Cat.find();
      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
};

module.exports = resolvers;
