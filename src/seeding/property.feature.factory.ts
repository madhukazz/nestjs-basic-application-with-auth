import { PropertyFeature } from "../entities/property.feature.entity";
import { setSeederFactory } from "typeorm-extension";

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, (faker) => {
    const feature = new PropertyFeature();
    feature.area = faker.number.int({ min: 25, max: 2500 });
    feature.bathrooms = faker.number.int({ min: 1, max: 5 });
    feature.bedrooms = faker.number.int({ min: 1, max: 5 });
    feature.parkingSpots = faker.number.int({ min: 1, max: 5 });
    feature.hasBalcony = faker.datatype.boolean();
    feature.hasGardenYard = faker.datatype.boolean();
    feature.hasSwimmingPool = faker.datatype.boolean();

    return feature;
});