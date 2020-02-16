const User = require('.././models/users');
const mongoose = require('mongoose');
const DbTest = 'mongodb://localhost:27017/test';

beforeAll(async () => {
    await mongoose.connect(DbTest, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
})

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
})

describe('User Schema Test', () => {
    it('should be able to add new user', async () => {
        let user = await User.create({ 'fullname': "Santosh Maharjan" });
        expect(user.fullname).toMatch("Santosh Maharjan");
    })

    it('should be able to update user', async () => {
        let user = await User.findOne({
            'fullname': 'Santosh Maharjan'
        });
        user.fullname = 'Sabin Maharjan';

        let newUser = await user.save();
        expect(newUser.fullname).toBe('Sabin Maharjan');
    })

    it("should delete the User", async () => {
        let user = await User.findOneAndDelete({
            'fullname': 'Santosh Maharjan'
        })
            .then((response) => {
                expect(response.fullname).toBe('Santosh Maharjan')
            })
    })
})