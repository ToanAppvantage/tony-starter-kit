import { gql, ApolloError } from '@apollo/client';
import { compare } from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { getDatabaseContext } from '../../server/database';
import {
    composeHandlers,
    loadFixtures,
    setupDatabase,
    cleanDatabase,
    setupWebService,
    getApolloClient,
} from '../helpers';
import fixtures from './authenticate.fixture.json';

const mutation = gql`
    mutation test(
        $title: String!
        $firstname: String!
        $lastname: String!
        $description: String!
        $birthday: String!
        $hobbies: [String!]
    ) {
        createLife(
            title: $title
            firstname: $firstname
            lastname: $lastname
            description: $description
            birthday: $birthday
            hobbies: $hobbies
        ) {
            _id
            birthday
            description
            firstName
            hobbies
            lastName
        }
    }
`;

const webService = setupWebService();

beforeEach(composeHandlers(setupDatabase, loadFixtures(fixtures), webService.initialize));

afterEach(composeHandlers(cleanDatabase, webService.cleanUp));

test('Create life successfully on valid inputs', async () => {
    const { client } = getApolloClient(webService.url);
    const variables = {
        birthday: '1652409659748',
        description: 'Test Description',
        firstname: 'Tien',
        hobbies: ['Soccer', 'Football'],
        lastname: 'Ngo',
        title: 'Mr',
    };
    const { data } = await client.mutate({ mutation, variables });
    const lifeId = new ObjectId(data.createLife._id);

    const { collections } = await getDatabaseContext();
    const life = await collections.lives.findOne({ _id: lifeId });
    expect(life).not.toBeNull();
});
