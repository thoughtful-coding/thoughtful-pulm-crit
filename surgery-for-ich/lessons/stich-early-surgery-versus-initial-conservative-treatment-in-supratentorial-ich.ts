import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "fe87c18a-6ef9-465d-80ad-137654ac5d82" as LessonId,
  title: "STICH: Early Surgery versus Initial Conservative Treatment in Supratentorial ICH",
  description: "A lesson on the International STICH trial: what it found for early haematoma evacuation, who it applies to, and why its subgroup and policy signals must be read cautiously.",
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
    { kind: "text", value: "The role of surgery for spontaneous supratentorial intracerebral haemorrhage had been argued over for a generation, and the argument never resolved because the trials pointed in opposite directions: McKissock found operative treatment worse, Auer found endoscopic removal better, Juvela sided with McKissock, and meta-analysis of the early trials reached no firm conclusion. The theoretical case for evacuation was clean enough. If a viable ischaemic penumbra surrounds the clot, then relieving the mass lesion and improving perfusion could restore function to the surrounding brain — but note this is a rationale, an inference about mechanism, not a demonstrated clinical effect. Nobody had shown that pulling out the clot leaves the patient better off. That is the gap STICH was built to close: not whether surgery does something to the anatomy, but whether a policy of early evacuation changes how patients actually end up." },
    { kind: "text", value: "> _Source:_ “The role of medical and …” — Abstract, p. 1, ¶1 ; “If a penumbra exists in …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How the Trial Was Built",
      content: [
    { kind: "text", value: "STICH was large by the standards of this question: 1033 patients from 83 centres across 27 countries, with 503 allocated to early surgery and 530 to initial conservative treatment. That single trial randomised more patients than all nine previous randomised trials in supratentorial ICH combined. The scale matters for what a null result would mean — a small trial that finds nothing has told you little, whereas a trial this size can constrain the plausible effect. Keep in mind, though, that pooling all ten trials together shows no net benefit from surgery, so the burden STICH carried was to detect a benefit that the accumulated evidence had never reliably produced." },
    { kind: "text", value: "> _Source:_ “1033 patients from 83 centres …” — Abstract, p. 1, ¶15 ; “Although the number of patients …” — Discussion, p. 8, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "The two arms were policies, not a scalpel-versus-nothing contrast. Early surgery meant haematoma evacuation within 24 hours of randomisation combined with best medical treatment. Initial conservative treatment meant best medical treatment, with later surgical evacuation permitted if the patient deteriorated neurologically. That second clause is the crux of how to read everything downstream: the control arm was allowed to become a surgical arm when the clinical situation demanded it. So the comparison STICH actually makes is between committing to surgery up front and reserving it for deterioration — which is the real bedside choice, but also a design that blunts any pure surgical effect." },
    { kind: "text", value: "> _Source:_ “Early surgery combined haematoma evacuation …” — Abstract, p. 1, ¶14 ; “Initial conservative treatment used medical …” — Abstract, p. 1, ¶14" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i3-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "Before the result is stated: for the prognosis-based dichotomised extended Glasgow outcome scale at 6 months — the primary endpoint — what did STICH find for the proportion with a favourable outcome in the early surgery arm versus the initial conservative treatment arm?" },
  ],
      options: [{ text: "27% versus 23%, a non-significant difference (p=0.144)", feedback: "Those are the Barthel index figures, a secondary outcome, not the primary endpoint." }, { text: "26% versus 24%, a non-significant difference (OR 0.89, 95% CI 0.66-1.19)", feedback: "Correct: 122/468 (26%) versus 118/497 (24%), OR 0.89, p=0.414 — no significant difference on the primary endpoint." }, { text: "33% versus 28%, a non-significant difference (p=0.116)", feedback: "Those are the modified Rankin figures, a secondary prognosis-based outcome, not the primary extended Glasgow outcome scale." }],
      correctAnswer: 1,
      feedback: { correct: "Correct: 122/468 (26%) versus 118/497 (24%), OR 0.89, p=0.414 — no significant difference on the primary endpoint.\n\n> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “Of 468 patients randomised to …” — Abstract, p. 1, ¶15" },
    },
    {
      kind: "Information",
      id: "b4-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The headline is a null. On the prognosis-based dichotomy of the extended Glasgow outcome scale at 6 months, 122 of 468 patients (26%) allocated to early surgery had a favourable outcome, compared with the initial-conservative-treatment group (24%) — an odds ratio of 0.89 (CI 0.66-1.19, p=0.414). The absolute benefit was 2.3% (CI -3.2 to 7.7): the confidence interval crosses zero and admits harm as readily as benefit. Read this within its boundary — the finding of no overall benefit applies specifically to patients with spontaneous supratentorial ICH managed in neurosurgical units where the responsible neurosurgeon was uncertain about the best treatment." },
    { kind: "text", value: "> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “Patients with spontaneous supratentorial intracerebral …” — Abstract, p. 1, ¶16" },
  ],
    },
    {
      kind: "Information",
      id: "b5-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Knowing who was enrolled is how you decide whether the null applies to the patient in front of you. Eligibility required CT evidence of a spontaneous supratentorial ICH arisen within 72 h, and — the enrolment gate that shapes everything — a responsible neurosurgeon genuinely uncertain about the benefit of either treatment (the clinical uncertainty principle). Study guidelines recommended a minimum haematoma diameter of 2 cm and a Glasgow coma score of five or more. Excluded were haemorrhages probably due to an aneurysm or angiographically proven AVM, or secondary to tumour or trauma; cerebellar haemorrhages and supratentorial bleeds extending into the brainstem; and any patient in whom surgery could not be undertaken within 24 h of randomisation. The population is therefore narrow by design — the clear-cut cases, in either direction, were never randomised." },
    { kind: "text", value: "> _Source:_ “Patients were eligible for inclusion …” — Methods, p. 2, ¶3 ; “Study guidelines recommended that eligible …” — Methods, p. 2, ¶3 ; “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients were not eligible if:” — Methods, p. 2, ¶4 ; “Patients with spontaneous supratentorial intracerebral …” — Abstract, p. 1, ¶16" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i6-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "A patient's haemorrhage would otherwise qualify, but the operating theatre could not accommodate an evacuation within a fixed window of randomisation. STICH excluded such patients when surgery could not be undertaken within which window?" },
  ],
      options: [{ text: "24 h", feedback: "Correct: patients were excluded if surgery could not be undertaken within 24 h of randomisation." }, { text: "A minimum haematoma diameter of 2 cm", feedback: "That is the recommended haematoma-size threshold, not the surgery-timing exclusion." }, { text: "72 h", feedback: "72 h is the window for CT-confirmed onset for inclusion, not the surgery-timing exclusion." }],
      correctAnswer: 0,
      feedback: { correct: "Correct: patients were excluded if surgery could not be undertaken within 24 h of randomisation.\n\n> _Source:_ “Patients were not eligible if:” — Methods, p. 2, ¶4 ; “Patients were eligible for inclusion …” — Methods, p. 2, ¶3 ; “Study guidelines recommended that eligible …” — Methods, p. 2, ¶3" },
    },
    {
      kind: "MultipleChoice",
      id: "i7-multiplechoice" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "Which of the following would render a patient ineligible for STICH on the basis of haemorrhage location?" },
  ],
      options: [{ text: "A cerebellar haemorrhage", feedback: "Correct: cerebellar haemorrhage and supratentorial extension into the brainstem were exclusions." }, { text: "A haematoma of at least 2 cm diameter", feedback: "That is a recommended inclusion threshold, not a location-based exclusion." }, { text: "Onset confirmed on CT within 72 h", feedback: "That is an inclusion criterion, not a location-based exclusion." }],
      correctAnswer: 0,
      feedback: { correct: "Correct: cerebellar haemorrhage and supratentorial extension into the brainstem were exclusions.\n\n> _Source:_ “Patients were not eligible if: …” — Methods, p. 2, ¶4 ; “Patients were eligible for inclusion …” — Methods, p. 2, ¶3 ; “Study guidelines recommended that eligible …” — Methods, p. 2, ¶3" },
    },
    {
      kind: "Information",
      id: "b8-explain" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "Mortality did not move either. Six-month mortality was 36% in the early surgery group and 37% in the initial conservative treatment group — an odds ratio of 0.95 (CI 0.73-1.23, p=0.707). Survival across the first 6 months did not significantly differ between the groups on the log-rank test (p=0.678). So whatever early evacuation does to the anatomy, it did not translate into fewer deaths over the follow-up period." },
    { kind: "text", value: "> _Source:_ “The mortality rate at 6 …” — Results, p. 5, ¶6 ; “Survival during the first 6 …” — Results, p. 6, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i9-multiplechoice" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "For 6-month mortality, what did STICH report in the early surgery arm versus the initial conservative treatment arm?" },
  ],
      options: [{ text: "26% versus 24% (OR 0.89, 95% CI 0.66-1.19)", feedback: "Those are the favourable-outcome proportions on the primary extended Glasgow outcome scale, not mortality." }, { text: "33% versus 28% (p=0.116)", feedback: "Those are favourable-outcome proportions on the modified Rankin scale, not mortality." }, { text: "36% versus 37% (OR 0.95, 95% CI 0.73-1.23)", feedback: "Correct: 6-month mortality 36% versus 37%, OR 0.95, p=0.707 — no significant difference." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: 6-month mortality 36% versus 37%, OR 0.95, p=0.707 — no significant difference.\n\n> _Source:_ “The mortality rate at 6 …” — Results, p. 5, ¶6 ; “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “With the prognosis-based modified Rankin …” — Results, p. 6, ¶2" },
    },
    {
      kind: "Information",
      id: "b10-explain" as SectionId,
      title: "Weighing the Harms",
      content: [
    { kind: "text", value: "One subgroup deserves a flag before you predict it. Among comatose patients — Glasgow coma score of 8 or below — outcomes were uniformly poor regardless of arm, and early surgery raised the relative risk of a poor outcome by 8% (CI -3 to 20) compared with initial conservative treatment. The point estimate favours harm, and although the interval crosses no effect, the signal in this group runs the opposite direction from any benefit story." },
    { kind: "text", value: "> _Source:_ “Early surgery raised the relative …” — Discussion, p. 9, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i11-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "For comatose patients (GCS 8 or below), what does STICH suggest about the direction of effect of early surgery relative to initial conservative treatment?" },
  ],
      options: [{ text: "Early surgery lowered 6-month mortality from 37% to 36%", feedback: "That is the overall mortality result, not the direction of effect in comatose patients." }, { text: "Early surgery yielded an absolute benefit of about 8%, with a significant treatment interaction", feedback: "That describes the superficial-haematoma (within 1 cm of cortex) subgroup, not comatose patients." }, { text: "Early surgery raised the relative risk of a poor outcome, so it is probably harmful in this group", feedback: "Correct: outcomes were uniformly poor and early surgery increased the relative risk of a poor outcome by 8% (95% CI -3 to 20)." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: outcomes were uniformly poor and early surgery increased the relative risk of a poor outcome by 8% (95% CI -3 to 20).\n\n> _Source:_ “Early surgery raised the relative …” — Discussion, p. 9, ¶2 ; “A favourable outcome from early …” — Results, p. 6, ¶4 ; “The mortality rate at 6 …” — Results, p. 5, ¶6" },
    },
    {
      kind: "MultipleChoice",
      id: "i12-multiplechoice" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "In the prespecified subgroup whose haematoma reached within 1 cm of the cortical surface, what did STICH observe, and how strong is the interaction with treatment?" },
  ],
      options: [{ text: "An absolute benefit of about 8% (95% CI 0-15) with a significant depth-by-treatment interaction (p=0.02)", feedback: "Correct: superficial haematomas favoured early surgery, interaction p=0.02." }, { text: "An absolute benefit of about 4.7% (relative benefit 17%, p=0.116)", feedback: "Those are the overall modified Rankin figures, not the depth subgroup." }, { text: "An increase of about 8% in the relative risk of a poor outcome (95% CI -3 to 20)", feedback: "That is the comatose subgroup, where surgery trended toward harm — not the depth subgroup." }],
      correctAnswer: 0,
      feedback: { correct: "Correct: superficial haematomas favoured early surgery, interaction p=0.02.\n\n> _Source:_ “A favourable outcome from early …” — Results, p. 6, ¶4 ; “Early surgery raised the relative …” — Discussion, p. 9, ¶2 ; “With the prognosis-based modified Rankin …” — Results, p. 6, ¶2" },
    },
    {
      kind: "Information",
      id: "b13-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "The one place the data show heterogeneity is depth. In the prespecified subgroup whose haematoma lay 1 cm or less from the cortical surface, early surgery was more likely to yield a favourable outcome, with an absolute benefit of 8% (CI 0-15), and the interaction between depth and treatment was significant (p=0.02). That is the hypothesis the trial generates: superficial haematomas may benefit from surgery, especially by craniotomy. But it is a hypothesis — there is insufficient evidence to justify a general policy of early surgery over initial conservative treatment, and this potential benefit still needs to be established." },
    { kind: "text", value: "> _Source:_ “A favourable outcome from early …” — Results, p. 6, ¶4 ; “There is insufficient evidence to …” — Discussion, p. 9, ¶7" },
  ],
    },
    {
      kind: "Information",
      id: "b14-explain" as SectionId,
      title: "Who Was Enrolled (4)",
      content: [
    { kind: "text", value: "One methodological point is worth reasoning about carefully, and it is partly inference. The trial enrolled a broad population — ages 19 to 93 years, median 62 (IQR 52-70) — and its primary outcome was a prognosis-based ('sliding') dichotomy of the extended Glasgow outcome scale at 6 months, with parallel prognosis-based dichotomies of the modified Rankin scale and Barthel index. The sample size assumed a 40% favourable outcome with initial conservative treatment and was powered at 80% to detect a 10% absolute benefit, requiring 800 patients, with a 25% margin for protocol violations and crossovers giving a total of 1000. The tempting story — that the sliding dichotomy was adopted to set a lower outcome bar for poor-prognosis patients and thereby increase power — is a plausible methodological rationale, but it is inferred, not stated by the available facts; treat it as reasoning about design intent rather than a reported finding." },
    { kind: "text", value: "> _Source:_ “ages ranged between 19 and …” — Results, p. 4, ¶5 ; “with a favourable outcome of …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b15-explain" as SectionId,
      title: "How Much to Trust It",
      content: [
    { kind: "text", value: "The crossover is the reason to call this a policy comparison rather than a surgery-versus-no-surgery comparison. About a quarter of the initial conservative treatment group (26%, 140 of 529 assessable patients) ultimately underwent surgery after a period of observation, usually following neurological deterioration, while in the early surgery group 6% never had an operation and a further 6% were operated on more than 24 h after randomisation. Those deviations dilute the contrast between the two randomised policies: a substantial fraction of the 'conservative' arm received the very intervention being tested. So a null result on this contrast cannot be read as 'surgery does not help an individual patient' — only as 'committing to early surgery does not beat reserving it for deterioration.'" },
    { kind: "text", value: "> _Source:_ “Of 529 assessable patients randomised …” — Results, p. 5, ¶3 ; “In fact, this operative intervention …” — Discussion, p. 8, ¶8" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i16-noncodingreflection" as SectionId,
      title: "Risk of Bias",
      content: [
    { kind: "text", value: "Why crossover limits the inference." },
  ],
      topic: "Explain why the substantial crossover in STICH means the trial tests a policy of early surgery versus a policy of initial conservative treatment, rather than surgery versus no surgery, and what that means for a clinician deciding about an individual patient.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer should note: about 26% of the conservative arm underwent later surgery (usually after deterioration) while 6% of the surgery arm never had an operation; that this dilutes the contrast between the two randomised policies (biasing an intention-to-treat comparison toward the null); that the control arm therefore was not a no-surgery arm; and that the null primary result constrains the policy question but cannot establish whether surgery per se helps or harms an individual patient. Credit recognition that the comparator explicitly permitted delayed evacuation on deterioration.",
    },
    {
      kind: "Information",
      id: "b17-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "Return to the superficial-haematoma signal and stress-test it. It was one of 12 prespecified subgroups. Multiplying the p value by 12 to correct for those comparisons makes the significance disappear, so the depth effect cannot be interpreted as a reliable subgroup finding — it is hypothesis-generating and would need a dedicated trial to confirm. This is exactly why the trial stops short of endorsing surgery even for the group that looked best: a superficial haematoma may benefit, especially by craniotomy, but that benefit still needs to be established." },
    { kind: "text", value: "> _Source:_ “Traditional statistical and mathematical opinion …” — Discussion, p. 8, ¶11 ; “There is insufficient evidence to …” — Discussion, p. 9, ¶7" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i18-noncodingreflection" as SectionId,
      title: "Reason It Through (1)",
      content: [
    { kind: "text", value: "Why the depth subgroup is not yet an indication." },
  ],
      topic: "The superficial-haematoma subgroup showed an absolute benefit of 8% with interaction p=0.02. Explain why this cannot be treated as an established indication for early surgery.",
      minLength: 150,
      extraContext: "Assess statistical-appraisal reasoning, not code. A strong answer should note: the finding is one of 12 prespecified subgroups; correcting for multiplicity (e.g. multiplying the p value by 12) abolishes significance; a nominally significant interaction from many comparisons is expected by chance; therefore the finding is hypothesis-generating and requires a dedicated confirmatory trial before changing practice. Credit recognition that the trial explicitly declines to endorse a general policy of early surgery.",
    },
    {
      kind: "Information",
      id: "b19-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "There is a second reason not to read the depth signal as an endorsement of craniotomy specifically, and it is inferential. The type of operation was left to the admitting surgeon's discretion — a mix of craniotomy, endoscopy, and stereotaxy — rather than randomised, with open craniotomy chosen for about three-quarters of early-surgery patients and associated with a non-significant relative benefit of 28%. Because technique was not randomised, the trial's overall effect cannot be attributed to any single method. It follows — as an inference from the non-randomised choice of technique, not a result the trial reports — that the apparent benefit in the superficial-haematoma subgroup (absolute benefit 8%, interaction p=0.02) cannot be ascribed specifically to craniotomy; the technique-by-depth attribution is simply unresolvable in this design, and the subgroup finding itself does not survive correction for the 12 comparisons." },
    { kind: "text", value: "> _Source:_ “For patients allocated to early …” — Discussion, p. 9, ¶1 ; “A favourable outcome from early …” — Results, p. 6, ¶4 ; “Traditional statistical and mathematical opinion …” — Discussion, p. 8, ¶11" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i20-noncodingreflection" as SectionId,
      title: "Reason It Through (2)",
      content: [
    { kind: "text", value: "Why craniotomy cannot be credited for the subgroup benefit." },
  ],
      topic: "Given that surgical technique was left to the surgeon's discretion rather than randomised, explain why the favourable signal in the superficial-haematoma subgroup cannot be attributed specifically to craniotomy, and why this is an inference rather than a reported finding.",
      minLength: 150,
      extraContext: "Assess causal-inference reasoning, not code. A strong answer should note: technique (craniotomy, endoscopy, stereotaxy) was chosen non-randomly, so technique effects are confounded by whatever drove surgeon choice; craniotomy was used in about three-quarters of surgery patients and carried a non-significant relative benefit of 28%; therefore any depth-by-technique attribution is unresolvable; and this is an inference from the non-randomised design, not a result STICH reports. Credit recognition that non-randomised comparisons within a randomised trial lose the protection of randomisation.",
    },
    {
      kind: "Information",
      id: "b21-explain" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "Step back and look at the magnitudes across every prognosis-based measure at 6 months. The extended Glasgow outcome scale gave an absolute benefit of 2.3% (CI -3.2 to 7.7); the modified Rankin scale gave 4.7% (relative benefit 17%, 95% CI -4 to 37, p=0.116); the Barthel index gave 4.1% (relative benefit 18%, -6 to 42, p=0.144). Every one of these is small, non-significant, and bounded by a confidence interval that includes harm. Reason about what such a magnitude would imply even if it were real: a single-digit absolute benefit means a large number of operations per additional favourable outcome, a poor trade against surgical risk in a group where the surgeon was already undecided. This is why there is insufficient evidence to justify a general policy of early surgery over initial conservative treatment." },
    { kind: "text", value: "> _Source:_ “Of 468 patients randomised to …” — Abstract, p. 1, ¶15 ; “With the prognosis-based modified Rankin …” — Results, p. 6, ¶2 ; “With the prognosis-based Barthel index, …” — Results, p. 6, ¶2 ; “There is insufficient evidence to …” — Discussion, p. 9, ¶7" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i22-noncodingreflection" as SectionId,
      title: "The Result (5)",
      content: [
    { kind: "text", value: "What the magnitude means for decision-making." },
  ],
      topic: "Across the prognosis-based outcome measures, STICH's absolute benefits were roughly 2-5% and none reached significance. Reason about the number-needed-to-treat such a magnitude implies and what it means for a decision to operate, even if the effect were genuine.",
      minLength: 150,
      extraContext: "Assess clinical-quantitative reasoning, not code. A strong answer should note: absolute benefits of ~2-5% imply a number-needed-to-treat of roughly 20-50 (1 divided by the ARR), i.e. many operations per additional favourable outcome; that all confidence intervals cross zero so the effect may be null or harmful; and that a small, uncertain benefit weighed against surgical risk does not justify a general policy of early surgery, especially in a population enrolled only under surgeon uncertainty. Credit correct order-of-magnitude NNT reasoning and appropriate caution about non-significant effects.",
    },
    {
      kind: "Information",
      id: "b23-explain" as SectionId,
      title: "Who Was Enrolled (5)",
      content: [
    { kind: "text", value: "Finally, the sharpest limit on how far to carry this null is the enrolment gate itself. Patients entered only when the responsible neurosurgeon was uncertain about the benefit of either treatment — the clinical uncertainty principle — for a CT-confirmed spontaneous supratentorial ICH within 72 h. Patients with a clear indication for surgery, or a clear contraindication, were never randomised. So the finding of no overall benefit is anchored to patients managed in neurosurgical units within that zone of genuine equipoise. It does not license extending the null to all ICH patients, and it certainly does not speak to the cases a surgeon would never have hesitated about." },
    { kind: "text", value: "> _Source:_ “Patients were eligible for inclusion …” — Methods, p. 2, ¶3 ; “Patients with spontaneous supratentorial intracerebral …” — Abstract, p. 1, ¶16" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i24-noncodingreflection" as SectionId,
      title: "Who Was Enrolled (6)",
      content: [
    { kind: "text", value: "The external-validity boundary set by equipoise." },
  ],
      topic: "Explain how the clinical uncertainty principle used for enrolment constrains the external validity of STICH's null result, and which patients the result cannot be generalised to.",
      minLength: 150,
      extraContext: "Assess generalizability reasoning, not code. A strong answer should note: patients were enrolled only when the surgeon was genuinely uncertain about treatment, so the trial population excludes patients with a clear indication for or against surgery; the null therefore applies within a zone of equipoise in neurosurgical units, not to all supratentorial ICH; and generalising the null to patients the surgeon would confidently operate on (or confidently manage conservatively) is not warranted. Credit recognition that selection by equipoise is both a strength for validity within the sampled question and a limit on breadth.",
    },
  ],
};

export default lessonData;
