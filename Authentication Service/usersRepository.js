module.exports = class UsersRepository{
    constructor(){
        this.users = {}
    }

    get Users(){return this.users.keys}

    addUser(username,password)
    {
        if(typeof(username) !== 'string' || typeof(password) !== 'string' ){
            throw new TypeError('username and password must be of string type')
        }

        else if(username == '' || password == ''){
            throw new Error('username and password must not be empty strings')
        }

        if(this.users.hasOwnProperty(username)){
            throw new Error('user already exist')
        }

        this.users[username] = this._hash(password);
    }

    count()
    {
        var size = 0, key;
        for (key in this.users) {
            if (this.users.hasOwnProperty(key)) size++;
        }
        return size;
    }

    checkUser(username,password){

        if(typeof(username) !== 'string' || typeof(password) !== 'string' ){
            throw new TypeError('username and password must be of string type')
        }

        else if(username == '' || password == ''){
            throw new Error('username and password must not be empty strings')
        }

        else if(!this.exist(username) || typeof(this.users[username]) === 'undefined'){
            return false
        }
        return this.users[username] == this._hash(password)
    }

    exist(username){
        return this.users.hasOwnProperty(username)
    }

    removeUser(username){
        if(typeof(username) !== 'string'){
            throw new TypeError('username must be of string type')
        }

        else if(username == '' ){
            throw new Error('username must not be empty strings')
        }

        if(this.exist(username)){
            delete this.users[username];
        }
    }

    _hash(str){
        var hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; i++) {
            chr   = str.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

}
