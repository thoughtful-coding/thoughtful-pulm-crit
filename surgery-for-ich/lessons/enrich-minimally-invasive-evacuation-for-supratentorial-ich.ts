import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "c139d107-1a31-4b26-9062-e741f85f534f" as LessonId,
  title: "ENRICH: Minimally Invasive Surgery for Supratentorial Intracerebral Hemorrhage",
  description: "A lesson on the ENRICH trial of early minimally invasive trans-sulcal parafascicular hematoma evacuation versus guideline-based medical management for spontaneous supratentorial intracerebral hemorrhage.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Pradilla G, et al. *New England Journal of Medicine*. 2024." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "Whether to take a spontaneous supratentorial intracerebral hemorrhage to the operating room has been an open question for as long as the operation has existed. The physiologic case is intuitive — a clot occupying brain volume compresses and injures the parenchyma around it, and removing it ought to help — yet the randomized record refused to close the question. Trial after trial of surgical evacuation generally showed no functional benefit, with a tantalizing exception in some trials of superficially located lobar hemorrhages. MISTIE-III then tested a specifically minimally invasive strategy, catheter-based evacuation combined with thrombolysis, and it too failed to improve modified Rankin scale scores at one year. What remained genuinely unknown, and what motivated ENRICH, was narrower and technique-specific: whether early evacuation by a different minimally invasive route — trans-sulcal parafascicular surgery — would do what catheter thrombolysis and open approaches had not. This framing is an attributed reading of the prior literature, not a settled fact: the equipoise was real, and it was about a particular technique applied early, not about surgery in the abstract." },
    { kind: "text", value: "> _Source:_ “Trials of surgical evacuation of …” — Abstract, p. 2, ¶8 ; “Minimally invasive, catheter-based evacuation with …” — Abstract, p. 3, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "The intervention ENRICH put on trial was a defined procedure, not a category. Under general anesthesia and with imaging guidance, surgeons made a small craniotomy and durotomy and passed the BrainPath minimal-access port along a sulcus and white-matter fascicle to the clot, aspirating it with the Myriad device — trans-sulcal parafascicular evacuation — on top of guideline-based medical management. Speed was built in: the median time from randomization to surgery was 1.5 hours. This is deliberately distinct from the approaches that came before it. It is not open craniotomy, and it is not the catheter-based thrombolysis of MISTIE-III; the trans-sulcal route is the variable ENRICH changed. The control arm received guideline-based medical management alone, and crossover into surgery was prohibited, though lifesaving conventional craniotomy or decompressive hemicraniectomy could still be performed as needed. The location-dependence hinted at by STICH-I and STICH-II — that surgical benefit may differ by where the hemorrhage sits — was carried forward into the trial's design, and is worth holding in mind before the results." },
    { kind: "text", value: "> _Source:_ “Patients were randomly assigned, in …” — Methods, p. 4, ¶3 ; “The median number of hours …” — Results, p. 8, ¶4 ; “to receive guideline-based medical management …” — Methods, p. 4, ¶3 ; “Minimally invasive, catheter-based evacuation with …” — Abstract, p. 3, ¶2 ; “The STICH-I2 and STICH-II3 trials …” — Discussion, p. 12, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who counted as a candidate is the operational core of this trial, and it reads almost as a bedside rule. Patients had to be 18 to 80 years of age. They had to be sick enough to warrant intervention but not beyond reach: a Glasgow Coma Scale score between 5 and 14 and an NIH stroke scale score above 5. They had to have been functionally intact before the bleed, with a pre-hemorrhage modified Rankin scale score of 0 to 1. And the hemorrhage had to be surgically addressable within 24 hours of when the patient was last known to be well. The exclusions carve out the anatomy and physiology where this operation was not tested: uncorrectable coagulopathy, a need for long-term anticoagulation, primary thalamic or infratentorial hemorrhage, and intraventricular hemorrhage involving more than 50% of either lateral ventricle, along with hematomas outside the qualifying volume range. Read the criteria as the boundary of the claim: the findings speak only to patients meeting them." },
    { kind: "text", value: "> _Source:_ “Persons 18 to 80 years …” — Methods, p. 3, ¶6 ; “a score on the Glasgow …” — Methods, p. 3, ¶6 ; “a score before the hemorrhage …” — Methods, p. 3, ¶6 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “The generalizability of these results …” — Discussion, p. 10, ¶3 ; “Among patients in whom surgery …” — Abstract, p. 2, ¶11" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-inc-gcs-nihss" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "To be eligible for ENRICH, patients had to have a Glasgow Coma Scale score between ___ and ___." },
  ],
      body: "To be eligible for ENRICH, patients had to have a Glasgow Coma Scale score between {{gcs_low}} and {{gcs_high}}.",
      blanks: { "gcs_low": { match: "numeric", answer: 5.0, tolerance: 0.0, hintMode: "highLow" }, "gcs_high": { match: "numeric", answer: 14.0, tolerance: 0.0, hintMode: "highLow" } },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-exc-thalamic-ivh" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "ENRICH set out several entry requirements, some of which excluded a patient outright when present. Which of the following features, if present in a candidate, would have made that patient ineligible for the trial?" },
  ],
      options: [{ text: "A Glasgow Coma Scale score of 5 to 14", feedback: "Incorrect. A GCS score of 5 to 14 was required for enrollment; a patient within this range was eligible on that criterion, not excluded." }, { text: "A pre-hemorrhage modified Rankin scale score of 0 to 1", feedback: "Incorrect. A pre-hemorrhage modified Rankin scale score of 0 to 1 was required for eligibility; such a patient met that criterion rather than being excluded by it." }, { text: "A primary thalamic or infratentorial bleed", feedback: "Correct. ENRICH excluded patients with a primary thalamic or infratentorial hemorrhage, as well as intraventricular hemorrhage involving more than 50% of either lateral ventricle." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. ENRICH excluded patients with a primary thalamic or infratentorial hemorrhage, as well as intraventricular hemorrhage involving more than 50% of either lateral ventricle.\n\n> _Source:_ “were excluded if they had …” — Methods, p. 4, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-primary-outcome" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "The primary efficacy end point was the mean utility-weighted modified Rankin scale score (range 0 to 1) at 180 days. Before the result is revealed, predict the between-group difference (surgery minus control) on this primary end point that the trial reported. Which value do you expect?" },
  ],
      options: [{ text: "A difference of 0.127 favoring surgery", feedback: "This 0.127 is a real utility-weighted mRS difference at 180 days, but it is the effect within the prespecified lobar location stratum (surgery 0.513 vs. control 0.371), not the overall primary end point across the whole trial population." }, { text: "A difference of 0.084 favoring surgery", feedback: "Correct. The mean utility-weighted mRS at 180 days was 0.458 in the surgery group versus 0.374 in controls — a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163) favoring surgery, which cleared the prespecified superiority threshold." }, { text: "A difference of 9.3 percentage points favoring surgery", feedback: "The 9.3-percentage-point gap comes from the dichotomized favorable-outcome analysis (mRS 0-3: 50.3% surgery vs. 41.0% control) at 180 days, a secondary endpoint. The primary end point was the difference in the mean utility-weighted mRS score (range 0 to 1), not a difference in percentages." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. The mean utility-weighted mRS at 180 days was 0.458 in the surgery group versus 0.374 in controls — a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163) favoring surgery, which cleared the prespecified superiority threshold.\n\n> _Source:_ “The mean score on the …” — Abstract, p. 2, ¶10" },
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The headline finding favored surgery. The mean utility-weighted modified Rankin scale score at 180 days was 0.458 in the surgery group versus 0.374 in controls — a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163). The posterior probability of superiority of surgery was 0.981, clearing the prespecified 0.975 threshold the trial had set for declaring superiority. In plain bedside terms: for patients whose acute hemorrhage could be surgically addressed within 24 hours of last known well, minimally invasive evacuation plus medical management yielded better functional outcomes at 180 days than medical management alone." },
    { kind: "text", value: "> _Source:_ “The mean score on the …” — Abstract, p. 2, ¶10 ; “The primary efficacy end point …” — Abstract, p. 2, ¶9 ; “Among patients in whom surgery …” — Abstract, p. 2, ¶11" },
  ],
    },
    {
      kind: "Information",
      id: "b7-explain" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "Before predicting where that benefit lived, hold the reasoning in view. The trial had two hemorrhage locations in play, lobar and anterior basal ganglia, and the prespecified lobar stratum will be the place to watch. Two cautions frame any location comparison, and they are the reason the coming inference is attributed rather than asserted. First, enrollment of anterior basal ganglia patients was halted for futility, so that stratum ended up thin. Second, the trial made no prespecified plan to adjust its credible intervals for the multiple comparisons across secondary and subgroup analyses — so a favorable subgroup interval cannot, on its own, close the question." },
    { kind: "text", value: "> _Source:_ “The mean between-group difference was …” — Abstract, p. 2, ¶10 ; “Because recruitment of patients with …” — Discussion, p. 13, ¶2 ; “Because there was no prespecified …” — Methods, p. 7, ¶3" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-lobar-subgroup" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "ENRICH carried two prespecified hemorrhage-location strata into its analysis: lobar and anterior basal ganglia. Before the subgroup result is revealed, predict where the treatment effect on functional outcome appeared concentrated. In which stratum do you expect the larger benefit of surgery to have emerged?" },
  ],
      options: [{ text: "Roughly equally across both strata, with no location-dependence of the effect.", feedback: "Incorrect. STICH-I and STICH-II suggested surgical benefit may differ by location, and ENRICH carried that location-dependence into its design rather than expecting a uniform effect." }, { text: "In the lobar stratum, where the effect appeared larger than the overall result.", feedback: "Correct. The prespecified lobar stratum was flagged as the place to watch, and the investigators concluded the benefit appeared attributable to intervention for lobar hemorrhages, with a larger effect there than overall." }, { text: "In the anterior basal ganglia stratum, where enrollment was later halted for futility.", feedback: "Incorrect. Enrollment of anterior basal ganglia patients was halted for futility, leaving that stratum thin — the opposite of the location where benefit concentrated." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. The prespecified lobar stratum was flagged as the place to watch, and the investigators concluded the benefit appeared attributable to intervention for lobar hemorrhages, with a larger effect there than overall.\n\n> _Source:_ “The mean between-group difference was …” — Abstract, p. 2, ¶10" },
    },
    {
      kind: "Information",
      id: "b9-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "In the prespecified lobar stratum the effect was larger than the overall result: surgery 0.513 versus control 0.371, a difference of 0.127 (95% Bayesian credible interval, 0.035 to 0.219), against an overall difference of 0.084 (95% credible interval, 0.005 to 0.163). The investigators concluded the benefit appeared attributable to intervention for lobar hemorrhages — and that phrasing should be read as an attributed inference, not a demonstrated fact. Because basal ganglia enrollment was stopped for futility and left few such patients, and because the subgroup credible intervals were not adjusted for multiple comparisons, the failure to demonstrate benefit in the basal ganglia location is not the same as establishing that no effect exists there; no specific basal ganglia effect estimate is documented here." },
    { kind: "text", value: "> _Source:_ “The mean between-group difference was …” — Abstract, p. 2, ¶10 ; “The mean score on the …” — Abstract, p. 2, ¶10 ; “Because recruitment of patients with …” — Discussion, p. 13, ¶2 ; “Because there was no prespecified …” — Methods, p. 7, ¶3" },
  ],
    },
    {
      kind: "Information",
      id: "b10-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The safety picture also leaned toward surgery, though it must be read carefully. The primary safety end point, death by 30 days after enrollment, occurred in 9.3% (14 of 150) of surgery patients versus 18.0% (27 of 150) of controls — an estimated difference of -8.7 percentage points (95% credible interval, -16.4 to -1.0). Serious adverse events were also less frequent with surgery, 63.3% versus 78.7%. But the early separation did not persist to the end of follow-up: death from any cause at 180 days was similar, 20% in the surgery group versus 23% in controls. Read as an attributed inference, the safety signal is real early and attenuates by six months; it is not evidence of a durable mortality reduction." },
    { kind: "text", value: "> _Source:_ “A primary safety end point …” — Abstract, p. 2, ¶9 ; “In the surgery group, one …” — Results, p. 9, ¶4 ; “Death from any cause at …” — Results, p. 9, ¶3" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "multipleselection-safety-death30" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "The lesson reports several harm and safety endpoints in ENRICH. On which of the following did the surgery group show a benefit over the control group — that is, a lower event rate that separated the groups rather than a rate that was similar between them?" },
  ],
      options: [{ text: "The mean length of ICU stay: 6.9 days with surgery versus 9.7 days with control", feedback: "Incorrect. Shorter ICU stay is a secondary resource-use outcome, not one of the harm or safety endpoints; it is not among the death or serious-adverse-event measures the item asks about." }, { text: "One or more serious adverse events: 63.3% with surgery versus 78.7% with control", feedback: "Correct. Serious adverse events were less frequent with surgery (63.3%, 95 of 150) than control (78.7%, 118 of 150), so the surgery group fared better on this endpoint." }, { text: "The favorable functional outcome rate (mRS 0-3) at 180 days: 50.3% with surgery versus 41.0% with control", feedback: "Incorrect. This is a functional-outcome (efficacy) endpoint, not a harm or safety endpoint; the item asks about the safety picture, where death at 30 days and serious adverse events are the relevant measures." }, { text: "Death from any cause at 180 days: 20% with surgery versus 23% with control", feedback: "Incorrect. All-cause death at 180 days was similar between groups (20% surgery vs. 23% control); the early separation did not persist to final follow-up, so this endpoint does not show a benefit favoring surgery." }, { text: "Death by 30 days after enrollment: 9.3% with surgery versus 18.0% with control", feedback: "Correct. The primary safety end point, death by 30 days, was lower with surgery (9.3%, 14 of 150) than control (18.0%, 27 of 150), an estimated difference of -8.7 percentage points (95% CI, -16.4 to -1.0) — a genuine early separation favoring surgery." }],
      correctAnswers: [1, 4],
      feedback: { correct: "> _Source:_ “A primary safety end point …” — Abstract, p. 2, ¶9 ; “In the surgery group, one …” — Results, p. 9, ¶4" },
    },
    {
      kind: "Information",
      id: "b12-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Why might early evacuation change outcomes at all? The proposed mediators are physiologically reasonable: early reduction in hematoma volume, hemostasis, control of intracranial pressure, and amelioration of the secondary inflammation that drives white-matter injury. Hold this as a hypothesis, not a demonstrated pathway — the trial did not directly test any of these mechanisms, so what follows about the technical result is target attainment, not proof of mechanism." },
    { kind: "text", value: "> _Source:_ “Early reduction in hematoma volume, …” — Discussion, p. 12, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b13-reveal" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "Technically, the procedure did what it set out to do. Mean hematoma volume reduction from baseline to 24 hours was 73.2±37.8%, with a mean residual volume of 14.9±21.7 ml. A residual volume of 15 ml or less was achieved in 109 of 150 surgery patients (72.7%). Read these as measures of surgical target attainment, and read them with a caveat: the 15-ml threshold was not a prespecified end point and had no corresponding control-group value, so it describes what the operation accomplished, not a comparative outcome. The link from a well-evacuated clot to a better functional score remains the hypothesized pathway above, not something the trial isolated." },
    { kind: "text", value: "> _Source:_ “Among patients in the surgery …” — Results, p. 8, ¶7 ; “A volume of 15 ml …” — Results, p. 8, ¶7 ; “A primary safety end point …” — Abstract, p. 2, ¶9" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-hematoma-reduction" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "In the surgery group, the mean reduction in hematoma volume from baseline to 24 hours was ___%." },
  ],
      body: "In the surgery group, the mean reduction in hematoma volume from baseline to 24 hours was {{reduction}}%.",
      blanks: { "reduction": { match: "numeric", answer: 73.2, tolerance: 0.5, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b15-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Little can be firmly concluded about anterior basal ganglia hemorrhages, and the reason is baked into the design. ENRICH was adaptive: it allowed a sample size from 150 to 300, with interim analyses triggered at 150, 175, 200, 225, 250, and 275 randomizations, and with prespecified rules to adapt enrollment criteria on the basis of hemorrhage location. Under those rules, enrollment of patients with anterior basal ganglia hemorrhage was halted for futility after 175 patients had been enrolled — 58% of the anticipated sample. The consequence, an attributed inference rather than a stated finding, is that the basal ganglia stratum ended up too sparse to support conclusions about surgical benefit in that location; the absence of a demonstrated effect there is a limit of the data, not a demonstrated absence of effect." },
    { kind: "text", value: "> _Source:_ “The adaptive trial design allowed …” — Methods, p. 7, ¶4 ; “After 175 patients had been …” — Discussion, p. 12, ¶2 ; “Because recruitment of patients with …” — Discussion, p. 13, ¶2" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-adaptation-early" as SectionId,
      title: "Reason It Through (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "In ENRICH, enrollment of patients with anterior basal ganglia hemorrhage was halted for futility after 175 patients had been enrolled — about 58% of the anticipated sample — leaving relatively few such patients in the trial. Explain how this design decision limits what can be concluded about the effect of minimally invasive surgery in the basal ganglia location. In particular, discuss why a thin, futility-stopped stratum leaves the question of surgical benefit there open rather than answered in the negative.",
      minLength: 150,
      placeholder: "Consider what a futility stop at 58% of the anticipated sample does to the precision of any basal ganglia estimate, and whether \"no benefit shown\" is the same as \"no benefit exists\"...",
      extraContext: "Assess trial-appraisal reasoning about adaptive stopping and interpretation of a sparse subgroup — not code. A strong response should: (1) recognize that stopping for futility after ~175 patients (58% of anticipated) leaves the basal ganglia stratum underpowered, so estimates for that location are imprecise and unstable; (2) distinguish \"failure to demonstrate a benefit\" from \"demonstrated absence of benefit\" — the sparse data limit inference in that location rather than establishing that surgery does not help there; (3) note that a futility interim decision reflects a low probability of reaching the prespecified threshold given accrued data, not proof of zero effect, and that early stopping curtails the information available; (4) ideally connect this to why the trial's overall benefit was framed as attributable to the lobar stratum while basal ganglia conclusions remain limited. Reward reasoning that treats the limitation as an inference about what the data can and cannot support. Do not require statistical formulas; reward correct conceptual handling of power, precision, and the asymmetry between absence of evidence and evidence of absence.",
    },
    {
      kind: "Information",
      id: "b17-explain" as SectionId,
      title: "How It Was Meant to Work (3)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "A benefit was shown, but the trial cannot say what the benefit belongs to. There was no arm comparing surgical techniques — no head-to-head against open craniotomy or catheter-based thrombolysis — so the observed effect cannot be attributed specifically to the trans-sulcal parafascicular technique, and no claim of superiority over other surgical approaches follows. The control arm received medical management alone, which fixes the comparison as surgery-plus-medical versus medical, not technique versus technique. And because the hypothesized mechanisms — early volume reduction, intracranial-pressure control, reduced secondary inflammation — were not individually tested, the benefit cannot be pinned to any single one. What ENRICH established is that this bundled strategy helped; it did not establish why, or that this particular access route was necessary." },
    { kind: "text", value: "> _Source:_ “We can make no conclusions …” — Discussion, p. 12, ¶4 ; “to receive guideline-based medical management …” — Methods, p. 4, ¶3 ; “Early reduction in hematoma volume, …” — Discussion, p. 12, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-bundled-single-technique" as SectionId,
      title: "Reason It Through (2)",
      content: [],
      topic: "ENRICH compared minimally invasive trans-sulcal parafascicular evacuation plus guideline-based medical management against guideline-based medical management alone, and found a functional benefit favoring surgery. Suppose a colleague concludes from this that the trans-sulcal parafascicular technique is superior to other surgical approaches, such as open craniotomy or catheter-based thrombolysis. Evaluate how well the trial's design supports that specific conclusion, and explain what the benefit can legitimately be attributed to.",
      minLength: 150,
      placeholder: "Consider what arms the trial actually contrasted, and what a claim of technique superiority would require...",
      extraContext: "Assess trial-appraisal reasoning about attribution and comparison groups, not code. A strong response should recognize: (1) ENRICH had only two arms — surgery-plus-medical-management versus medical-management-alone — and included NO arm comparing different surgical techniques (no head-to-head against open craniotomy or catheter-based thrombolysis). (2) Because the only contrast is surgery-plus-medical versus medical alone, the observed benefit can be attributed to the bundled strategy of adding minimally invasive evacuation, but NOT specifically to the trans-sulcal parafascicular access route as opposed to some other surgical technique. (3) Therefore no claim of the technique's superiority over other surgical approaches follows from the data — that would require a comparison the trial never made. A weaker response conflates \"surgery worked\" with \"this particular technique is the best surgery,\" or treats the absence of a technique comparison as if it were evidence the technique is equivalent or inferior. Credit reasoning that distinguishes what the comparison actually licenses (adding this bundled intervention helped) from what it does not (which surgical route is best).",
    },
    {
      kind: "Information",
      id: "b19-explain" as SectionId,
      title: "How Much to Trust It",
      content: [
    { kind: "text", value: "ENRICH was open-label: site personnel knew each patient's group assignment. That matters most for an outcome as judgment-laden as the modified Rankin scale. The trial mitigated detection bias by centralizing adjudication — an independent neuropsychologist scored the mRS interviews from audio recordings that a third party had redacted to remove identifying information and group assignment. This handles bias in the scoring of the interview. It does not, however, address whether unblinded site interviewers or caregivers shaped the content of the interview upstream of adjudication; that residual concern is a plausible inference, not something the trial measured or reported." },
    { kind: "text", value: "> _Source:_ “Site personnel were aware of …” — Methods, p. 4, ¶8 ; “ENRICH was a prospective, multicenter, …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-rob-masking" as SectionId,
      title: "Risk of Bias (1)",
      content: [],
      topic: "ENRICH was open-label — site personnel knew each patient's group assignment — yet the modified Rankin scale interviews were scored by an independent neuropsychologist working from audio recordings that a third party had redacted to remove identifying information and group assignment. Explain how this central, redacted adjudication protects the primary outcome against detection (observer) bias, and describe the point in the outcome-measurement process that this safeguard leaves exposed.",
      minLength: 150,
      placeholder: "Central redacted adjudication blinds the scorer because... but it does not address... because...",
      extraContext: "Assess trial-appraisal reasoning about detection bias in an open-label design — not code. A strong response should: (1) identify that in an open-label trial, knowledge of assignment can bias a judgment-laden outcome like the mRS if the scorer knows the group; (2) explain that centralizing adjudication with an independent neuropsychologist who scores from third-party-redacted audio recordings restores effective blinding at the scoring step, so the person assigning the score cannot be swayed by group knowledge — this mitigates detection bias in the scoring of the interview; (3) recognize the residual gap: redacted central scoring addresses only the scoring of the interview, not whether unblinded site interviewers or caregivers shaped the content of the interview upstream of adjudication (e.g., how questions were asked or responses elicited). Credit noting that this residual concern is a plausible inference the trial did not measure or report, so it cannot be fully excluded. Reward distinguishing 'bias in scoring' from 'bias in generating the interview content.' Do not require statistical computation.",
    },
    {
      kind: "Information",
      id: "b21-explain" as SectionId,
      title: "How It Was Meant to Work (4)",
      content: [
    { kind: "text", value: "The primary end point deserves scrutiny as an endpoint, not just as a number. It was the mean utility-weighted modified Rankin scale score (range 0 to 1) at 180 days, which differed by 0.084 between groups (95% Bayesian credible interval, 0.005 to 0.163; posterior probability of superiority 0.981, exceeding the prespecified 0.975 threshold). The scale itself is the caveat: it has been used in ischemic stroke trials that included some patients with intracerebral hemorrhage, but it has not been validated specifically for intracerebral hemorrhage. From that acknowledged limitation one may reasonably infer — though the paper does not state it — that the clinical interpretability of a 0.084 utility difference is uncertain. The statistical superiority is clear; how much that particular increment means at the bedside is the open part." },
    { kind: "text", value: "> _Source:_ “The modified Rankin scale is …” — Discussion, p. 13, ¶2 ; “The mean score on the …” — Abstract, p. 2, ¶10 ; “The primary efficacy end point …” — Abstract, p. 2, ¶9" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-uwmrs-not-validated" as SectionId,
      title: "Reason It Through (3)",
      content: [],
      topic: "ENRICH used the utility-weighted modified Rankin scale as its primary end point. This scale has been used in ischemic stroke trials that enrolled some patients with intracerebral hemorrhage, but it has not been validated specifically for use in intracerebral hemorrhage. Explain how this validation gap affects the way you should interpret the trial's primary-endpoint difference, and how confident you can be that the observed statistical advantage translates into a meaningful benefit at the bedside.",
      minLength: 150,
      placeholder: "Consider what \"validated for a population\" buys you, and what is left uncertain when the scale was borrowed from a different disease...",
      extraContext: "Assess trial-appraisal reasoning about measurement validity, not code. A strong response should: (1) recognize that the primary end point rested on a scale validated in a different population (ischemic stroke, with only some ICH patients) and never validated specifically for intracerebral hemorrhage; (2) distinguish statistical superiority from clinical interpretability — a difference can clear its prespecified probability threshold and still leave the question of what the increment means for patients unsettled; (3) explain that an unvalidated utility weighting means the mapping from mRS states to the utility score may not faithfully reflect what matters to ICH patients, so the size of the between-group difference is hard to translate into a concrete bedside benefit; (4) frame the point at the correct scope — this is a limitation of endpoint interpretation, not a claim that the effect is absent or that the analysis was flawed. Credit responses that treat the interpretability of the difference as uncertain (an inference the paper itself does not state) while acknowledging the statistical result stands. Do not require any specific numeric values.",
    },
    {
      kind: "Information",
      id: "b23-explain" as SectionId,
      title: "What the Trial Found (5)",
      content: [
    { kind: "text", value: "The secondary results all point the same way as the primary, which is reassuring but not conclusive. The ordinal mRS analysis gave a posterior mean odds ratio of 0.658 (95% Bayesian credible interval, 0.433 to 0.957), a value below 1 favoring surgery; the dichotomized favorable-outcome rate (mRS 0-3) at 180 days was 50.3% with surgery versus 41.0% with control; and the mean ICU stay was shorter with surgery (6.9±6.8 versus 9.7±7.6 days, a between-group difference of roughly three days favoring surgery). The caveat is structural: the trial had no prespecified plan to adjust its credible intervals for the multiple comparisons across secondary and exploratory end points. So no definite conclusion can be drawn from any one of these intervals, however consistent their direction — coherence across endpoints raises confidence, but it does not substitute for the missing multiplicity control." },
    { kind: "text", value: "> _Source:_ “Because there was no prespecified …” — Methods, p. 7, ¶3 ; “Calculation of odds ratios for …” — Results, p. 8, ¶7 ; “In the surgery group, 74 …” — Results, p. 8, ¶7 ; “The mean length of stay …” — Results, p. 8" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-rob-selective-reporting" as SectionId,
      title: "Risk of Bias (2)",
      content: [],
      topic: "In ENRICH, the secondary and exploratory analyses of the modified Rankin scale — an ordinal odds ratio, a dichotomized favorable-outcome rate, and a shorter ICU stay — all pointed in the same direction as the primary end point, favoring surgery. Yet the lesson insists that no definite conclusion can be drawn from any one of these credible intervals. Explain why the consistency of these results does not license firm conclusions about them.",
      minLength: 150,
      placeholder: "The secondary results agree with the primary, but they were not adjusted for multiple comparisons, which means...",
      extraContext: "Assess trial-appraisal reasoning about multiple comparisons and selective/interval reporting — not code. A strong response should: (1) identify that the trial had no prespecified plan to adjust its credible (or confidence) intervals for the multiple comparisons made across its secondary and exploratory end points; (2) explain the statistical consequence — testing or estimating many endpoints without multiplicity control inflates the chance that some interval will exclude the null by chance, so any single unadjusted interval cannot support a definite conclusion; (3) distinguish coherence from confirmation — the learner should recognize that agreement in direction across endpoints is reassuring and raises confidence qualitatively, but does not substitute for the missing multiplicity control, because correlated endpoints measured on the same patients tend to move together and would be expected to agree if the primary effect is real, so their agreement adds little independent evidence; (4) correctly scope the point to the secondary/exploratory intervals, not the prespecified primary end point, which cleared its prespecified superiority threshold. Reward reasoning that treats the secondary results as supportive but non-confirmatory. Do not require or reward recitation of specific numeric estimates.",
    },
    {
      kind: "Information",
      id: "b25-explain" as SectionId,
      title: "How Far It Generalizes (1)",
      content: [
    { kind: "text", value: "Finally, fix the boundary of the result. ENRICH applies only to its restricted population: hematoma volume in the qualifying range, anterior basal ganglia or lobar location — with primary thalamic or infratentorial hemorrhage and intraventricular hemorrhage involving more than 50% of either lateral ventricle excluded — and a hemorrhage that can be surgically addressed within 24 hours of last known well. The findings cannot be pushed onto hematomas outside that volume window or in the excluded locations. One more caveat sits at the edge of the data: the trial does not establish requirements for operator training or center capability, even though the intervention was delivered by a specific technique with specific hardware — the BrainPath port and Myriad device under image guidance. Whether the same result travels to a center without that expertise is an inference the trial does not license." },
    { kind: "text", value: "> _Source:_ “The generalizability of these results …” — Discussion, p. 10, ¶3 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “Patients were randomly assigned, in …” — Methods, p. 4, ¶3 ; “Among patients in whom surgery …” — Abstract, p. 2, ¶11" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-generalizability" as SectionId,
      title: "How Far It Generalizes (2)",
      content: [],
      topic: "A colleague argues that because ENRICH showed a functional benefit from minimally invasive hematoma evacuation, the operation should now be offered broadly to patients with spontaneous intracerebral hemorrhage. Drawing on ENRICH's entry criteria, explain to which patients this result can reasonably be applied and to which it cannot. Address the hematoma volume window, the eligible versus excluded hemorrhage locations, and the time-to-surgery constraint in your reasoning.",
      minLength: 150,
      placeholder: "Consider each entry restriction in turn — who was eligible, who was excluded, and what that means for applying the result at the bedside...",
      extraContext: "Assess trial-appraisal reasoning about external validity / generalizability — not code. A strong response should recognize that ENRICH's findings are bounded by its entry criteria and cannot be extrapolated beyond them. Specifically it should note: (1) Volume window — patients with hematoma volumes below 30 ml or above 80 ml were excluded, so the result does not speak to those hematomas. (2) Location — the trial enrolled lobar and anterior basal ganglia hemorrhages but excluded primary thalamic and infratentorial hemorrhages and intraventricular hemorrhage involving more than 50% of a lateral ventricle; results cannot be applied to those excluded locations. (3) Time window — eligibility required that the hemorrhage be surgically addressable within 24 hours of when the patient was last known to be well, so the finding does not license surgery outside that early window. A sophisticated answer will frame these as the boundary of the claim (the findings 'speak only to patients meeting them') and push back on the colleague's blanket recommendation by naming which specific patient groups fall outside the evidence. It may also note that the lobar-versus-basal-ganglia benefit differed and that basal ganglia enrollment was stopped for futility, further narrowing confident application. Reward reasoning that distinguishes 'not shown to work' from 'shown not to work' for excluded groups. Do not require memorized exact figures beyond the qualitative boundaries; reward correct interpretive structure.",
    },
  ],
};

export default lessonData;
