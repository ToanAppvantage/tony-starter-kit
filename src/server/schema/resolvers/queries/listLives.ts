import { GraphQLQueryResolvers } from '../definitions';
import { getDatabaseContext, Life } from '../../../database';

const query: GraphQLQueryResolvers['listLives'] = async () => {
    const { collections } = await getDatabaseContext();

    return collections.lives.find().toArray();
};

export default query;
