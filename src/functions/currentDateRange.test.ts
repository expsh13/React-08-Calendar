// sum.test.js
import { expect, test } from "vitest";
import { currentDateRange } from "./currentDateRange";

const arrayDate: Date[] = [];
const sampleDate = new Date();
sampleDate.setDate(new Date().getDate() - 7);
sampleDate.setHours(0);
sampleDate.setMinutes(0);
sampleDate.setSeconds(0);
sampleDate.setMilliseconds(0);

for (let i = 1; i < 43; i++) {
  const newDate = new Date(sampleDate);
  newDate.setDate(sampleDate.getDate() + i);
  arrayDate.push(newDate);
}

test("currentDateRange", () => {
  expect(currentDateRange(new Date())).toStrictEqual(arrayDate);
});
