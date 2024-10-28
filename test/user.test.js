import { describe, test, it, expect, vi } from "vitest";

const user = require('../controllers/userController');

describe('TestDeleteUser', () => {
    it('should delete the user data', async () => {
        const result = await user.deleteUser({body: {userId: 1000}});
        console.log('User deleted. Result received :', result);
        //expect(result.status).toBe(204);
    });
}, 5000)


describe('TestGetAllUsers', () => {
    it('should return all the user data', async () => {
        const users = await user.getAllUsers();
        console.log('Users found while unit testing getAllUsers: ', users);
        expect(users).not.toBeNull()
    });
}, 5000)