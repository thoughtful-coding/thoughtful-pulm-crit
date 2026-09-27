import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "b154fa56-2d0a-4b9e-8d43-e8832805f890" as LessonId,
  title: "MIND: Minimally Invasive Surgery for Supratentorial Intracerebral Hemorrhage",
  description: "A lesson on the MIND trial, which tested whether endoscopic minimally invasive evacuation of supratentorial ICH improves functional outcome over medical management alone.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Arthur AS, et al. *JAMA Neurology*. 2025." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "Whether evacuating a supratentorial intracerebral hemorrhage changes the patient's trajectory has never been settled by physiology alone. The rationale is coherent: clot is a mass that displaces and compresses viable brain, and blood products drive the inflammation and perilesional edema that extend the injury over the days after ictus. Remove the clot and you should, in principle, relieve the mass effect and blunt the secondary neurological injury that turns a survivable bleed into a devastating one. The problem is that this reasoning is inferred from mechanism, not demonstrated at the bedside. The trials that came before it — conventional craniotomy, and minimally invasive evacuation using stereotactic thrombolysis and drainage — reproduced the same frustrating pattern: they could show a mortality benefit, but not a functional one. Patients survived without living better. So the equipoise MIND inherited was specific. Not 'does surgery remove clot,' which was never in doubt, but 'does removing it leave more patients functionally independent.'" },
    { kind: "text", value: "> _Source:_ “It remains uncertain whether surgical …” — Abstract, p. 1, ¶3 ; “Surgicalevacuationisapossible treatment based on the …” — Abstract, p. 2, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "MIND was an open-label, multicenter randomized trial that allocated patients with spontaneous supratentorial ICH 2:1 to minimally invasive surgery plus medical management or to medical management alone. Who got in defines what the result can be read onto. Eligible patients were adults 18 to 80 years old, with a hematoma volume of 20 to 80 mL, a baseline NIHSS of 6 or higher, a Glasgow Coma Scale between 5 and 15, a premorbid mRS of 0 to 1, and symptom onset less than 24 hours before initial imaging. This is a moderate- to large-volume bleed in a previously independent patient, caught within a day. Of 4066 patients screened, 154 were randomized to surgery and 82 to medical management — a narrow slice of the population that reaches the emergency department with an ICH." },
    { kind: "text", value: "> _Source:_ “The MIND open-label, multicenter randomized …” — Abstract, p. 1, ¶5 ; “Of 4066 eligible adult patients …” — Abstract, p. 1, ¶5 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5 ; “baseline National Institutes of Health …” — Methods, p. 2, ¶6 ; “premorbid mRS score of 0 …” — Methods, p. 2, ¶5 ; “symptom onset less than 24 …” — Methods, p. 2, ¶6" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "The eligible population was narrowed further partway through. Under Protocol B, the trial added exclusions for patients with severe active infection, kidney failure, those receiving direct factor Xa inhibitors, and those presenting with primary thalamic hemorrhage. Each of these carves out a group in whom either the surgery or its interpretation would have been compromised — a bleeding diathesis, a competing driver of poor outcome, or a location the endoscopic approach is poorly suited to reach." },
    { kind: "text", value: "> _Source:_ “Protocol B removed this requirement …” — Methods, p. 2, ¶6" },
  ],
    },
    {
      kind: "Information",
      id: "b3-explain" as SectionId,
      title: "Against the Prior Evidence (1)",
      content: [
    { kind: "text", value: "One feature of the enrolled cohort matters more than any single cutoff: it skewed toward deep hemorrhages, with a deep-to-lobar ratio of roughly 70:30, and toward smaller volumes, with a median around the low end of the eligible range rather than the high end. Keep both facts in view when the result reads out — a population weighted toward deep bleeds and toward smaller clots is a population in which the absolute benefit of removing clot, if one exists, is likely to be muted." },
    { kind: "text", value: "> _Source:_ “Recently, the ENRICH study demonstrated …” — Discussion, p. 8, ¶3 ; “ICH volumes were larger in …” — Discussion, p. 8, ¶4" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-exc-protocol-b" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "Partway through MIND, Protocol B added new exclusion criteria. Which of the following was one of those Protocol B exclusions, rather than one of the trial's inclusion thresholds?" },
  ],
      options: [{ text: "Primary thalamic hemorrhage", feedback: "Correct. Under Protocol B the trial added exclusions for severe active infection, kidney failure, patients on direct factor Xa inhibitors, and primary thalamic hemorrhage — a location the endoscopic approach is poorly suited to reach." }, { text: "Age outside 18 to 80 years", feedback: "This is the age inclusion range (18 to 80 years), an entry threshold rather than a Protocol B exclusion." }, { text: "Baseline NIHSS score below 6", feedback: "This describes the inclusion threshold (NIHSS of 6 or higher required for entry), not a Protocol B exclusion." }],
      correctAnswer: 0,
      feedback: { correct: "Correct. Under Protocol B the trial added exclusions for severe active infection, kidney failure, patients on direct factor Xa inhibitors, and primary thalamic hemorrhage — a location the endoscopic approach is poorly suited to reach.\n\n> _Source:_ “Protocol B removed this requirement …” — Methods, p. 2, ¶6" },
    },
    {
      kind: "FillIn",
      id: "fillin-inc-volume" as SectionId,
      title: "Who Was Enrolled (4)",
      content: [
    { kind: "text", value: "To be eligible for MIND, a patient's hematoma volume had to fall between ___ and ___ mL." },
  ],
      body: "To be eligible for MIND, a patient's hematoma volume had to fall between {{low}} and {{high}} mL.",
      blanks: { "low": { match: "numeric", answer: 20.0, tolerance: 0.5, hintMode: "highLow" }, "high": { match: "numeric", answer: 80.0, tolerance: 0.5, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b6-explain" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "The intervention was designed to be a clean test of evacuation. Patients assigned to surgery underwent minimally invasive evacuation with the Artemis device within 72 hours of ictus, in addition to medical management: general anesthesia, a burr hole, a suitably sized endoscopy sheath advanced under direct neuroendoscopic visualization, guided by a commercially available cranial navigation system. The control arm received medical management alone, as determined by the treating team and grounded in current AHA/ESO guidelines. Read as an inference, this design isolates the act of removing clot from everything else in ICH care — both arms get the guideline-based medicine, only one arm gets the clot taken out." },
    { kind: "text", value: "> _Source:_ “ParticipantsrandomizedtotheMISarmunderwent MISwithin72hoursofictusandreceivedMM.” — Methods, p. 2, ¶7 ; “ParticipantsrandomizedtothecontrolarmreceivedMM forICHasdeterminedbythetreatingteamandbasedoncurrent American Heart Association/European …” — Methods, p. 2, ¶7" },
  ],
    },
    {
      kind: "Information",
      id: "b7-explain" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "Technically, the procedure did what it was built to do. Median ICH volume fell by 80.7% to 6.3 mL, and 114 of 144 surgical participants (79.2%) were left with a residual hemorrhage of 15 mL or less. In the medical-management arm the end-of-treatment volume was 32.8 mL, and only 3 of 74 (4.1%) reached that same 15 mL threshold. So the trial cleanly separated the arms on the surrogate the whole hypothesis rests on: if removing clot improves outcome, this is the trial that removed it. That framing sets up the question the learner should answer before reading further — whether that decisive anatomic success carried through to how patients actually did." },
    { kind: "text", value: "> _Source:_ “Following MIS, median (IQR) ICH …” — Results, p. 6, ¶3" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-ich-volume-reduction" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "In the minimally invasive surgery arm, median ICH volume was reduced by ___% to a residual median of ___ mL." },
  ],
      body: "In the minimally invasive surgery arm, median ICH volume was reduced by {{pct}}% to a residual median of {{residual}} mL.",
      blanks: { "pct": { match: "numeric", answer: 80.7, tolerance: 0.5, hintMode: "highLow" }, "residual": { match: "numeric", answer: 6.3, tolerance: 0.3, hintMode: "highLow" } },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-primary-mrs-180" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "The Artemis procedure achieved near-complete evacuation, reducing median clot volume by roughly four-fifths. Before the durable results are revealed, predict what the trial's primary efficacy analysis — the ordinal modified Rankin Scale distribution at 180 days in the unadjusted intention-to-treat population — most plausibly showed when comparing minimally invasive surgery with medical management alone:" },
  ],
      options: [{ text: "A large favorable shift in the ordinal mRS distribution for surgery (OR 4.23; 95% CI, 2.36-7.57)", feedback: "This OR 4.23 (95% CI, 2.36-7.57) is the exploratory 30-day ordinal mRS result, not the primary 180-day analysis; that early advantage did not persist to the primary endpoint." }, { text: "A significant favorable shift in the ordinal mRS distribution for surgery (OR 1.03; 95% CI, 0.58-1.84)", feedback: "The OR 1.03 (95% CI, 0.58-1.84) belongs to the dichotomized 180-day mRS ≤3 comparison, which was not significant; its interval crosses 1, so it cannot represent a significant benefit." }, { text: "No significant difference in the ordinal mRS distribution (OR 1.03; 96% CI, 0.62-1.72; P = .45)", feedback: "Correct. Despite decisive anatomic evacuation, the primary ordinal mRS analysis at 180 days was flat: OR 1.03 (96% CI, 0.62-1.72; P = .45). The surrogate moved; the functional distribution did not." }],
      correctAnswer: 2,
      feedback: { correct: "Correct. Despite decisive anatomic evacuation, the primary ordinal mRS analysis at 180 days was flat: OR 1.03 (96% CI, 0.62-1.72; P = .45). The surrogate moved; the functional distribution did not.\n\n> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5" },
    },
    {
      kind: "Information",
      id: "b10-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The anatomic success did not translate. On the primary efficacy analysis — ordinal mRS at 180 days in the unadjusted ITT population — surgery was not superior to medical management (OR 1.03; 96% CI 0.62-1.72; P = .45). Read this as the inference the data support: despite reducing median clot volume by 80.7% to 6.3 mL and leaving nearly four in five surgical patients with 15 mL or less, the functional distribution at six months was essentially superimposable on medical management. The surrogate moved decisively; the outcome did not. That dissociation — a near-complete evacuation with a flat functional result — is the central finding, and it is what the rest of the lesson has to interpret rather than explain away. The utility-weighted modified Rankin Scale at 180 days told the same story: 0.41 in the minimally invasive surgery group and 0.38 in the medical management group, a nonsignificant difference of 0.04 (95% CI, -0.04 to 0.12)." },
    { kind: "text", value: "> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5 ; “Following MIS, median (IQR) ICH …” — Results, p. 6, ¶3 ; “The utility-weighted mRS14 scores at …” — Results, p. 6, ¶6" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-uwmrs" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "At 180 days, the utility-weighted modified Rankin Scale score was ___ in the minimally invasive surgery group and ___ in the medical management group — a nonsignificant difference." },
  ],
      body: "At 180 days, the utility-weighted modified Rankin Scale score was {{mis}} in the minimally invasive surgery group and {{mm}} in the medical management group — a nonsignificant difference.",
      blanks: { "mis": { match: "numeric", answer: 0.41, tolerance: 0.005, hintMode: "highLow" }, "mm": { match: "numeric", answer: 0.38, tolerance: 0.005, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b12-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "Safety followed the same pattern of no clear signal in either direction. At 180 days, 20 of 152 surgical patients (13.2%) had died versus 15 of 82 medical-management patients (18.3%) — a nonsignificant difference of -5.1% (95% CI, -16.1% to 4.5%). Framed as an inference: the numerically lower death rate in the surgical arm gives no evidence of excess procedural mortality, but neither does it establish a survival benefit, and MIS did not reduce early mortality. Serious adverse events within 180 days were in fact less frequent with surgery, 52.6% (80/152) versus 68.3% (56/82). The honest reading is that evacuation was not obviously harmful — it simply did not translate its anatomic success into either function or survival." },
    { kind: "text", value: "> _Source:_ “At 180 days, 20 of …” — Results, p. 7, ¶2 ; “Within 180 days, fewer SAEs …” — Results, p. 7, ¶3" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-180d-mortality" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "Considering the all-cause mortality endpoint at 180 days in MIND, how did the minimally invasive surgery arm compare with the medical management arm?" },
  ],
      options: [{ text: "36.8% vs 37.2%, a nonsignificant difference (OR 1.03; 95% CI, 0.58-1.84)", feedback: "These figures are the dichotomized 180-day mRS 3-or-lower rates (53/144 vs 29/78), not all-cause mortality." }, { text: "13.2% vs 18.3%, a nonsignificant difference (95% CI, -16.1% to 4.5%)", feedback: "Correct. At 180 days, 20 of 152 surgical patients (13.2%) died versus 15 of 82 medical-management patients (18.3%), a nonsignificant difference of -5.1% (95% CI, -16.1% to 4.5%)." }, { text: "16.7% vs 16.7%, a nonsignificant difference (OR 1.05; 95% CI, 0.49-2.22)", feedback: "These are the dichotomized 180-day mRS 2-or-less rates (24/144 vs 13/78), not the mortality endpoint the stem names." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. At 180 days, 20 of 152 surgical patients (13.2%) died versus 15 of 82 medical-management patients (18.3%), a nonsignificant difference of -5.1% (95% CI, -16.1% to 4.5%).\n\n> _Source:_ “At 180 days, 20 of …” — Results, p. 7, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-exploratory-mrs-30d" as SectionId,
      title: "The Result (5)",
      content: [
    { kind: "text", value: "The procedure achieved near-complete evacuation, but before the durable functional results are read out, consider the exploratory ordinal mRS analysis at 30 days. Which result did that early, unblinded analysis most plausibly show?" },
  ],
      options: [{ text: "A large early advantage (OR 4.23) that did not persist at later timepoints", feedback: "Correct. The exploratory 30-day ordinal mRS favored surgery (OR 4.23; 95% CI 2.36-7.57), but this benefit was gone by 90 and 180 days." }, { text: "An equal dichotomized rate of 16.7% reaching mRS of 2 or less by arm", feedback: "This is the dichotomized 180-day mRS ≤2 outcome, not the exploratory ordinal mRS at 30 days." }, { text: "A lower mortality of 13.2% vs 18.3% that was not statistically significant", feedback: "This is the 180-day mortality comparison, a different endpoint, not the ordinal mRS at 30 days." }],
      correctAnswer: 0,
      feedback: { correct: "Correct. The exploratory 30-day ordinal mRS favored surgery (OR 4.23; 95% CI 2.36-7.57), but this benefit was gone by 90 and 180 days.\n\n> _Source:_ “An exploratory analysis of ordinal …” — Results, p. 7, ¶4" },
    },
    {
      kind: "Information",
      id: "b15-reveal" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "There was one place the data looked different. In an exploratory analysis of ordinal mRS at 30 days (per-protocol, adjusted for strata), surgery was associated with markedly improved outcomes (OR 4.23; 95% CI 2.36-7.57) — but the benefit was no longer present at 90 and 180 days. Treat this as a signal to interpret, not a finding to bank: it came from an exploratory analysis not adjusted for multiplicity, and the 30-day assessment was performed unblinded, whereas only the 180-day mRS used a blinded assessor. The distributional driver of the early shift — which mRS categories moved — is not established by the reported facts. What the pattern implies is an early, possibly real, possibly artefactual advantage that dissolved by the time the outcome that mattered was measured under blinding." },
    { kind: "text", value: "> _Source:_ “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “The interval widths for the …” — Methods, p. 3, ¶4 ; “evaluators performing the 180-day mRS …” — Discussion, p. 8, ¶6" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-exploratory-mrs-30d" as SectionId,
      title: "The Result (6)",
      content: [
    { kind: "text", value: "In the exploratory analysis of ordinal mRS at 30 days, minimally invasive surgery was associated with improved outcomes (OR ___; 95% CI 2.36-7.57), but this benefit was no longer observed at 90 and ___ days." },
  ],
      body: "In the exploratory analysis of ordinal mRS at 30 days, minimally invasive surgery was associated with improved outcomes (OR {{or}}; 95% CI 2.36-7.57), but this benefit was no longer observed at 90 and {{later}} days.",
      blanks: { "or": { match: "numeric", answer: 4.23, tolerance: 0.05, hintMode: "highLow" }, "later": { match: "numeric", answer: 180.0, tolerance: 0.5, unit: "days", hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b17-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "The null primary result (OR 1.03; 96% CI 0.62-1.72) is fragile, not definitive, and the reason is how the trial ended. Enrollment stopped early at 236 participants — well short of the planned sample — not because a boundary was crossed but because a contemporaneous trial reported functional benefit for lobar ICH, which dissolved equipoise and prompted the trial to stop randomizing the primarily lobar cohort. A subsequent feasibility analysis then found a low probability of demonstrating a difference if only primarily deep hemorrhages continued to be randomized, and enrollment ceased entirely. The consequence is a trial underpowered to detect a true difference. A confidence interval this wide is as consistent with a modest benefit as with none — the null here means 'not shown,' not 'shown absent.'" },
    { kind: "text", value: "> _Source:_ “First, early stopping led to …” — Discussion, p. 8, ¶6 ; “In early 2023, the ENRICH …” — Results, p. 5, ¶1 ; “No statistically significant difference in …” — Results, p. 6, ¶5" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-stopped-early" as SectionId,
      title: "Reason It Through (1)",
      content: [],
      topic: "MIND stopped enrolling at 236 participants — far short of its planned sample — because a contemporaneous trial's positive lobar result dissolved equipoise, and a feasibility analysis then found little chance of showing a between-arm difference. The primary functional analysis came back non-significant. Explain why this manner of stopping means the non-significant primary result should be read as \"an effect was not shown\" rather than \"no effect exists.\"",
      minLength: 150,
      placeholder: "Consider what stopping short of the planned sample does to the trial's power, and what a non-significant result can and cannot establish under those conditions...",
      extraContext: "Assess trial-appraisal reasoning about power and early stopping — not code. A strong response should: (1) recognize that stopping well short of the planned sample size reduces statistical power, so the trial had a diminished ability to detect a true difference even if one exists; (2) distinguish absence of evidence from evidence of absence — a non-significant result under low power is uninformative about whether a modest true benefit exists, not proof it is absent; (3) connect the reason for stopping (loss of equipoise after an external trial, plus a feasibility analysis, rather than crossing a pre-specified boundary) to the risk that the resulting sample is under-powered and potentially confounded; (4) ideally note that a wide confidence interval around the null is itself the signature of this under-powering — consistent with both a modest benefit and none. Do not require specific numeric values. Reward reasoning that treats the null as \"not shown,\" not \"shown absent.\"",
    },
    {
      kind: "Information",
      id: "b19-explain" as SectionId,
      title: "How Much to Trust It",
      content: [
    { kind: "text", value: "The promising early outcomes deserve the most skepticism of anything in the trial, for two structural reasons that compound. First, blinding: only the 180-day mRS was scored by a blinded assessor; the 30- and 90-day evaluations were open to the assessor, and in an open-label surgical trial an unblinded early mRS is exactly where expectation bias would inflate a difference. Second, statistics: the 30-day benefit (OR 4.23) came from exploratory analyses not adjusted for multiple comparisons and not powered for significance — the paper does not even provide P values for these nonprimary endpoints. An impressive number produced under both conditions at once is hypothesis-generating, and nothing more." },
    { kind: "text", value: "> _Source:_ “evaluators performing the 180-day mRS …” — Discussion, p. 8, ¶6 ; “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “The interval widths for the …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-rob-outcome-measurement" as SectionId,
      title: "Risk of Bias",
      content: [],
      topic: "In MIND, the eye-catching early functional advantage for minimally invasive surgery came from two features working together: it was measured at a timepoint the assessor was not blinded to, and it emerged from an analysis that was exploratory and not corrected for the many comparisons made. Explain how each of these two features, on its own and then in combination, should shape how much confidence you place in that early result — and contrast this with why the six-month primary result is the one the trial rests its conclusion on.",
      minLength: 150,
      placeholder: "Consider what an unblinded assessor knows at the 30-day visit, and separately what it means that no P value was reported for that comparison. Then weigh the two against the 180-day result...",
      extraContext: "Assess trial-appraisal reasoning about outcome-measurement bias and multiplicity, not code or arithmetic. A strong response should: (1) recognize that in an open-label surgical trial, an early mRS scored by an unblinded assessor is exactly where expectation bias could inflate an apparent difference, because the assessor knows which patients had surgery; (2) recognize that the early benefit came from an exploratory analysis not adjusted for multiple comparisons and not powered for significance (the paper reports no P values for it), so an impressive point estimate is hypothesis-generating rather than confirmatory; (3) explain that these two problems compound — an unblinded, multiplicity-unadjusted early finding is doubly weak, and either alone would already warrant caution; (4) contrast this with the 180-day primary mRS, which was scored by a blinded assessor and was the pre-specified primary endpoint, and note that the early advantage had dissolved by 90 and 180 days. A weak response treats the early OR as evidence surgery works early, ignores the direction of expectation bias, conflates statistical significance with clinical truth, or fails to distinguish exploratory from confirmatory analysis. Do not reward restating the numbers without reasoning about why blinding and multiplicity matter.",
    },
    {
      kind: "Information",
      id: "b21-explain" as SectionId,
      title: "Against the Prior Evidence (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Why MIND read null (OR 1.03) while a contemporaneous MIS trial, ENRICH, read positive can be reasoned from how the two populations and protocols differed. MIND enrolled predominantly deep hemorrhages — a deep-to-lobar ratio of roughly 70:30, the mirror image of ENRICH's roughly 30:70 — with smaller median volumes (about 41 vs about 55 mL) and later intervention (median time from onset around 27.5 hours in MIND versus roughly 16.8 in ENRICH). The control-arm mortality was also lower in MIND than in ENRICH, while the surgical-arm death rates were similar. Each difference points the same way: smaller clots removed later in a population with less to gain leaves a smaller absolute effect to detect. None of this proves surgery works — it explains why, if it does, MIND was poorly positioned to see it." },
    { kind: "text", value: "> _Source:_ “Recently, the ENRICH study demonstrated …” — Discussion, p. 8, ¶3 ; “in ENRICH, MIS was performed …” — Discussion, p. 8, ¶4 ; “ICH volumes were larger in …” — Discussion, p. 8, ¶4 ; “No statistically significant difference in …” — Results, p. 6, ¶5" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-prior-enrich-timing" as SectionId,
      title: "Versus Prior Trials",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "MIND performed minimally invasive evacuation at a median of about 27.5 hours from symptom onset, whereas the earlier positive ENRICH trial intervened at a median of roughly 16.8 hours — more than 10 hours earlier. Given the hypothesis that the benefit of removing clot is enhanced by early intervention, evaluate whether this timing difference could partly explain why MIND failed to reproduce the functional benefit ENRICH observed. How much weight would you place on timing versus the other ways the two trials differed, and what would it take to actually confirm timing as the driver?",
      minLength: 150,
      placeholder: "Consider the mechanistic rationale for early evacuation, then weigh timing against the other differences between MIND and ENRICH and what evidence would be needed to confirm it...",
      extraContext: "Assess trial-appraisal reasoning about a proposed explanation for discordant results across two trials — not code. A strong response should: (1) correctly state the timing contrast (MIND ~27.5 h vs ENRICH ~16.8 h, i.e. MIND >10 h later) and connect it to the mechanistic rationale that earlier clot removal may better limit secondary injury from mass effect, inflammation, and edema; (2) recognize this is a plausible, mechanistically coherent but unproven post-hoc explanation — the timing difference is confounded with the other structural differences between the trials (MIND's predominantly deep 70:30 deep-to-lobar mix vs ENRICH's ~30:70, smaller median volumes ~40 vs ~55 mL, and lower control-arm mortality), so no single factor can be isolated as causal from a between-trial comparison; (3) note that MIND was not designed or powered to test timing, so any timing effect is inferred, not demonstrated, and that establishing timing as the driver would require a trial that directly randomizes or prespecifies analysis by time-to-evacuation. Credit reasoning that treats timing as one of several converging explanations that each 'point the same way' rather than a proven cause; do not credit responses that assert timing definitely explains the difference or that dismiss it entirely.",
    },
    {
      kind: "Information",
      id: "b23-explain" as SectionId,
      title: "What the Trial Found (5)",
      content: [
    { kind: "text", value: "A tempting move is to conclude something location-specific — that deep bleeds don't benefit while lobar ones do. MIND cannot support that inference in either direction. The primary analysis showed no overall difference at 180 days (OR 1.03; 96% CI 0.62-1.72), and the exploratory 30-day advantage (OR 4.23) had vanished by 90 and 180 days. Crucially, randomization of the primarily lobar cohort was halted early after ENRICH, and the enrolled population was weighted toward deep bleeds at roughly 70:30 deep-to-lobar. Location-stratified 180-day results are not reported here. So the trial gives no basis for selecting patients for evacuation by hematoma location — the lobar arm was too truncated and the durable outcomes too flat to say anything about location at all." },
    { kind: "text", value: "> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5 ; “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “In early 2023, the ENRICH …” — Results, p. 5, ¶1 ; “Recently, the ENRICH study demonstrated …” — Discussion, p. 8, ¶3" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-lobar-halt" as SectionId,
      title: "Reason It Through (2)",
      content: [],
      topic: "MIND stopped randomizing patients in the primarily lobar cohort early — before that group was fully enrolled — after a contemporaneous trial reported functional benefit for lobar ICH dissolved equipoise; a feasibility analysis then found little chance of showing a difference if only primarily deep hemorrhages continued, so enrollment ceased entirely. A colleague reads the flat overall result and concludes that \"minimally invasive evacuation helps lobar bleeds but not deep ones.\" Explain why the way MIND ended and the population it actually enrolled make it impossible to draw any durable, location-specific conclusion — in either direction — from this trial.",
      minLength: 150,
      placeholder: "Consider what the early halt did to the lobar subgroup's size and follow-up, what the remaining enrolled population was weighted toward, and whether a flat overall result can be split by hematoma location...",
      extraContext: "Assess trial-appraisal reasoning about internal validity and the limits of subgroup inference — not code. A strong response should recognize: (1) The primarily lobar cohort's randomization was halted early after loss of equipoise, so that subgroup is truncated and underpowered — too few lobar patients were randomized and followed to durable timepoints to support any statement about lobar benefit. (2) The enrolled population was weighted toward deep hemorrhages (the feasibility analysis found low probability of showing a difference among remaining deep-only patients), so the overall result is dominated by deep bleeds and cannot be cleanly partitioned by location. (3) Location-stratified durable (180-day) results are not the basis for a selection rule here: a flat overall result plus a truncated lobar arm supports neither \"lobar benefits\" nor \"deep does not.\" (4) The colleague's conclusion overreaches by treating an un-powered, prematurely halted subgroup structure as if it were a prespecified, adequately powered location comparison. Credit reasoning that distinguishes \"not established\" from \"shown absent,\" and that ties the halt mechanism (loss of equipoise, feasibility stop) to why no location-specific durable inference is licensed. Do not require specific numeric ratios.",
    },
    {
      kind: "Information",
      id: "b25-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "The one difference that reached significance was the serious-adverse-event count: 52.6% (80/152) with surgery versus 68.3% (56/82) with medical management (difference -15.7%; 95% CI, -28.1% to -1.1%). It is worth resisting the reflex to call this an established safety benefit. This was a nonprimary endpoint in a trial stopped early at 236 participants, which reduced power, and the trial's nonprimary analyses were not adjusted for multiple comparisons and not powered for those comparisons. The multiplicity caveat the paper stated for its efficacy endpoints extends by the same logic to this safety endpoint. Read it as a supportive, exploratory observation consistent with surgery not adding net harm — not as a definitively established benefit." },
    { kind: "text", value: "> _Source:_ “Within 180 days, fewer SAEs …” — Results, p. 7, ¶3 ; “First, early stopping led to …” — Discussion, p. 8, ¶6 ; “The interval widths for the …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-harm-sae-180d" as SectionId,
      title: "Weighing the Harms",
      content: [],
      topic: "MIND reported serious adverse events within 180 days in 52.6% (80/152) of the minimally invasive surgery arm versus 68.3% (56/82) of the medical management arm — a difference of -15.7% (95% CI, -28.1% to -1.1%), the one comparison in the trial whose confidence interval excluded zero. A colleague points to this and argues that, whatever happened with function, MIND at least establishes that surgery reduces serious adverse events. Evaluate that claim: should this statistically significant difference be read as an established safety benefit? Weigh how the trial ended and how its nonprimary analyses were handled in reaching your judgment.",
      minLength: 150,
      placeholder: "Consider what kind of endpoint this was, how much the CI just barely excluding zero can be trusted after early stopping, and whether multiplicity correction was applied...",
      extraContext: "Assess trial-appraisal reasoning about why a nominally significant nonprimary result should not be over-read — not code, and not a request to recompute the statistics. A strong response should recognize: (1) the SAE endpoint was a nonprimary/secondary endpoint, not the primary efficacy outcome, so it does not carry the trial's confirmatory weight; (2) the trial was stopped early at 236 participants, short of planned enrollment, which reduced statistical power and makes any single result more fragile and susceptible to chance; (3) the trial's nonprimary analyses were not adjusted for multiple comparisons and were not powered for those comparisons, so a CI that just excludes the null (-1.1% upper bound) can arise from testing many endpoints without correction — the same multiplicity caveat the authors applied to efficacy endpoints extends to this safety endpoint. The best answers conclude that the finding is a supportive, exploratory/hypothesis-generating observation consistent with surgery not adding net harm, rather than a definitively established benefit, and ideally note the tension that 'significant' by a p<0.05 or CI-excludes-null standard is not the same as 'confirmed' once design limitations are accounted for. Weaker answers simply restate that the result was significant and therefore real, or treat statistical significance as sufficient without engaging the early-stopping and multiplicity threats.",
    },
  ],
};

export default lessonData;
