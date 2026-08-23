import type { UnitManifest, UnitId } from "../../../src/types/data";

const unitData: UnitManifest = {
  id: "landmark-trials" as UnitId,
  title: "PCCM Landmark Trials",
  description: "Landmark pulmonary & critical care trials with a cross-trial closing quiz.",
  image: "images/landmark.svg",
  lessons: [
    "lessons/aprocchss-hydrocortisone-plus-fludrocortisone-in-septic-shock",
    "lessons/eolia-early-ecmo-in-very-severe-ards",
    "lessons/nintedanib-in-ipf-reading-the-inpulsis-replicate-trials",
    "lessons/closing-quiz"
  ],
};

export default unitData;
