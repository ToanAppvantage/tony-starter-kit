
import { GraphQLLifeResolvers } from '../definitions';

const LifeGraphQL: GraphQLLifeResolvers = {
   id: root => root._id,
   birthday: root => new Date(root.birthday).toLocaleDateString(),
   fullName: root => root.firstName + ' ' + root.lastName
};

export default LifeGraphQL;
