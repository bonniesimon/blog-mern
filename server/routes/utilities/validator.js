const validator = (username, password) => {
    if(!username || !password){
        return 0;
    }
    return 1;
}

module.exports = validator;