import { v4 as uuidv4 } from "uuid";
import faker from "faker";

const mockDataArray = () => {
  let data = [];
  Array.from(Array(1000).keys()).forEach(() => {
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

const mockDataObject = () => {
  const mockDataObj = {};
  mockDataArray().forEach((el) => (mockDataObj[el.id] = el));
  return mockDataObj;
};

const mockDataMap = () => {
  const mockDataMap = new Map();
  mockDataArray().forEach((el) => mockDataMap.set(el.id, el));
  return mockDataMap;
};

export default {
  mockDataArray,
  mockDataObject,
  mockDataMap,
};
