const resolvers = {
  Query: {
    allCats: async (parent, args, { Cat }) => {
      // { _id: 123123, name: "whatever"}
      const cats = await Cat.find();
      return cats.map((x) => {
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
    createCat: async (parent, args, { Cat }) => {
      // { _id: 123123, name: "whatever"}
      const kitty = await new Cat(args).save();
      kitty._id = kitty._id.toString();
      return kitty;
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
