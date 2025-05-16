export function reverseString(str) {
  if (typeof str !== 'string') return null;
  const reversedString = str.split('').reverse().join('');
  return reversedString;
}