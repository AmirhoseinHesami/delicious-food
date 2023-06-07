const sizes = {
  // mobileS: "320px",
  // mobileM: "375px",
  mobileL: "500px",
  tablet: "720px",
  // laptop: "1024px",
  laptopL: "1100px",
};

export const devices = {
  // mobileS: `(min-width: ${sizes.mobileS})`,
  // mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  // laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
};
