import type { CourseManifest, CourseId } from "../../src/types/data";

const courseData: CourseManifest = {
  id: "thoughtful-pulm-crit" as CourseId,
  title: "PCCM Boards",
  blurb: "Board prep from landmark pulmonary & critical care trials.",
  longDescription:
    "A course for learning about landmark trials in pulmonary & critical care.",
  image: "images/thoughtful-pulm-crit.svg",
  units: ["landmark-trials", "severe-ards"],
};

export default courseData;
