const { emissionFactors } = require('../emissions/emissions');

const errorMessages = {
    CATEGORY_NOT_FOUND: "Category not found",
};

const subcategoriesNames = {
    ELECTRICITY: "Electricity",
    NATURAL_GAS: "Natural Gas",
    FUEL_OIL: "Fuel Oil",
    LPG: "LPG",
    WASTE: "Waste",
    WATER: "Water",
    VEHICLE: "Vehicle",
    BUS: "Bus",
    METRO: "Metro",
    TAXI: "Taxi",
    RAIL: "Rail",
    FLYING: "Flying",
    RED_MEAT: "Red Meat",
    WHITE_MEAT: "White Meat",
    DAIRY: "Dairy",
    CEREALS: "Cereals",
    VEGETABLES: "Vegetables",
    FRUITS: "Fruits",
    OIL: "Oil",
    SNACKS: "Snacks",
    DRINKS: "Drinks", 
};

const categoriesNames = {
    HOUSING: "Housing",
    TRAVEL: "Travel",
    FOOD: "Food",
};

const subcategories = {
    [subcategoriesNames.ELECTRICITY]: {
        name: subcategoriesNames.ELECTRICITY,
        factor: emissionFactors.ELECTRICITY
    },
    [subcategoriesNames.NATURAL_GAS]: {
        name: subcategoriesNames.NATURAL_GAS,
        factor: emissionFactors.NATURAL_GAS
    },
    [subcategoriesNames.FUEL_OIL]: {
        name: subcategoriesNames.FUEL_OIL,
        factor: emissionFactors.FUEL_OIL
    },
    [subcategoriesNames.LPG]: {
        name: subcategoriesNames.LPG,
        factor: emissionFactors.LPG
    },
    [subcategoriesNames.WASTE]: {
        name: subcategoriesNames.WASTE,
        factor: emissionFactors.WASTE
    },
    [subcategoriesNames.WATER]: {
        name: subcategoriesNames.WATER,
        factor: emissionFactors.WATER
    },
    [subcategoriesNames.VEHICLE]: {
        name: subcategoriesNames.VEHICLE,
        factor: emissionFactors.VEHICLE
    },
    [subcategoriesNames.BUS]: {
        name: subcategoriesNames.BUS,
        factor: emissionFactors.BUS
    },
    [subcategoriesNames.METRO]: {
        name: subcategoriesNames.METRO,
        factor: emissionFactors.METRO
    },  
    [subcategoriesNames.TAXI]: {
        name: subcategoriesNames.TAXI,
        factor: emissionFactors.TAXI
    },
    [subcategoriesNames.RAIL]: {
        name: subcategoriesNames.RAIL,
        factor: emissionFactors.RAIL
    },
    [subcategoriesNames.FLYING]: {
        name: subcategoriesNames.FLYING,
        factor: emissionFactors.FLYING
    },
    [subcategoriesNames.RED_MEAT]: {
        name: subcategoriesNames.RED_MEAT,
        factor: emissionFactors.RED_MEAT
    },
    [subcategoriesNames.WHITE_MEAT]: {
        name: subcategoriesNames.WHITE_MEAT,
        factor: emissionFactors.WHITE_MEAT
    },
    [subcategoriesNames.DAIRY]: {
        name: subcategoriesNames.DAIRY,
        factor: emissionFactors.DAIRY
    },
    [subcategoriesNames.CEREALS]: {
        name: subcategoriesNames.CEREALS,
        factor: emissionFactors.CEREALS
    },
    [subcategoriesNames.VEGETABLES]: {
        name: subcategoriesNames.VEGETABLES,
        factor: emissionFactors.VEGETABLES
    },
    [subcategoriesNames.FRUITS]: {
        name: subcategoriesNames.FRUITS,
        factor: emissionFactors.FRUITS
    },
    [subcategoriesNames.OIL]: {
        name: subcategoriesNames.OIL,
        factor: emissionFactors.OIL
    },
    [subcategoriesNames.SNACKS]: {
        name: subcategoriesNames.SNACKS,
        factor: emissionFactors.SNACKS
    },
    [subcategoriesNames.DRINKS]: {
        name: subcategoriesNames.DRINKS,
        factor: emissionFactors.DRINKS
    },
}

const categories = {
    [categoriesNames.HOUSING]: {
        name: categoriesNames.HOUSING,
        subcategories: [
            subcategories[subcategoriesNames.ELECTRICITY],
            subcategories[subcategoriesNames.NATURAL_GAS],
            subcategories[subcategoriesNames.FUEL_OIL],
            subcategories[subcategoriesNames.LPG],
            subcategories[subcategoriesNames.WASTE],
            subcategories[subcategoriesNames.WATER],
        ],
    },
    [categoriesNames.TRAVEL]: {
        name: categoriesNames.TRAVEL,
        subcategories: [
            subcategories[subcategoriesNames.VEHICLE],
            subcategories[subcategoriesNames.BUS],
            subcategories[subcategoriesNames.METRO],
            subcategories[subcategoriesNames.TAXI],
            subcategories[subcategoriesNames.RAIL],
            subcategories[subcategoriesNames.FLYING],
        ],
    },
    [categoriesNames.FOOD]: {
        name: categoriesNames.FOOD,
        subcategories: [
            subcategories[subcategoriesNames.RED_MEAT],
            subcategories[subcategoriesNames.WHITE_MEAT],
            subcategories[subcategoriesNames.DAIRY],
            subcategories[subcategoriesNames.CEREALS],
            subcategories[subcategoriesNames.VEGETABLES],
            subcategories[subcategoriesNames.FRUITS],
            subcategories[subcategoriesNames.OIL],
            subcategories[subcategoriesNames.SNACKS],
            subcategories[subcategoriesNames.DRINKS],
        ],
    },
};

module.exports = { categories, categoriesNames, errorMessages, subcategoriesNames };
