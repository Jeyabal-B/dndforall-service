import { describe, test, it, expect } from "vitest";

const user = require('../controllers/userController');

describe('TestGetAllUsers', () => {
    it('should return all the user data', async () => {
        const users = await user.getAllUsers();
        console.log('Users found while unit testing getAllUsers: ', users);
        expect(users).toBeNull;
    });
}, 10000)

