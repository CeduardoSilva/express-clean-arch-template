const { categories, errorMessages } = require('../categories/categories');

const get = (categoryName) => {
    if(categoryName) {
        if(categoryName in categories) {
            return categories[categoryName];
        } else {
            throw new Error(errorMessages.CATEGORY_NOT_FOUND);
        }
    } else {
        return Object.values(categories);
    }
}

module.exports = { get };