const { categories } = require('../categories/categories');

const errorMessages = {
    MISSING_CONSUMPTION: "Missing consumption for one or more subcategories",
};

const emission = (consumption, factor) => {
    return consumption * factor;
}

const calculateEmissions = (consumptionBySubcategory, categoryName) => {
    const category = categories[categoryName];
    const emissions = {};
    category.subcategories.forEach(subcategory => {
        if(consumptionBySubcategory[subcategory.name]) {
            emissions[subcategory.name] = emission(consumptionBySubcategory[subcategory.name], subcategory.factor);
        } else {
            throw new Error(errorMessages.MISSING_CONSUMPTION);
        }
    });
    emissions[categoryName] = category.subcategories.reduce((total, subcategory) => {
        return total + emission(consumptionBySubcategory[subcategory.name], subcategory.factor);
    }, 0);
    return emissions;
}

module.exports = { calculateEmissions, errorMessages };