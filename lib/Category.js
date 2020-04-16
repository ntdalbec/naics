/**
 * NAICS uses a six-digit coding system to identify particular industries and their placement in
 * this hierarchical structure of the classification system. The first two digits of the code designate
 * the sector, the third digit designates the subsector, the fourth digit designates the industry group,
 * the fifth digit designates the NAICS industry, and the sixth digit designates the national industry.
 * A zero as the sixth digit generally indicates that the NAICS industry and the U.S. industry are the
 * sames
 * @readonly
 * @enum { number }
 */
const Category = {
    Sector: 2,
    Subsector: 3,
    IndustryGroup: 4,
    NAICSIndustry: 5,
    NationalIndustry: 6,
};

module.exports = Object.freeze(Category); // prevent this enum from being accidently changed
