import { ObjectId } from "mongodb";
import { GraphQLQueryResolvers } from '../definitions';
import { getDatabaseContext } from '../../../database';

const query: GraphQLQueryResolvers['getLife'] = async (
    root,
    { id }
) => {
    const { collections } = await getDatabaseContext();

    const result = await collections.lives.findOne({ _id: new ObjectId(id) });
    return result;
};

export default query;
