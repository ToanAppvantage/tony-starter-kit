import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (
    root,
    { life },
    { getTranslations }
) => {
    const { collections } = await getDatabaseContext();

    const { title, firstname, lastname, description, birthday, hobbies } = life;

    const newID = new ObjectId();

    const document: Life = {
        _id: newID,
        title,
        firstName: firstname,
        lastName: lastname,
        birthday: birthday,
        description,
        hobbies
        
    };
    
    await collections.lives.insertOne(document);
    
    return document;
};

export default mutation;
