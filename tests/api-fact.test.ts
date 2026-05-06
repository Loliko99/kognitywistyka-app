import assert from "node:assert/strict";
import test from "node:test";

import { createAiFactId, isAiFactId } from "../lib/ai-facts";
import { parseGeneratedFact, withTimeout } from "../app/api/fact/route";

test("parseGeneratedFact accepts valid Gemini JSON", () => {
  const parsed = parseGeneratedFact(
    JSON.stringify({
      title: "Pamięć zależy od kontekstu",
      hook: "Łatwiej przypominasz sobie informacje w podobnym otoczeniu.",
      explanation: "Kontekst może działać jak wskazówka przy odtwarzaniu wspomnień.",
      example: "Student pamięta więcej materiału, gdy uczy się i odpowiada w podobnych warunkach.",
      whyItMatters: "To pomaga planować naukę i ograniczać fałszywe poczucie zapomnienia.",
      category: "psychologia_poznawcza",
    }),
  );

  assert.equal(parsed?.category, "psychologia_poznawcza");
  assert.equal(parsed?.title, "Pamięć zależy od kontekstu");
});

test("parseGeneratedFact accepts fenced JSON and rejects invalid categories", () => {
  const parsed = parseGeneratedFact(
    "```json\n" +
      JSON.stringify({
        title: "Test",
        hook: "Hook.",
        explanation: "Wyjaśnienie.",
        example: "Przykład.",
        whyItMatters: "Znaczenie.",
        category: "niepoprawna",
      }) +
      "\n```",
  );

  assert.equal(parsed, null);
});

test("createAiFactId creates stable link-safe AI ids", () => {
  const id = createAiFactId("Zażółć gęślą jaźń i pamięć");

  assert.ok(isAiFactId(id));
  assert.match(id, /^ai-[a-z0-9]+(?:-[a-z0-9]+)*-[a-f0-9]{8}$/);
});

test("withTimeout rejects slow promises", async () => {
  await assert.rejects(
    withTimeout(
      new Promise((resolve) => {
        setTimeout(resolve, 20);
      }),
      1,
    ),
  );
});
