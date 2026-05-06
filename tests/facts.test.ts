import assert from "node:assert/strict";
import test from "node:test";

import { factsData } from "../data/facts";
import { CATEGORIES } from "../domain/fact";
import {
  getAllFacts,
  getAvailableCategories,
  getFactById,
  getFactOfTheDay,
  getFactsByCategory,
} from "../lib/facts";
import { isFact } from "../lib/validation";

test("all static facts match the Fact contract", () => {
  assert.ok(factsData.length > 0);
  assert.ok(factsData.every((fact) => isFact(fact)));
});

test("static fact ids are unique ASCII slugs", () => {
  const ids = factsData.map((fact) => fact.id);
  const uniqueIds = new Set(ids);

  assert.equal(uniqueIds.size, ids.length);

  ids.forEach((id) => {
    assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });
});

test("getFactById returns a known fact and null for invalid input", () => {
  assert.equal(getFactById("neuroplastycznosc")?.title, "Mózg zmienia się przez trening");
  assert.equal(getFactById(""), null);
  assert.equal(getFactById("nie-ma-takiego-faktu"), null);
});

test("getFactsByCategory only returns facts from the selected category", () => {
  const facts = getFactsByCategory("neurobiologia");

  assert.ok(facts.length > 0);
  assert.ok(facts.every((fact) => fact.category === "neurobiologia"));
});

test("getFactOfTheDay is deterministic for the same date", () => {
  const date = new Date("2026-05-06T10:00:00.000Z");

  assert.deepEqual(getFactOfTheDay(date), getFactOfTheDay(date));
});

test("available categories are valid and used by at least one fact", () => {
  const availableCategories = getAvailableCategories();
  const allFacts = getAllFacts();

  assert.ok(availableCategories.length > 0);
  assert.ok(availableCategories.every((category) => CATEGORIES.includes(category)));
  assert.ok(
    availableCategories.every((category) => allFacts.some((fact) => fact.category === category)),
  );
});
