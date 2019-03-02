import { Trie } from "../hooks/useTrie";

describe("Trie has search term", () => {
  const trie = new Trie(["abc"]);
  expect(trie.has("abc")).toBe(true);
});
