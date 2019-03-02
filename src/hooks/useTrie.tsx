import * as React from "react";

// function trie(initialWords: string[], isCaseSensitive = true) {
//   function has(term: string): boolean {
//     return false;
//   }
//   function add(term: string) {}
//   function remove(term: string) {}

//   const trie = { has, add, remove };
//   return { trie };
// }

// https://www.geeksforgeeks.org/trie-insert-and-search/
class TrieNode {
  isWord: boolean = false;
  children: TrieNode[] = [];

  constructor(public character: string) {}
}

export interface ITrie {
  has(word: string): boolean;
  add(word: string): void;
  remove(word: string): void;
}

class Trie implements ITrie {
  root: TrieNode;

  constructor(words: string[]) {
    this.root = new TrieNode("");
    this.buildTrie(words);
  }

  private buildTrie(words: string[]): void {
    words.forEach(this.add);
  }

  public has = (word: string): boolean => {
    return false;
  };

  add = (word: string): void => {
    if (this.has(word)) return;

    let head = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (head[i] !== c) head[i] = new TrieNode(c);

      head = head[i];
    }

    head.isWord = true;
  };

  public remove = (word: string): void => {
    if (!this.has(word)) return;
  };
}

/*
 * Build a trie for an efficient string search
 * @param initialWords: string[] List of words to build
 * @param isCaseSensitive: bool "Their" & "their" are different
 */
function useTrie(initialWords: string[], isCaseSensitive = true): Trie {
  //   const [words, setWords] = React.useState(initialWords);
  const [trie, setTrie] = React.useState(new Trie(initialWords));

  return trie;
}

export { Trie };
export default useTrie;
