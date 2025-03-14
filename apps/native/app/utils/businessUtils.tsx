export const textHintingFullUnderscore = (input: string) => {  
  return input.replace(/[a-zA-Z]+/g, match => '_'.repeat(match.length));
}

export function textHintingWordFirstLetters(input: string) {
  return input.replace(/\b([a-zA-Z])([a-zA-Z]*)\b/g, (match, firstLetter, restOfWord) => {
    return firstLetter + '_'.repeat(restOfWord.length);
  });
}

export function textHintingWordFirstAndLetter(input: string) {
  return input.replace(/\b([a-zA-Z])([a-zA-Z]*)([a-zA-Z])\b/g, (match, firstLetter, middleLetters, lastLetter) => {
    // If there is more than 1 character, replace the middle with underscores
    return firstLetter + '_'.repeat(middleLetters.length) + lastLetter;
  }).replace(/\b([a-zA-Z])([a-zA-Z]+)(?=\s|$)/g, (match, firstLetter, middleLetters) => {
    return firstLetter + '_'.repeat(middleLetters.length);
  });
}

