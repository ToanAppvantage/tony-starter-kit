import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (
    root,
    { title, firstname, lastname, description, birthday, hobbies },
    { getTranslations }
) => {
    const { collections } = await getDatabaseContext();


    const newID = new ObjectId();

    const document: Life = {
        _id: newID,
        title,
        firstName: firstname,
        lastName: lastname,
        birthday: new Date(birthday * 1),
        description,
        hobbies
        
    };
    
    await collections.lives.insertOne(document);
    
    return document;
};

export default mutation;
