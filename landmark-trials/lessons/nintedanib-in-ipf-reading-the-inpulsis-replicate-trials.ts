import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "86b1c3b6-49f1-4a00-8436-c67a10ffa2dd" as LessonId,
  title: "Nintedanib in IPF: Reading the INPULSIS Replicate Trials",
  description: "Using the two INPULSIS phase 3 trials to reason about nintedanib's slowing of FVC decline, its surrogate-endpoint limits, its discordant secondary results, and its tolerability at the bedside.",
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
    { kind: "text", value: "Idiopathic pulmonary fibrosis is a fatal, progressive disease, and its trajectory is measured in lung function: a declining FVC predicts reduced survival, which is why the field has hunted for a drug that slows that decline rather than one that merely treats symptoms. The phase 2 TOMORROW dose-finding trial (432 patients) had suggested that nintedanib at 150 mg twice daily reduced FVC decline, cut acute exacerbations, and preserved quality of life — enough of a signal to justify committing to two replicate phase 3 trials rather than a single confirmatory one. To read that signal cleanly, patients already on other IPF therapies — high-dose prednisone, azathioprine, N-acetylcysteine, or any investigational agent — were excluded. What follows is a reasoned reading of those trials from their approved findings; treat the framing as inference where the facts do not state it outright." },
    { kind: "text", value: "> _Source:_ “diopathic pulmonary fibrosis is a …” — Results, p. 2, ¶1 ; “The results of an earlier …” — Results, p. 2, ¶1 ; “patients receiving other therapies for …” — Results, p. 3, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "Nintedanib is an intracellular tyrosine kinase inhibitor that targets the VEGF, FGF, and PDGF receptors — signaling pathways implicated in the fibrotic pathogenesis of IPF. That is the stated mechanism. The tempting next sentence — that blocking these receptors halts fibroblast proliferation and tissue remodeling in the lung — is a plausible extension of the receptor biology, not something the trial's facts establish; keep it labeled as inference, because the trials measured physiology and outcomes, not the intracellular steps." },
    { kind: "text", value: "> _Source:_ “Nintedanib (formerly known as BIBF …” — Results, p. 2, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "How the Trial Was Built",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The design choice worth pausing on is replication. Nintedanib was tested in two 52-week randomized, double-blind, placebo-controlled phase 3 trials (INPULSIS-1 and -2) across 205 sites in 24 countries — the same protocol run twice. When two independent replicates agree on the primary endpoint, chance and quiet analytic choices become less credible as the whole explanation; that is the inferential payoff of a replicate design, and it is worth stating as reasoning rather than as a proven property. Two facts sharpen the reading. About 15% of patients had missing week-52 FVC data, with no significant between-group difference in that proportion; the primary model assumed data were missing at random and sensitivity analyses supported robustness — which reduces, though does not eliminate, concern that the primary result is a missing-data artifact. And the replicates did not agree everywhere: the key secondary endpoints came out inconsistent, so the concordance argument applies to the primary endpoint, not to the trial as a whole." },
    { kind: "text", value: "> _Source:_ “We conducted two replicate 52-week, …” — Results, p. 1, ¶2 ; “The proportion of patients with …” — Results, p. 5, ¶1 ; “No consistent effect of nintedanib …” — Discussion, p. 11, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b3-explain" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The regimen was nintedanib 150 mg twice daily for 52 weeks against matched placebo, randomized 3:2. This should be read as an inference about deliverability, not a stated efficacy claim: dose reduction to 100 mg twice daily was permitted, and despite frequent adverse events — diarrhea in roughly six in ten treated patients and aminotransferase elevations at or above three times the upper limit of normal in about one in twenty — mean dose intensity stayed above 90% and discontinuation stayed low. In other words, the toxicity was common but largely manageable within the protocol's escape valve, which is why the trial could actually test the drug at an effective dose rather than watching patients drift off it." },
    { kind: "text", value: "> _Source:_ “eligible patients were randomly assigned …” — Results, p. 3, ¶1 ; “eligible patients were randomly assigned …” — Results, p. 3, ¶1 ; “In both trials, the mean …” — Discussion, p. 11, ¶1 ; “The most frequent adverse event …” — Results, p. 1, ¶2 ; “In INPULSIS-1, a total of …” — Results, p. 9, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i4-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "Both INPULSIS trials were powered on the adjusted annual rate of FVC decline. Reasoning from the drug's antifibrotic rationale and the replicate design, what is the most likely form of the headline primary result in nintedanib vs placebo?" },
  ],
      options: [{ text: "There was no meaningful difference in FVC decline between groups in either trial.", feedback: "There was a significant difference in the annual rate of decline in both replicates — the opposite of a null primary result." }, { text: "Nintedanib produced a net improvement in FVC (no decline) in treated patients, while placebo patients declined.", feedback: "The drug slowed the rate of decline; treated patients still lost FVC over the year. It stabilizes trajectory, it does not restore lung function." }, { text: "FVC still declined in both groups, but the annual rate of decline was significantly slower with nintedanib than placebo in both trials.", feedback: "This is the pattern the trials showed: decline was slowed, not reversed." }],
      correctAnswer: 2,
      feedback: { correct: "This is the pattern the trials showed: decline was slowed, not reversed.\n\n> _Source:_ “The adjusted annual rate of …” — Results, p. 1, ¶2" },
    },
    {
      kind: "Information",
      id: "b5-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The primary result held across both replicates: the adjusted annual rate of FVC decline was significantly slower with nintedanib than placebo — -114.7 vs -239.9 ml/yr in INPULSIS-1 and -113.6 vs -207.3 ml/yr in INPULSIS-2. Read it precisely. Treated patients still lost lung function; they lost it more slowly. And FVC decline is a physiologic surrogate: the reading that this represents slowing of disease progression is an interpretation of the surrogate, not a direct demonstration of a patient-important outcome. That distinction is not pedantic here — it is exactly the seam where the rest of the evidence gets oversold." },
    { kind: "text", value: "> _Source:_ “The adjusted annual rate of …” — Results, p. 1, ¶2 ; “nintedanib reduced the decline in …” — Results, p. 1, ¶2 ; “We conducted two replicate 52-week, …” — Results, p. 1, ¶2" },
  ],
    },
    {
      kind: "FillIn",
      id: "i6-fillin" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Fill in the primary and supporting FVC effects across the two replicates." },
  ],
      body: "In INPULSIS-1 the adjusted annual rate of FVC decline was slower with nintedanib by a difference of {{diff1}} ml/yr, and in INPULSIS-2 by {{diff2}} ml/yr. The adjusted absolute mean change from baseline favored nintedanib by roughly {{absdiff}} ml in both trials. The proportion of patients with an FVC response (decline of ≤5 percentage points) at week 52 rose from about 38% to {{resp1}}% in INPULSIS-1.",
      blanks: { "diff1": { match: "numeric", answer: 125.3, tolerance: 1.0, unit: "ml/yr", hintMode: "highLow" }, "diff2": { match: "numeric", answer: 93.7, tolerance: 1.0, unit: "ml/yr", hintMode: "highLow" }, "absdiff": { match: "numeric", answer: 110.0, tolerance: 2.0, unit: "ml", hintMode: "highLow" }, "resp1": { match: "numeric", answer: 52.8, tolerance: 0.5, unit: "%", hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b7-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who was enrolled bounds what the result covers. Randomization drew 1066 patients aged 40 or older with an IPF diagnosis made within the previous 5 years, an FVC of at least 50% of predicted, a DLCO of 30 to 79% of predicted, and a chest HRCT within the previous 12 months; concurrent IPF therapies — high-dose prednisone, azathioprine, N-acetylcysteine, investigational agents — were exclusions. This is a population of relatively preserved lung function. Whether the effect extends to more advanced disease outside these ranges is an inference beyond the data, and details sometimes attributed to the protocol — a low-dose prednisone allowance, central review of HRCT or biopsy — are not established by the approved facts and should not be asserted." },
    { kind: "text", value: "> _Source:_ “Patients were eligible to participate …” — Results, p. 2, ¶1 ; “Additional eligibility criteria were an …” — Results, p. 2, ¶1 ; “patients receiving other therapies for …” — Results, p. 3, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i8-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "A 58-year-old with IPF diagnosed 3 years ago has an FVC of 55% predicted and a DLCO of 40% predicted, and is on N-acetylcysteine. Reasoning from the eligibility criteria, which single factor would have kept this patient out of INPULSIS?" },
  ],
      options: [{ text: "The DLCO of 40% predicted — it falls below the required range.", feedback: "The required DLCO range was 30–79% predicted; 40% is within it. The disqualifier is the concurrent therapy." }, { text: "The FVC of 55% predicted — it falls below the required threshold.", feedback: "Eligibility required FVC ≥50% predicted; 55% qualifies. The disqualifier is the concurrent therapy." }, { text: "The concurrent N-acetylcysteine — other IPF therapies were an exclusion.", feedback: "Correct: N-acetylcysteine is among the explicitly excluded concurrent therapies." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: N-acetylcysteine is among the explicitly excluded concurrent therapies.\n\n> _Source:_ “Additional eligibility criteria were an …” — Results, p. 2, ¶1 ; “patients receiving other therapies for …” — Results, p. 3, ¶1 ; “Patients were eligible to participate …” — Results, p. 2, ¶1" },
    },
    {
      kind: "Information",
      id: "b9-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The most common misreading of INPULSIS is to promote the surrogate to a survival claim. Reason it out instead. The trials were designed and powered to detect a difference in the annual rate of FVC decline — not survival. In the prespecified pooled analysis, all-cause mortality was 5.5% with nintedanib versus 7.8% with placebo, HR 0.70 (95% CI 0.43–1.12; P=0.14): a direction that looks favorable but a confidence interval that crosses 1 and a study never sized to answer the question. Slowing a physiologic surrogate is consistent with slowing disease; it does not, on this evidence, establish that patients live longer. Hold those two statements apart." },
    { kind: "text", value: "> _Source:_ “the sample size was calculated …” — Results, p. 4, ¶1 ; “The proportion of patients who …” — Results, p. 9, ¶1 ; “nintedanib reduced the decline in …” — Results, p. 1, ¶2 ; “The adjusted annual rate of …” — Results, p. 1, ¶2" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i10-noncodingreflection" as SectionId,
      title: "Reason It Through (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "A colleague concludes that nintedanib 'reduces mortality in IPF' because the pooled death rate was 5.5% vs 7.8%. Explain why the trials cannot support that conclusion." },
  ],
      topic: "Why the INPULSIS trials cannot establish a mortality benefit for nintedanib despite a numerically lower pooled death rate (5.5% vs 7.8%).",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer should note: (1) the trials were powered for annual FVC decline, not survival; (2) the mortality HR 0.70 has a 95% CI (0.43–1.12) that crosses 1 and P=0.14, i.e. not significant; (3) FVC is a physiologic surrogate, and slowing it is interpreted as consistent with slowed progression but is not a demonstrated patient-important outcome; (4) a favorable direction in an underpowered secondary endpoint is hypothesis-generating, not confirmatory. Do not credit an answer that treats the surrogate result as proof of survival benefit.",
    },
    {
      kind: "MultipleChoice",
      id: "i11-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Which statement most accurately characterizes the pooled all-cause mortality result (5.5% nintedanib vs 7.8% placebo; HR 0.70; 95% CI 0.43–1.12; P=0.14)?" },
  ],
      options: [{ text: "A significant reduction in mortality with nintedanib.", feedback: "The confidence interval crosses 1 (P=0.14); the difference is not significant and the trials were not powered to detect it." }, { text: "Numerically lower with nintedanib but not statistically significant; the trials cannot establish a mortality benefit.", feedback: "Correct — the CI crosses 1 and the trials were not powered for survival." }],
      correctAnswer: 1,
      feedback: { correct: "Correct — the CI crosses 1 and the trials were not powered for survival.\n\n> _Source:_ “The proportion of patients who …” — Results, p. 9, ¶1" },
    },
    {
      kind: "Information",
      id: "b12-explain" as SectionId,
      title: "Key Definitions",
      content: [
    { kind: "text", value: "Before the secondary endpoints, two definitions frame how fragile they are. An acute exacerbation was defined clinically: unexplained new or worsening dyspnea within 30 days, new diffuse pulmonary infiltrates or ground-glass opacities, and exclusion of known causes such as infection, heart failure, or pulmonary embolism — a diagnosis of exclusion that is inherently hard to adjudicate consistently. The St. George's Respiratory Questionnaire runs 0 to 100, higher meaning worse health-related quality of life; crucially, no minimally important difference has been established for IPF (it is 4 points in COPD), so a small numeric change lacks an agreed clinical anchor. Keep both in mind when the replicates disagree." },
    { kind: "text", value: "> _Source:_ “Acute exacerbations were defined as …” — Results, p. 3, ¶1 ; “The total score and the …” — Results, p. 3, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i13-multiplechoice" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "INPULSIS-1 and INPULSIS-2 ran the same protocol. Predict what happened to the KEY SECONDARY endpoints — time to first acute exacerbation and SGRQ score change — across the two replicates." },
  ],
      options: [{ text: "Nintedanib consistently reduced acute exacerbations in both trials.", feedback: "INPULSIS-1 showed HR 1.15 (P=0.67, no benefit); only INPULSIS-2 showed benefit. The effect was inconsistent." }, { text: "The results were discordant: no significant exacerbation or SGRQ effect in INPULSIS-1, but significant benefit on both in INPULSIS-2.", feedback: "Correct — the replicates disagreed on these endpoints, which is why a consistent effect cannot be claimed." }, { text: "Both trials showed a significant SGRQ improvement of at least the established IPF minimally important difference.", feedback: "SGRQ change was null in INPULSIS-1 (P=0.97), and no minimally important difference has even been established for IPF." }],
      correctAnswer: 1,
      feedback: { correct: "Correct — the replicates disagreed on these endpoints, which is why a consistent effect cannot be claimed.\n\n> _Source:_ “In INPULSIS-1, there was no …” — Results, p. 1, ¶2 ; “In INPULSIS-1, there was no …” — Results, p. 9, ¶1" },
    },
    {
      kind: "Information",
      id: "b14-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The replicates split on the secondaries. Time to first acute exacerbation: no significant difference in INPULSIS-1 (HR 1.15; 95% CI 0.54–2.42; P=0.67), significant benefit in INPULSIS-2 (HR 0.38; 95% CI 0.19–0.77; P=0.005). SGRQ total score change: null in INPULSIS-1 (difference -0.05; P=0.97), less deterioration in INPULSIS-2 (difference -2.69; 95% CI -4.95 to -0.43; P=0.02). The prespecified pooled analysis of time to first investigator-reported exacerbation was not significant (HR 0.64; 95% CI 0.39–1.05; P=0.08). The honest conclusion is bounded: the trials cannot establish a consistent effect on exacerbations or quality of life. Why they diverged — event rarity, adjudication difficulty, baseline differences — is a natural question the approved facts do not answer, so resist filling it in." },
    { kind: "text", value: "> _Source:_ “No consistent effect of nintedanib …” — Discussion, p. 11, ¶1 ; “In INPULSIS-1, there was no …” — Results, p. 1, ¶2 ; “In INPULSIS-1, there was no …” — Results, p. 9, ¶1 ; “In the prespecified pooled analysis, …” — Results, p. 9, ¶1" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i15-noncodingreflection" as SectionId,
      title: "Reason It Through (2)",
      content: [
    { kind: "text", value: "Given the discordant exacerbation results (HR 1.15 in INPULSIS-1 vs HR 0.38 in INPULSIS-2) and the non-significant pooled HR 0.64 (P=0.08), how should you counsel a patient about nintedanib and acute exacerbations, and what can you NOT claim?" },
  ],
      topic: "How to interpret and communicate the discordant acute-exacerbation results across the two INPULSIS replicates.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer should recognize: (1) the replicates disagreed (null/harmful-direction HR 1.15 in INPULSIS-1 vs protective HR 0.38 in INPULSIS-2), so a consistent effect cannot be claimed; (2) the pooled investigator-reported result was not significant (HR 0.64; P=0.08); (3) the outcome was defined clinically as a diagnosis of exclusion, which complicates consistent adjudication; (4) it is appropriate to say the trials do not establish an exacerbation benefit, and inappropriate to attribute a specific mechanism to the discordance since the facts do not support one. Do not credit claims of a proven exacerbation benefit.",
    },
    {
      kind: "Information",
      id: "b16-explain" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "The safety profile is where the counseling actually happens. Diarrhea was the most frequent adverse event with nintedanib — 61.5% vs 18.6% in INPULSIS-1 and 63.2% vs 18.3% in INPULSIS-2 — yet it drove premature discontinuation in fewer than 5% of treated patients (4.5% and 4.3%). The practical translation: diarrhea is nearly universal but usually does not force stopping the drug, especially with dose reduction available. Two signals need monitoring rather than reassurance. Aminotransferase elevations at or above three times the upper limit of normal were more common with nintedanib (about 5% vs under 1%), and myocardial infarction was reported more often (roughly 1.5% vs 0.5%) — though the trial could not establish the clinical significance of that cardiac signal. Severity grading of the diarrhea is not something the approved facts support, so counsel on frequency and manageability, not on grade." },
    { kind: "text", value: "> _Source:_ “The most frequent adverse event …” — Results, p. 1, ¶2 ; “the proportion of patients in …” — Discussion, p. 11, ¶1 ; “In INPULSIS-1, a total of …” — Results, p. 9, ¶1 ; “myocardial infarction was reported in …” — Results, p. 10, ¶1" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "i17-multipleselection" as SectionId,
      title: "Weighing the Harms (3)",
      content: [
    { kind: "text", value: "Select every statement that the INPULSIS safety data support." },
  ],
      options: [{ text: "Aminotransferase elevations ≥3× ULN were more common with nintedanib than placebo (~5% vs <1%)." }, { text: "Diarrhea forced the majority of nintedanib patients to stop the drug.", feedback: "The opposite: fewer than 5% discontinued for diarrhea, and dose intensity stayed above 90%." }, { text: "Despite its frequency, diarrhea led to premature discontinuation in fewer than 5% of nintedanib patients." }, { text: "Diarrhea was the most frequent adverse event with nintedanib, affecting roughly 62% of treated patients." }, { text: "Myocardial infarction was reported more often with nintedanib, though its clinical significance was not established." }],
      correctAnswers: [0, 2, 3, 4],
      feedback: { correct: "> _Source:_ “The most frequent adverse event …” — Results, p. 1, ¶2 ; “the proportion of patients in …” — Discussion, p. 11, ¶1 ; “In INPULSIS-1, a total of …” — Results, p. 9, ¶1 ; “myocardial infarction was reported in …” — Results, p. 10, ¶1" },
    },
    {
      kind: "NonCodingReflection",
      id: "i18-noncodingreflection" as SectionId,
      title: "Weighing the Harms (4)",
      content: [
    { kind: "text", value: "A patient is starting nintedanib. Which safety signals from INPULSIS require active monitoring rather than simple reassurance, and how would you frame the myocardial infarction signal honestly?" },
  ],
      topic: "Which INPULSIS safety signals warrant monitoring, and how to communicate the myocardial infarction signal given the trial's limits.",
      minLength: 150,
      extraContext: "Assess clinical-appraisal reasoning, not code. A strong answer should identify: (1) aminotransferase elevations ≥3× ULN (~5% vs <1% placebo) as warranting liver enzyme monitoring; (2) the numerically higher myocardial infarction rate (~1.5% vs 0.5%) as a real but uncertain signal whose clinical significance the trial could not establish — so it should be disclosed without overstating causation; (3) a contrast with diarrhea, which is common but usually manageable. Do not credit an answer that dismisses the liver or cardiac signals or that claims nintedanib definitively causes MI.",
    },
  ],
};

export default lessonData;
