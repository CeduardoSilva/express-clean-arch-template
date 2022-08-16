const { categories, categoriesNames, errorMessages} = require('../categories/categories');
const { get } = require('../categories/categories-controller');

describe("categories", () => {
    it("should get all available categories", () => {
        const availableCategories = get();
        expect(availableCategories).toEqual(categories);
    });

    it("should get the correct category", () => {
        const housingCategory = get(categoriesNames.HOUSING);
        expect(housingCategory).toEqual(categories[categoriesNames.HOUSING]);
    });

    it("should return an error if category does not exists", () => {
        const nonExistingCategoryName = "NonExistingCategory";
        expect(() => get(nonExistingCategoryName)).toThrow(new Error(errorMessages.CATEGORY_NOT_FOUND));
    });
});
