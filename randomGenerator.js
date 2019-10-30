const {
  avatarStyle,
  topType,
  accessoriesType,
  facialHairType,
  clotheType,
  eyeType,
  eyebrowType,
  mouthType,
  skinColor,
  canUseHairColor,
  canUseFacialHairColor,
  canUseClotheColor,
  canUseGraphicType,
  avatarBackground,
  hairColor,
  clotheColor,
  facialHairColor,
  graphicType
} = require("./options");

const getRandomValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandom = () => {
  let obj = {
    avatarStyle: avatarStyle[0],
    topType: getRandomValue(topType),
    accessoriesType: getRandomValue(accessoriesType),
    facialHairType: getRandomValue(facialHairType),
    clotheType: getRandomValue(clotheType),
    eyeType: getRandomValue(eyeType),
    eyebrowType: getRandomValue(eyebrowType),
    mouthType: getRandomValue(mouthType),
    skinColor: getRandomValue(skinColor)
  };

  if (canUseHairColor.includes(obj.topType)) {
    obj.hairColor = getRandomValue(hairColor);
  }

  if (canUseFacialHairColor.includes(obj.facialHairType)) {
    obj.facialHairColor = getRandomValue(facialHairColor);
  }

  if (canUseClotheColor.includes(obj.clotheType)) {
    obj.clotheColor = getRandomValue(clotheColor);
  }

  if (canUseGraphicType.includes(obj.clotheType)) {
    obj.graphicType = getRandomValue(graphicType);
  }

  obj.avatarBackground = getRandomValue(avatarBackground);

  //remove beards for girl hairs

  if (obj.topType.startsWith("Long")) {
    obj.facialHairType = "Blank";
    delete obj.facialHairColor;
  }

  //match beard and hair colors
  //there are more hair colors than beard colors
  if (obj.facialHairColor && facialHairColor.includes(obj.hairColor)) {
    obj.hairColor = obj.facialHairColor;
  }

  return obj;
};

module.exports = generateRandom;
