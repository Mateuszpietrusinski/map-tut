import { v4 as uuidv4 } from "uuid";
import faker from "faker";

const mockDataArray = () => {
  let data = [];
  Array.from(Array(10).keys()).forEach(() => {
    data = [
      ...data,
      {
        id: uuidv4(),
        image: faker.image.image(),
        fullName: faker.name.findName(),
        description: faker.name.jobTitle(),
      },
    ];
  });
  return data;
};

export default {
  mockDataArray,
};
