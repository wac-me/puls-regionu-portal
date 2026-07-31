export const SPOJNIKI = [
  'w', 'i', 'z', 'a', 'o', 'u', 
  'do', 'na', 'po', 'za', 'ze', 'we',
  'W', 'I', 'Z', 'A', 'O', 'U',
  'Do', 'Na', 'Po', 'Za', 'Ze', 'We'
];

export const replaceSpojniki = (text) => {
  if (!text) return '';
  
  // Replace common polish prepositions
  let result = text
    .replace(
      new RegExp(`(^|\\s)(${SPOJNIKI.join('|')})(\\s|$)`, 'g'),
      (match, p1, p2, p3) => `${p1}<span class="spojnik">${p2}</span>${p3 === ' ' ? '\u00A0' : p3}`
    );
    
  // Replace single letter words
  result = result.replace(
    /\s([a-zA-Z])\s/g,
    ' <span class="spojnik">$1</span>\u00A0'
  );
  
  return result;
};
