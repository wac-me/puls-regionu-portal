export const SPOJNIKI = [
  'w', 'i', 'z', 'a', 'o', 'u',
  'do', 'na', 'po', 'za', 'ze', 'we',
  'ku', 'od',
  'bez', 'dla', 'przy', 'pod', 'nad',
  'przed', 'między', 'ponad', 'spod',
  'sprzed', 'wśród', 'wbrew', 'wzdłuż'
];

export const replaceSpojniki = (text) => {
  if (!text || typeof text !== 'string') return '';

  // Expanded list of Polish conjunctions and prepositions
  const ALL_SPOJNIKI = [
    ...SPOJNIKI,
    'ale', 'czy', 'gdy', 'gdyż', 'iż', 'niż', 'oraz', 'ponieważ',
    'więc', 'zatem', 'lecz', 'jednak', 'toteż', 'zawsze'
  ];

  // Lookbehind for the preceding boundary (instead of a capture group) so
  // it isn't consumed by the match — otherwise two conjunctions in a row
  // ("przed i po remoncie") would only match the first one, since the
  // second would no longer have a boundary in front of it. The trailing
  // whitespace IS consumed, since it's what gets replaced by the nbsp.
  const pattern = new RegExp(
    `(?<=^|\\s|>)(${ALL_SPOJNIKI.join('|')})\\s`,
    'gi'
  );

  return text.replace(pattern, (match, p1) => `${p1}\xa0`);
};
