


function login(username, password) {
    if (password != "123456") {
        return {
            code: 1,
            errmsg: "password error"
        }
    } else {
        return {
            code: 0,
            user: {
                id: 1,
                username: username,
                gender: '男',
                age: 12,
            }
        }
    }
}

export default {
    login
}

