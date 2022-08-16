const { categoriesNames, subcategoriesNames } = require('../categories/categories');
const { calculateEmissions, errorMessages } = require('../emissions/emissions-controller');
const { emissionFactors } = require('../emissions/emissions');

const housingConsumptionBySubcategory = {
    [subcategoriesNames.ELECTRICITY]: 100,
    [subcategoriesNames.NATURAL_GAS]: 100,
    [subcategoriesNames.FUEL_OIL]: 100,
    [subcategoriesNames.LPG]: 100,
    [subcategoriesNames.WASTE]: 100,
    [subcategoriesNames.WATER]: 100,
};

const expectedHousingEmissions = {
    [subcategoriesNames.ELECTRICITY]: 100 * emissionFactors.ELECTRICITY,
    [subcategoriesNames.NATURAL_GAS]: 100 * emissionFactors.NATURAL_GAS,
    [subcategoriesNames.FUEL_OIL]: 100 * emissionFactors.FUEL_OIL,
    [subcategoriesNames.LPG]: 100 * emissionFactors.LPG,
    [subcategoriesNames.WASTE]: 100 * emissionFactors.WASTE,
    [subcategoriesNames.WATER]: 100 * emissionFactors.WATER,
    totalEmissions: 100 * emissionFactors.ELECTRICITY + 100 * emissionFactors.NATURAL_GAS + 100 * emissionFactors.FUEL_OIL + 100 * emissionFactors.LPG + 100 * emissionFactors.WASTE + 100 * emissionFactors.WATER,
};

describe("emissions controller", () => {
    it("should return the correct emissions", () => {
        const emissions = calculateEmissions(housingConsumptionBySubcategory, categoriesNames.HOUSING);
        expect(emissions).toEqual(expectedHousingEmissions);
    });

    it("should return an error if there is one or more consumption data missing", () => {
        const incompleteHousingConsumptionBySubcategory = {
            [subcategoriesNames.LPG]: 100,
            [subcategoriesNames.WASTE]: 100,
            [subcategoriesNames.WATER]: 100,
        };
        expect(() => calculateEmissions(incompleteHousingConsumptionBySubcategory, categoriesNames.HOUSING)).toThrow(new Error(errorMessages.MISSING_CONSUMPTION));
    });
});
