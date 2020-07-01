export interface Paddings {
  padding?: string;
  p?: string;
  pT?: string;
  pR?: string;
  pB?: string;
  pL?: string;
  pX?: string;
  pY?: string;
}

function getPaddingFragments(padding?: string) {
  const pF = padding ? padding.split(" ") : [undefined];
  switch (pF.length) {
    case 4:
      return pF;
    case 3:
      return [pF[0], pF[1], pF[2], pF[1]];
    case 2:
      return [pF[0], pF[1], pF[0], pF[1]];
    default:
      return [pF[0], pF[0], pF[0], pF[0]];
  }
}

export function getPadding({ padding, p, pT, pR, pB, pL, pX, pY }: Paddings) {
  const pF = getPaddingFragments(p || padding);
  if (pX) {
    pF[1] = pX;
    pF[3] = pX;
  }
  if (pY) {
    pF[0] = pY;
    pF[2] = pY;
  }
  if (pT) pF[0] = pT;
  if (pR) pF[1] = pR;
  if (pB) pF[2] = pB;
  if (pL) pF[3] = pL;

  if (pF[0] === pF[1] && pF[1] === pF[2] && pF[2] === pF[3]) return pF[0];

  pF.forEach((v, i) => {
    if (!v) pF[i] = "0";
  });
  if (pF[0] === pF[2] && pF[1] === pF[3]) return `${pF[0]} ${pF[1]}`;
  if (pF[1] === pF[3]) return `${pF[0]} ${pF[1]} ${pF[2]}`;
  return pF.join(" ");
}
