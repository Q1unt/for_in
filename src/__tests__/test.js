import { orderby } from "../sortobject";

test("Проверка получения данных", () => {
   let resoult = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]
  expect(orderby).toEqual(resoult);
});
