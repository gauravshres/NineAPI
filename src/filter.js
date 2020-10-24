const logger = require("./logger");
const expressUtils = require("expressjs-utils");

function filter(items = []) {
  try {
    let response = [];
    let invalidItems = [];
    const filters = ["image", "slug", "title"];
    items.forEach((item) => {
      if (hasKeys(item) && hasDrm(item) && hasEpisodeCount(item)) {
        item.image = item.image.showImage;
        response.push(pick(item, filters));
      } else {
        invalidItems.push(item);
      }
    });
    logger.info(`Total Valid Items : ${response.length}`);
    logger.info(`Total Invalid Items : ${invalidItems.length}`);
    return { response };
  } catch (err) {
    throw expressUtils.httpError(400, {
      error: `Could not decode request: JSON parsing failed`,
    });
  }
}

function hasKeys(element) {
  return "image" in element && "slug" in element && "title" in element ? 1 : 0;
}

function hasDrm(element) {
  return element.drm ? 1 : 0;
}

function hasEpisodeCount(element) {
  return element.episodeCount > 0 ? 1 : 0;
}

function pick(obj, attributes = []) {
  return Object.entries(obj)
    .filter(([key]) => attributes.includes(key))
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
}

module.exports = { filter };
