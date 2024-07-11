/**
 * Gets the window dimensions (width and height)
 * @param {Object} window - The browser window object
 */
export const getWindowDimensions = (window: any) => {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    height,
    width,
  };
};
