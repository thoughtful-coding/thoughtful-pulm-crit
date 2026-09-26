import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "b154fa56-2d0a-4b9e-8d43-e8832805f890" as LessonId,
  title: "MIND: Minimally Invasive Surgery for Supratentorial Intracerebral Hemorrhage",
  description: "A trial-appraisal lesson on the MIND RCT: why excellent hematoma evacuation did not translate into a 180-day functional benefit, and why the null result is fragile rather than definitive.",
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
    { kind: "text", value: "Surgical evacuation for supratentorial ICH has stayed an open question for a reason that is worth stating precisely. The physiologic case is not in doubt: removing blood products is hypothesized to alleviate local mass effect and to reduce the surrounding inflammation and edema, thereby lessening the secondary neurological injury that accrues after the initial bleed. What has never followed cleanly from that rationale is functional benefit. Prior trials of conventional surgery, and of minimally invasive surgery using stereotactic thrombolysis and drainage, established a mortality benefit yet failed to demonstrate improved functional outcomes — the exact pattern that keeps a question open rather than closing it. So the equipoise MIND addressed was specific: not whether a clot can be removed, but whether removing it this way leaves patients less disabled. (Note that any characterization of ICH as the highest-morbidity stroke subtype is background framing not established by these findings.)" },
    { kind: "text", value: "> _Source:_ “It remains uncertain whether surgical …” — Abstract, p. 1, ¶3 ; “Surgicalevacuationisapossible treatment based on the …” — Abstract, p. 2, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How the Trial Was Built",
      content: [
    { kind: "text", value: "MIND was an open-label, multicenter RCT that randomized patients with spontaneous supratentorial ICH 2:1 to minimally invasive surgery or to medical management alone. The surgical arm underwent MIS within 72 hours of ictus in addition to medical management: general anesthesia, a burr hole, a suitably sized endoscopy sheath, direct neuroendoscopic visualization, and a commercially available cranial navigation system. The control arm received guideline-based medical management alone, per current AHA/ESO guidance. Hold onto the 2:1 allocation and the open-label design — both bear directly on how much weight the eventual result can carry." },
    { kind: "text", value: "> _Source:_ “The MIND open-label, multicenter randomized …” — Abstract, p. 1, ¶5 ; “ParticipantsrandomizedtotheMISarmunderwent MISwithin72hoursofictusandreceivedMM.” — Methods, p. 2, ¶7 ; “ParticipantsrandomizedtothecontrolarmreceivedMM forICHasdeterminedbythetreatingteamandbasedoncurrent American Heart Association/European …” — Methods, p. 2, ¶7" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "The eligibility net defines what the trial can speak to. Adults 18-80 years, spontaneous supratentorial ICH of 20-80 mL, a baseline NIHSS of 6 or higher, a GCS between 5 and 15, a premorbid mRS of 0 to 1, and symptom onset less than 24 hours before initial imaging. Of 4066 screened, 154 were randomized to MIS and 82 to medical management. Two features of the enrolled cohort matter downstream: the population skewed toward deep bleeds (a deep-to-lobar ratio near 70:30) and toward smaller hematomas (a smaller median volume than in the contemporaneous ENRICH trial). Both will resurface when we ask why MIND read out the way it did." },
    { kind: "text", value: "> _Source:_ “Of 4066 eligible adult patients …” — Abstract, p. 1, ¶5 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5 ; “baseline National Institutes of Health …” — Methods, p. 2, ¶6 ; “premorbid mRS score of 0 …” — Methods, p. 2, ¶5 ; “symptom onset less than 24 …” — Methods, p. 2, ¶6 ; “Recently, the ENRICH study demonstrated …” — Discussion, p. 8, ¶3 ; “ICH volumes were larger in …” — Discussion, p. 8, ¶4" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i3-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "In MIND, what was the hematoma-volume range required for eligibility?" },
  ],
      options: [{ text: "20 to 80 mL", feedback: "Eligibility required a hematoma volume of 20 to 80 mL." }, { text: "18 to 80 mL", feedback: "18 to 80 is the age range in years, not the volume range." }, { text: "A NIHSS of 6 or higher", feedback: "That is the NIHSS entry threshold, not the volume criterion." }],
      correctAnswer: 0,
      feedback: { correct: "Eligibility required a hematoma volume of 20 to 80 mL.\n\n> _Source:_ “Of 4066 eligible adult patients …” — Abstract, p. 1, ¶5 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5 ; “Key inclusion criteria were age …” — Methods, p. 2, ¶5" },
    },
    {
      kind: "MultipleChoice",
      id: "i4-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "MIS achieved excellent hematoma evacuation. Predict the result on the trial's primary endpoint — the ordinal 180-day mRS in the unadjusted ITT analysis — comparing MIS with medical management." },
  ],
      options: [{ text: "No statistically significant difference (OR ~1.03; 96% CI 0.62-1.72)", feedback: "Despite technical success, the primary ordinal mRS at 180 days showed no significant difference." }, { text: "Fewer events with surgery (52.6% vs 68.3%; difference -15.7%)", feedback: "Those are the 180-day serious-adverse-event rates, not the primary functional endpoint." }, { text: "A large benefit favoring surgery (OR ~4.23; 95% CI 2.36-7.57)", feedback: "That OR is the exploratory 30-day result, not the primary 180-day endpoint." }],
      correctAnswer: 0,
      feedback: { correct: "Despite technical success, the primary ordinal mRS at 180 days showed no significant difference.\n\n> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5 ; “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “Within 180 days, fewer SAEs …” — Results, p. 7, ¶3" },
    },
    {
      kind: "Information",
      id: "b5-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The headline is a dissociation, and it is best read as reasoning rather than a bare verdict. On the primary efficacy analysis — ordinal 180-day mRS in the unadjusted ITT population — MIS was not superior to medical management (OR, 1.03; 96% CI, 0.62-1.72; P = .45). This sits alongside near-complete technical success: MIS reduced median ICH volume by 80.7% to 6.3 mL, leaving 79.2% of surgical participants with 15 mL or less of residual hemorrhage, versus an end-of-treatment volume of 32.8 mL and only 4.1% reaching that threshold under medical management. The inference to hold onto — attributed to the trial's own data, not asserted beyond it — is that emptying the clot is not the same as changing the disability trajectory. What the surgery did to the CT is not what it did to the mRS." },
    { kind: "text", value: "> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5 ; “Following MIS, median (IQR) ICH …” — Results, p. 6, ¶3" },
  ],
    },
    {
      kind: "FillIn",
      id: "i6-fillin" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Following MIS, median ICH volume was reduced to ___ mL, and ___% of surgical participants were left with 15 mL or less of residual hemorrhage." },
  ],
      body: "Following MIS, median ICH volume was reduced to {{residual}} mL, and {{pct}}% of surgical participants were left with 15 mL or less of residual hemorrhage.",
      blanks: { "residual": { match: "numeric", answer: 6.3, tolerance: 0.2, unit: "mL", hintMode: "highLow" }, "pct": { match: "numeric", answer: 79.2, tolerance: 0.5, unit: "%", hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b7-reveal" as SectionId,
      title: "Weighing the Harms",
      content: [
    { kind: "text", value: "One more result belongs with the technical picture before we turn to caveats. Within 180 days, serious adverse events were less frequent with surgery than with medical management: 52.6% (80 of 152) versus 68.3% (56 of 82), a difference of -15.7% (95% CI, -28.1% to -1.1%). Read this as an observation, not a settled safety claim — its interpretive weight comes later, once the trial's power and multiplicity are on the table." },
    { kind: "text", value: "> _Source:_ “Within 180 days, fewer SAEs …” — Results, p. 7, ¶3" },
  ],
    },
    {
      kind: "Information",
      id: "b8-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "Mortality tells the same non-story. At 180 days, 20 of 152 MIS patients (13.2%) had died versus 15 of 82 medical-management patients (18.3%), a nonsignificant difference of -5.1% (95% CI, -16.1% to 4.5%). The point to extract, framed as inference: the numerically lower death rate in the surgical arm does not signal excess procedural mortality, but neither is it a demonstrated mortality benefit — the interval crosses zero. MIND is a trial that removed clot cleanly and left the outcome curves overlapping." },
    { kind: "text", value: "> _Source:_ “At 180 days, 20 of …” — Results, p. 7, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i9-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "One exploratory MIND analysis was strikingly positive. Predict the ordinal mRS result at 30 days (per-protocol, adjusted for strata) for MIS versus medical management in the entire population." },
  ],
      options: [{ text: "A large benefit for surgery (OR ~4.23; 95% CI 2.36-7.57)", feedback: "The 30-day exploratory analysis favored MIS strongly — but this signal vanished by 90 and 180 days." }, { text: "A nonsignificant mortality difference of -5.1% (95% CI -16.1% to 4.5%)", feedback: "That is 180-day mortality, a different endpoint and timepoint." }, { text: "No significant difference (OR ~1.03; 96% CI 0.62-1.72)", feedback: "That is the primary 180-day ordinal mRS result, not the 30-day exploratory one." }],
      correctAnswer: 0,
      feedback: { correct: "The 30-day exploratory analysis favored MIS strongly — but this signal vanished by 90 and 180 days.\n\n> _Source:_ “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “At 180 days, 20 of …” — Results, p. 7, ¶2 ; “No statistically significant difference in …” — Results, p. 6, ¶5" },
    },
    {
      kind: "Information",
      id: "b10-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "In an exploratory analysis of ordinal mRS at 30 days (per-protocol, adjusted for strata), MIS was associated with improved outcomes across the whole population (OR, 4.23; 95% CI, 2.36-7.57) — a benefit no longer observed at 90 and 180 days. Read this as an inference-laden signal, not a finding: the 30-day assessment was unblinded (only the 180-day mRS used a blinded assessor), and these nonprimary analyses were not adjusted for multiplicity and not powered for significance, so P values were not provided. The specific distributional driver of the early signal — say, a shift from mRS 5 to mRS 4 — is not established by the available data." },
    { kind: "text", value: "> _Source:_ “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “The interval widths for the …” — Methods, p. 3, ¶4 ; “evaluators performing the 180-day mRS …” — Discussion, p. 8, ¶6" },
  ],
    },
    {
      kind: "Information",
      id: "b11-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "Now the reason the null (OR 1.03) is fragile rather than definitive. MIND did not reach planned enrollment; it stopped at 236 participants. The trigger was loss of equipoise: after the contemporaneous ENRICH trial reported functional benefit for lobar ICH, MIND halted randomization of its primarily lobar cohort, and a subsequent feasibility analysis found a low probability of demonstrating a difference between arms if only primarily deep hemorrhages were randomized going forward — which led to complete cessation of enrollment. The consequence is a trial underpowered to detect a true difference, whose conclusions must be read against sample-size constraints and possible confounding." },
    { kind: "text", value: "> _Source:_ “First, early stopping led to …” — Discussion, p. 8, ¶6 ; “In early 2023, the ENRICH …” — Results, p. 5, ¶1 ; “No statistically significant difference in …” — Results, p. 6, ¶5" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i12-noncodingreflection" as SectionId,
      title: "Reason It Through (1)",
      content: [],
      topic: "MIND stopped at 236 of a planned larger sample after a contemporaneous trial's positive lobar results caused loss of equipoise and a feasibility analysis predicted low probability of showing a difference. Explain why this makes the primary null result (OR 1.03; 96% CI 0.62-1.72) fragile rather than definitive, and what a non-significant primary outcome can and cannot license here.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer connects early stoppage to reduced statistical power (a wide, uninformative CI around the primary estimate); distinguishes 'no evidence of a difference' from 'evidence of no difference'; notes that halting the lobar cohort skewed the remaining population toward deep bleeds and introduces possible confounding; and resists reading the null as a demonstration of equivalence. Do not reward restating the numbers without interpreting power and equipoise.",
    },
    {
      kind: "NonCodingReflection",
      id: "i13-noncodingreflection" as SectionId,
      title: "Risk of Bias",
      content: [],
      topic: "The most encouraging MIND signal was the 30-day exploratory ordinal mRS benefit (OR 4.23; 95% CI 2.36-7.57). Explain why this result deserves skepticism given how it was measured and analyzed.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer identifies two distinct threats: (1) the 30- and 90-day assessments were unblinded in an open-label trial (only 180-day mRS used a blinded assessor), inviting outcome-ascertainment bias favoring the visibly treated arm; and (2) the benefit came entirely from exploratory analyses not adjusted for multiple comparisons and not powered for significance, so the OR and its interval overstate reliability and no P value was reported. Credit reasoning that treats the vanishing of the signal by 90/180 days as consistent with an early, unblinded, chance/measurement artifact rather than durable benefit.",
    },
    {
      kind: "Information",
      id: "b14-explain" as SectionId,
      title: "Against the Prior Evidence",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Why MIND (OR 1.03) and the contemporaneous ENRICH trial reached opposite conclusions is best framed as design and population differences, not as one trial refuting the other. MIND enrolled predominantly deep hemorrhages (deep-to-lobar near 70:30, versus 30:70 in ENRICH), with smaller volumes (a lower median hematoma volume than ENRICH), later intervention (median time from onset to surgery 27.5 hours vs 16.8 hours), and a lower control-arm mortality than ENRICH (MIND's own MIS- and control-arm death rates were close). Each of these — smaller clots, later evacuation, a control arm that already did well — could shrink the absolute treatment effect available to detect. This is inference about mechanism, attributed to the design contrast; it is not a stated finding of MIND." },
    { kind: "text", value: "> _Source:_ “Recently, the ENRICH study demonstrated …” — Discussion, p. 8, ¶3 ; “in ENRICH, MIS was performed …” — Discussion, p. 8, ¶4 ; “ICH volumes were larger in …” — Discussion, p. 8, ¶4 ; “No statistically significant difference in …” — Results, p. 6, ¶5" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i15-noncodingreflection" as SectionId,
      title: "Versus Prior Trials",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "MIND and a contemporaneous positive MIS trial reached different conclusions. Using the population and design differences (deep:lobar ~70:30, smaller volumes ~40 vs ~55 mL, later intervention 27.5 vs 16.8 h, lower control-arm mortality 9.8% vs 18%), reason about how each difference could plausibly shrink the absolute treatment effect MIND had available to detect.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer treats these as inferred, mechanistic explanations rather than established causes: smaller clots and a lower-risk control arm leave less room for an absolute benefit; deep location may be less amenable than lobar; later evacuation may forfeit an early-intervention advantage. Credit an answer that keeps these as hypotheses consistent with the design contrast and does NOT conclude MIS is proven ineffective for any specific subgroup.",
    },
    {
      kind: "MultipleChoice",
      id: "i16-multiplechoice" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "A colleague asks whether MIND establishes that deep hemorrhages benefit from evacuation while lobar ones do not. Which single statement best reflects what this trial can support?" },
  ],
      options: [{ text: "It rules out benefit, because the primary 180-day ordinal mRS was null overall (OR ~1.03; 96% CI 0.62-1.72).", feedback: "An overall null in an underpowered trial does not rule out a location-specific effect; the primary result is not location-stratified." }, { text: "It establishes durable benefit, because the overall 30-day ordinal mRS favored surgery (OR ~4.23; 95% CI 2.36-7.57).", feedback: "That is an exploratory, unblinded, multiplicity-unadjusted 30-day result that vanished by 90 and 180 days — not a durable, location-specific conclusion." }, { text: "It cannot establish location-specific durable benefit in either direction: lobar randomization was halted early and the enrolled population was predominantly deep, with no location-stratified 180-day result reported.", feedback: "Because lobar randomization stopped early after loss of equipoise, MIND provides no basis for selecting patients by hematoma location." }],
      correctAnswer: 2,
      feedback: { correct: "Because lobar randomization stopped early after loss of equipoise, MIND provides no basis for selecting patients by hematoma location.\n\n> _Source:_ “No statistically significant difference in …” — Results, p. 6, ¶5 ; “An exploratory analysis of ordinal …” — Results, p. 7, ¶4 ; “In early 2023, the ENRICH …” — Results, p. 5, ¶1" },
    },
    {
      kind: "Information",
      id: "b17-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "Return to the serious-adverse-event difference (52.6% vs 68.3%; -15.7%, 95% CI -28.1% to -1.1%) with the caveats now in hand. This was a nonprimary endpoint in a trial stopped early at 236 participants — underpowered — and MIND's nonprimary efficacy analyses were not adjusted for multiple comparisons or powered for those comparisons. The reasoned position, which extends the paper's own multiplicity caveat (framed for efficacy) to this safety endpoint, is to treat the SAE difference as a supportive, exploratory observation rather than a definitively established benefit." },
    { kind: "text", value: "> _Source:_ “Within 180 days, fewer SAEs …” — Results, p. 7, ¶3 ; “First, early stopping led to …” — Discussion, p. 8, ¶6 ; “The interval widths for the …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i18-noncodingreflection" as SectionId,
      title: "Reason It Through (2)",
      content: [],
      topic: "MIND reported fewer serious adverse events with MIS at 180 days (52.6% vs 68.3%; difference -15.7%, 95% CI -28.1% to -1.1%), an interval that excludes zero. Explain how much interpretive weight this difference should carry and why.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer recognizes this is a nonprimary endpoint in a trial stopped early (reduced power) whose nonprimary analyses were not adjusted for multiplicity — so even a CI excluding zero should be read as supportive/exploratory rather than definitive, and that extending the efficacy multiplicity caveat to a safety endpoint is a reasoned inference beyond the paper's explicit framing. Credit an answer that avoids treating the SAE result as an established safety benefit while also not dismissing it entirely.",
    },
  ],
};

export default lessonData;
