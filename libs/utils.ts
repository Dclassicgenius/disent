export const decimalToDMS = (deg: number, isLatitude: boolean) => {
  const direction = isLatitude ? (deg >= 0 ? "N" : "S") : deg >= 0 ? "E" : "W";
  const absoluteDeg = Math.abs(deg);
  const degrees = Math.floor(absoluteDeg);
  const minutes = Math.floor((absoluteDeg - degrees) * 60);

  return `${degrees}° ${minutes}' ${direction}`;
};
