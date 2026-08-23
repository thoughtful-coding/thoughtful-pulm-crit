import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "9aad0a45-20c8-49e6-a983-c2ede0574016" as LessonId,
  title: "APROCCHSS: Hydrocortisone plus Fludrocortisone in Septic Shock",
  description: "A claim-grounded lesson on the APROCCHSS trial — the regimen it establishes, its headline 90-day mortality benefit, the population it applies to, and why the effect estimate and inference are fragile.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Annane D, et al. *N Engl J Med*. 2018." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "Adjunctive corticosteroids in septic shock had been argued over for years without closing, and the reason was specific: the two largest prior trials disagreed on survival, leaving clinicians genuinely divided. The disagreement was not random. The trials that showed a survival benefit — APROCCHSS itself and Ger-Inf-05 — used hydrocortisone *plus* fludrocortisone in sicker, shock-selected populations, while CORTICUS and HYPRESS, using hydrocortisone alone, found none. Whether that pattern reflects the added mineralocorticoid, the sicker population, or both is a reasoned reading of the trial landscape rather than a settled fact — but it is the reading that motivated the design. APROCCHSS was built to resolve one question inside that mess: does hydrocortisone plus fludrocortisone improve outcomes in septic shock, or does it only move the numbers that never predicted survival?" },
    { kind: "text", value: "> _Source:_ “This uncertainty about the use …” — Abstract, p. 2, ¶1 ; “There are two main differences …” — Discussion, p. 8, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "The physiologic case rests on two overlapping actions. Corticosteroids are proposed to improve cardiovascular function in septic shock by restoring effective blood volume through increased mineralocorticoid activity and by raising systemic vascular resistance — which is the most plausible explanation for the reduced vasopressor requirement seen with treatment. Fludrocortisone was added on top of hydrocortisone precisely to supply that mineralocorticoid potency: sepsis drives NF-κB-mediated down-regulation of vascular mineralocorticoid receptors, and in experimental endotoxic shock, mineralocorticoid-receptor agonism restored adrenoceptor expression and improved survival. That is the rationale for combining the two agents rather than giving glucocorticoid alone." },
    { kind: "text", value: "> _Source:_ “corticosteroids improve cardiovascular function by …” — Discussion, p. 7, ¶1 ; “in the APROCCHSS and Ger-Inf-05 …”" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i2-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "APROCCHSS enrolled severely ill, vasopressor-dependent septic shock patients and compared a 7-day course of hydrocortisone plus fludrocortisone against matching placebo. Before you see the result: what is the most defensible prediction for 90-day all-cause mortality, given that the physiologic rationale predicts benefit but prior hydrocortisone-alone trials showed none?" },
  ],
      options: [{ text: "No difference in 90-day mortality, consistent with corticosteroids never reducing mortality in septic shock.", feedback: "In this shock-selected population the combination did reduce 90-day mortality; the prior null trials used hydrocortisone alone in different populations." }, { text: "A modest but statistically significant absolute reduction of a few percentage points in 90-day mortality.", feedback: "This is what the trial found: 43.0% vs 49.1%, about a 6-point absolute reduction, RR 0.88 (95% CI 0.78-0.99)." }, { text: "A large absolute reduction of roughly 20 percentage points, matching the shock-reversal magnitude.", feedback: "Hemodynamic effects are large, but the survival effect is modest — about 6 absolute points, not 20." }],
      correctAnswer: 1,
      feedback: { correct: "This is what the trial found: 43.0% vs 49.1%, about a 6-point absolute reduction, RR 0.88 (95% CI 0.78-0.99).\n\n> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶1 ; “Hydrocortisone was administered as a …” — Abstract, p. 3, ¶1 ; “Placebos of French commercial forms …” — Abstract, p. 3, ¶1" },
    },
    {
      kind: "Information",
      id: "b3-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The headline finding: 90-day all-cause mortality was 43.0% with hydrocortisone plus fludrocortisone versus 49.1% with matching placebo — relative risk 0.88 (95% CI 0.78 to 0.99, P=0.03), an absolute reduction of about 6 percentage points. The effect is real and it is modest, and the comparison was clean: both agents had matching placebos manufactured to look identical. This is the survival signal that the hydrocortisone-alone trials never produced." },
    { kind: "text", value: "> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶1 ; “Hydrocortisone was administered as a …” — Abstract, p. 3, ¶1 ; “Placebos of French commercial forms …” — Abstract, p. 3, ¶1" },
  ],
    },
    {
      kind: "FillIn",
      id: "i4-fillin" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "Recall the exact regimen APROCCHSS establishes." },
  ],
      body: "The established regimen is hydrocortisone {{dose}} mg IV bolus every {{interval}} hours plus fludrocortisone {{fludro}} µg enterally once daily, given for {{days}} days with no taper.",
      blanks: { "dose": { match: "numeric", answer: 50.0, tolerance: 0.0, hintMode: "highLow" }, "interval": { match: "numeric", answer: 6.0, tolerance: 0.0, hintMode: "highLow" }, "fludro": { match: "numeric", answer: 50.0, tolerance: 0.0, hintMode: "highLow" }, "days": { match: "numeric", answer: 7.0, tolerance: 0.0, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b5-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who this therapy is for is defined by the entry criteria, and they are strict. Patients qualified only with indisputable or probable septic shock for less than 24 hours: documented infection, a SOFA score of 3 or 4 in at least two organs for at least 6 hours, and vasopressor therapy (e.g., norepinephrine at ≥0.25 µg/kg/min) for at least 6 hours to hold blood pressure. The enrolled cohort matched that filter — 1241 adults with mean SAPS II 56, mean SOFA 12, and a mean norepinephrine dose near 1 µg/kg/min, with the lung the commonest source. These were sicker patients than CORTICUS (SOFA roughly 1.5 points higher, SAPS II roughly 7 points higher) and more often admitted from medical wards. The finding travels to that population — persistent, vasopressor-dependent shock — not to any patient who happens to be in shock." },
    { kind: "text", value: "> _Source:_ “Patients in intensive care units …” — Abstract, p. 2, ¶1 ; “Among the 1241 patients included …” — Abstract, p. 1, ¶1 ; “Patients in the APROCCHSS trial …” — Discussion, p. 9, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i6-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "A patient develops septic shock and is started on low-dose norepinephrine that is weaned off within two hours as fluids take effect. Should this trial's finding be used to justify starting hydrocortisone plus fludrocortisone in this patient?" },
  ],
      options: [{ text: "No — the trial required persistent vasopressor dependency (e.g. norepinephrine ≥0.25 µg/kg/min for at least 6 hours); a rapidly weaned patient does not match the enrolled population.", feedback: "Correct. The entry criteria select for persistent, high-dose vasopressor dependency, and the findings apply to that high-severity group." }, { text: "Yes — any patient meeting a definition of septic shock qualified for this trial and its therapy.", feedback: "Not any septic shock patient qualified: the criteria required documented infection, SOFA 3-4 in ≥2 organs, and sustained vasopressor requirement for at least 6 hours." }],
      correctAnswer: 0,
      feedback: { correct: "Correct. The entry criteria select for persistent, high-dose vasopressor dependency, and the findings apply to that high-severity group.\n\n> _Source:_ “Patients in intensive care units …” — Abstract, p. 2, ¶1 ; “Patients in the APROCCHSS trial …” — Discussion, p. 9, ¶1" },
    },
    {
      kind: "Information",
      id: "b7-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "One thing the trial cannot answer, and it matters for how you read the mechanism story. Hydrocortisone and fludrocortisone were always given together, and in the two-group analysis there was no hydrocortisone-alone arm. So while the added-mineralocorticoid rationale is attractive, the trial cannot isolate what fludrocortisone contributed to the mortality benefit — the added value of the mineralocorticoid over hydrocortisone alone is, in this design, inferred rather than demonstrated. This is a limitation of the bundled intervention, not a stated finding." },
    { kind: "text", value: "> _Source:_ “in the APROCCHSS and Ger-Inf-05 …” ; “Hydrocortisone was administered as a …” — Abstract, p. 3, ¶1 ; “In this multicenter, double-blind, randomized …” — Abstract, p. 1, ¶1" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i8-noncodingreflection" as SectionId,
      title: "Reason It Through",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Explain why APROCCHSS cannot establish the independent contribution of fludrocortisone to the observed mortality benefit." },
  ],
      topic: "Why can APROCCHSS not isolate the contribution of fludrocortisone to the mortality benefit, and what would a design need in order to answer that question?",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer notes: the two agents were always co-administered; the two-group parallel design had no hydrocortisone-alone arm; therefore any benefit is attributable to the combination, and the marginal effect of adding fludrocortisone is untestable here. A hydrocortisone-alone comparator arm would be required. Credit recognition that the mineralocorticoid rationale is a mechanistic hypothesis, not something the trial demonstrated.",
    },
    {
      kind: "Information",
      id: "b9-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The secondary outcomes lean the same way, and they should be read with two cautions. Mortality was lower with treatment at ICU discharge (35.4% vs 41.0%, P=0.04), at hospital discharge (39.0% vs 45.3%, P=0.02), and at day 180 (46.6% vs 52.5%, P=0.04) — but these are successive counts of largely the same deaths, not independent confirmations of the effect. Treatment also bought more vasopressor-free days (17 vs 15, P<0.001) and more organ-failure-free days (14 vs 12, P=0.003); ventilator-free days did not differ significantly (11 vs 10, P=0.07). None of these secondary comparisons were adjusted for multiple testing, so each carries an inflated chance of a false-positive. Read them as consistent supporting texture, not as a stack of separate proofs." },
    { kind: "text", value: "> _Source:_ “at ICU discharge (35.4% vs. …” — Abstract, p. 1, ¶1 ; “hospital discharge (39.0% vs. 45.3%, …” — Abstract, p. 1, ¶1 ; “day 180 (46.6% vs. 52.5%, …” — Abstract, p. 1, ¶1 ; “The number of vasopressor-free days …” — Abstract, p. 1, ¶1 ; “as was the number of …” — Abstract, p. 1, ¶1 ; “The number of ventilator-free days …” — Abstract, p. 1, ¶1 ; “No adjustment for multiple testing …” — Abstract, p. 4, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b10-explain" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "On the harm side, the classic corticosteroid fears did not materialize in this trial. Serious adverse events did not differ significantly (53.1% vs 58.0%, P=0.08), and neither gastroduodenal bleeding (RR 0.88, 95% CI 0.58-1.34) nor superinfection (RR 1.09, 95% CI 0.92-1.30) was significantly increased. What did rise, predictably, was hyperglycemia: at least one glucose ≥150 mg/dl by day 7 in 89.1% vs 83.1% (RR 1.07, 95% CI 1.03-1.12, P=0.002). The available data do not report neurologic sequelae, so nothing can be said about them here." },
    { kind: "text", value: "> _Source:_ “A total of 326 of …” — Abstract, p. 6, ¶1 ; “The risk of gastroduodenal bleeding …” — Abstract, p. 6, ¶1 ; “the risk of hyperglycemia was …” — Abstract, p. 6, ¶1" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "i11-multipleselection" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Based on APROCCHSS, select every statement about harms that is supported by the trial." },
  ],
      options: [{ text: "The rate of serious adverse events did not differ significantly between groups.", feedback: "Correct: 53.1% vs 58.0%, P=0.08." }, { text: "Hyperglycemia (≥1 glucose ≥150 mg/dl by day 7) was significantly more common with hydrocortisone plus fludrocortisone.", feedback: "Correct: 89.1% vs 83.1%, RR 1.07 (95% CI 1.03-1.12), P=0.002." }, { text: "Gastroduodenal bleeding and superinfection were both significantly increased with treatment.", feedback: "Neither was significantly increased: bleeding RR 0.88 (0.58-1.34), superinfection RR 1.09 (0.92-1.30)." }],
      correctAnswers: [0, 1],
      feedback: { correct: "> _Source:_ “the risk of hyperglycemia was …” — Abstract, p. 6, ¶1 ; “The risk of gastroduodenal bleeding …” — Abstract, p. 6, ¶1 ; “A total of 326 of …” — Abstract, p. 6, ¶1" },
    },
    {
      kind: "MultipleChoice",
      id: "i12-multiplechoice" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "The placebo-group 90-day mortality was near 50% and the treatment group's was 43.0% (RR 0.88, 95% CI 0.78-0.99, P=0.03). Predict: what is the approximate number needed to treat, and how should its status be described?" },
  ],
      options: [{ text: "Roughly 16, arithmetically derived from the ~6-point absolute reduction — a figure not reported in the paper, whose clinical importance is an interpretive judgment.", feedback: "Correct: 1/0.061 ≈ 16. The NNT is a derived quantity, and whether a modest absolute benefit is 'worth it' is a judgment, not a stated result." }, { text: "Roughly 16, a value directly reported by the trial as its primary result.", feedback: "The NNT is arithmetically derived from the absolute reduction, not a reported endpoint." }, { text: "There is no meaningful benefit, so an NNT cannot be computed.", feedback: "There was a significant ~6-point absolute reduction; an NNT of about 16 follows from it." }],
      correctAnswer: 0,
      feedback: { correct: "Correct: 1/0.061 ≈ 16. The NNT is a derived quantity, and whether a modest absolute benefit is 'worth it' is a judgment, not a stated result.\n\n> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶1" },
    },
    {
      kind: "Information",
      id: "b13-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "The size and status of the benefit, made explicit: with placebo-group 90-day mortality near 50% and a treatment-group value of 43.0%, the absolute reduction is about 6 percentage points, from which an NNT of roughly 16 follows arithmetically — a figure the paper does not report, and whose clinical weight is an interpretive judgment rather than a datum. Note also that day-28 mortality was 33.7% vs 38.9% and did not reach significance (P=0.06); the survival separation is a longer-horizon signal." },
    { kind: "text", value: "> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶1 ; “but not at day 28 …” — Abstract, p. 1, ¶1" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i14-noncodingreflection" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Appraise how fragile the APROCCHSS mortality estimate is and what that means for how confidently you would act on it." },
  ],
      topic: "Given that the 90-day RR upper confidence bound sits at 0.99, that day-28 mortality was not significant (P=0.06), and that no adjustment was made for multiple testing, how fragile is the mortality effect and how should that shape your confidence?",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer engages: a 95% CI upper bound of 0.99 means the result is barely below the no-effect line and small shifts would cross it; the primary endpoint reached significance only at 90 days while day-28 did not (P=0.06); and unadjusted multiple secondary comparisons inflate false-positive risk, so the corroborating secondary outcomes provide weaker independent support than they appear to. Credit reasoning that the effect is plausible and directionally consistent but not robust, and that the population selection matters for whether to act on it.",
    },
    {
      kind: "Information",
      id: "b15-explain" as SectionId,
      title: "How the Trial Was Built",
      content: [
    { kind: "text", value: "Two structural facts constrain what the trial delivered. It began as a 2-by-2 factorial testing both hydrocortisone-plus-fludrocortisone and drotrecogin alfa (activated); when Xigris was withdrawn from the market it collapsed to a two-group parallel comparison against placebo — leaving the trial underpowered to assess drotrecogin and unable to evaluate any interaction between it and the corticosteroids. And it was designed against an anticipated 90-day mortality of 45% to detect a 10-percentage-point absolute difference, but the sponsor terminated it when the trial agents' expiration dates were reached, after 1241 patients (97% of the planned 1280). Enrollment landed close to target, but the design it was powered for is not the design that read out." },
    { kind: "text", value: "> _Source:_ “In this multicenter, double-blind, randomized …” — Abstract, p. 1, ¶1 ; “the trial continued with two …” — Abstract, p. 4, ¶1 ; “The sponsor terminated the trial …” — Abstract, p. 4, ¶1 ; “We anticipated a 90-day mortality …” — Abstract, p. 3, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i16-multiplechoice" as SectionId,
      title: "Trial Design",
      content: [
    { kind: "text", value: "After Xigris (drotrecogin alfa) was withdrawn from the market, what could APROCCHSS no longer establish?" },
  ],
      options: [{ text: "It could no longer measure 90-day mortality in the corticosteroid comparison.", feedback: "The corticosteroid-vs-placebo comparison continued as a two-group trial and produced the 90-day mortality result; what was lost was the drotrecogin arm." }, { text: "It became underpowered to assess drotrecogin alfa and could not evaluate any interaction between it and the corticosteroids.", feedback: "Correct: the factorial collapsed to a two-group comparison, forfeiting the drotrecogin question and any interaction analysis." }],
      correctAnswer: 1,
      feedback: { correct: "Correct: the factorial collapsed to a two-group comparison, forfeiting the drotrecogin question and any interaction analysis.\n\n> _Source:_ “In this multicenter, double-blind, randomized …” — Abstract, p. 1, ¶1 ; “the trial continued with two …” — Abstract, p. 4, ¶1" },
    },
  ],
};

export default lessonData;
