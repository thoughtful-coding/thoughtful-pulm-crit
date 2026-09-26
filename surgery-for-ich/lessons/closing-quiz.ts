import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "cd65e85e-1caa-5a24-9340-043c4b53d61e" as LessonId,
  title: "Surgery for Intracerebral Hemorrhage: Four Trials, One Unsettled Question: Closing Quiz",
  description: "Cumulative closing quiz for the unit, interleaving its 4 trials.",
  sections: [
    {
      kind: "Matching",
      id: "uq-syn-trial-thesis" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "Match each trial to the central finding it established." },
  ],
      prompts: [{ "STICH": "In the STICH trial, using the prognosis-based dichotomy of the extended Glasgow outcome scale at 6 months, 122 of 468 patients (26%) allocated to early surgery had a favourable outcome compared with 118 of 496 (24%) allocated to initial conservative treatment (odds ratio 0.89, 95% CI 0.66-1.19, p=0.414), a non-significant difference." }, { "MISTIE III": "In the MISTIE III primary adjusted efficacy analysis, an estimated 45% of patients in the MISTIE group versus 41% of patients in the standard medical care group achieved a modified Rankin Scale (mRS) score of 0-3 at 365 days, an adjusted risk difference of 4% (95% CI -4 to 12; p=0·33), which was not statistically significant." }, { "ENRICH": "In the ENRICH trial, the primary efficacy end point—the mean score on the utility-weighted modified Rankin scale at 180 days—was 0.458 in the surgery group and 0.374 in the control group, a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163; posterior probability of superiority of surgery, 0.981)." }, { "MIND": "In the MIND trial's primary efficacy analysis (unadjusted ITT population), there was no statistically significant difference in ordinal modified Rankin Scale score at 180 days between minimally invasive surgery and medical management alone (OR, 1.03; 96% CI, 0.62-1.72; P = .45)." }],
    },
    {
      kind: "NonCodingReflection",
      id: "uq-syn-cross-trial-reflection" as SectionId,
      title: "The Result (2)",
      content: [],
      topic: "Reason across STICH, MISTIE III, ENRICH, MIND: where do these trials agree, where do they diverge, and how should a clinician reconcile them at the bedside? Be explicit about what each trial settles and what it leaves open.",
      minLength: 150,
      extraContext: "Grade the learner's cross-trial reasoning against the findings each trial actually established:\n- STICH: In the STICH trial, using the prognosis-based dichotomy of the extended Glasgow outcome scale at 6 months, 122 of 468 patients (26%) allocated to early surgery had a favourable outcome compared with 118 of 496 (24%) allocated to initial conservative treatment (odds ratio 0.89, 95% CI 0.66-1.19, p=0.414), a non-significant difference.\n- MISTIE III: In the MISTIE III primary adjusted efficacy analysis, an estimated 45% of patients in the MISTIE group versus 41% of patients in the standard medical care group achieved a modified Rankin Scale (mRS) score of 0-3 at 365 days, an adjusted risk difference of 4% (95% CI -4 to 12; p=0·33), which was not statistically significant.\n- ENRICH: In the ENRICH trial, the primary efficacy end point—the mean score on the utility-weighted modified Rankin scale at 180 days—was 0.458 in the surgery group and 0.374 in the control group, a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163; posterior probability of superiority of surgery, 0.981).\n- MIND: In the MIND trial's primary efficacy analysis (unadjusted ITT population), there was no statistically significant difference in ordinal modified Rankin Scale score at 180 days between minimally invasive surgery and medical management alone (OR, 1.03; 96% CI, 0.62-1.72; P = .45).",
    },
    {
      kind: "MultipleChoice",
      id: "uq0-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Which trial reported a statistically significant surgical benefit on its PRIMARY functional efficacy endpoint?" },
  ],
      options: [{ text: "ENRICH", feedback: "ENRICH's primary endpoint (utility-weighted mRS at 180 days) favored surgery, difference 0.084 (95% CrI 0.005-0.163)." }, { text: "MIND", feedback: "MIND's primary ordinal mRS at 180 days showed no difference (OR 1.03; 96% CI 0.62-1.72; P=.45)." }, { text: "MISTIE III", feedback: "MISTIE III's primary mRS 0-3 at 365 days was not significant (4% difference; 95% CI -4 to 12; p=0.33)." }],
      correctAnswer: 0,
      feedback: { correct: "ENRICH's primary endpoint (utility-weighted mRS at 180 days) favored surgery, difference 0.084 (95% CrI 0.005-0.163).\n\n> _Source:_ “The mean score on the …” — Abstract, p. 2, ¶10 ; “No statistically significant difference in …” — Results, p. 6, ¶5 ; “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1" },
    },
    {
      kind: "MultipleChoice",
      id: "uq1-multiplechoice" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "Which trial reported a statistically significant reduction in all-cause mortality with surgery?" },
  ],
      options: [{ text: "STICH", feedback: "STICH 6-month mortality did not differ (36% vs 37%; OR 0.95; 95% CI 0.73-1.23; p=0.707)." }, { text: "MIND", feedback: "MIND 180-day mortality did not differ (13.2% vs 18.3%; difference -5.1%; 95% CI -16.1 to 4.5)." }, { text: "MISTIE III", feedback: "MISTIE III 365-day mortality was lower with surgery (adjusted HR 0.67; 95% CI 0.45-0.98; p=0.037)." }],
      correctAnswer: 2,
      feedback: { correct: "MISTIE III 365-day mortality was lower with surgery (adjusted HR 0.67; 95% CI 0.45-0.98; p=0.037).\n\n> _Source:_ “was significantly lower in the …” — Results, p. 7, ¶3 ; “The mortality rate at 6 …” — Results, p. 5, ¶6 ; “At 180 days, 20 of …” — Results, p. 7, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "uq2-multiplechoice" as SectionId,
      title: "Who Was Enrolled",
      content: [
    { kind: "text", value: "What was the upper age limit for enrollment in the ENRICH trial?" },
  ],
      options: [{ text: "93 years", feedback: "93 years was the upper age observed in STICH (range 19-93), not ENRICH's eligibility cap." }, { text: "No upper limit (18 or older)", feedback: "MISTIE III enrolled adults aged 18 or older with no upper cap." }, { text: "80 years", feedback: "ENRICH enrolled patients 18 to 80 years of age." }],
      correctAnswer: 2,
      feedback: { correct: "ENRICH enrolled patients 18 to 80 years of age.\n\n> _Source:_ “Persons 18 to 80 years …” — Methods, p. 3, ¶6 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5 ; “Eligible patients were aged 18 …” — Methods, p. 3, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "uq3-multiplechoice" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "Which trial's surgical intervention delivered alteplase directly into the clot through a catheter?" },
  ],
      options: [{ text: "MISTIE III", feedback: "MISTIE III used catheter evacuation followed by intraclot alteplase (1.0 mg every 8 h, up to nine doses)." }, { text: "MIND", feedback: "MIND used endoscopic aspiration via a burr hole (Artemis), not thrombolysis." }, { text: "ENRICH", feedback: "ENRICH used trans-sulcal parafascicular evacuation (BrainPath/Myriad), not thrombolysis." }],
      correctAnswer: 0,
      feedback: { correct: "MISTIE III used catheter evacuation followed by intraclot alteplase (1.0 mg every 8 h, up to nine doses).\n\n> _Source:_ “6 h or more after …” — Methods, p. 4, ¶1 ; “ParticipantsrandomizedtotheMISarmunderwent MISwithin72hoursofictusandreceivedMM.” — Methods, p. 2, ¶7 ; “Patients were randomly assigned, in …” — Methods, p. 4, ¶3" },
    },
    {
      kind: "MultipleChoice",
      id: "uq4-multiplechoice" as SectionId,
      title: "Weighing the Harms",
      content: [
    { kind: "text", value: "In the ENRICH trial, what was the 30-day death rate in the surgery group (the primary safety endpoint)?" },
  ],
      options: [{ text: "20%", feedback: "20% was the 180-day surgery-group death rate, not the 30-day safety endpoint." }, { text: "63.3%", feedback: "63.3% was the proportion with a serious adverse event, not mortality." }, { text: "9.3%", feedback: "Death by 30 days was 9.3% (14/150) in surgery vs 18.0% (27/150) in control." }],
      correctAnswer: 2,
      feedback: { correct: "Death by 30 days was 9.3% (14/150) in surgery vs 18.0% (27/150) in control.\n\n> _Source:_ “A primary safety end point …” — Abstract, p. 2, ¶9 ; “Death from any cause at …” — Results, p. 9, ¶3 ; “In the surgery group, one …” — Results, p. 9, ¶4" },
    },
    {
      kind: "MultipleChoice",
      id: "uq5-multiplechoice" as SectionId,
      title: "The Result (5)",
      content: [
    { kind: "text", value: "In MIND, at which timepoint did the exploratory analysis show minimally invasive surgery associated with improved ordinal mRS (OR 4.23)?" },
  ],
      options: [{ text: "30 days", feedback: "The OR 4.23 (95% CI 2.36-7.57) benefit was seen at 30 days and was gone by 90 and 180 days." }, { text: "180 days (dichotomized mRS 0-3)", feedback: "At 180 days dichotomized mRS 0-3 was 36.8% vs 37.2% (OR 1.03), no benefit." }, { text: "180 days (ordinal mRS)", feedback: "At 180 days ordinal mRS the OR was 1.03 (96% CI 0.62-1.72), no benefit." }],
      correctAnswer: 0,
      feedback: { correct: "The OR 4.23 (95% CI 2.36-7.57) benefit was seen at 30 days and was gone by 90 and 180 days.\n\n> _Source:_ “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “Dichotomized mRS scores (≤3 and …” — Results, p. 6, ¶6 ; “No statistically significant difference in …” — Results, p. 6, ¶5" },
    },
    {
      kind: "MultipleChoice",
      id: "uq6-multiplechoice" as SectionId,
      title: "The Result (6)",
      content: [
    { kind: "text", value: "In STICH, which subgroup showed a significant treatment-by-depth interaction favoring early surgery?" },
  ],
      options: [{ text: "The modified Rankin scale favorable-outcome group", feedback: "Rankin favorable outcome was 33% vs 28% (p=0.116), not significant." }, { text: "The overall extended Glasgow outcome scale population", feedback: "Overall, absolute benefit was only 2.3% (OR 0.89; p=0.414), not significant." }, { text: "Haematoma 1 cm or less from the cortical surface", feedback: "Superficial clots (<=1 cm) showed an 8% absolute benefit; interaction p=0.02." }],
      correctAnswer: 2,
      feedback: { correct: "Superficial clots (<=1 cm) showed an 8% absolute benefit; interaction p=0.02.\n\n> _Source:_ “A favourable outcome from early …” — Results, p. 6, ¶4 ; “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “With the prognosis-based modified Rankin …” — Results, p. 6, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "uq7-multiplechoice" as SectionId,
      title: "Versus Prior Trials",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Which feature distinguished the MIND population from the earlier ENRICH population and may explain MIND's null result?" },
  ],
      options: [{ text: "A median onset-to-intervention time of 16.8 hours", feedback: "16.8 hours was ENRICH's timing; MIND intervened later (27.5 hours)." }, { text: "A predominantly deep-to-lobar ratio of 70:30", feedback: "MIND was 70:30 deep-to-lobar versus 30:70 in ENRICH, whose benefit was attributable to lobar hemorrhages." }, { text: "A lobar-subgroup benefit of 0.127 on utility-weighted mRS", feedback: "This lobar benefit (0.127) was ENRICH's finding, not a MIND population feature." }],
      correctAnswer: 1,
      feedback: { correct: "MIND was 70:30 deep-to-lobar versus 30:70 in ENRICH, whose benefit was attributable to lobar hemorrhages.\n\n> _Source:_ “Recently, the ENRICH study demonstrated …” — Discussion, p. 8, ¶3 ; “The mean between-group difference was …” — Abstract, p. 2, ¶10 ; “in ENRICH, MIS was performed …” — Discussion, p. 8, ¶4" },
    },
  ],
};

export default lessonData;
