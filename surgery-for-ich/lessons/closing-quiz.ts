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
      id: "multiplechoice-stich-out-primary-gos" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "In STICH, the primary outcome was a prognosis-based dichotomy of the extended Glasgow outcome scale at 6 months. On this primary endpoint, what were the rates of a favourable outcome with early surgery versus initial conservative treatment, and was the difference significant?" },
  ],
      options: [{ text: "45% versus 41% (risk difference 4%, 95% CI -4 to 12; p=0.33), non-significant", feedback: "These are MISTIE III's primary-endpoint figures (mRS 0-3 at 365 days), not STICH's extended GOS result." }, { text: "0.458 versus 0.374 (difference 0.084, 95% CI 0.005 to 0.163), favouring surgery", feedback: "These are ENRICH's utility-weighted mRS figures at 180 days, not STICH's extended GOS result." }, { text: "26% versus 24% (odds ratio 0.89, 95% CI 0.66-1.19; p=0.414), non-significant", feedback: "Correct. On the prognosis-based extended GOS dichotomy at 6 months, 26% (122/468) with early surgery versus 24% (118/496) with conservative treatment, OR 0.89 (95% CI 0.66-1.19, p=0.414) — a non-significant difference." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. On the prognosis-based extended GOS dichotomy at 6 months, 26% (122/468) with early surgery versus 24% (118/496) with conservative treatment, OR 0.89 (95% CI 0.66-1.19, p=0.414) — a non-significant difference.\n\n> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15" },
    },
    {
      kind: "MultipleSelection",
      id: "multipleselection-stich-exc-aneurysm-avm" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Which of the following were eligibility rules for enrolment in STICH?" },
  ],
      options: [{ text: "Exclusion of bleeds probably due to an aneurysm or an arteriovenous malformation", feedback: "Correct. STICH excluded haemorrhages probably due to an aneurysm or an angiographically proven AVM (or secondary to tumour or trauma)." }, { text: "A hematoma volume of 20 to 80 mL", feedback: "This was a MIND inclusion rule (hematoma volume 20-80 mL), not a STICH criterion. STICH specified a minimum haematoma diameter of 2 cm, not a volume window." }, { text: "CT evidence of a spontaneous supratentorial haemorrhage arisen within 72 h", feedback: "Correct. STICH required CT evidence of a spontaneous supratentorial haemorrhage that had arisen within 72 h, alongside surgeon uncertainty." }, { text: "Exclusion of cerebellar haemorrhage or extension into the brainstem", feedback: "Correct. STICH excluded cerebellar haemorrhages and supratentorial bleeds extending into the brainstem." }, { text: "A clot that remained stable, growing less than 5 mL, for at least 6 h", feedback: "This was a MISTIE III eligibility rule (clot stability), not a STICH criterion." }],
      correctAnswers: [0, 2, 3],
      feedback: { correct: "> _Source:_ “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients were eligible for inclusion …” — Methods, p. 2, ¶3" },
    },
    {
      kind: "FillIn",
      id: "fillin-mistie-iii-comp-standard-medical-care" as SectionId,
      title: "The Comparator (1)",
      content: [
    { kind: "text", value: "In MISTIE III, the comparator arm received standard medical care based on ___ and European Stroke Organisation guidelines, with follow-up CT scans and monitoring assessments delivered on the ___ schedule as the MISTIE intervention group." },
  ],
      body: "In MISTIE III, the comparator arm received standard medical care based on {{aha}} and European Stroke Organisation guidelines, with follow-up CT scans and monitoring assessments delivered on the {{schedule}} schedule as the MISTIE intervention group.",
      blanks: { "aha": { match: "text", answers: ["American Heart Association", "AHA"], caseSensitive: false, hintMode: "none" }, "schedule": { match: "text", answers: ["same", "identical"], caseSensitive: false, hintMode: "none" } },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-enrich-lim-abg-futility" as SectionId,
      title: "Check Your Understanding",
      content: [
    { kind: "text", value: "In the ENRICH trial, why can little be concluded about the potential benefit of minimally invasive surgery for hemorrhages in the anterior basal ganglia location?" },
  ],
      options: [{ text: "The lobar-stratum benefit of 0.127 on the utility-weighted modified Rankin scale was so large that it statistically overwhelmed any deep-hemorrhage signal.", feedback: "Wrong. The 0.127 lobar difference describes the lobar stratum's effect; it does not swamp or explain away the deep-hemorrhage stratum. Conclusions about the basal ganglia location are limited because its enrollment was halted for futility, not because the lobar effect was large." }, { text: "Enrollment in that stratum was halted for futility after relatively few patients had been enrolled, leaving it too sparse to support conclusions about surgical benefit there.", feedback: "Correct. Under the adaptive design, enrollment of this stratum was stopped for futility after relatively few patients, so the stratum ended too thin to support conclusions; absence of a demonstrated effect is a limit of the data, not a demonstrated absence of effect." }, { text: "The dichotomized favorable-outcome rate at 180 days was 50.3% with surgery versus 41.0% with control, a difference too small to reach significance in that stratum.", feedback: "Wrong. The 50.3% versus 41.0% figures are the overall dichotomized favorable-outcome rates, not a basal ganglia stratum result. The reason conclusions about that location are limited is that its enrollment was stopped for futility, leaving few such patients." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. Under the adaptive design, enrollment of this stratum was stopped for futility after relatively few patients, so the stratum ended too thin to support conclusions; absence of a demonstrated effect is a limit of the data, not a demonstrated absence of effect.\n\n> _Source:_ “Because recruitment of patients with …” — Discussion, p. 13, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-mind-out-ich-volume-reduction" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "In the MIND trial, what proportion of patients in the minimally invasive surgery group were left with a residual hemorrhage volume of 15 mL or less at the end of treatment?" },
  ],
      options: [{ text: "52.6%", feedback: "Incorrect. 52.6% (80 of 152) is the proportion of the surgery group with one or more serious adverse events within 180 days, not the proportion reaching the ≤15 mL residual-volume target." }, { text: "79.2%", feedback: "Correct. In MIND, 114 of 144 surgical participants (79.2%) were left with a residual hemorrhage volume of 15 mL or less; median ICH volume fell by 80.7% to 6.3 mL. The procedure achieved decisive anatomic success on the surrogate the hypothesis rests on." }, { text: "16.7%", feedback: "Incorrect. 16.7% (24 of 144) is the proportion of the surgery group achieving a dichotomized 180-day mRS of 2 or less — a functional outcome, not the residual-volume target." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. In MIND, 114 of 144 surgical participants (79.2%) were left with a residual hemorrhage volume of 15 mL or less; median ICH volume fell by 80.7% to 6.3 mL. The procedure achieved decisive anatomic success on the surrogate the hypothesis rests on.\n\n> _Source:_ “Following MIS, median (IQR) ICH …” — Results, p. 6, ¶3" },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-mind-out-primary-mrs-180" as SectionId,
      title: "The Result (5)",
      content: [
    { kind: "text", value: "In the MIND trial, the primary efficacy analysis compared minimally invasive surgery with medical management alone using the ordinal modified Rankin Scale score at 180 days (unadjusted intention-to-treat population). What was the odds ratio (with confidence interval) reported for this primary endpoint?" },
  ],
      options: [{ text: "Odds ratio 0.89 (95% CI, 0.66-1.19; p=0.414), not statistically significant", feedback: "This is STICH's primary outcome — the odds ratio for a favourable outcome on the prognosis-based extended Glasgow outcome scale at 6 months — not MIND's." }, { text: "Odds ratio 1.03 (95% CI, 0.58-1.84), not statistically significant", feedback: "This is MIND's result for the dichotomized 180-day mRS of 3 or lower (53 of 144 vs 29 of 78), not the primary ordinal mRS analysis, which carried a 96% credible interval of 0.62-1.72." }, { text: "Odds ratio 1.03 (96% CI, 0.62-1.72; P = .45), not statistically significant", feedback: "Correct. On MIND's primary endpoint — ordinal mRS at 180 days in the unadjusted ITT population — the odds ratio was 1.03 (96% CI, 0.62-1.72; P = .45), with no significant difference between arms." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. On MIND's primary endpoint — ordinal mRS at 180 days in the unadjusted ITT population — the odds ratio was 1.03 (96% CI, 0.62-1.72; P = .45), with no significant difference between arms.\n\n> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5" },
    },
    {
      kind: "FillIn",
      id: "fillin-stich-inc-haematoma-size-gcs" as SectionId,
      title: "Thresholds",
      content: [
    { kind: "text", value: "In STICH, study guidelines recommended that eligible patients have a minimum haematoma diameter of ___ cm and a Glasgow coma score of ___ or more." },
  ],
      body: "In STICH, study guidelines recommended that eligible patients have a minimum haematoma diameter of {{diameter}} cm and a Glasgow coma score of {{gcs}} or more.",
      blanks: { "diameter": { match: "numeric", answer: 2.0, tolerance: 0.1, hintMode: "highLow" }, "gcs": { match: "numeric", answer: 5.0, tolerance: 0.1, hintMode: "highLow" } },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-mistie-iii-out-primary-mrs03-365" as SectionId,
      title: "The Result (6)",
      content: [
    { kind: "text", value: "In MISTIE III, the primary efficacy analysis estimated the proportion of patients achieving a good functional outcome (modified Rankin Scale score of 0-3) at 365 days. What were the estimated rates of a good functional outcome in the MISTIE group versus the standard medical care group on this primary endpoint?" },
  ],
      options: [{ text: "26% with surgery versus 24% with conservative treatment (odds ratio 0.89, 95% CI 0.66-1.19; p=0.414), a non-significant difference", feedback: "These are STICH's favourable-outcome rates on the prognosis-based extended Glasgow outcome scale dichotomy at 6 months, not MISTIE III's mRS 0-3 endpoint at 365 days." }, { text: "45% with MISTIE versus 41% with standard medical care (risk difference 4%, 95% CI -4 to 12; p=0.33), a non-significant difference", feedback: "Correct. In the MISTIE III primary efficacy analysis, an estimated 45% of the MISTIE group versus 41% of the standard medical care group achieved mRS 0-3 at 365 days (risk difference 4%, 95% CI -4 to 12; p=0.33), which was not statistically significant." }, { text: "44% with MISTIE versus 42% with standard medical care, an absolute difference of about 2 percentage points", feedback: "These are the MISTIE III unadjusted mRS 0-3 rates at 365 days (110/249 vs 100/240), not the estimates from the primary efficacy analysis the stem asks about." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. In the MISTIE III primary efficacy analysis, an estimated 45% of the MISTIE group versus 41% of the standard medical care group achieved mRS 0-3 at 365 days (risk difference 4%, 95% CI -4 to 12; p=0.33), which was not statistically significant.\n\n> _Source:_ “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1" },
    },
    {
      kind: "FillIn",
      id: "fillin-mistie-iii-int-mistie-alteplase" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "In the MISTIE III intervention arm, after image-guided catheter evacuation of the clot, alteplase was instilled directly into the haematoma at a dose of ___ mg every ___ hours for up to nine doses, aiming to reduce the residual haematoma to 15 mL or less." },
  ],
      body: "In the MISTIE III intervention arm, after image-guided catheter evacuation of the clot, alteplase was instilled directly into the haematoma at a dose of {{dose}} mg every {{interval}} hours for up to nine doses, aiming to reduce the residual haematoma to 15 mL or less.",
      blanks: { "dose": { match: "numeric", answer: 1.0, tolerance: 0.1, hintMode: "highLow" }, "interval": { match: "numeric", answer: 8.0, tolerance: 0.5, hintMode: "highLow" } },
    },
    {
      kind: "MultipleSelection",
      id: "multipleselection-enrich-out-lobar-subgroup" as SectionId,
      title: "The Result (7)",
      content: [
    { kind: "text", value: "Which of the following results were reported in the ENRICH trial?" },
  ],
      options: [{ text: "In the lobar-location subgroup, the between-group difference in mean utility-weighted modified Rankin scale at 180 days was 0.127 (surgery 0.513 vs. control 0.371; 95% Bayesian credible interval, 0.035 to 0.219).", feedback: "Correct. ENRICH reported a larger effect in the prespecified lobar stratum." }, { text: "The overall primary end point — mean utility-weighted modified Rankin scale at 180 days — was 0.458 with surgery versus 0.374 with control, a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163).", feedback: "Correct. This is ENRICH's primary efficacy result, favoring surgery on the utility-weighted mRS at 180 days." }, { text: "In the surgery group, the mean percent reduction in hematoma volume from baseline to 24 hours was 73.2±37.8%, with a mean residual volume of 14.9±21.7 ml.", feedback: "Correct. This is ENRICH's reported measure of surgical target attainment." }, { text: "In the adjusted efficacy analysis, an estimated 45% of the intervention group versus 41% of the standard medical care group achieved mRS 0-3 at 365 days (adjusted risk difference 4%, 95% CI -4 to 12).", feedback: "Incorrect. This is MISTIE III's primary functional result, not an ENRICH finding." }, { text: "On the prognosis-based extended Glasgow outcome scale dichotomy at 6 months, 122 of 468 patients (26%) allocated to early surgery had a favourable outcome versus 118 of 496 (24%) allocated to conservative treatment (odds ratio 0.89, 95% CI 0.66-1.19).", feedback: "Incorrect. This is STICH's primary outcome, not an ENRICH finding." }],
      correctAnswers: [0, 1, 2],
      feedback: { correct: "> _Source:_ “The mean between-group difference was …” — Abstract, p. 2, ¶10 ; “The mean score on the …” — Abstract, p. 2, ¶10 ; “Among patients in the surgery …” — Results, p. 8, ¶7" },
    },
    {
      kind: "FillIn",
      id: "fillin-mind-out-uwmrs" as SectionId,
      title: "The Result (8)",
      content: [
    { kind: "text", value: "In the MIND trial, the utility-weighted modified Rankin Scale scores at 180 days differed between the minimally invasive surgery and medical management groups by ___ (95% CI, -0.04 to 0.12), a difference that was ___." },
  ],
      body: "In the MIND trial, the utility-weighted modified Rankin Scale scores at 180 days differed between the minimally invasive surgery and medical management groups by {{diff}} (95% CI, -0.04 to 0.12), a difference that was {{sig}}.",
      blanks: { "diff": { match: "numeric", answer: 0.04, tolerance: 0.005, hintMode: "highLow" }, "sig": { match: "text", answers: ["nonsignificant", "non-significant", "not significant", "not statistically significant"], caseSensitive: false, hintMode: "none" } },
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-stich-clinical-question" as SectionId,
      title: "The Clinical Question (1)",
      content: [],
      topic: "Before STICH, the evidence on surgical versus conservative treatment for spontaneous supratentorial intracerebral haemorrhage was long-standing and contested: McKissock's series favoured conservative care, Auer's found endoscopic removal better, and Juvela supported McKissock, while meta-analysis of these early trials reached no firm conclusion. Explain what specific question this conflicting prior literature left unresolved, and why an adequately powered trial like STICH was the appropriate response to that state of the evidence.",
      minLength: 150,
      placeholder: "Before STICH, the prior trials conflicted because...",
      extraContext: "Assess the learner's reasoning about the clinical question STICH was designed to address (claim early-surgery-versus-initial-conservativ--clinical-question). A strong answer should: (1) identify that the prior randomised record was genuinely conflicting/contradictory across trials (McKissock against surgery, Auer favouring endoscopic removal, Juvela supporting McKissock) and that meta-analysis of the initial trials reached no firm conclusion; (2) articulate that the unresolved question was whether a policy of surgical evacuation improves outcomes over conservative management — i.e. real, specific equipoise, not whether clot removal changes local mechanics; (3) explain why size/power was the appropriate remedy — an underpowered, conflicting literature cannot resolve a modest-effect question, so a single adequately powered comparison (larger than all prior trials combined) was the logical design choice. Reward reasoning that connects the state of the evidence to the trial design rationale. Do not grade code or statistical computation; grade appraisal reasoning about why the question was open and how trial design responds to it. Penalise answers that merely restate that \"surgery is controversial\" without engaging why the prior trials failed to settle it.",
    },
    {
      kind: "Matching",
      id: "matching-stich-comp-conservative" as SectionId,
      title: "The Comparator (2)",
      content: [
    { kind: "text", value: "Match each trial to the comparator arm against which its surgical or interventional strategy was tested." },
  ],
      prompts: [{ "STICH": "Initial conservative treatment (best medical care), with later surgical evacuation allowed only if neurological deterioration made it necessary" }, { "MISTIE III": "Standard medical care per AHA/ESO guidelines, with follow-up CT and monitoring on the same schedule as the intervention arm" }, { "ENRICH": "Guideline-based medical management alone, with crossover to surgery prohibited (though lifesaving craniotomy or hemicraniectomy still permitted)" }, { "MIND": "Medical management alone as determined by the treating team, based on current AHA/ESO guidelines" }],
    },
    {
      kind: "MultipleSelection",
      id: "multipleselection-mistie-iii-exc-care-limitations-mass-effect" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "Which of the following were eligibility rules for enrolment in MISTIE III?" },
  ],
      options: [{ text: "A Glasgow Coma Scale score of 14 or less, or a National Institutes of Health Stroke Scale score of 6 or higher", feedback: "Correct. MISTIE III required patients sick enough to matter: GCS 14 or less, or NIHSS 6 or higher." }, { text: "A minimum haematoma diameter of 2 cm and a Glasgow coma score of five or more", feedback: "This is STICH's guideline (2 cm minimum diameter, GCS five or more). MISTIE III used a volume threshold of 30 mL or more and different neurological cutoffs." }, { text: "Exclusion of patients deemed to have life-threatening mass effect already requiring surgery", feedback: "Correct. MISTIE III excluded patients with expressed care limitations and those with life-threatening mass effect already requiring surgery." }, { text: "An age of 18 to 80 years", feedback: "This is an ENRICH/MIND rule. MISTIE III required adults aged 18 years or older, with no upper age cap of 80." }, { text: "A haemorrhage that remained the same size, growing less than 5 mL, for at least 6 hours after the diagnostic CT", feedback: "Correct. MISTIE III required a stable clot so that thrombolysis was not added to an actively expanding bleed." }],
      correctAnswers: [0, 2, 4],
      feedback: { correct: "> _Source:_ “We did not enrol patients …” — Methods, p. 3, ¶2 ; “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2 ; “a Glasgow Coma Scale (GCS) …” — Methods, p. 3, ¶2" },
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-enrich-clinical-question" as SectionId,
      title: "The Clinical Question (2)",
      content: [],
      topic: "Before ENRICH, the randomized record on surgical evacuation of supratentorial intracerebral hemorrhage was frustratingly consistent in one respect and tantalizingly inconsistent in another. Lay out the specific state of knowledge that ENRICH was designed to resolve: what had prior trials of surgery generally shown about functional outcomes, what exception kept the question alive, and what precisely remained unknown that justified running ENRICH. Then evaluate whether that gap was narrow and technique-specific or a broad open question about surgery in general.",
      minLength: 150,
      placeholder: "Prior surgical trials generally showed... The exception was... What remained unknown was... So the gap ENRICH addressed was narrow/broad because...",
      extraContext: "Assess the learner's grasp of the clinical question ENRICH was designed to address — not code, and not the results. A strong answer should: (1) state that prior randomized trials of surgical evacuation generally showed NO functional benefit; (2) identify the exception that kept equipoise alive — some trials of superficially located lobar hemorrhages hinted at benefit; (3) articulate the specific unknown: whether EARLY MINIMALLY INVASIVE surgical removal would produce better functional outcomes than medical management alone; and (4) evaluate that the equipoise was narrow and technique/timing-specific (a particular minimally invasive route applied early), not a question about surgery in the abstract — surgery-removes-clot was never in doubt. Credit learners who note that MISTIE-III had already tested a different minimally invasive strategy (catheter-based thrombolysis) and failed on function, sharpening what ENRICH's novelty was. Do not require them to recite ENRICH's results; the topic is the pre-trial question. Penalize answers that treat 'surgery' as a monolith or that conflate mortality benefit with functional benefit.",
    },
    {
      kind: "FillIn",
      id: "fillin-mind-exc-protocol-b" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "Partway through the MIND trial, Protocol B added new exclusion criteria. Among these, patients receiving direct factor ___ inhibitors and those presenting with a primary ___ intracerebral hemorrhage were now excluded." },
  ],
      body: "Partway through the MIND trial, Protocol B added new exclusion criteria. Among these, patients receiving direct factor {{inhibitor}} inhibitors and those presenting with a primary {{location}} intracerebral hemorrhage were now excluded.",
      blanks: { "inhibitor": { match: "text", answers: ["Xa", "factor Xa", "Xa (10a)"], caseSensitive: false, hintMode: "none" }, "location": { match: "text", answers: ["thalamic", "thalamus"], caseSensitive: false, hintMode: "none" } },
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-stich-mechanism-penumbra" as SectionId,
      title: "Mechanism",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "STICH set out to test a physiologically coherent idea: that if a viable ischaemic penumbra surrounds an intracerebral haematoma, evacuating the clot should relieve the mass lesion, restore perfusion to the salvageable rim, and improve recovery. Yet the trial returned a null on its primary functional outcome. Evaluate this mechanistic rationale against the result. Why might a rationale that is coherent at the level of physiology fail to produce benefit at the bedside, and what does STICH's outcome tell us about the limits of reasoning from mechanism to policy?",
      minLength: 200,
      placeholder: "Start by stating the penumbra rationale in your own words, then weigh it against STICH's null functional result — why might a coherent mechanism fail to deliver benefit, and what does that imply about moving from physiology to policy?",
      extraContext: "Assess the learner's reasoning about the gap between physiological rationale and clinical outcome — not code. A strong response should: (1) accurately state the penumbra rationale — that a viable ischaemic penumbra around the clot, if it exists, could be rescued by evacuating the mass lesion and restoring perfusion, thereby improving function; (2) recognise that this is a hypothesis, not a demonstrated mechanism, and that coherent physiology can and has misled ICH management before; (3) connect the null primary result (no overall functional benefit in the equipoise population) to reasons the mechanism might not translate — e.g. the penumbra may not be viable or salvageable, surgery itself traumatises tissue, the benefit may be confined to specific clots (superficial/lobar) rather than uniform, or the policy contrast was diluted by crossover; (4) articulate the broader appraisal point: a mechanism that predicts benefit does not license a treatment policy until an adequately powered trial confirms it — mechanism motivates a trial, it does not substitute for one. Credit responses that distinguish 'clot removal changes local mechanics' (rarely in doubt) from 'a policy of early surgery leaves more patients functionally better' (the actual open question). Do not require the learner to endorse or reject surgery; reward nuance about why the inference from penumbra physiology to bedside policy is not automatic.",
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-mind-pop-summary" as SectionId,
      title: "Who Was Enrolled (4)",
      content: [
    { kind: "text", value: "The MIND trial enrolled adults within a defined age range for its randomization to minimally invasive surgery or medical management. What was the eligible age range for enrolment in MIND?" },
  ],
      options: [{ text: "18 years or older, with no upper age limit", feedback: "This describes MISTIE III's population, which required adults aged 18 years or older (with no stated upper bound) and an ICH of 30 mL or more. MIND capped eligibility at 80 years." }, { text: "18 to 80 years", feedback: "Correct. MIND enrolled adults aged 18-80 years with moderate- to large-volume spontaneous supratentorial ICH (20-80 mL), NIHSS 6 or higher, and GCS between 5 and 15." }, { text: "19 to 93 years", feedback: "This is the age range observed in STICH (19 to 93 years, median 62). MIND's eligibility was restricted to 18-80 years." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. MIND enrolled adults aged 18-80 years with moderate- to large-volume spontaneous supratentorial ICH (20-80 mL), NIHSS 6 or higher, and GCS between 5 and 15.\n\n> _Source:_ “Of 4066 eligible adult patients …” — Abstract, p. 1, ¶5" },
    },
  ],
};

export default lessonData;
