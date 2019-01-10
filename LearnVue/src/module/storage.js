/*jshint esversion:6 */
var storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
        localStorage.removeItem(key);
    }
};

export default storage;