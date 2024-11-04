import {faker} from '@faker-js/faker';

function createRandomCarList() {
    return {
        // id:faker.string.uuid(),
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://static0.topspeedimages.com/wordpress/wp-content/uploads/2023/06/bmw-m8_competition_gran_coupe-2023-1280-04.jpg',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList=faker.helpers.multiple(createRandomCarList,{
    count:7
})

export default{
    carList
}