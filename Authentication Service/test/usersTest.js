const UsersRepository = require('../usersRepository')
const expect = require('chai').expect

describe('User repository',function(){

    beforeEach(function () {
        this._users = new UsersRepository()
        this.name = 'user'
        this.password = 'password'
    })

    describe('#addUser',function(){

        it('should add user to rep',function(){
            const oldCount = this._users.count()

            this._users.addUser(this.name,this.password)

            expect(this._users.count()).to.be.equal(oldCount + 1)
        })

        it('should throw "user already exist" error',function(){

            this._users.addUser(this.name,this.password)
            expect(() => {this._users.addUser(this.name,this.password)}).to.throw(Error,'user already exist')

        })
    })
    describe('#checkUser',function(){
        it('should return true',function(){
            this._users.addUser(this.name,this.password)
            correct = this._users.checkUser(this.name,this.password)

            expect(correct).to.be.true
        })
    })
    describe('#_hash',function(){
        it('same strings hash should be equal',function(){
            const hash1 = this._users._hash(this.name)
            const hash2 = this._users._hash(this.name)

            expect(hash1).to.be.equal(hash2)
        })
    })
})