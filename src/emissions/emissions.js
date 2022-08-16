const emissionFactors = {
    ELECTRICITY: 467.82, // kgCO2/MWh -> Insere MWh
    NATURAL_GAS: 53.06, // kgCO2/mmBTU -> Insere mmBTU
    FUEL_OIL: 73.25, //  kgCO2/mmBTU -> Insere mmBTU
    LPG: 5.68, // kgCO2/Gallon
    WASTE: 90.70, // kgCO2/mmBTU
    WATER: 0.003, // kgCO2/L
    VEHICLE: 0.130, // kgCO2/kM
    BUS: 256.10, // kgCO2/MWh
    METRO: 461.93, // kgCO2/MWh
    TAXI: 327.43, // kgCO2/MWh
    RAIL: 344.04,  // kgCO2/MWh
    FLYING: 518.00, // kgCO2/MWh
    RED_MEAT: 36.44 kg / 1000 kCal,
    WHITE_MEAT: 1,
    DAIRY: 1,
    CEREALS: 1,
    VEGETABLES: 1,
    FRUITS: 1,
    OIL: 1,
    SNACKS: 1,
    DRINKS: 1,
};

module.exports = { emissionFactors }
