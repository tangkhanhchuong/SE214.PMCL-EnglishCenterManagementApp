const KnexSyntax = require('../Database/postgres_query_syntax')

const FindAccounts = (queryObject) => {
    return KnexSyntax.Find({ table: "accounts", queryObject })
}

const CreateAccount = (newAccount) => {
    return KnexSyntax.Create({ table: "accounts", createdRow: newAccount })
}

const UpdateAccount = (accountId, updateAccount) => {
    return KnexSyntax.Update({
        table: "accounts",
        condition: {
            accountId
        },
        updatedRow: updateAccount
    })
}

const DeleteAccount = () => {

}

module.exports = {
    FindAccounts,
    CreateAccount,
    UpdateAccount,
    DeleteAccount

}