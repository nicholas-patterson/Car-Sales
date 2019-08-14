export const addFeature = feature => {
  console.log("FEATURE", feature);
  console.log("FEATURE WAS ADDED");
  return { type: "ADD_FEATURE", payload: feature };
};

export const deleteFeature = unwantedFeature => {
  console.log("FEATURE WAS REMOVED");
  return { type: "REMOVE_FEATURE", payload: unwantedFeature };
};
