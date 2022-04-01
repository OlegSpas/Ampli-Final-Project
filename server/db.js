var fs = require('fs');

function Read(tableName) {
    try {
        const data = fs.readFileSync(`./tables/${tableName}.json`, "utf8");

        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

function Write(data, tableName) {
    fs.writeFile(`./tables/${tableName}.json`, JSON.stringify(data), () => {});
}

class DBData {
    constructor(identificator) {
        this.identificator = identificator;
        this.Data = Read(this.identificator);
    }

    Save = () => {
        Write(this.Data, this.identificator);
    }

    Find = (id) => {
        return this.Data[this.Data.findIndex(item => item.id === id)];
    }

    GetNextId = () => {
        let nextId = Math.max(...this.Data.map(item => item.id)) + 1;
        if (nextId > 0)
            return nextId;
        return 0;
    }

    Add(newElement){
        this.Data.push({ id: this.GetNextId(), ...newElement });
    }
}

class Messages extends DBData {
    constructor() {
        super("messages")
    }

    GetMessagesToBlog = (blogId) => {
        return this.Data.filer(message => message.blogId === blogId)
    }

    Add = (ownerId, blogId, text = null, date = null) => {
        if (typeof(ownerId) === 'number' || ownerId < 0 || typeof(blogId) === 'number' || blogId < 0) {
            throw "Should be owner and blog";
        }

        super.Add({
            ownerId,
            blogId,
            text,
            date
        })
    }
}


class Blogs extends DBData {
    constructor() {
        super("blogs")
    }

    Add = (ownerId, question, date = null) => {
        if (typeof(ownerId) === 'number' || ownerId < 0 || typeof(question) === 'string') {
            throw "Should be owner";
        }

        super.Add({
            ownerId,
            question,
            date
        })
    }
}

class Users extends DBData {
    constructor() {
        super("users")
    }
    

    Add = (name, login, password, surname, age = null, avatar = null, job = null, registrationDate = null, skype = null, email = null) => {

        // if (typeof(name) === 'string' || typeof(surname) === 'string') {
        //     throw "Should be name and surname";
        // }

        super.Add({
            name,
            surname,
            login,
            password,
            age,
            avatar,
            registrationDate,
            skype,
            email,
            job
        })
    }

    isAvailableLogin = (login) => {
        return this.Data.findIndex(item => item.login === login) === -1;
    }
    FindUserByLoginPassword = (login, password) => {
        return this.Data[this.Data.findIndex(item => item.login === login && item.password === password)];
    }
}
class Bonus extends DBData {
    constructor() {
        super("bonus")
    }
    Add = (userId,salaryGrowth)=> {
        super.Add({
            userId,
            salaryGrowth
        })
    }
}

class Letters extends DBData {
    constructor() {
        super("letters")
    }

    Add = (topic, content, datesent, senderID, recieverID) => {
        // if (typeof(name) === 'string' || typeof(surname) === 'string') {
        //     throw "Should be name and surname";
        // }

        super.Add({
            topic,
            content,
            datesent,
            senderID,
            recieverID,
        })
    }
    GetLettersToReciever = (userId) => {
        return this.Data.filter(letter => letter.recieverID === userId)
    }
}

module.exports.Read = Read;
module.exports.Write = Write;
module.exports.Bonus = Bonus;
module.exports.Users = Users;
module.exports.Blogs = Blogs;
module.exports.Messages = Messages;
module.exports.Letters= Letters;