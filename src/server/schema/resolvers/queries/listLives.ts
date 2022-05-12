import { GraphQLQueryResolvers } from '../definitions';
import { getDatabaseContext, Life } from '../../../database';

const query: GraphQLQueryResolvers['listLives'] = async () => {
    const { collections } = await getDatabaseContext();

    const result = await collections.lives.find();
    return result.toArray();
};

export default query;
