export function capitalize(str) {
  if (str === "") return "";
  if (str === undefined || str === null || typeof str !== 'string') return null;
  const capitalizedString = str[0].toUpperCase() + str.slice(1);
  return capitalizedString;
}
