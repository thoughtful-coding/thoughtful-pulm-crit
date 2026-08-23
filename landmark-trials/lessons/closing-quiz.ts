import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "60caec96-334c-5847-99e3-e528d42e97a7" as LessonId,
  title: "PCCM Landmark Trials: Closing Quiz",
  description: "Cumulative closing quiz for the unit, interleaving its 3 trials.",
  sections: [
    {
      kind: "Matching",
      id: "uq-syn-trial-thesis" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "Match each trial to the central finding it established." },
  ],
      prompts: [{ "APROCCHSS": "90-day all-cause mortality was 43.0% in the hydrocortisone-plus-fludrocortisone group versus 49.1% in the placebo group (relative risk 0.88; 95% CI 0.78 to 0.99; P=0.03), an absolute reduction of about 6 percentage points." }, { "EOLIA": "At 60 days, mortality was 35% (44 of 124) in the ECMO group versus 46% (57 of 125) in the control group, a non-significant difference (relative risk 0.76; 95% CI 0.55 to 1.04; P=0.09), corresponding to an absolute risk reduction of about 11 percentage points." }, { "INPULSIS": "Nintedanib slowed the annual rate of FVC decline versus placebo in both trials: -114.7 vs -239.9 ml/yr (difference 125.3 ml/yr) in INPULSIS-1 and -113.6 vs -207.3 ml/yr (difference 93.7 ml/yr) in INPULSIS-2." }],
    },
    {
      kind: "NonCodingReflection",
      id: "uq-syn-cross-trial-reflection" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Reason across APROCCHSS, EOLIA, INPULSIS: where do these trials agree, where do they diverge, and how should a clinician reconcile them at the bedside? Be explicit about what each trial does and does not settle." },
  ],
      topic: "Reason across APROCCHSS, EOLIA, INPULSIS: where do these trials agree, where do they diverge, and how should a clinician reconcile them at the bedside? Be explicit about what each trial does and does not settle.",
      minLength: 150,
      extraContext: "Grade the learner's cross-trial reasoning against the findings each trial actually established:\n- APROCCHSS: 90-day all-cause mortality was 43.0% in the hydrocortisone-plus-fludrocortisone group versus 49.1% in the placebo group (relative risk 0.88; 95% CI 0.78 to 0.99; P=0.03), an absolute reduction of about 6 percentage points.\n- EOLIA: At 60 days, mortality was 35% (44 of 124) in the ECMO group versus 46% (57 of 125) in the control group, a non-significant difference (relative risk 0.76; 95% CI 0.55 to 1.04; P=0.09), corresponding to an absolute risk reduction of about 11 percentage points.\n- INPULSIS: Nintedanib slowed the annual rate of FVC decline versus placebo in both trials: -114.7 vs -239.9 ml/yr (difference 125.3 ml/yr) in INPULSIS-1 and -113.6 vs -207.3 ml/yr (difference 93.7 ml/yr) in INPULSIS-2.",
    },
    {
      kind: "MultipleSelection",
      id: "uq0-multipleselection" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Select every trial in which the intervention produced a statistically significant reduction in all-cause mortality on its primary or a key mortality endpoint." },
  ],
      options: [{ text: "APROCCHSS: 90-day mortality 43.0% vs 49.1% with placebo (RR 0.88; P=0.03)", feedback: "Correct: hydrocortisone plus fludrocortisone significantly lowered 90-day mortality." }, { text: "INPULSIS pooled: all-cause mortality 5.5% vs 7.8% (HR 0.70; P=0.14)", feedback: "Not significant: nintedanib was not powered for and did not show a mortality benefit." }, { text: "EOLIA: 60-day mortality 35% vs 46% with control (RR 0.76; P=0.09)", feedback: "Not significant: the 11-point difference did not reach significance (P=0.09)." }],
      correctAnswers: [0],
      feedback: { correct: "> _Source:_ “At 60 days, 44 of …” — Abstract, p. 1, ¶2 ; “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶1 ; “The proportion of patients who …” — Results, p. 9, ¶1" },
    },
    {
      kind: "MultipleChoice",
      id: "uq1-multiplechoice" as SectionId,
      title: "Who Was Enrolled",
      content: [
    { kind: "text", value: "A trial required entry criteria of a Pao2:Fio2 below 50 mm Hg for more than 3 hours, or below 80 mm Hg for more than 6 hours, or pH below 7.25 with Paco2 at least 60 mm Hg. Which trial used these criteria?" },
  ],
      options: [{ text: "INPULSIS-1", feedback: "INPULSIS required FVC >=50% and DLCO 30-79% predicted." }, { text: "EOLIA", feedback: "Correct: these are the very-severe ARDS enrollment thresholds in EOLIA." }, { text: "APROCCHSS", feedback: "APROCCHSS required septic shock with SOFA 3-4 and vasopressor dependency." }, { text: "INPULSIS-2", feedback: "INPULSIS required FVC >=50% and DLCO 30-79% predicted." }],
      correctAnswer: 1,
      feedback: { correct: "Correct: these are the very-severe ARDS enrollment thresholds in EOLIA.\n\n> _Source:_ “a ratio of partial pressure …” — Abstract, p. 1, ¶2 ; “Patients in intensive care units …” — Abstract, p. 2, ¶1 ; “Additional eligibility criteria were an …” — Results, p. 2, ¶1" },
    },
    {
      kind: "MultipleChoice",
      id: "uq2-multiplechoice" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "Which pairing correctly matches a trial to the intervention it tested?" },
  ],
      options: [{ text: "EOLIA — nintedanib 150 mg twice daily for 52 weeks", feedback: "That is the INPULSIS intervention; EOLIA tested venovenous ECMO." }, { text: "INPULSIS — immediate percutaneous venovenous ECMO with heparin", feedback: "That is the EOLIA intervention; INPULSIS tested nintedanib." }, { text: "APROCCHSS — drotrecogin alfa (activated) as sole active agent", feedback: "Xigris was withdrawn; the two-group trial compared hydrocortisone plus fludrocortisone with placebo." }, { text: "APROCCHSS — hydrocortisone 50 mg IV q6h plus fludrocortisone 50 μg daily for 7 days", feedback: "Correct." }],
      correctAnswer: 3,
      feedback: { correct: "Correct.\n\n> _Source:_ “Hydrocortisone was administered as a …” — Abstract, p. 3, ¶1 ; “Patients assigned to the ECMO …” — Abstract, p. 3, ¶1 ; “eligible patients were randomly assigned …” — Results, p. 3, ¶1" },
    },
    {
      kind: "MultipleChoice",
      id: "uq3-multiplechoice" as SectionId,
      title: "The Comparator",
      content: [
    { kind: "text", value: "In EOLIA, why was the control group's outcome difficult to interpret as pure conventional care compared with the placebo control in APROCCHSS?" },
  ],
      options: [{ text: "EOLIA controls received open-label hydrocortisone, whereas APROCCHSS controls were blinded", feedback: "EOLIA controls received conventional ventilation, not steroids." }, { text: "EOLIA controls received nintedanib as background therapy, whereas APROCCHSS controls did not", feedback: "Nintedanib is the INPULSIS drug, not part of either control group." }, { text: "APROCCHSS controls crossed over to ECMO, whereas EOLIA controls did not", feedback: "Crossover to ECMO occurred in EOLIA, not APROCCHSS." }, { text: "28% of EOLIA controls crossed over to rescue ECMO, whereas APROCCHSS controls received only matching placebos", feedback: "Correct: crossover diluted the EOLIA effect; APROCCHSS had no such contamination." }],
      correctAnswer: 3,
      feedback: { correct: "Correct: crossover diluted the EOLIA effect; APROCCHSS had no such contamination.\n\n> _Source:_ “In the control group, 113 …” — Abstract, p. 4, ¶1 ; “Placebos of French commercial forms …” — Abstract, p. 3, ¶1" },
    },
    {
      kind: "MultipleChoice",
      id: "uq4-multiplechoice" as SectionId,
      title: "Mechanism",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Fludrocortisone was added to hydrocortisone in APROCCHSS. What is the main limitation this creates for interpreting the mortality benefit?" },
  ],
      options: [{ text: "Fludrocortisone was dosed only IV, so oral absorption is unknown", feedback: "Fludrocortisone was given as a 50-μg tablet by nasogastric tube." }, { text: "Fludrocortisone was given only to the placebo group, confounding the comparison", feedback: "Both active agents went to the treatment group; placebo group got matching placebos." }, { text: "Without a hydrocortisone-alone arm, the independent contribution of fludrocortisone cannot be isolated", feedback: "Correct: the bundled regimen prevents attributing effect to either agent alone." }, { text: "The trial adjusted for multiplicity, masking the fludrocortisone effect", feedback: "No multiplicity adjustment was made; that is a separate limitation." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: the bundled regimen prevents attributing effect to either agent alone.\n\n> _Source:_ “in the APROCCHSS and Ger-Inf-05 …” ; “in the APROCCHSS and Ger-Inf-05 …”" },
    },
    {
      kind: "MultipleSelection",
      id: "uq5-multipleselection" as SectionId,
      title: "Weighing the Harms",
      content: [
    { kind: "text", value: "In EOLIA, select every adverse-event statement that is consistent with the reported harm data comparing the ECMO group with the control group." },
  ],
      options: [{ text: "Ischemic stroke was more frequent with ECMO", feedback: "Ischemic stroke was less frequent in the ECMO group." }, { text: "Bleeding events leading to transfusion were more frequent with ECMO (46% vs 28%)", feedback: "Correct." }, { text: "Ischemic stroke was less frequent with ECMO (0% vs 5%)", feedback: "Correct." }, { text: "Bleeding leading to transfusion was less frequent with ECMO", feedback: "Bleeding was more frequent with ECMO, not less." }],
      correctAnswers: [1, 2],
      feedback: { correct: "> _Source:_ “there were more bleeding events …” — Abstract, p. 1, ¶2 ; “fewer cases of ischemic stroke …” — Abstract, p. 1, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "uq6-multiplechoice" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The primary endpoint of INPULSIS was the annual rate of FVC decline, which nintedanib slowed in both trials. How should this endpoint be interpreted?" },
  ],
      options: [{ text: "As a validated measure of health-related quality of life", feedback: "Quality of life was measured by SGRQ, not FVC." }, { text: "As direct proof that nintedanib prolongs survival in IPF", feedback: "The trials were not powered for survival and showed no mortality benefit." }, { text: "As the rate of acute exacerbations over 52 weeks", feedback: "Exacerbations were a secondary endpoint with inconsistent results." }, { text: "As a physiologic surrogate for slowed progression, not a direct patient-important outcome", feedback: "Correct: FVC decline is a surrogate rather than a hard clinical endpoint." }],
      correctAnswer: 3,
      feedback: { correct: "Correct: FVC decline is a surrogate rather than a hard clinical endpoint.\n\n> _Source:_ “The adjusted annual rate of …” — Results, p. 1, ¶2 ; “nintedanib reduced the decline in …” — Results, p. 1, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "uq7-multiplechoice" as SectionId,
      title: "The Result (5)",
      content: [
    { kind: "text", value: "Regarding time to first acute exacerbation across the two replicate INPULSIS trials, which statement is accurate?" },
  ],
      options: [{ text: "Both trials showed no effect of nintedanib on exacerbations", feedback: "INPULSIS-2 showed a significant benefit (HR 0.38; P=0.005)." }, { text: "Exacerbations were the primary endpoint of both trials", feedback: "The primary endpoint was annual rate of FVC decline." }, { text: "Results were inconsistent: no significant difference in INPULSIS-1 but a significant benefit in INPULSIS-2", feedback: "Correct: this discordance limits conclusions about exacerbations." }, { text: "Both trials showed a significant reduction in exacerbations with nintedanib", feedback: "INPULSIS-1 showed no significant difference (HR 1.15; P=0.67)." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: this discordance limits conclusions about exacerbations.\n\n> _Source:_ “In INPULSIS-1, there was no …” — Results, p. 1, ¶2 ; “No consistent effect of nintedanib …” — Discussion, p. 11, ¶1" },
    },
  ],
};

export default lessonData;
