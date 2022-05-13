import { ObjectId } from "mongodb";
import { GraphQLQueryResolvers } from '../definitions';
import { getDatabaseContext } from '../../../database';

const query: GraphQLQueryResolvers['getLife'] = async (
    root,
    { id }
) => {
    const { collections } = await getDatabaseContext();

    return collections.lives.findOne({ _id: id });
};

export default query;
