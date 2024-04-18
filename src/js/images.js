const importAll = (r) => {
  return r.keys().reduce((acc, curr) => {
    const imageName = curr.replace(/^.*[\\/]/, "").replace(/\.[^/.]+$/, "");
    acc[imageName] = r(curr).default;
    return acc;
  }, {});
};

const images = importAll(
  require.context("../img/", true, /\.(png|jpe?g|svg)$/)
);

export default images;
