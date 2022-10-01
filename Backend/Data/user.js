import bcrypt from 'bcryptjs';

const users = [
    {
        name:'Admin User',
        email:'admin@admin.com',
        password: bcrypt.hashSync('abc123',10),
        isAdmin:true
    },
    {
        name:'Rose',
        email:'rose@rose.com',
        password:bcrypt.hashSync('abc123',10),
    },
    {
        name:'Joe',
        email:'joe@joe.com',
        password:bcrypt.hashSync('abc123',10),
    },
]

export default users;