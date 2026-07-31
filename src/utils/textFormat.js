export const SPOJNIKI = [
  'w', 'i', 'z', 'a', 'o', 'u', 
  'do', 'na', 'po', 'za', 'ze', 'we',
  'W', 'I', 'Z', 'A', 'O', 'U',
  'Do', 'Na', 'Po', 'Za', 'Ze', 'We'
];

export const replaceSpojniki = (text) => {
  if (!text || typeof text !== 'string') return '';

  // Expanded list of Polish conjunctions and prepositions
  const ALL_SPOJNIKI = [
    ...SPOJNIKI,
    'ale', 'czy', 'gdy', 'gdyż', 'iż', 'niż', 'oraz', 'ponieważ',
    'więc', 'zatem', 'lecz', 'jednak', 'toteż', 'więc', 'zawsze',
    'w', 'z', 'i', 'a', 'o', 'u', 'do', 'na', 'po', 'za', 'ze', 'we'
  ];

  // Create a regex pattern that matches only Polish conjunctions
  const pattern = new RegExp(
    `(^|\\s|>)(?:${ALL_SPOJNIKI.join('|')})(?=$|\\s|[.,!?;:])`,
    'gi'
  );

  // Replace matches with non-breaking spaces
  let result = text.replace(pattern, (match, p1, p2) => {
    // Skip if the match is a number or if p2 is undefined
    if (typeof p2 !== 'string' || (!isNaN(p2) && p2.trim() !== '')) {
      return match;
    }
    return `${p1}${p2}\u00A0`;
  });

  // Handle HTML entities and special cases
  result = result
    .replace(/(\s)([a-z]{1,2})(\s)/gi, '$1$2\u00A0') // 1-2 letter words
    .replace(/([a-z])\s([a-z]{1,2})\s/gi, '$1\u00A0$2\u00A0') // word sequences
    .replace(/(\s)([iwzaou])(\s)/gi, '$1$2\u00A0'); // most common conjunctions

  return result;
};
