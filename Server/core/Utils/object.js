
const LoopThroughAllEntriesOfObject = (object, callback) => {
    if (!object) return
    for (const entry of Object.entries(object)) {
        callback(entry)
    }
}

module.exports = {
    LoopThroughAllEntriesOfObject
}