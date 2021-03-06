const mongoose = require('mongoose');
const Role = require('mongoose').model('Role')
const encryption = require('./../utilities/encryption');
const ObjectId = mongoose.Schema.Types.ObjectId

let userSchema = mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        passwordHash: {type: String, required: true},
        fullName: {type: String, required: true},
        articles: [{type: ObjectId, ref: 'Article'}],
        roles: [{type: ObjectId, ref: 'Role'}],
        salt: {type: String, required: true}
    }, {
        usePushEach: true
    }
);

userSchema.method({
    authenticate: function (password) {
        let inputPasswordHash = encryption.hashPassword(password, this.salt);
        let isSamePasswordHash = inputPasswordHash === this.passwordHash;

        return isSamePasswordHash;
    },

    isAuthor: function (article) {
        if(!article){
            return false
        }

        let isAuthor = article.author.equals(this.id)

        return isAuthor
    },

    isInRole: function(roleName){
        return Role.findOne({name: roleName}).then(role=>{
            if(!role){
                return false
            }

            let isInRole = this.roles.indexOf(role.id) !== -1
            return isInRole
        })
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.seedAdmin = () => {
    let email = 'admin'

    User.findOne({email: email}).then(admin => {
        if (admin) {
            return
        }

        Role.findOne({name: 'Admin'}).then(role => {

            if (!role) {
                return
            }

            let salt = encryption.generateSalt();
            let passwordHash = encryption.hashPassword('1234', salt);

            let adminUser = {
                email: email,
                fullName: 'Admin',
                roles: [role.id],
                salt: salt,
                passwordHash: passwordHash
            }

            User.create(adminUser).then(user => {
                role.users.push(user.id)
                role.save(err=>{
                    if(err){
                        console.log(err.message)
                    }else{
                        console.log("Successful")
                    }
                })
            })

        })
    })
}




