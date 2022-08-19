type faceSizeType = { aspectRatio: number; cheekSize: number; jawSize: number };

export const faceShapeText = (faceSize: faceSizeType) => {
  let imgText = "";
  if (faceSize.aspectRatio > 0.9) {
    imgText += "L";
  } else {
    imgText += "S";
  }
  if (faceSize.cheekSize > 3) {
    imgText += "C";
  }
  if (faceSize.jawSize > 8) {
    imgText += "J";
  }
  return imgText;
};

export const faceTextConvert = (imgText: string) => {
  let faceShape = "";
  switch (imgText) {
    case "L":
      faceShape = "긴 얼굴형";
      break;
    case "S":
      faceShape = "짧은 얼굴형";
      break;
    case "LC":
      faceShape = "긴 마름모형";
      break;
    case "SC":
      faceShape = "짧은 마름모형";
      break;
    case "LJ":
      faceShape = "긴 육각형";
      break;
    case "SCJ":
      faceShape = "짧은 땅콩형";
      break;
    case "LCJ":
      faceShape = "긴 땅콩형";
      break;
    default:
      alert("얼굴형이 인식되지 않습니다");
  }
  return faceShape;
};

export const facePercentCalc = (faceSize: faceSizeType) => {
  const aspectPercent =
    faceSize.aspectRatio >= 0.9
      ? Math.floor(250 * (faceSize.aspectRatio - 0.7))
      : Math.floor((500 * faceSize.aspectRatio) / 3 - 100);
  const cheekPercent =
    faceSize.cheekSize >= 3
      ? Math.floor((25 * faceSize.cheekSize) / 4 + 125 / 4)
      : Math.floor((50 * faceSize.cheekSize) / 3);
  const jawPercent =
    faceSize.jawSize >= 8
      ? Math.floor(10 * (faceSize.jawSize - 3))
      : Math.floor((25 * faceSize.jawSize) / 4);
  return { aspectPercent, cheekPercent, jawPercent };
};

export const convertImageToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
