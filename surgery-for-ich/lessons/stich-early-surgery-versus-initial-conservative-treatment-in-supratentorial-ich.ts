import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "fe87c18a-6ef9-465d-80ad-137654ac5d82" as LessonId,
  title: "STICH: Early Surgery for Supratentorial ICH",
  description: "A lesson on the STICH trial's null result for early haematoma evacuation in spontaneous supratentorial intracerebral haemorrhage, and what its design does and does not establish.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Mendelow AD, et al. *Lancet*. 2005." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Whether to evacuate a spontaneous supratentorial haematoma or manage it medically had been argued for decades, and the trials only sharpened the disagreement rather than settling it. McKissock's series favoured conservative care, Auer's endoscopic removal looked better, and the smaller studies pulled in different directions; meta-analysis of that early body of work reached no firm conclusion. The physiological case for surgery was never the problem. If a viable ischaemic penumbra surrounds the clot, then evacuating the mass lesion should relieve pressure, restore perfusion to the salvageable rim, and improve recovery. That reasoning is coherent — but it had never been confirmed at the bedside, and coherent physiology has misled ICH management before. So the equipoise going into STICH was real and specific: not whether clot removal changes local mechanics, but whether a policy of operating early leaves more patients with a life worth the operation." },
    { kind: "text", value: "> _Source:_ “The role of medical and …” — Abstract, p. 1, ¶1 ; “If a penumbra exists in …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b1-motivate" as SectionId,
      title: "Against the Prior Evidence",
      content: [
    { kind: "text", value: "STICH was built to be decisive by size. It randomised more patients than all nine prior randomised trials in supratentorial ICH combined, on the premise that a single adequately powered comparison could resolve what an underpowered and conflicting literature could not." },
    { kind: "text", value: "> _Source:_ “Although the number of patients …” — Discussion, p. 8, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who got randomised defines who the answer is for. Patients needed CT evidence of a spontaneous supratentorial haemorrhage that had arisen within 72 h, a haematoma of at least 2 cm minimum diameter, and a Glasgow coma score of five or more. Excluded were bleeds probably due to an aneurysm or an angiographically proven arteriovenous malformation, or secondary to tumour or trauma, along with cerebellar haemorrhages and supratentorial bleeds extending into the brainstem — that is, the lesions with their own management logic. The gate that matters most, though, is not anatomical. A patient entered only when the responsible neurosurgeon was genuinely uncertain whether surgery or conservative care was better: the clinical uncertainty principle. That single criterion means the trial speaks to patients managed in neurosurgical units in whom the decision was already a coin-flip, and to no one for whom the surgeon had already made up their mind." },
    { kind: "text", value: "> _Source:_ “Patients were eligible for inclusion …” — Methods, p. 2, ¶3 ; “Study guidelines recommended that eligible …” — Methods, p. 2, ¶3 ; “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients with spontaneous supratentorial intracerebral …” — Abstract, p. 1, ¶16" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-inc-haematoma-size-gcs" as SectionId,
      title: "Thresholds",
      content: [
    { kind: "text", value: "The STICH guidelines set two quantitative thresholds a patient had to meet on the haematoma itself and on conscious level to be eligible. Which pairing states those two entry cutoffs?" },
  ],
      options: [{ text: "A haematoma present on CT within 72 h of onset and a Glasgow coma score of five or more.", feedback: "The 72 h figure is the window within which the haemorrhage must have arisen for CT-confirmed eligibility, not the haematoma diameter cutoff." }, { text: "A haematoma of at least 2 cm in diameter and a Glasgow coma score of five or more.", feedback: "Correct. Study guidelines recommended a minimum haematoma diameter of 2 cm and a Glasgow coma score of five or more." }, { text: "A haematoma amenable to surgery within 24 h of randomisation and a Glasgow coma score of five or more.", feedback: "The 24 h figure is the exclusion rule on surgical timing (patients were excluded if surgery could not be undertaken within 24 h of randomisation), not the haematoma size threshold." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. Study guidelines recommended a minimum haematoma diameter of 2 cm and a Glasgow coma score of five or more.\n\n> _Source:_ “Study guidelines recommended that eligible …” — Methods, p. 2, ¶3" },
    },
    {
      kind: "Information",
      id: "b4-explain" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The primary outcome was not a raw scale score but a prognosis-based dichotomy of the extended Glasgow outcome scale at 6 months — a sliding threshold that adjusts what counts as a favourable result to the patient's baseline prognosis, with parallel prognosis-based dichotomies applied to the modified Rankin scale and Barthel index. The trial enrolled a wide population, ages 19 to 93 years, median 62 (IQR 52-70). The sample size was set assuming a 40% favourable outcome under initial conservative treatment and 80% power to detect a 10% absolute benefit, requiring 800 patients, with a 25% margin added for crossover and protocol violation to reach a total of 1000. It is tempting to read the sliding dichotomy as a device chosen specifically to lower the bar in poor-prognosis patients and thereby buy power — a plausible methodological rationale, but one inferred from the design rather than established by the facts here. What the design does fix is the yardstick: benefit had to show up on a prognosis-adjusted favourable-outcome dichotomy, powered for a 10-point swing." },
    { kind: "text", value: "> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “ages ranged between 19 and …” — Results, p. 4, ¶5 ; “with a favourable outcome of …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-out-primary-absolute-benefit" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "STICH set its yardstick before the result was known: benefit had to appear on a prognosis-based dichotomised extended Glasgow outcome scale at 6 months, and the trial was powered to detect a 10% absolute benefit from early surgery over initial conservative treatment. Before the primary result is revealed, which outcome on this favourable-outcome dichotomy is the most likely finding for a policy of early surgery?" },
  ],
      options: [{ text: "A favourable-outcome benefit of about 4·1% for early surgery, favouring surgery but non-significant (p=0·144).", feedback: "Incorrect. The 4·1% absolute benefit (p=0·144) was the result on the prognosis-based Barthel index, not on the primary extended GOS dichotomy." }, { text: "A small favourable-outcome benefit of about 2·3% for early surgery (95% CI -3·2 to 7·7), with a confidence interval crossing no effect.", feedback: "Correct. On the prognosis-based dichotomised extended GOS at 6 months the absolute benefit was 2·3% (95% CI -3·2 to 7·7), a small effect whose interval straddles no difference — a null on the primary endpoint." }, { text: "A favourable-outcome benefit of about 4·7% for early surgery, favouring surgery but non-significant (p=0·116).", feedback: "Incorrect. The 4·7% absolute benefit (p=0·116) was measured on the prognosis-based modified Rankin scale, not on the primary extended GOS dichotomy." }],
      correctAnswer: 1,
      feedback: { correct: "Correct. On the prognosis-based dichotomised extended GOS at 6 months the absolute benefit was 2·3% (95% CI -3·2 to 7·7), a small effect whose interval straddles no difference — a null on the primary endpoint.\n\n> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15" },
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The headline was a null. On the prognosis-based dichotomised extended Glasgow outcome scale at 6 months, 122 of 468 patients (26%) allocated to early surgery had a favourable outcome, against 118 of 496 (24%) under initial conservative treatment: an absolute benefit of 2.3% (95% CI -3.2 to 7.7), a relative benefit of 10% (-13 to 33), odds ratio 0.89 (95% CI 0.66-1.19, p=0.414). The confidence interval straddles no effect and the point estimate is small. Read against the uncertainty-principle population, the conclusion is bounded but clear: among neurosurgical-unit patients in genuine equipoise, a policy of early surgery produced no overall benefit." },
    { kind: "text", value: "> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “Patients with spontaneous supratentorial intracerebral …” — Abstract, p. 1, ¶16" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-primary-absolute-benefit" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "On the prognosis-based dichotomised extended Glasgow outcome scale at 6 months, ___% of patients allocated to early surgery had a favourable outcome, compared with ___% allocated to initial conservative treatment (odds ratio 0.89)." },
  ],
      body: "On the prognosis-based dichotomised extended Glasgow outcome scale at 6 months, {{surgery}}% of patients allocated to early surgery had a favourable outcome, compared with {{conservative}}% allocated to initial conservative treatment (odds ratio 0.89).",
      blanks: { "surgery": { match: "numeric", answer: 26.0, tolerance: 0.5, hintMode: "highLow" }, "conservative": { match: "numeric", answer: 24.0, tolerance: 0.5, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b8-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "Mortality told the same story. At 6 months, 36% of the early surgery group had died versus 37% under initial conservative treatment (odds ratio 0.95, 95% CI 0.73-1.23), and survival across the first 6 months did not differ between arms (log-rank p=0.678). Early operation neither reduced death nor deferred it — the survival curves ran together." },
    { kind: "text", value: "> _Source:_ “The mortality rate at 6 …” — Results, p. 5, ¶6 ; “Survival during the first 6 …” — Results, p. 6, ¶1" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-out-mortality" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "At 6 months, mortality was ___% in the early surgery group compared with 37% in the initial conservative treatment group, a non-significant difference with an odds ratio of ___." },
  ],
      body: "At 6 months, mortality was {{surgery}}% in the early surgery group compared with 37% in the initial conservative treatment group, a non-significant difference with an odds ratio of {{or}}.",
      blanks: { "surgery": { match: "numeric", answer: 36.0, tolerance: 0.5, hintMode: "highLow" }, "or": { match: "numeric", answer: 0.95, tolerance: 0.02, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b10-explain" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The trial also looked at the sickest end of the entry range. Among comatose patients — Glasgow coma score of 8 or below — outcomes were uniformly poor whatever was done, and early surgery raised the relative risk of a poor outcome by 8% (95% CI -3 to 20) compared with initial conservative treatment. The interval crosses zero, so this is not a proven harm, but the signal points the wrong way." },
    { kind: "text", value: "> _Source:_ “Early surgery raised the relative …” — Discussion, p. 9, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "multiplechoice-harm-coma-poor" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "In STICH, a prespecified subgroup analysis looked at the sickest patients entering the trial — those who were comatose, with a Glasgow coma score of 8 or below — comparing early surgery with initial conservative treatment. Before the result is revealed: what is the most likely direction of effect of early surgery on the risk of a poor outcome in this comatose subgroup?" },
  ],
      options: [{ text: "Early surgery probably increased the risk of a poor outcome, with a relative risk raised by about 8% (95% CI -3 to 20).", feedback: "Correct. Among comatose patients (GCS ≤8) outcomes were uniformly poor, and early surgery raised the relative risk of a poor outcome by 8% (95% CI -3 to 20); the interval crosses zero, so this is a signal of probable harm rather than proven harm." }, { text: "Early surgery produced a small favourable-outcome benefit of about 4.1%, favouring surgery (27% vs 23%).", feedback: "This is the whole-cohort result on the prognosis-based Barthel index (124 [27%] vs 110 [23%], p=0.144), not the comatose subgroup." }, { text: "Early surgery produced a small favourable-outcome benefit of about 2.3% on the primary endpoint, favouring surgery (26% vs 24%).", feedback: "This is the overall primary-outcome result (absolute benefit 2.3%, 26% vs 24%, OR 0.89), not the comatose subgroup analysis." }],
      correctAnswer: 0,
      feedback: { correct: "Correct. Among comatose patients (GCS ≤8) outcomes were uniformly poor, and early surgery raised the relative risk of a poor outcome by 8% (95% CI -3 to 20); the interval crosses zero, so this is a signal of probable harm rather than proven harm.\n\n> _Source:_ “Early surgery raised the relative …” — Discussion, p. 9, ¶2" },
    },
    {
      kind: "Information",
      id: "b12-reveal" as SectionId,
      title: "Weighing the Harms (3)",
      content: [
    { kind: "text", value: "So the bedside reading for the comatose patient is not neutral. With outcomes poor across the board and a relative risk of poor outcome shifted upward by 8% with surgery, early operation in GCS 8 or below is more plausibly harmful than helpful — the mass-lesion rationale does not rescue a brain already this far gone." },
    { kind: "text", value: "> _Source:_ “Early surgery raised the relative …” — Discussion, p. 9, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b13-explain" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "One subgroup broke from the flat overall picture. In the prespecified group whose haematoma lay 1 cm or less from the cortical surface, early surgery was more likely to yield a favourable outcome, with an absolute benefit of 8% (95% CI 0-15) and a significant interaction between cortical depth and treatment (p=0.02). Superficial clots — the ones a surgeon can reach without traversing healthy cortex — are exactly where the mechanical case for evacuation is strongest, so the direction is biologically sensible." },
    { kind: "text", value: "> _Source:_ “A favourable outcome from early …” — Results, p. 6, ¶4" },
  ],
    },
    {
      kind: "FillIn",
      id: "fillin-subgroup-depth" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "In the prespecified subgroup whose haematoma lay ___ cm or less from the cortical surface, early surgery yielded an absolute benefit of ___%, with a significant depth-by-treatment interaction." },
  ],
      body: "In the prespecified subgroup whose haematoma lay {{depth}} cm or less from the cortical surface, early surgery yielded an absolute benefit of {{benefit}}%, with a significant depth-by-treatment interaction.",
      blanks: { "depth": { match: "numeric", answer: 1.0, tolerance: 0.0, hintMode: "highLow" }, "benefit": { match: "numeric", answer: 8.0, tolerance: 0.0, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b15-reveal" as SectionId,
      title: "At the Bedside (1)",
      content: [
    { kind: "text", value: "That finding is a hypothesis, not a licence. There is insufficient evidence to justify a general policy of early surgery over initial conservative treatment; patients with superficial haematomas may benefit, especially by craniotomy, but that potential benefit still needs to be established. The depth signal earns a dedicated trial, not a change in practice." },
    { kind: "text", value: "> _Source:_ “There is insufficient evidence to …” — Discussion, p. 9, ¶7" },
  ],
    },
    {
      kind: "Information",
      id: "b16-explain" as SectionId,
      title: "The Comparator",
      content: [
    { kind: "text", value: "What STICH randomised was two policies, not two operations. The comparator arm was initial conservative treatment — best medical care, with later surgical evacuation allowed if neurological deterioration demanded it. That escape hatch was used heavily: about 26% of the conservative arm (140 of 529 assessable patients) ultimately went to surgery, while in the early surgery arm 6% never had an operation and another 6% were operated on beyond the 24 h window. Every crossover pulls the two arms toward each other, so the null contrast is a diluted one. The trial can say a policy of routine early surgery adds nothing over a policy of watchful conservative management with rescue surgery; it cannot isolate whether the knife itself helps a given patient." },
    { kind: "text", value: "> _Source:_ “Initial conservative treatment used medical …” — Abstract, p. 1, ¶14 ; “Of 529 assessable patients randomised …” — Results, p. 5, ¶3 ; “In fact, this operative intervention …” — Discussion, p. 8, ¶8" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-crossover-conservative" as SectionId,
      title: "Reason It Through (1)",
      content: [],
      topic: "STICH randomised two treatment *policies* — early surgery versus initial conservative management with rescue surgery allowed on deterioration — and about a quarter of the conservative arm ultimately crossed over to surgery, while only a small fraction of the early-surgery arm never had an operation. Because the analysis followed patients as randomised, explain how this asymmetric crossover shapes what the null primary result can and cannot establish. What does the trial legitimately answer, and what question about the individual patient does it leave open?",
      minLength: 150,
      placeholder: "Consider what \"as-randomised\" analysis does when patients don't stay in their assigned arm...",
      extraContext: "Assess trial-appraisal reasoning about crossover and intention-to-treat, not code. A strong response should: (1) recognise that STICH compared two management policies rather than surgery versus no surgery, so the comparator arm always included the option of later rescue surgery; (2) explain that heavy one-directional crossover (roughly a quarter of the conservative arm going to surgery, versus only about 6% of the early-surgery arm not being operated on) pulls the two arms toward each other and dilutes the contrast, biasing an intention-to-treat estimate toward the null; (3) articulate the correct interpretation — the trial can conclude that a policy of routine early surgery adds nothing over watchful conservative management with rescue surgery, but it cannot isolate whether the operation itself benefits a given individual, because many 'conservative' patients received surgery anyway; (4) resist the temptation to treat the null as proof that surgery is useless for an individual. Reward reasoning that connects the dilution mechanism to the policy-versus-procedure distinction; do not require exact figures.",
    },
    {
      kind: "Information",
      id: "b18-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "The superficial-haematoma signal also has to survive the arithmetic of looking many times. There were 12 prespecified subgroups; multiplying the depth subgroup's p value by 12 to correct for those comparisons erases its significance. So the finding cannot be read as a reliable subgroup effect — it is hypothesis-generating, and confirming it needs a trial built to test that single question, not a subgroup salvaged from a null trial." },
    { kind: "text", value: "> _Source:_ “Traditional statistical and mathematical opinion …” — Discussion, p. 8, ¶11 ; “There is insufficient evidence to …” — Discussion, p. 9, ¶7" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-subgroup-multiplicity" as SectionId,
      title: "Reason It Through (2)",
      content: [],
      topic: "STICH examined 12 prespecified subgroups. The superficial-haematoma subgroup (clot within 1 cm of the cortical surface) reached apparent significance on its own, but multiplying its p value by the 12 prespecified subgroups makes that significance disappear. Explain why testing many subgroups inflates the chance of a spurious \"significant\" finding, why this correction abolishes the depth signal, and what this implies for whether a surgeon should treat superficial haematomas as an established indication for early surgery.",
      minLength: 150,
      placeholder: "Consider what happens to the false-positive rate when you test 12 subgroups, why multiplying the p value by 12 matters here, and what that leaves you able to claim about superficial haematomas...",
      extraContext: "Assess statistical-reasoning about multiplicity, not code. A strong answer should: (1) explain that examining 12 prespecified subgroups multiplies the number of chances to find an apparently significant result, so the family-wise false-positive rate rises well above the nominal 5% for any single test; (2) recognise that multiplying the subgroup p value by the number of comparisons (a Bonferroni-style correction) is a way of accounting for that inflation, and that here it pushes the corrected value above significance, so the depth effect no longer stands as a reliable subgroup effect; (3) draw the practice implication that the superficial-haematoma finding is hypothesis-generating only — a subgroup salvaged from an overall null trial — and cannot be treated as an established indication for early surgery; confirming it would require a dedicated trial powered to test that single question. Reward reasoning that distinguishes a nominally significant single test from a finding that survives correction for multiple looks. Do not require the learner to recall exact figures.",
    },
    {
      kind: "Information",
      id: "b20-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "There is a further tangle in reading the depth subgroup. The type of operation was left to the admitting surgeon — a mix of craniotomy, endoscopy, and stereotaxy, with open craniotomy chosen for roughly three-quarters of early-surgery patients — rather than randomised, and craniotomy carried a non-significant relative benefit of 28%. Because technique was not randomised, the trial's effects cannot be pinned to any single method. So even the superficial-haematoma benefit (absolute 8%, 95% CI 0-15; interaction p=0.02) cannot be attributed specifically to craniotomy, and it does not survive correction for the 12 prespecified subgroups either. That the technique-by-depth attribution is unresolvable is an inference from the non-randomised choice of operation — not a result the trial reported." },
    { kind: "text", value: "> _Source:_ “For patients allocated to early …” — Discussion, p. 9, ¶1 ; “A favourable outcome from early …” — Results, p. 6, ¶4 ; “Traditional statistical and mathematical opinion …” — Discussion, p. 8, ¶11" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-lim-surgical-method-heterogeneity" as SectionId,
      title: "Reason It Through (3)",
      content: [],
      topic: "In STICH, the choice of operation was left to the admitting surgeon rather than randomised: patients received a mix of craniotomy, endoscopy, and stereotaxy, with open craniotomy chosen for roughly three-quarters of early-surgery patients and carrying a non-significant relative benefit of 28%. Given this, explain why the trial cannot attribute any benefit seen in the superficial-haematoma (cortical-depth) subgroup specifically to craniotomy, even though craniotomy was the technique used most often.",
      minLength: 150,
      placeholder: "Consider what randomisation did and did not control here. The two policy arms were randomised, but was the choice of operation? If a surgeon picks the technique, what might that choice be correlated with, and how does that limit any claim that craniotomy caused the subgroup benefit...",
      extraContext: "Assess trial-appraisal reasoning about confounding by non-randomised co-intervention, not code. A strong answer should recognise that: (1) randomisation balances the two policy arms but does NOT randomise which surgical technique a patient received, so technique is a self-selected, potentially confounded variable rather than an experimentally controlled one; (2) because surgeons chose technique at their discretion, technique may be correlated with patient/haematoma characteristics (e.g. depth, size, location, prognosis) — so a benefit observed where craniotomy predominated could reflect who was selected for craniotomy rather than a causal effect of craniotomy itself; (3) 'craniotomy was chosen most often (about three-quarters)' establishes only frequency, not causation, and its relative benefit of 28% was non-significant; (4) attributing the depth-subgroup signal to craniotomy specifically compounds this with subgroup multiplicity, so the technique-by-depth attribution is unresolvable — it is an inference from the design, not a reported result. Credit reasoning that distinguishes what randomisation does and does not protect, and that resists reading a discretionary co-intervention as if it had been experimentally isolated. Do not require the learner to cite exact figures; reward the causal-inference logic.",
    },
    {
      kind: "Information",
      id: "b22-explain" as SectionId,
      title: "What the Trial Found (5)",
      content: [
    { kind: "text", value: "Step back and weigh the magnitudes rather than the p values. Across the outcome measures the absolute benefits of early surgery were small and none significant: 2.3% on the extended GOS dichotomy, 4.7% on the modified Rankin scale (152 [33%] vs 137 [28%], p=0.116), 4.1% on the Barthel index (124 [27%] vs 110 [23%], p=0.144). Even taken at face value as real, an absolute risk reduction of a few percent implies a number-needed-to-treat in the twenties or higher for a favourable outcome — a slim return for a craniotomy in an acutely brain-injured patient. That magnitude, not just the failure to reach significance, is why the trial supports no general policy of early surgery." },
    { kind: "text", value: "> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “With the prognosis-based modified Rankin …” — Results, p. 6, ¶2 ; “With the prognosis-based Barthel index, …” — Results, p. 6, ¶2 ; “There is insufficient evidence to …” — Discussion, p. 9, ¶7" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-bedside-no-general-policy" as SectionId,
      title: "At the Bedside (2)",
      content: [],
      topic: "Across STICH's outcome measures, the absolute benefit of early surgery was only a few percentage points, which implies a number-needed-to-treat in the twenties or higher for one extra favourable outcome. Suppose, for the sake of argument, that a benefit of this size were both real and statistically significant. Would that be enough to justify a general policy of operating early on spontaneous supratentorial intracerebral haemorrhage? Reason through what such a magnitude means for the individual decision to take an acutely brain-injured patient to craniotomy.",
      minLength: 150,
      placeholder: "Consider how many patients would need early surgery for one to benefit, and whether that trade-off justifies a routine policy...",
      extraContext: "Assess clinical-appraisal reasoning about effect magnitude versus statistical significance — not code. A strong response should: (1) recognise that statistical significance and clinical importance are distinct, so even a \"real\" small effect need not warrant a change in practice; (2) translate a small absolute benefit into an NNT (in the twenties or higher) and weigh the number of patients who must undergo craniotomy for one to gain a favourable outcome; (3) weigh that slim return against the burden and risk of surgery in an acutely brain-injured patient; (4) conclude, consistent with the lesson's bedside message, that the evidence supports no general policy of early surgery over initial conservative treatment, while leaving room that superficial-haematoma patients may benefit and that this remains to be established. Credit reasoning that the magnitude — not merely the failure to reach significance — is what drives the bedside conclusion. Do not require a specific NNT figure; reward the qualitative logic.",
    },
    {
      kind: "Information",
      id: "b24-explain" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "The last boundary is the entry gate itself. Because a patient could be randomised only when the neurosurgeon was uncertain about the benefit of either treatment, everyone with a clear indication for surgery — or a clear reason to avoid it — was filtered out before randomisation. The null therefore applies to spontaneous supratentorial ICH managed in neurosurgical units under genuine equipoise, and stops there. It does not license extending 'surgery adds nothing' to the patient whose deterioration or anatomy already made the decision for you." },
    { kind: "text", value: "> _Source:_ “Patients were eligible for inclusion …” — Methods, p. 2, ¶3 ; “Patients with spontaneous supratentorial intracerebral …” — Abstract, p. 1, ¶16" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "noncodingreflection-generalizability-neurosurgical" as SectionId,
      title: "How Far It Generalizes",
      content: [],
      topic: "STICH enrolled a patient only when the responsible neurosurgeon was genuinely uncertain whether surgery or conservative care was better — the clinical uncertainty principle. Given that entry gate, to which patients with spontaneous supratentorial intracerebral haemorrhage does the trial's finding of no overall benefit from early surgery legitimately apply, and to which patients does it fail to apply? Work through how the uncertainty criterion, together with the neurosurgical-unit setting, sets the boundaries of what the null result can be generalised to.",
      minLength: 150,
      placeholder: "Consider who could and could not have been randomised given the uncertainty criterion, then reason about which patients the null result covers...",
      extraContext: "Assess the learner's reasoning about external validity / generalisability, not code. A strong response should: (1) identify that the null result applies specifically to patients with spontaneous supratentorial ICH managed in neurosurgical units in whom the surgeon was in genuine equipoise (a \"coin-flip\" decision); (2) recognise that patients for whom the surgeon already had a clear indication to operate — or a clear reason to withhold surgery — were filtered out before randomisation, so the trial says nothing about them; (3) connect the uncertainty gate to why extrapolating \"surgery adds nothing\" to a patient whose deterioration or anatomy has already made the decision is unwarranted; (4) note the setting constraint (neurosurgical units). Reward reasoning that distinguishes the population the trial can speak to from populations it cannot, rather than restating the headline result. Do not require statistical detail; the focus is the selection effect of the enrolment criterion on generalisability.",
    },
  ],
};

export default lessonData;
