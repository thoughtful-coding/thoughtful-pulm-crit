import type { Lesson, LessonId, SectionId } from "../../../../../thoughtful-coding.github.io/src/types/data";

const lessonData: Lesson = {
  guid: "2d5a9ea0-5656-4bfa-a55d-520cdd7a2488" as LessonId,
  title: "Nintedanib in IPF: What the INPULSIS Trials Do and Do Not Establish",
  description: "A claim-grounded walk through the INPULSIS replicate trials of nintedanib in idiopathic pulmonary fibrosis — the equipoise, the mechanistic rationale, the FVC-decline finding, the tolerability profile, and the limits of the secondary and survival data.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Richeldi L, et al. *N Engl J Med*. 2014." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Idiopathic pulmonary fibrosis is fatal and progressive, and the physiologic marker that tracks that trajectory is FVC: its decline predicts reduced survival. That is the clinical lever any drug has to move. The phase 2 dose-finding TOMORROW trial (432 patients) had suggested that 150 mg of nintedanib twice daily reduced FVC decline, produced fewer acute exacerbations, and preserved quality of life — promising, but a phase 2 dose-finding readout is not a survival- or endpoint-defining answer. What remained genuinely open, and what supplied the equipoise for INPULSIS, was whether that signal would reproduce in an adequately powered phase 3 setting. Note that framing this as the trials' motivating question is an inference from the design and the prior-trial relationship, not a stated finding of the paper." },
    { kind: "text", value: "> _Source:_ “diopathic pulmonary fibrosis is a …” — Abstract, p. 2, ¶3 ; “The results of an earlier …” — Abstract, p. 2, ¶5" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The rationale is intracellular. Nintedanib is an inhibitor of multiple tyrosine kinases — the VEGF, FGF, and PDGF receptors — pathways implicated in the aberrant fibroblast proliferation and tissue remodeling that characterize IPF. Block those receptor kinases and you are aiming at the proliferative signaling that drives the fibrotic remodeling itself, rather than at inflammation downstream of it. The active arm received 150 mg twice daily for 52 weeks, so any effect on the fibrotic process had a full year to register as a change in the rate of lung-function loss." },
    { kind: "text", value: "> _Source:_ “Nintedanib (formerly known as BIBF …” — Abstract, p. 2, ¶5 ; “eligible patients were randomly assigned …” — Methods, p. 3, ¶3" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "How the Trial Was Built",
      content: [
    { kind: "text", value: "INPULSIS-1 and INPULSIS-2 were built as replicates: two 52-week, double-blind, placebo-controlled, parallel-group phase 3 trials across 205 sites in 24 countries. Patients were randomly assigned 3:2 to nintedanib versus matching placebo. Running the same protocol twice is the design's whole point — a single positive trial can be a fluke, but reproducing the primary result across two independent replicate populations is what lets the field treat the effect as real rather than as chance." },
    { kind: "text", value: "> _Source:_ “We conducted two replicate 52-week, …” — Abstract, p. 1, ¶16 ; “eligible patients were randomly assigned …” — Methods, p. 3, ¶3" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i3-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Both replicate trials measured the adjusted annual rate of FVC change as the primary endpoint. Given nintedanib's antifibrotic rationale and the phase 2 signal, what is the most defensible prediction for the between-group result?" },
  ],
      options: [{ text: "Nintedanib slowed the annual rate of FVC decline by roughly half relative to placebo, and the effect reproduced across both trials.", feedback: "This is what both replicates showed — a between-group difference of about 125 ml/yr in INPULSIS-1 and 94 ml/yr in INPULSIS-2, both P<0.001." }, { text: "Nintedanib produced a net improvement in FVC over 52 weeks, reversing the decline seen with placebo.", feedback: "Nintedanib patients still lost FVC over the year — the drug slowed the rate of loss, it did not stabilize or improve lung function." }, { text: "There was no meaningful difference in FVC decline; the phase 2 signal did not reproduce in phase 3.", feedback: "The primary endpoint was significant and reproduced in both trials; the difference was not null." }],
      correctAnswer: 0,
      feedback: { correct: "This is what both replicates showed — a between-group difference of about 125 ml/yr in INPULSIS-1 and 94 ml/yr in INPULSIS-2, both P<0.001.\n\n> _Source:_ “The adjusted annual rate of …” — Abstract, p. 1, ¶17 ; “In patients with idiopathic pulmonary …” — Abstract, p. 1, ¶18" },
    },
    {
      kind: "Information",
      id: "b4-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The headline result reproduced. In INPULSIS-1 the adjusted annual rate of FVC change was -114.7 ml with nintedanib versus -239.9 ml with placebo (difference 125.3 ml; 95% CI 77.7 to 172.8; P<0.001); in INPULSIS-2 it was -113.6 ml versus -207.3 ml (difference 93.7 ml; 95% CI 44.8 to 142.7; P<0.001). The prespecified pooled analysis put the between-group difference at -109.9 ml/yr (95% CI 75.9 to 144.0). Read across the two trials, nintedanib slowed the annual FVC decline by roughly half — consistent with slowing disease progression. Keep the verb precise: the drug slows the loss, it does not stop or reverse it." },
    { kind: "text", value: "> _Source:_ “The adjusted annual rate of …” — Abstract, p. 1, ¶17 ; “A prespecified pooled analysis of …” — Results, p. 8, ¶3 ; “In patients with idiopathic pulmonary …” — Abstract, p. 1, ¶18" },
  ],
    },
    {
      kind: "FillIn",
      id: "i5-fillin" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Recall the magnitude of the primary-endpoint effect." },
  ],
      body: "The adjusted between-group difference in annual FVC change was {{d1}} ml in INPULSIS-1, and the prespecified pooled analysis put the difference at about {{dp}} ml/yr, both favoring nintedanib.",
      blanks: { "d1": { match: "numeric", answer: 125.3, tolerance: 1.0, unit: "ml", hintMode: "highLow" }, "dp": { match: "numeric", answer: 109.9, tolerance: 1.0, unit: "ml", hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "Tolerability is the other half of the regimen. Diarrhea was by far the most frequent adverse event with nintedanib — 61.5% versus 18.6% placebo in INPULSIS-1 and 63.2% versus 18.3% in INPULSIS-2 — but most of it was mild or moderate in intensity (93.7% and 95.2% of affected patients), and it led to discontinuation in fewer than 5% of nintedanib-treated patients. Aminotransferase elevations to three or more times the upper limit of normal were also more common on nintedanib (4.9% vs 0.5% in INPULSIS-1; 5.2% vs 0.9% in INPULSIS-2). The practical reading is that these events were frequent but generally manageable, permitting continued treatment with dose management — though the specific permitted reduction to 100 mg twice daily is an inference beyond what the verified facts here establish." },
    { kind: "text", value: "> _Source:_ “The most frequent adverse event …” — Abstract, p. 1, ¶17 ; “Among the patients in the …” — Results, p. 9, ¶7 ; “In INPULSIS-1, a total of …” — Results, p. 9, ¶9" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "i7-multipleselection" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Select every statement about diarrhea on nintedanib in the INPULSIS trials that the data support." },
  ],
      options: [{ text: "Diarrhea led to discontinuation of nintedanib in fewer than 5% of treated patients.", feedback: "Correct — a frequent but rarely treatment-limiting event." }, { text: "In the large majority of affected patients the diarrhea was mild or moderate in intensity.", feedback: "Correct — 93.7% and 95.2% of affected patients." }, { text: "Diarrhea occurred in roughly 62-63% of nintedanib patients versus about 18% on placebo.", feedback: "Correct — 61.5% vs 18.6% and 63.2% vs 18.3%." }, { text: "The high rate of diarrhea forced most nintedanib patients to stop the drug.", feedback: "Discontinuation for diarrhea occurred in under 5% — the event was common but seldom treatment-limiting." }],
      correctAnswers: [0, 1, 2],
      feedback: { correct: "> _Source:_ “The most frequent adverse event …” — Abstract, p. 1, ¶17 ; “Among the patients in the …” — Results, p. 9, ¶7" },
    },
    {
      kind: "Information",
      id: "b8-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who these results apply to is defined by the entry criteria. Eligibility required patients 40 years of age or older with IPF diagnosed within the previous 5 years, an FVC 50% or more of predicted, and a DLCO 30 to 79% of predicted, with a chest HRCT within the prior 12 months. That is a preserved-to-moderately-impaired physiologic range — patients earlier in their course, not those with advanced disease. The generalizability boundary follows directly: the findings may not extend to patients with more severe or advanced lung function than the enrollment window allowed." },
    { kind: "text", value: "> _Source:_ “Patients were eligible to participate …” — Methods, p. 2, ¶11 ; “Additional eligibility criteria were an …” — Methods, p. 2, ¶11 ; “Additional eligibility criteria were an …” — Methods, p. 2, ¶11" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i9-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "A 68-year-old with biopsy-proven IPF diagnosed 3 years ago presents with FVC 44% predicted and DLCO 25% predicted. Reading the INPULSIS entry rule as a bedside candidacy filter, how should you regard this patient?" },
  ],
      options: [{ text: "The patient clearly qualifies, since IPF was diagnosed within 5 years and that is the only requirement that matters.", feedback: "Diagnosis within 5 years was necessary but not sufficient — the lung-function thresholds (FVC ≥50%, DLCO 30-79%) also had to be met, and this patient meets neither." }, { text: "The severe impairment makes the patient an even stronger candidate, because the trial showed the largest benefit in advanced disease.", feedback: "The trial did not enroll advanced disease at all, so it establishes nothing about benefit below its thresholds." }, { text: "This patient falls outside the trial's enrolled range (FVC ≥50%, DLCO 30-79%), so the trial's efficacy estimate may not extend to disease this advanced.", feedback: "Correct — both the FVC and DLCO are below the enrollment floor, which is where the generalizability caveat bites." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — both the FVC and DLCO are below the enrollment floor, which is where the generalizability caveat bites.\n\n> _Source:_ “Patients were eligible to participate …” — Methods, p. 2, ¶11 ; “Additional eligibility criteria were an …” — Methods, p. 2, ¶11 ; “Additional eligibility criteria were an …” — Methods, p. 2, ¶11" },
    },
    {
      kind: "MultipleChoice",
      id: "i10-multiplechoice" as SectionId,
      title: "Weighing the Harms (3)",
      content: [
    { kind: "text", value: "Which pair of safety signals from INPULSIS most directly shapes monitoring and counseling for a patient starting nintedanib?" },
  ],
      options: [{ text: "Liver-enzyme elevations that occurred equally in both arms and therefore need no monitoring.", feedback: "The elevations were clearly more common on nintedanib (4.9-5.2% vs 0.5-0.9%), which is what motivates monitoring." }, { text: "A confirmed excess of fatal myocardial infarction that established a clear cardiovascular contraindication.", feedback: "MI was numerically more frequent on nintedanib, but the clinical significance is described as unknown — not a confirmed causal or fatal excess." }, { text: "Aminotransferase elevations ≥3x ULN (about 5% vs <1% placebo), and a numerically higher rate of myocardial infarction whose clinical significance is uncertain.", feedback: "Correct — the liver-enzyme signal supports LFT monitoring, and the MI imbalance (1.5-1.6% vs 0.5%) is real but of unknown significance." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — the liver-enzyme signal supports LFT monitoring, and the MI imbalance (1.5-1.6% vs 0.5%) is real but of unknown significance.\n\n> _Source:_ “In INPULSIS-1, a total of …” — Results, p. 9, ¶9 ; “myocardial infarction was reported in …” — Results, p. 10, ¶2" },
    },
    {
      kind: "Information",
      id: "b11-explain" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The secondary endpoints are where the replicate design turns from a strength into a warning. Time to first acute exacerbation showed no significant difference in INPULSIS-1 (HR 1.15; 95% CI 0.54 to 2.42; P=0.67) but a significant benefit in INPULSIS-2 (HR 0.38; 95% CI 0.19 to 0.77; P=0.005). SGRQ quality-of-life change told the same discordant story: not significant in INPULSIS-1 (difference -0.05; P=0.97), favoring nintedanib in INPULSIS-2 (difference -2.69; P=0.02). And the prespecified pooled analysis of time to first investigator-reported acute exacerbation was not significant (HR 0.64; 95% CI 0.39 to 1.05; P=0.08). Because the two replicates disagree on the key secondaries, the trials cannot establish a consistent nintedanib benefit on exacerbations or quality of life." },
    { kind: "text", value: "> _Source:_ “In INPULSIS-1, there was no …” — Abstract, p. 1, ¶17 ; “In INPULSIS-1, there was no …” — Results, p. 9, ¶3 ; “In the prespecified pooled analysis, …” — Results, p. 9, ¶2 ; “No consistent effect of nintedanib …” — Discussion, p. 11, ¶5" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i12-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "The primary FVC endpoint reproduced cleanly across both replicates. Predict what the secondary endpoints (acute exacerbations, SGRQ) did across INPULSIS-1 and INPULSIS-2." },
  ],
      options: [{ text: "They were discordant — favoring nintedanib in INPULSIS-2 but not INPULSIS-1 — and the pooled acute-exacerbation analysis was nonsignificant (HR 0.64, P=0.08).", feedback: "Correct — the replicate design that validated the primary result exposes the secondaries as unreliable." }, { text: "They reproduced as cleanly as the primary endpoint, showing a consistent nintedanib benefit on exacerbations and quality of life in both trials.", feedback: "This is the trap: the secondaries did NOT reproduce. Benefit appeared only in INPULSIS-2, and the pooled exacerbation analysis was nonsignificant." }, { text: "They were significantly worse with nintedanib in both trials, offsetting the FVC benefit.", feedback: "There was no consistent harm signal on these secondaries — the problem is inconsistency, not reversal." }],
      correctAnswer: 0,
      feedback: { correct: "Correct — the replicate design that validated the primary result exposes the secondaries as unreliable.\n\n> _Source:_ “In INPULSIS-1, there was no …” — Abstract, p. 1, ¶17 ; “In INPULSIS-1, there was no …” — Results, p. 9, ¶3 ; “In the prespecified pooled analysis, …” — Results, p. 9, ¶2" },
    },
    {
      kind: "Information",
      id: "b13-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "There is a reason not to over-read the exacerbation numbers even where they look favorable. Acute exacerbations are rare events in IPF trial populations and are difficult to assess and categorize reliably. Rare, hard-to-adjudicate outcomes produce wide, unstable estimates that can swing between replicate trials on ascertainment noise alone — which is exactly the pattern seen here. The safe conclusion is the conservative one: on this evidence, a consistent effect on exacerbations is not established." },
    { kind: "text", value: "> _Source:_ “No consistent effect of nintedanib …” — Discussion, p. 11, ¶5 ; “Exacerbations are relatively rare events …” — Discussion, p. 11, ¶6" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i14-noncodingreflection" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "Reason through whether the acute-exacerbation results support a claim of benefit." },
  ],
      topic: "The two replicate INPULSIS trials disagreed on time to first acute exacerbation (HR 1.15, 95% CI 0.54-2.42, P=0.67 in INPULSIS-1 vs HR 0.38, 95% CI 0.19-0.77, P=0.005 in INPULSIS-2), and the prespecified pooled analysis of investigator-reported exacerbations was nonsignificant (HR 0.64, 95% CI 0.39-1.05, P=0.08). Explain why this evidence does not establish a consistent nintedanib benefit on acute exacerbations, and what the rarity and difficulty of adjudicating exacerbations contributes to that judgment.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. Credit the learner for: (1) recognizing that replicate trials disagreeing is a red flag that the single-trial 'benefit' may be chance; (2) noting the pooled analysis crossed 1.0 and was nonsignificant (P=0.08); (3) connecting the rarity and difficult categorization of acute exacerbations to unstable, ascertainment-sensitive estimates; (4) concluding that a consistent benefit is not established. Note that whether the divergence reflects ascertainment noise versus a true differential drug effect is itself not resolved by the trial — a strong answer flags this as unresolved rather than asserting one cause.",
    },
    {
      kind: "Information",
      id: "b15-reveal" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The last caveat is the most important one to hold onto. The primary endpoint was FVC decline — a physiologic surrogate for a disease whose real stakes are measured in survival. Nintedanib slowed that decline by roughly half, which is consistent with slowing disease progression, but there was no significant between-group difference in death from any cause (5.5% with nintedanib vs 7.8% with placebo; HR 0.70; 95% CI 0.43 to 1.12; P=0.14). Slowing a surrogate is not the same as extending life. Framing nintedanib as a survival-improving drug is an inference the trial does not license — the point estimate leans favorable, but the confidence interval crosses 1.0 and the trials were not powered to establish a mortality benefit." },
    { kind: "text", value: "> _Source:_ “The proportion of patients who …” — Results, p. 9, ¶6 ; “The proportion of patients who …” — Results, p. 9, ¶6 ; “In patients with idiopathic pulmonary …” — Abstract, p. 1, ¶18" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i16-noncodingreflection" as SectionId,
      title: "Reason It Through",
      content: [
    { kind: "text", value: "Reason through the gap between the FVC finding and a survival claim." },
  ],
      topic: "Nintedanib slowed the annual rate of FVC decline by roughly half (both trials P<0.001), yet all-cause mortality was 5.5% vs 7.8% with a hazard ratio of 0.70 (95% CI 0.43-1.12; P=0.14). Explain why the significant surrogate result does not establish that nintedanib improves survival, and what the mortality confidence interval does and does not permit you to conclude.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. Credit: (1) distinguishing a physiologic surrogate (FVC decline) from the patient-important outcome (death); (2) recognizing that FVC decline predicting survival at a population level does not prove that modifying it changes survival; (3) reading the mortality CI (0.43-1.12) as crossing 1.0, so a mortality benefit is neither established nor excluded, and the trial was likely underpowered for it; (4) framing any survival benefit as inferred/unestablished rather than a stated finding. Strong answers avoid overclaiming from a favorable point estimate.",
    },
    {
      kind: "Information",
      id: "b17-reveal" as SectionId,
      title: "What the Trial Found (5)",
      content: [
    { kind: "text", value: "Beyond the mean rate, the trials reported a responder analysis worth translating into absolute terms. Defining an FVC response as a decline of no more than 5 percentage points of predicted, a significantly greater proportion of nintedanib patients qualified: 52.8% vs 38.2% in INPULSIS-1 (OR 1.85; P=0.001) and 53.2% vs 39.3% in INPULSIS-2 (OR 1.79; P=0.001). The point of reading it this way is that an odds ratio near 1.8 sounds impressive on its own, but the clinically honest quantity is the absolute gap in the share of patients who stayed above that threshold." },
    { kind: "text", value: "> _Source:_ “FVC decline ≤5 percentage points …” — Table 2, p. 7 ; “The adjusted annual rate of …” — Abstract, p. 1, ¶17" },
  ],
    },
    {
      kind: "FillIn",
      id: "i18-fillin" as SectionId,
      title: "The Result (5)",
      content: [
    { kind: "text", value: "Compute the absolute difference in FVC-response rate implied by the INPULSIS-1 data." },
  ],
      body: "In INPULSIS-1, 52.8% of nintedanib patients versus 38.2% of placebo patients avoided an FVC decline greater than 5 percentage points of predicted — an absolute difference of {{arr}} percentage points, which is the magnitude that matters more at the bedside than the odds ratio alone.",
      blanks: { "arr": { match: "numeric", answer: 14.6, tolerance: 0.5, unit: "percentage points", hintMode: "highLow" } },
    },
  ],
};

export default lessonData;
