import type { UnitManifest, UnitId } from "../../../src/types/data";

const unitData: UnitManifest = {
  id: "surgery-for-ich" as UnitId,
  title: "Surgery for Intracerebral Hemorrhage",
  description: "Four randomized trials of surgical evacuation for spontaneous supratentorial ICH — STICH, MISTIE III, ENRICH, MIND — with a cross-trial closing quiz.",
  image: "images/surgery-for-ich.svg",
  lessons: [
    "lessons/stich-early-surgery-versus-initial-conservative-treatment-in-supratentorial-ich",
    "lessons/mistie-iii-minimally-invasive-clot-evacuation-in-intracerebral-haemorrhage",
    "lessons/enrich-minimally-invasive-evacuation-for-supratentorial-ich",
    "lessons/mind-minimally-invasive-surgery-for-supratentorial-intracerebral-hemorrhage",
    "lessons/closing-quiz"
  ],
};

export default unitData;
