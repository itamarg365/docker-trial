let users = {};

function addUser(username,password)
{
    if(username == undefined || username === ""  || password == undefined || password === ""){
        return;
    }

    if(users.contains(username)){
        return;
    }

    users[username] = password.hash;
}
//
// function getUser(username){
//     if(username == undefined || username === "" ){
//         return;
//     }
//     return users[username];
// }

function checkUser(username,password){

    if(username == undefined || username === ""  || password == undefined || password === ""){
        return;
    }
    return users[username].hash == password.hash;
}

function removeUser(username){
    if(username == undefined || username === ""){
        return;
    }
    if(users.has(username)){
        delete users[username];
    }
}