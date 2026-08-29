import type { Lesson, LessonId, SectionId } from "../../../../../src/types/data";

const lessonData: Lesson = {
  guid: "bb537b91-6d35-4248-a4ef-cef81e1147b9" as LessonId,
  title: "APROCCHSS: Hydrocortisone Plus Fludrocortisone in Septic Shock",
  description: "A lesson on the APROCCHSS trial establishing that hydrocortisone plus fludrocortisone lowers 90-day mortality in vasopressor-dependent septic shock.",
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
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Corticosteroids in septic shock have been argued over for decades, and the argument was never really about whether they do something at the bedside — they reliably reverse shock faster. The open question was the one that matters: whether that hemodynamic benefit translates into survival. Quantitative reviews had variably confirmed or refuted a mortality benefit, and the profession was split almost exactly in thirds — roughly a third of physicians believing steroids improve survival, a third that they do not help, and a third unsure. The two largest prior trials sharpened rather than settled this: both showed hemodynamic and organ-function benefit, but only one showed a survival benefit. That is the signature of genuine equipoise, and it is what a definitive mortality trial was built to close." },
    { kind: "text", value: "> _Source:_ “Quantitative analysis of these trials …” — Abstract, p. 2, ¶3 ; “This has resulted in substantial …” — Abstract, p. 2, ¶3" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The physiologic case has two limbs. Glucocorticoid activity restores vascular tone and increases systemic vascular resistance, and attenuates inflammation across organs partly through inhibition of NF-κB — the plausible route to faster resolution of organ failure. The second limb is mineralocorticoid, and it is the reason fludrocortisone was bolted on: sepsis down-regulates vascular mineralocorticoid receptors, and in endotoxic shock mineralocorticoid agonism restores adrenoceptor expression and effective blood volume and improves survival. Hydrocortisone alone supplies only weak mineralocorticoid activity, so adding fludrocortisone is meant to restore the volume-and-adrenoceptor arm that hydrocortisone underserves. The observed effect that lines up cleanly with this story is the reduced vasopressor need — more vasopressor-free days to day 28 (17 vs. 15, P<0.001)." },
    { kind: "text", value: "> _Source:_ “corticosteroids improve cardiovascular function by …” — Discussion, p. 7, ¶4 ; “Corticosteroids attenuate inflammation in various …” — Discussion, p. 7, ¶4 ; “The rationale for adding mineralocorticoid …” — Discussion, p. 9, ¶2 ; “The number of vasopressor-free days …” — Abstract, p. 1, ¶7" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "That mechanistic story tempts you to credit fludrocortisone specifically — but the design will not let you. Hydrocortisone and fludrocortisone were given together as a single bundled arm, compared against matched placebos for both, with no hydrocortisone-alone arm in the two-group comparison. Whatever the mineralocorticoid contributes cannot be separated from the glucocorticoid; the incremental effect of fludrocortisone is untestable here. Read the trial as a verdict on the combination, not as evidence that the second drug earned its place." },
    { kind: "text", value: "> _Source:_ “in the APROCCHSS and Ger-Inf-05 …” — Discussion, p. 8 ; “Hydrocortisone was administered as a …” — Methods, p. 3, ¶3 ; “The analysis compared patients who …” — Abstract, p. 1, ¶6" },
  ],
    },
    {
      kind: "Information",
      id: "b3-reveal" as SectionId,
      title: "The Intervention (1)",
      content: [
    { kind: "text", value: "The regimen this trial establishes is specific and worth committing to memory: hydrocortisone 50-mg IV bolus every 6 hours, plus a 50-μg fludrocortisone tablet once daily, both for 7 days, with no taper. The comparator group received matched placebos for both agents. Fixed dose, fixed duration, stop at day 7 — there is no titration and no wean built into what was tested." },
    { kind: "text", value: "> _Source:_ “Hydrocortisone was administered as a …” — Methods, p. 3, ¶3 ; “The analysis compared patients who …” — Abstract, p. 1, ¶6" },
  ],
    },
    {
      kind: "FillIn",
      id: "i4-fillin" as SectionId,
      title: "The Intervention (2)",
      content: [
    { kind: "text", value: "Recall the exact regimen APROCCHSS tested." },
  ],
      body: "Hydrocortisone was given as a {{hcdose}}-mg IV bolus every {{hcinterval}} hours, plus fludrocortisone {{fludrodose}} μg orally once daily, both continued for {{days}} days without tapering.",
      blanks: { "hcdose": { match: "numeric", answer: 50.0, tolerance: 0.0, hintMode: "highLow" }, "hcinterval": { match: "numeric", answer: 6.0, tolerance: 0.0, hintMode: "highLow" }, "fludrodose": { match: "numeric", answer: 50.0, tolerance: 0.0, hintMode: "highLow" }, "days": { match: "numeric", answer: 7.0, tolerance: 0.0, hintMode: "highLow" } },
    },
    {
      kind: "MultipleChoice",
      id: "i5-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "In this sicker, vasopressor-dependent septic shock population, background 90-day mortality was expected near 45-50%. Before seeing the result, predict what happened to 90-day all-cause mortality with hydrocortisone plus fludrocortisone versus placebo." },
  ],
      options: [{ text: "A large reduction only in patients selected by a corticotropin stimulation test.", feedback: "The benefit did not depend on a corticotropin stimulation test to select responders." }, { text: "No difference in mortality despite faster shock reversal.", feedback: "Unlike some prior trials, APROCCHSS did show a significant 90-day mortality reduction." }, { text: "A modest but statistically significant reduction in mortality (about 6 percentage points).", feedback: "Correct: 43.0% vs 49.1%, RR 0.88 (95% CI 0.78-0.99, P=0.03)." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: 43.0% vs 49.1%, RR 0.88 (95% CI 0.78-0.99, P=0.03).\n\n> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶7 ; “Hydrocortisone was administered as a …” — Methods, p. 3, ¶3 ; “The analysis compared patients who …” — Abstract, p. 1, ¶6" },
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The headline: at 90 days, all-cause mortality was 43.0% with hydrocortisone plus fludrocortisone versus 49.1% with placebo — a relative risk of 0.88 (95% CI, 0.78 to 0.99; P=0.03), an absolute reduction of about 6 percentage points. This is a mortality signal, and it did not depend on selecting responders by a corticotropin stimulation test; the regimen was given to all randomized patients." },
    { kind: "text", value: "> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶7" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i7-multiplechoice" as SectionId,
      title: "Who Was Enrolled",
      content: [
    { kind: "text", value: "Which patient matches the APROCCHSS entry rule — the population in whom this regimen was tested?" },
  ],
      options: [{ text: "A patient in septic shock for more than 24 hours with a high bleeding risk.", feedback: "Shock ≥24 hours and high bleeding risk were major exclusion criteria." }, { text: "Any patient with septic shock on any dose of a vasopressor.", feedback: "A dose threshold was required (≥0.25 μg/kg/min or ≥1 mg/hr), not merely any vasopressor." }, { text: "Septic shock <24 hours, documented infection, SOFA 3-4 in ≥2 organs for ≥6 hours, on norepinephrine ≥0.25 μg/kg/min for ≥6 hours despite resuscitation.", feedback: "Correct — the sickest, persistently vasopressor-dependent patients." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — the sickest, persistently vasopressor-dependent patients.\n\n> _Source:_ “Septic shock was defined as …” — Methods, p. 2, ¶9 ; “Patients in the APROCCHSS trial …” — Discussion, p. 9, ¶4 ; “Major exclusion criteria were the …” — Methods, p. 2" },
    },
    {
      kind: "Information",
      id: "b8-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The secondary outcomes all pointed the same way: mortality was lower with hydrocortisone plus fludrocortisone at ICU discharge (35.4% vs 41.0%, P=0.04), at hospital discharge (39.0% vs 45.3%, P=0.02), and at day 180 (46.6% vs 52.5%, P=0.04), and patients accrued more organ-failure-free days to day 28 (14 vs 12, P=0.003). Ventilator-free days did not separate (11 vs 10, P=0.07). But read these as directionally consistent, not as independent confirmation: the successive mortality timepoints count largely the same deaths, and no adjustment for multiple testing was made — so this is inferred coherence, not a stack of independent positive trials." },
    { kind: "text", value: "> _Source:_ “Mortality was significantly lower in …” — Abstract, p. 1, ¶7 ; “at ICU discharge (35.4% vs. …” — Abstract, p. 1, ¶7 ; “hospital discharge (39.0% vs. 45.3%, …” — Abstract, p. 1, ¶7 ; “day 180 (46.6% vs. 52.5%, …” — Abstract, p. 1, ¶7 ; “as was the number of …” — Abstract, p. 1, ¶7 ; “The number of ventilator-free days …” — Abstract, p. 1, ¶7 ; “No adjustment for multiple testing …” — Methods, p. 4, ¶3" },
  ],
    },
    {
      kind: "Information",
      id: "b9-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "On the harm side, the ledger is reassuring with one expected entry. Serious adverse events by day 180 did not differ significantly (53.1% vs 58.0%, P=0.08); neither did gastroduodenal bleeding (RR 0.88; 95% CI 0.58-1.34) nor superinfection (RR 1.09; 95% CI 0.92-1.30). The cost that did materialize is the predictable one: hyperglycemia was significantly more common (89.1% vs 83.1%; RR 1.07; 95% CI 1.03-1.12; P=0.002) — a manageable price, not a signal to withhold the drug." },
    { kind: "text", value: "> _Source:_ “A total of 326 of …” — Results, p. 6, ¶3 ; “The risk of gastroduodenal bleeding …” — Results, p. 6, ¶3 ; “the risk of hyperglycemia was …” — Results, p. 6, ¶3" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "i10-multipleselection" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Which of the following were reported with hydrocortisone plus fludrocortisone in APROCCHSS? Select all that apply." },
  ],
      options: [{ text: "A significant increase in serious adverse events overall.", feedback: "Serious adverse events did not differ significantly (53.1% vs 58.0%, P=0.08)." }, { text: "No significant increase in superinfection.", feedback: "Correct: RR 1.09 (95% CI 0.92-1.30)." }, { text: "No significant increase in gastroduodenal bleeding.", feedback: "Correct: RR 0.88 (95% CI 0.58-1.34)." }, { text: "Significantly more hyperglycemia than placebo.", feedback: "Correct: RR 1.07 (95% CI 1.03-1.12, P=0.002)." }],
      correctAnswers: [1, 2, 3],
      feedback: { correct: "> _Source:_ “the risk of hyperglycemia was …” — Results, p. 6, ¶3 ; “A total of 326 of …” — Results, p. 6, ¶3 ; “The risk of gastroduodenal bleeding …” — Results, p. 6, ¶3" },
    },
    {
      kind: "Information",
      id: "b11-explain" as SectionId,
      title: "How the Trial Was Built",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "One structural caveat is worth understanding because it shaped the whole trial. APROCCHSS was designed as a 2-by-2 factorial, testing corticosteroids and drotrecogin alfa (activated) together. Drotrecogin had shown an early survival benefit in sepsis that later trials did not confirm, and its commercial form was withdrawn from the market mid-trial. The factorial collapsed to a two-group parallel comparison — leaving the trial underpowered to assess drotrecogin and unable to evaluate any interaction between it and corticosteroids. That question is simply unanswerable within this trial." },
    { kind: "text", value: "> _Source:_ “In this multicenter, double-blind, randomized …” — Abstract, p. 1, ¶6 ; “the trial continued with two …” — Methods, p. 4, ¶2 ; “A human recombinant activated protein …” — Abstract, p. 2, ¶2" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i12-noncodingreflection" as SectionId,
      title: "Reason It Through",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Reason through what APROCCHSS can and cannot attribute." },
  ],
      topic: "APROCCHSS gave hydrocortisone and fludrocortisone together as one bundled arm against dual placebo, and its intended 2-by-2 factorial collapsed to a two-group comparison after drotrecogin was withdrawn. Explain what these design features mean for attributing the mortality benefit and for the drotrecogin question.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer notes: (1) with no hydrocortisone-alone arm, the incremental contribution of fludrocortisone is untestable — the benefit belongs to the combination; (2) the mineralocorticoid mechanistic rationale is a hypothesis, not something the data isolate; (3) losing the factorial left the trial underpowered for drotrecogin and unable to assess a drug-corticosteroid interaction. Credit recognizing that plausible mechanism does not equal demonstrated component-level causation.",
    },
    {
      kind: "Information",
      id: "b13-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "Now weigh the strength of the primary result honestly. The 90-day estimate — RR 0.88 (95% CI, 0.78 to 0.99; P=0.03) — has an upper bound nearly touching 1.0, and the day-28 mortality difference (33.7% vs 38.9%) did not reach significance (P=0.06). Add the absence of any multiplicity adjustment across the many secondary comparisons, and a reasonable reader treats the effect estimate as statistically marginal. Note the framing: that these features together make the effect 'fragile' is an interpretation you build from the numbers, not a conclusion the paper itself states." },
    { kind: "text", value: "> _Source:_ “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶7 ; “but not at day 28 …” — Abstract, p. 1, ¶7 ; “No adjustment for multiple testing …” — Methods, p. 4, ¶3" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i14-noncodingreflection" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Critique the robustness of the primary finding." },
  ],
      topic: "Given RR 0.88 (95% CI 0.78-0.99, P=0.03) at 90 days, a non-significant day-28 difference (P=0.06), and no multiple-testing adjustment, argue how confident you would be in the mortality benefit and how you would communicate that uncertainty.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer: reads the CI upper bound near 1.0 as leaving little margin; notes the earlier timepoint (day 28) not reaching significance while later ones do; flags that unadjusted secondary comparisons inflate false-positive risk; and explicitly states that calling the result 'fragile' is an interpretation, not a stated finding of the paper. Do not require the learner to defend a single verdict — reward calibrated reasoning either way.",
    },
    {
      kind: "FillIn",
      id: "i15-fillin" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Convert the primary result into a bedside-usable absolute framing." },
  ],
      body: "With 90-day mortality of 49.1% under placebo and 43.0% with treatment, the absolute risk reduction is about {{arr}} percentage points, which gives a number needed to treat of roughly {{nnt}} patients to prevent one death at 90 days.",
      blanks: { "arr": { match: "numeric", answer: 6.0, tolerance: 0.5, hintMode: "highLow" }, "nnt": { match: "numeric", answer: 16.0, tolerance: 1.5, hintMode: "highLow" } },
    },
    {
      kind: "MultipleChoice",
      id: "i16-multiplechoice" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "Why does the absolute framing (about 6 percentage points, NNT ~16) matter more than the relative risk for a bedside decision in this population?" },
  ],
      options: [{ text: "Because the relative risk of 0.88 means each treated patient's risk falls by 88%.", feedback: "RR 0.88 means a 12% relative reduction, not 88%; and relative figures obscure the absolute stakes." }, { text: "Because the absolute reduction proves the day-28 mortality benefit was significant.", feedback: "The day-28 difference was not statistically significant (P=0.06)." }, { text: "Because baseline mortality is high (~45-50%), the same relative risk yields a large absolute benefit, so the number of patients treated to prevent one death is small.", feedback: "Correct — absolute benefit scales with baseline risk, which is high here." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — absolute benefit scales with baseline risk, which is high here.\n\n> _Source:_ “With respect to 90-day all-cause …” — Discussion, p. 8, ¶2 ; “the 90-day mortality was 43.0% …” — Abstract, p. 1, ¶7" },
    },
  ],
};

export default lessonData;
