import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "584b51e0-37df-4a23-89b2-3df6a32b362a" as LessonId,
  title: "MISTIE III: Minimally Invasive Clot Evacuation for Intracerebral Haemorrhage",
  description: "A phase 3 trial of image-guided catheter evacuation plus intraclot alteplase for spontaneous supratentorial intracerebral haemorrhage — a neutral primary functional outcome alongside an exploratory mortality signal.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Hanley DF, et al. *Lancet*. 2019." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "Intracerebral haemorrhage has no evidence-based primary treatment. The obvious surgical move — open craniotomy to remove the clot — is used in routine practice, yet the large pragmatic trials that tested it (STICH I and II) gave strong indications that craniotomy does not yield a 10-15% benefit in mortality or functional outcome, with only about 30% of patients achieving good outcomes. That leaves a gap: a therapy in common use with no convincing effect, and no established alternative. The physiologic case for trying again is that clinical injury from intracerebral haemorrhage tracks with clot size — roughly a 10% improvement in good outcomes for each 10 mL decrease in 10-50 mL clots (OR 1.4 per 10 mL). If injury scales with volume, then removing volume should help. What made this reasoning worth a fresh trial is the inference that a lower-trauma, minimally invasive way to shrink the clot might capture the benefit that open surgery could not — an attractive hypothesis, not an established fact, and the reason the question stayed open." },
    { kind: "text", value: "> _Source:_ “no evidence-based primary treatment exists” — Abstract, p. 2, ¶4 ; “The International Surgical Trial in …” — Discussion, p. 11, ¶4 ; “Clinical injury from intracerebral haemorrhage …” — Discussion, p. 11, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "The MISTIE rationale follows directly from the clot-size relationship. If each 10 mL removed buys roughly 10% more good outcomes in the 10-50 mL range (OR 1.4 per 10 mL), then mechanically reducing the haematoma and its mass effect should spare surrounding tissue and improve function. The intervention was engineered around that logic: image-guided minimally invasive catheter evacuation of the haematoma followed by thrombolysis, with alteplase instilled directly into the clot at 1.0 mg in 1 mL, then a 3 mL flush, every 8 h for up to nine doses, aiming to reduce the residual haematoma to 15 mL or less. This is inferred design reasoning, not a demonstrated mechanism — the claim is that the procedure was built to shrink the clot, against the backdrop of STICH I and II, where open craniotomy had not delivered a 10-15% functional or mortality benefit. Whether shrinking the clot this way translates into better function is exactly what the trial had to show, not something the mechanism guarantees." },
    { kind: "text", value: "> _Source:_ “Clinical injury from intracerebral haemorrhage …” — Discussion, p. 11, ¶4 ; “6 h or more after …” — Methods, p. 4, ¶1 ; “The International Surgical Trial in …” — Discussion, p. 11, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "The Intervention (1)",
      content: [
    { kind: "text", value: "It is worth being precise about what the MISTIE arm actually received, because the label 'minimally invasive surgery' hides a specific regimen. The design implies a two-part intervention: image-guided catheter evacuation of the haematoma, then repeated thrombolysis through that catheter — alteplase 1.0 mg in 1 mL followed by a 3 mL flush, every 8 h, for up to nine doses, with the surgical target of getting residual haematoma to 15 mL or less. The comparator was standard medical care per American Heart Association and European Stroke Organisation guidelines, with follow-up CT and monitoring on the same schedule as the intervention arm. Note what is inferred rather than verified here: the finer procedural steps — burr-hole rigid-cannula aspiration, soft-catheter exchange, dwell and gravity-drainage timing, and the rebleeding stopping rule — are not established by the approved facts, so treat the regimen as the dose-and-schedule skeleton above, not a full operative protocol." },
    { kind: "text", value: "> _Source:_ “6 h or more after …” — Methods, p. 4, ¶1 ; “We used the American Heart …” — Methods, p. 4, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b3-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who the trial let in determines who its answer applies to. Eligible patients were adults 18 or older with a spontaneous, non-traumatic, supratentorial intracerebral haemorrhage of 30 mL or more due to cerebral small-vessel disease. They had to be sick enough to matter — GCS 14 or less, or NIHSS 6 or higher — but well enough before the bleed to have something to lose, with a pre-bleed modified Rankin score of 0 or 1. Two further gates shaped the population. First, the clot had to be stable: growth of less than 5 mL for at least 6 h after the diagnostic CT, so that thrombolysis was not being added to an actively expanding bleed. Second, the extremes were excluded — patients with expressed care limitations and those with life-threatening mass effect already requiring surgery. Read together, these criteria describe a moderate-severity, stabilised, salvageable patient, not the whole spectrum of intracerebral haemorrhage at the bedside." },
    { kind: "text", value: "> _Source:_ “Eligible patients were aged 18 …” — Methods, p. 3, ¶2 ; “a Glasgow Coma Scale (GCS) …” — Methods, p. 3, ¶2 ; “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2 ; “We did not enrol patients …” — Methods, p. 3, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-inc-clot-stability" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "MISTIE III required that a patient's haemorrhage be stable before enrolment, so that thrombolysis was not added to an actively expanding bleed. How was this clot-stability entry rule defined — the maximum permitted growth and the minimum interval over which it had to hold after the diagnostic CT?" },
  ],
      options: [{ text: "Growth of less than 30 mL, sustained for at least 6 h after the diagnostic CT.", feedback: "Incorrect. 30 mL is the minimum haemorrhage size required for eligibility (a supratentorial ICH of 30 mL or more), not the permitted growth for the stability rule. The stability threshold was growth of less than 5 mL." }, { text: "Growth of less than 15 mL, sustained for at least 8 h after the diagnostic CT.", feedback: "Incorrect. 15 mL is the surgical target for residual haematoma and 8 h is the alteplase dosing interval — both belong to the intervention regimen, not the stability entry rule. Stability was defined as growth of less than 5 mL over at least 6 h." }, { text: "Growth of less than 5 mL, sustained for at least 6 h after the diagnostic CT.", feedback: "Correct. Eligibility required that the haemorrhage remained the same size — defined as growth of less than 5 mL — for at least 6 h after the diagnostic CT, so thrombolysis was not being added to an expanding bleed." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. Eligibility required that the haemorrhage remained the same size — defined as growth of less than 5 mL — for at least 6 h after the diagnostic CT, so thrombolysis was not being added to an expanding bleed.\n\n> _Source:_ “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-primary-mrs03-365" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "The trial was designed to chase a 10–15% benefit on its primary functional endpoint — the proportion of patients achieving a good functional outcome (modified Rankin Scale score of 0–3) at 365 days, MISTIE versus standard medical care. Before reading on, predict what the adjusted primary efficacy analysis showed for this comparison. Which of the following best describes the adjusted between-group result on that primary functional endpoint?" },
  ],
      options: [{ text: "About 15% versus 23% — a difference of 8 percentage points (p=0.033).", feedback: "These are the 180-day all-cause mortality figures, not the 365-day good functional outcome (mRS 0–3) the primary endpoint measured." }, { text: "About 39% versus 36% achieved the outcome — an adjusted risk difference of 4.2% (95% CI −3.3 to 11.8; p=0.28).", feedback: "These are the extended Glasgow Outcome Scale (eGOS 4–8) figures at 365 days, a different functional endpoint — not the primary modified Rankin Scale (mRS 0–3) outcome the stem asks about." }, { text: "About 45% versus 41% achieved the outcome — an adjusted risk difference of 4% (95% CI −4 to 12; p=0.33).", feedback: "Correct. The adjusted primary analysis estimated mRS 0–3 at 365 days in 45% of the MISTIE group versus 41% of standard care — an adjusted risk difference of 4% (95% CI −4 to 12; p=0.33), a confidence interval crossing zero and a point estimate well below the 10–15% the design chased." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. The adjusted primary analysis estimated mRS 0–3 at 365 days in 45% of the MISTIE group versus 41% of standard care — an adjusted risk difference of 4% (95% CI −4 to 12; p=0.33), a confidence interval crossing zero and a point estimate well below the 10–15% the design chased.\n\n> _Source:_ “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1" },
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "On its primary endpoint the trial was neutral. The adjusted efficacy analysis estimated a good functional outcome — mRS 0-3 at 365 days — in 45% of the MISTIE group versus 41% of the standard medical care group, an adjusted risk difference of 4% (95% CI -4 to 12; p=0.33). The confidence interval crosses zero, and the point estimate sits well below the difference the design assumed (38% vs 25% reaching mRS 0-3). Whatever the procedure did to the clot, it did not move the primary functional outcome." },
    { kind: "text", value: "> _Source:_ “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1 ; “On the basis of the …” — Methods, p. 5, ¶4" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-primary-mrs03-365" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "In the adjusted primary efficacy analysis of good functional outcome (mRS 0-3 at 365 days), MISTIE showed an adjusted risk difference of ___% over standard medical care, with a p-value of ___, meeting the conventional threshold for statistical significance being a matter the confidence interval settles." },
  ],
      body: "In the adjusted primary efficacy analysis of good functional outcome (mRS 0-3 at 365 days), MISTIE showed an adjusted risk difference of {{diff}}% over standard medical care, with a p-value of {{p}}, meeting the conventional threshold for statistical significance being a matter the confidence interval settles.",
      blanks: { "diff": { match: "numeric", answer: 4.0, tolerance: 0.5, hintMode: "highLow" }, "p": { match: "numeric", answer: 0.33, tolerance: 0.01, hintMode: "highLow" } },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-mortality-365" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "The primary functional endpoint did not separate the arms. Before reading on, predict what the trial's secondary analysis of all-cause mortality at 365 days showed for the MISTIE group versus the standard medical care group. Which of the following best describes that 365-day mortality comparison?" },
  ],
      options: [{ text: "A good outcome was reached in 39% versus 36%, an adjusted difference of 4.2% (95% CI −3.3 to 11.8; p=0.28).", feedback: "These are the 365-day extended Glasgow Outcome Scale (eGOS 4–8) figures — a functional endpoint, not mortality. The item asks about all-cause mortality at 365 days." }, { text: "Mortality was significantly lower with MISTIE, with a severity-adjusted hazard ratio of 0.67 (95% CI 0.45–0.98; p=0.037).", feedback: "Correct. All-cause mortality at 365 days was significantly lower in the MISTIE group, severity-adjusted hazard ratio 0.67 (95% CI 0.45–0.98; p=0.037) — a survival separation even though functional outcome did not differ." }, { text: "Mortality was 1% with MISTIE versus 4% with standard medical care, a 3 percentage point difference (p=0.018).", feedback: "These are the 7-day (procedure-related) mortality figures (2 [1%] vs 10 [4%]; p=0.018). The item asks about all-cause mortality at 365 days." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. All-cause mortality at 365 days was significantly lower in the MISTIE group, severity-adjusted hazard ratio 0.67 (95% CI 0.45–0.98; p=0.037) — a survival separation even though functional outcome did not differ.\n\n> _Source:_ “was significantly lower in the …” — Results, p. 7, ¶3" },
    },
    {
      kind: "Information",
      id: "b9-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The mortality picture ran the other way — and this is inferred emphasis, not a confirmatory finding, because mortality was a secondary outcome. All-cause mortality was lower with MISTIE at 7 days (two [1%] vs ten [4%]; p=0.018), at 180 days (39 [15%] vs 57 [23%]; p=0.033), and at 365 days (severity-adjusted HR 0.67, 95% CI 0.45-0.98; p=0.037); at 30 days the difference (24 [9%] vs 37 [14%]; p=0.066) did not reach conventional significance. The key interpretive point: these are successive counts of the same accumulating deaths, not independent confirmations. Over the same window the functional outcomes did not separate — the primary mRS 0-3 analysis was neutral, and the extended Glasgow Outcome Scale (eGOS 4-8) at 365 days was 39% vs 36% (adjusted difference 4.2%, 95% CI -3.3 to 11.8; p=0.28). The trial reported no analysis of disability restricted to survivors, so whether the extra survivors were left severely disabled cannot be determined from these data." },
    { kind: "text", value: "> _Source:_ “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “was significantly lower in the …” — Results, p. 7, ¶3 ; “94 (39%) of 244 patients …” — Results, p. 7, ¶2" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "multipleselection-out-mortality-7day" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "MISTIE III tracked all-cause mortality at several timepoints after stroke. At which of the following timepoints was mortality significantly lower with MISTIE than with standard medical care?" },
  ],
      options: [{ text: "30 days after stroke", feedback: "Incorrect. At 30 days mortality was 24 (9%) with MISTIE versus 37 (14%) with standard care (p=0.066), which did not reach conventional significance." }, { text: "180 days after stroke", feedback: "Correct. At 180 days mortality was 39 (15%) with MISTIE versus 57 (23%) with standard care (p=0.033), a significant difference." }, { text: "365 days after stroke", feedback: "Correct. At 365 days mortality was significantly lower with MISTIE (severity-adjusted HR 0.67, 95% CI 0.45-0.98; p=0.037)." }, { text: "7 days after stroke", feedback: "Correct. 7-day mortality was 2 (1%) of 255 with MISTIE versus 10 (4%) of 251 with standard care (p=0.018), a significant difference." }],
      correctAnswers: [1, 2, 3],
      feedback: { correct: "> _Source:_ “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “was significantly lower in the …” — Results, p. 7, ¶3" },
    },
    {
      kind: "Information",
      id: "b11-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The safety profile is what lets the neutral efficacy result be read as 'safe but not beneficial' rather than 'harmful.' Symptomatic bleeding within 72 h of the last dose was similar between arms (6 [2%] of 255 with MISTIE vs 3 [1%] of 251; p=0.33), as was brain bacterial infection (2 [1%] vs 0; p=0.16). The one clear excess was asymptomatic bleeding, significantly more common with MISTIE (81 [32%] of 255 vs 21 [8%] of 251; p<0.0001) — radiographic, not clinical. Taken together, this supports the authors' conclusion that the procedure was safely adopted by a broad group of newly trained neurosurgeons, even as they conclude that pragmatic use of MISTIE cannot be recommended for improving functional outcome." },
    { kind: "text", value: "> _Source:_ “six [2%] of 255 patients …” — Abstract, p. 2, ¶1 ; “two [1%] of 255 patients …” — Abstract, p. 2, ¶1 ; “The proportion of patients with …” — Results, p. 8, ¶3 ; “The pragmatic use of MISTIE …” — Discussion, p. 12, ¶5" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-harm-asymptomatic-bleeding" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Among the safety outcomes MISTIE III reported, one adverse-event category occurred significantly more often in the MISTIE group than in the standard medical care group. Which category showed that significant excess with MISTIE?" },
  ],
      options: [{ text: "Asymptomatic bleeding: 81 (32%) of 255 with MISTIE versus 21 (8%) of 251 with standard medical care.", feedback: "Correct. Asymptomatic (radiographic, not clinical) bleeding was significantly more common with MISTIE, 32% versus 8% (p<0.0001) — the one clear adverse-event excess in the trial." }, { text: "Brain bacterial infection: 2 (1%) of 255 with MISTIE versus 0 (0%) of 251 with standard medical care.", feedback: "These are the real brain-infection figures, but the difference was not significant (p=0.16); this was not the category with a significant excess." }, { text: "One or more serious adverse events at 30 days: 76 (30%) of 255 with MISTIE versus 84 (33%) of 251 with standard medical care.", feedback: "These are the real serious-adverse-event figures, but here MISTIE had the lower proportion (30% vs 33%); it was not a category more frequent with MISTIE." }],
      correctAnswer: 0,
      feedback: { correct: "Correct. Asymptomatic (radiographic, not clinical) bleeding was significantly more common with MISTIE, 32% versus 8% (p<0.0001) — the one clear adverse-event excess in the trial.\n\n> _Source:_ “The proportion of patients with …” — Results, p. 8, ¶3" },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-bedside-not-pragmatic-adoption" as SectionId,
      title: "At the Bedside (1)",
      content: [
    { kind: "text", value: "Given the neutral primary functional endpoint alongside the safety findings, what overall bedside conclusion did the MISTIE III authors reach about routine adoption of the procedure?" },
  ],
      options: [{ text: "Pragmatic use of MISTIE cannot be recommended for improving functional outcome, although the procedure was shown to be safely adopted by a broad group of newly trained neurosurgeons.", feedback: "Correct. Because the primary functional endpoint was neutral, the authors concluded MISTIE cannot be recommended to improve function — while noting it was safely performed by newly trained surgeons." }, { text: "The procedure can be recommended because all-cause mortality at 365 days was significantly lower with MISTIE (severity-adjusted HR 0.67, 95% CI 0.45–0.98; p=0.037).", feedback: "The mortality signal was a secondary, exploratory finding and did not change the authors' conclusion that MISTIE cannot be recommended to improve functional outcome." }, { text: "For patients who fit the enrolment criteria, the results support an active, aggressive approach to care rather than a nihilistic one, since around 43% achieved a good functional outcome and 80% were living at home or in active rehabilitation at 365 days.", feedback: "This is a true, separate inference the trialists draw about care philosophy for the enrolled cohort — it is not their conclusion about whether to adopt the MISTIE procedure itself." }],
      correctAnswer: 0,
      feedback: { correct: "Correct. Because the primary functional endpoint was neutral, the authors concluded MISTIE cannot be recommended to improve function — while noting it was safely performed by newly trained surgeons.\n\n> _Source:_ “The pragmatic use of MISTIE …” — Discussion, p. 12, ¶5" },
    },
    {
      kind: "Information",
      id: "b14-explain" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "One inference the trialists draw applies to any patient who fits the enrolment profile — spontaneous supratentorial ICH of 30 mL or more with a clot stable (growth <5 mL) for at least 6 h. Across the enrolled cohort, about 43% achieved a good functional outcome and 80% were living at home or in active rehabilitation 365 days after stroke. The trialists read these numbers as an argument against early nihilism: for patients meeting these criteria, an active, aggressive approach to care is defensible, whatever one concludes about the procedure itself. This is an interpretation of cohort outcomes, not a treatment effect, and note that the 80% figure is reported for the enrolled cohort as a whole, not specifically for survivors." },
    { kind: "text", value: "> _Source:_ “For the entire trial cohort, …” — Discussion, p. 12, ¶5 ; “Eligible patients were aged 18 …” — Methods, p. 3, ¶2 ; “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-bedside-aggressive-care" as SectionId,
      title: "At the Bedside (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "Across the whole enrolled MISTIE III cohort, about 43% of patients achieved a good functional outcome and roughly 80% were living at home or in active rehabilitation 365 days after their stroke. The trialists read these figures as an argument for an active, aggressive approach to care — rather than early care limitation — for patients who meet the enrolment profile. Evaluate this reasoning: what makes these cohort outcomes a defensible argument against therapeutic nihilism for eligible patients, and what are the limits of using cohort-level outcome proportions (rather than a treatment-effect estimate) to justify aggressive care?",
      minLength: 150,
      placeholder: "Consider what a cohort-wide outcome proportion shows about prognosis versus what it shows about the effect of treatment, and who these numbers do and do not describe...",
      extraContext: "Assess trial-appraisal reasoning about what a cohort outcome proportion can and cannot support — not code and not clinical management advice. A strong response should: (1) explain why ~43% good outcome and ~80% living at home/in rehab at 365 days undercut a purely nihilistic prognosis for enrolment-eligible patients — these are meaningfully better-than-expected outcomes for a population many clinicians might write off, so they argue against withdrawing or limiting care prematurely; (2) recognise that this is an interpretation of cohort-level outcomes pooled across BOTH arms, not a treatment effect — the primary functional endpoint was neutral, so the 43%/80% figures say nothing about whether MISTIE caused the good outcomes; (3) note the enrolment restriction: these numbers describe a moderate-severity, stabilised, salvageable population selected by the entry criteria (spontaneous supratentorial ICH ≥30 mL, stable clot, pre-bleed mRS 0-1, care-limitation and life-threatening mass-effect cases excluded), so they do not generalise to all ICH patients at the bedside; (4) ideally flag that the 80% figure is reported for the enrolled cohort as a whole, not specifically for survivors, so it must not be read as a survivor-quality-of-life statistic. Reward candidates who separate \"prognosis is better than nihilism assumes\" (supported) from \"aggressive care improves outcomes\" (not supported by cohort proportions). Do not penalise for omitting exact figures; reward correct reasoning about selection and about cohort-vs-effect.",
    },
    {
      kind: "Information",
      id: "b16-explain" as SectionId,
      title: "The Intervention (2)",
      content: [
    { kind: "text", value: "The MISTIE arm tested a bundle, and that limits what any positive signal can be attributed to. The intervention combined mechanical evacuation with repeated intraclot alteplase — 1 mg every 8 h, up to nine doses — and it did shrink the clot dramatically: mean end-of-treatment volume 16 mL (SD 13) with MISTIE versus 47 mL (SD 18) with standard care (mean difference 32 mL, 95% CI 30-34; p<0.0001), a 69% reduction versus 3%. But there was no arm receiving catheter aspiration without alteplase. The inference to draw is that the thrombolytic component's independent contribution to the clot reduction and to any downstream outcome cannot be isolated from the effect of mechanical evacuation — the two always travelled together." },
    { kind: "text", value: "> _Source:_ “6 h or more after …” — Methods, p. 4, ¶1 ; “The mean end-of-treatment volume was …” — Results, p. 7, ¶1" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-out-clot-reduction" as SectionId,
      title: "The Result (5)",
      content: [],
      topic: "MISTIE reduced the mean end-of-treatment haematoma volume dramatically — from 47 mL with standard medical care to 16 mL with the intervention, a 69% reduction versus 3%. But the MISTIE arm delivered mechanical catheter evacuation and repeated intraclot alteplase together, and no arm received catheter aspiration without the thrombolytic. Explain why this design means the independent contribution of alteplase to the clot reduction (and to any downstream outcome) cannot be isolated. What additional comparison would have been needed to separate the two components, and what does this limitation mean for claims about the drug's role?",
      minLength: 150,
      placeholder: "Consider what varied together in the MISTIE arm, what comparison arm was absent, and what you can and cannot attribute to the alteplase specifically...",
      extraContext: "Assess trial-appraisal reasoning about a bundled intervention, not code. A strong response should: (1) recognise that mechanical evacuation and intraclot alteplase were always administered together in the single MISTIE arm, so the observed 69% vs 3% clot reduction reflects the combined effect and cannot be partitioned between the two components; (2) identify the missing counterfactual — there was no arm receiving catheter aspiration alone (no thrombolytic) — meaning nothing in the trial estimates what aspiration would have achieved without the drug, or what the drug added over aspiration; (3) explain that because the two interventions are perfectly confounded (they never varied independently), any attribution of the reduction or downstream outcomes specifically to alteplase is unsupported by the data; (4) note that a factorial or three-arm design (e.g., aspiration-alone vs aspiration-plus-alteplase vs standard care) would be needed to isolate the thrombolytic's independent contribution. Credit reasoning that this is a limitation of inference, not a flaw in the reported magnitude (the 32 mL mean difference, 95% CI 30-34, p<0.0001, is real). Do not require the learner to discuss the functional-outcome result here; the focus is the attribution problem created by the bundled arm.",
    },
    {
      kind: "Information",
      id: "b18-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "A tempting secondary story is that patients whose clots were reduced most did best — the surgical aim of residual haematoma of 15 mL or less was reached in 146 (58%) of 250 MISTIE patients versus 2 (<1%) of 249 with standard care. But the degree of clot removal was not itself randomised. Patients who reached the aim may differ systematically from those who did not, so any association between the extent of removal and functional outcome is subject to unmeasured confounding and cannot establish causal benefit. The specific effect size and the particular confounders that might be invoked — haemorrhage shape or location amenable to reduction — are not established by the verified facts and would need confirmation against the paper; the point that survives is the inferential one: an as-treated dose-response is not a randomised comparison." },
    { kind: "text", value: "> _Source:_ “A limitation of the clot …” — Discussion, p. 9, ¶4 ; “146 (58%) of 250 patients …” — Results, p. 7, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-surgical-aim-achieved" as SectionId,
      title: "The Result (6)",
      content: [
    { kind: "text", value: "In the MISTIE III trial, the protocol-defined surgical aim was to reduce the residual haematoma to 15 mL or less. What proportion of patients in the MISTIE group actually reached this surgical aim?" },
  ],
      options: [{ text: "44%", feedback: "44% is the unadjusted proportion of the MISTIE group achieving a good functional outcome (mRS 0-3) at 365 days, not the proportion reaching the surgical aim of residual haematoma of 15 mL or less." }, { text: "58%", feedback: "Correct. 146 (58%) of 250 patients in the MISTIE group reached the protocol-defined surgical aim of residual haematoma of 15 mL or less (versus 2 [<1%] with standard care)." }, { text: "39%", feedback: "39% is the proportion achieving an extended Glasgow Outcome Scale (eGOS 4-8) score at 365 days in the MISTIE group, not the proportion reaching the surgical aim of residual haematoma of 15 mL or less." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. 146 (58%) of 250 patients in the MISTIE group reached the protocol-defined surgical aim of residual haematoma of 15 mL or less (versus 2 [<1%] with standard care).\n\n> _Source:_ “146 (58%) of 250 patients …” — Results, p. 7, ¶1" },
    },
    {
      kind: "Information",
      id: "b20-explain" as SectionId,
      title: "How It Was Meant to Work (3)",
      content: [
    { kind: "text", value: "Return to the mortality benefit and hold it to the right standard. The 365-day severity-adjusted HR of 0.67 came from a secondary analysis that was not adjusted for the trial's multiple secondary analyses, so it should be read as exploratory rather than confirmatory. The setting makes this sharper: the statistical analysis plan carried 54 pre-planned analyses with no control of the study-wide type I error rate, which means any single significant result — including the mortality and clot-removal findings — carries a real risk of over-interpretation or selective emphasis. And because the significant timepoints are nested counts of the same accumulating deaths, they are not independent replications. The honest label for the survival signal is hypothesis-generating." },
    { kind: "text", value: "> _Source:_ “Our mortality analysis was secondary …” — Discussion, p. 9, ¶4 ; “Overall, the statistical analysis plan …” — Methods, p. 6, ¶2 ; “was significantly lower in the …” — Results, p. 7, ¶3" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-mortality-secondary-exploratory" as SectionId,
      title: "Reason It Through",
      content: [],
      topic: "MISTIE III reported a lower all-cause mortality with MISTIE than with standard medical care, and this survival signal came from a secondary analysis. Explain why the mortality benefit should be interpreted as exploratory or hypothesis-generating rather than as a confirmed treatment effect. In your answer, address (a) what it means that mortality was a secondary rather than the primary outcome, (b) why the lack of adjustment for the trial's many pre-planned analyses matters, and (c) why the several timepoints showing lower mortality do not amount to independent confirmations of one another.",
      minLength: 150,
      placeholder: "Consider what \"secondary outcome,\" \"no multiplicity control,\" and \"the same deaths counted at several timepoints\" each do to the strength of the mortality claim...",
      extraContext: "Assess trial-appraisal reasoning, not code and not memorised figures. A strong response should: (1) recognise that a secondary outcome was not the endpoint the trial was designed and powered to confirm, so a significant result on it cannot carry the same evidentiary weight as a primary finding — especially when the primary functional outcome was neutral; (2) explain the multiplicity problem — with a large number of pre-planned analyses and no control of the study-wide type I error rate, some analyses will reach conventional significance by chance alone, so any single significant secondary result risks over-interpretation or selective emphasis; (3) grasp that the mortality readings at successive timepoints are nested counts of the same accumulating deaths in the same patients, not independent replications, so agreement across timepoints does not strengthen the case the way genuinely independent confirmations would; and (4) conclude that the honest label for the survival signal is hypothesis-generating — a finding to be tested in a future confirmatory study, not a benefit to be claimed as established. Credit reasoning that ties these together; do not require the learner to recite specific hazard ratios, p-values, or counts.",
    },
    {
      kind: "Information",
      id: "b22-explain" as SectionId,
      title: "How It Was Meant to Work (4)",
      content: [
    { kind: "text", value: "Three features constrain how far the result travels. First, the trial was open-label, and the absence of blinding did not protect against undertreatment or overtreatment bias tied to knowing which intervention a patient was assigned. Second, the surgical aim of reducing residual haematoma to 15 mL or less was reached in only 58% of the MISTIE group, so the trial cannot establish that the procedure improves functional outcome for all comers — a large minority never got the intended anatomic result. Third, generalisability is limited by setting: 78 resource-rich tertiary referral and university sites, 114 surgeons, a surgical core laboratory, and the extra oversight of a phase 3 trial. The counterweight the authors offer is that the procedure was nonetheless safely adopted by a broad group of newly trained neurosurgeons — though nothing in the reported data establishes that surgical-aim attainment improved with surgeon experience." },
    { kind: "text", value: "> _Source:_ “The absence of blinding did …” — Discussion, p. 9, ¶4 ; “MISTIE cannot be recommended as …” — Discussion, p. 9, ¶3 ; “Study limitations include the open-label …” — Discussion, p. 9, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-gen-tertiary-centres-surgeons" as SectionId,
      title: "How Far It Generalizes",
      content: [],
      topic: "MISTIE III was carried out at 78 resource-rich tertiary referral and university sites, drawing on 114 surgeons, a central surgical core laboratory that oversaw imaging and clot-targeting, and the additional monitoring that accompanies a phase 3 trial. Suppose a community hospital without a surgical core laboratory and with neurosurgeons who perform this procedure only occasionally wanted to adopt MISTIE. Explain how each of these features of the trial's conduct could make its results a poor guide to what such a centre should expect, and say what you would want to know before assuming the trial's outcomes would carry over to routine practice.",
      minLength: 150,
      placeholder: "Consider the sites, the surgeons, the surgical core laboratory, and the phase 3 oversight in turn — for each, how might it make the trial's results better than what a routine centre would achieve, and what would you need to verify before assuming the findings transfer?",
      extraContext: "Assess trial-appraisal reasoning about external validity / generalisability — not code, and not a recall check. A strong response should: (1) recognise that the enrolling sites were resource-rich tertiary referral and university centres with 114 surgeons, so the operators and infrastructure are not representative of routine or community practice; (2) identify the surgical core laboratory as a source of standardisation and quality control (imaging review, targeting, feedback) that ordinary settings lack, which could inflate the fidelity of the procedure relative to real-world use; (3) note that phase 3 trial oversight adds monitoring, protocol adherence, and case selection that would not be present outside a trial; (4) connect these to the direction of the threat — trial conditions likely represent a best-case scenario, so effectiveness in routine practice could be lower and complication rates higher. Credit reasoning that distinguishes efficacy-under-ideal-conditions from real-world effectiveness, and that names concrete things to check (e.g. surgeon volume/learning curve, availability of core-lab-equivalent quality assurance, case mix). Do not require the learner to resolve the question; reward identifying that generalisability is limited and why, and appropriate epistemic caution. Note the trial does report that the procedure was safely adopted by a broad group of newly trained neurosurgeons, so a nuanced answer may weigh that counterpoint — but nothing in the data shows surgical-aim attainment improved with experience, so over-claiming transferability should not be rewarded.",
    },
    {
      kind: "Information",
      id: "b24-explain" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "Finally, the number a patient or family will ask about. The 365-day mortality difference (severity-adjusted HR 0.67) corresponds to an estimated number needed to treat of about 17 to preserve one life, echoed in the 180-day counts of 39 (15%) with MISTIE versus 57 (23%) with standard care. That is a compelling figure — and precisely the kind that demands caution when it is spoken aloud. It is derived from a secondary outcome not corrected for the 54 pre-planned analyses, with no study-wide type I error control, so its exploratory status must travel with the number. Presenting an NNT of 17 as if it were the trial's confirmed result would misrepresent a hypothesis-generating signal as an established benefit." },
    { kind: "text", value: "> _Source:_ “with a number needed to …” — Discussion, p. 12, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “was significantly lower in the …” — Results, p. 7, ¶3 ; “Our mortality analysis was secondary …” — Discussion, p. 9, ¶4 ; “Overall, the statistical analysis plan …” — Methods, p. 6, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-nnt-mortality" as SectionId,
      title: "The Result (7)",
      content: [
    { kind: "text", value: "Using the 365-day all-cause mortality benefit (severity-adjusted hazard ratio 0.67), the trialists estimated a number needed to treat to preserve one life over the first year after stroke. What was that estimated number needed to treat?" },
  ],
      options: [{ text: "About 32", feedback: "This is the 32 mL mean difference in end-of-treatment haematoma volume (16 mL with MISTIE vs 47 mL with standard care), not a number needed to treat for mortality." }, { text: "About 57", feedback: "This is the number of standard-care deaths at 180 days (57 [23%] vs 39 [15%] with MISTIE), not the estimated number needed to treat." }, { text: "About 17", feedback: "Correct. The 365-day mortality difference (severity-adjusted HR 0.67) corresponds to an estimated NNT of about 17 to preserve one life. Because mortality was a secondary outcome subject to multiple testing, this figure is exploratory, not a confirmed benefit." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. The 365-day mortality difference (severity-adjusted HR 0.67) corresponds to an estimated NNT of about 17 to preserve one life. Because mortality was a secondary outcome subject to multiple testing, this figure is exploratory, not a confirmed benefit.\n\n> _Source:_ “with a number needed to …” — Discussion, p. 12, ¶3" },
    },
  ],
};

export default lessonData;
