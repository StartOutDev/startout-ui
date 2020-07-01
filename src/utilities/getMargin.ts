export interface Margins {
  margin?: string;
  m?: string;
  mT?: string;
  mR?: string;
  mB?: string;
  mL?: string;
  mX?: string;
  mY?: string;
}

function getMarginFragments(margin?: string) {
  const mF = margin ? margin.split(" ") : [undefined];
  switch (mF.length) {
    case 4:
      return mF;
    case 3:
      return [mF[0], mF[1], mF[2], mF[1]];
    case 2:
      return [mF[0], mF[1], mF[0], mF[1]];
    default:
      return [mF[0], mF[0], mF[0], mF[0]];
  }
}

export function getMargin({ margin, m, mT, mR, mB, mL, mX, mY }: Margins) {
  const mF = getMarginFragments(m || margin);
  if (mX) {
    mF[1] = mX;
    mF[3] = mX;
  }
  if (mY) {
    mF[0] = mY;
    mF[2] = mY;
  }
  if (mT) mF[0] = mT;
  if (mR) mF[1] = mR;
  if (mB) mF[2] = mB;
  if (mL) mF[3] = mL;

  if (mF[0] === mF[1] && mF[1] === mF[2] && mF[2] === mF[3]) return mF[0];

  mF.forEach((v, i) => {
    if (!v) mF[i] = "0";
  });
  if (mF[0] === mF[2] && mF[1] === mF[3]) return `${mF[0]} ${mF[1]}`;
  if (mF[1] === mF[3]) return `${mF[0]} ${mF[1]} ${mF[2]}`;
  return mF.join(" ");
}
