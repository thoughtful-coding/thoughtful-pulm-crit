import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "584b51e0-37df-4a23-89b2-3df6a32b362a" as LessonId,
  title: "MISTIE III: Minimally Invasive Clot Evacuation in Intracerebral Haemorrhage",
  description: "A claim-grounded walkthrough of MISTIE III — why the question was open, what the procedure was, the neutral primary functional result, the exploratory mortality signal, and the limitations that keep it hypothesis-generating.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Hanley DF, et al. *Lancet*. 2019." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "Intracerebral haemorrhage has no evidence-based primary treatment. The obvious surgical instinct — open the skull and take the clot out — has been tested pragmatically in the STICH trials, and those trials gave strong indications that open craniotomy does not deliver a 10-15% benefit in mortality or functional outcome, with only around 30% of patients reaching a good outcome. Yet the biological premise is hard to abandon: clinical injury tracks clot size, with a measurable improvement in good outcomes for each 10 mL removed from clots in the 10-50 mL range. If mass and volume drive the damage and craniotomy's own trauma cancels the benefit of removing them, then the attractive move is a lower-trauma one — reach the clot through a small catheter rather than a craniotomy, and reduce its size without the cortical insult. That is the equipoise MISTIE was built to resolve." },
    { kind: "text", value: "> _Source:_ “no evidence-based primary treatment exists” — Abstract, p. 2, ¶4 ; “The International Surgical Trial in …” — Discussion, p. 11, ¶4 ; “Clinical injury from intracerebral haemorrhage …” — Discussion, p. 11, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "The mechanistic case reads directly off the clot-size relationship: if each 10 mL decrement buys roughly a 10% improvement in good outcomes (OR 1.4 per 10 mL across 10-50 mL clots), then mechanically shrinking the haematoma and its mass effect should spare tissue and lift function. MISTIE operationalises that as image-guided minimally invasive catheter evacuation followed by thrombolysis — alteplase instilled directly into the clot through the catheter at 1.0 mg in 1 mL, chased by a 3 mL flush, every 8 h for up to nine doses, with the surgical target of driving residual haematoma to 15 mL or less. Against the STICH backdrop, where open craniotomy failed to clear the 10-15% bar, the wager is that the same volume reduction achieved with far less surgical trauma might finally translate." },
    { kind: "text", value: "> _Source:_ “Clinical injury from intracerebral haemorrhage …” — Discussion, p. 11, ¶4 ; “6 h or more after …” — Methods, p. 4, ¶1 ; “The International Surgical Trial in …” — Discussion, p. 11, ¶4" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "One point about this design should be held onto before any result: the MISTIE arm is a bundle. Catheter aspiration and repeated intraclot alteplase (1.0 mg every 8 h, up to nine doses) are delivered together, and the comparator is standard medical care alone — guideline-based management with follow-up CT and monitoring on the same schedule as the intervention group. There is no arm that aspirates without lysing. So whatever the trial shows, it shows for the combination; the independent contribution of the thrombolytic cannot be separated from the mechanical evacuation. Read this as an inference from the design, not a stated finding." },
    { kind: "text", value: "> _Source:_ “6 h or more after …” — Methods, p. 4, ¶1 ; “We used the American Heart …” — Methods, p. 4, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i3-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "MISTIE III's primary endpoint was good functional outcome (mRS 0-3) at 365 days, analysed adjusted for baseline severity. Given the STICH backdrop and the modest clot-size effect size, predict the adjusted between-group result on this primary functional endpoint." },
  ],
      options: [{ text: "39% vs 36%, adjusted risk difference 4.2% (95% CI -3.3 to 11.8), not significant", feedback: "Those are the eGOS 4-8 figures at 365 days, a different functional scale — also neutral, but not the primary mRS 0-3 endpoint." }, { text: "16 mL vs 47 mL residual volume, a mean difference of 32 mL", feedback: "That is end-of-treatment clot volume, the surrogate the procedure directly moved — not the functional endpoint." }, { text: "45% vs 41%, adjusted risk difference 4% (95% CI -4 to 12), not significant", feedback: "Correct: the primary functional endpoint was neutral — the CI crosses zero and p=0.33." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: the primary functional endpoint was neutral — the CI crosses zero and p=0.33.\n\n> _Source:_ “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1" },
    },
    {
      kind: "Information",
      id: "b4-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The primary endpoint was neutral. In the adjusted analysis an estimated 45% of the MISTIE group versus 41% of the standard-care group reached mRS 0-3 at 365 days — an adjusted risk difference of 4% (95% CI -4 to 12), not statistically significant. The unadjusted count tells the same story: 110 of 249 (44%) versus 100 of 240 (42%), a gap of about two percentage points. Whatever the procedure does, it did not move the trial's pre-specified measure of good function." },
    { kind: "text", value: "> _Source:_ “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1 ; “110 (44%) of 249 patients …” — Results, p. 7, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b5-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The procedure did, however, do exactly what it was designed to do to the clot. The instilled-alteplase regimen (1.0 mg every 8 h, up to nine doses, aiming for ≤15 mL residual) drove end-of-treatment volume to a mean of 16 mL versus 47 mL with standard care — a mean difference of 32 mL (95% CI 30-34), a 69% haematoma reduction versus 3%. The surgical aim of ≤15 mL residual was reached in 146 of 250 (58%) MISTIE patients versus two of 249 (<1%) with standard care. So the surrogate moved decisively while the primary functional endpoint did not — the central tension of this trial." },
    { kind: "text", value: "> _Source:_ “6 h or more after …” — Methods, p. 4, ¶1 ; “146 (58%) of 250 patients …” — Results, p. 7, ¶1 ; “The mean end-of-treatment volume was …” — Results, p. 7, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b6-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who this applies to matters as much as the effect. Eligibility was adults 18 or older with a spontaneous, non-traumatic supratentorial ICH of 30 mL or more from small-vessel disease; a GCS of 14 or less or NIHSS of 6 or higher, with a pre-bleed mRS of 0 or 1; and — crucially — a clot that had stopped growing, defined as growth of less than 5 mL for at least 6 h after the diagnostic CT. Patients with expressed care limitations, and those with life-threatening mass effect requiring surgery, were excluded. This is not unselected ICH: it is a stable, moderate-to-large bleed in a previously independent patient who is not already committed to comfort care or to emergent decompression." },
    { kind: "text", value: "> _Source:_ “Eligible patients were aged 18 …” — Methods, p. 3, ¶2 ; “a Glasgow Coma Scale (GCS) …” — Methods, p. 3, ¶2 ; “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2 ; “We did not enrol patients …” — Methods, p. 3, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i7-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "MISTIE III required documented clot stability before enrolment. What defined stability with respect to interval haematoma growth and the observation window after the diagnostic CT?" },
  ],
      options: [{ text: "A minimum clot volume of 30 mL in a supratentorial location", feedback: "That is the size/location eligibility threshold, not the stability rule." }, { text: "Absence of care limitations and of mass effect requiring surgery", feedback: "Those were exclusion criteria, not the definition of clot stability." }, { text: "Growth of less than 5 mL sustained for at least 6 h", feedback: "Correct: stability meant <5 mL growth over at least 6 h after the diagnostic CT." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: stability meant <5 mL growth over at least 6 h after the diagnostic CT.\n\n> _Source:_ “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2 ; “We did not enrol patients …” — Methods, p. 3, ¶2 ; “Eligible patients were aged 18 …” — Methods, p. 3, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "i8-multiplechoice" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "Consider the exclusion criteria (as opposed to the inclusion thresholds). Which group was excluded from MISTIE III?" },
  ],
      options: [{ text: "Patients whose haematoma grew 5 mL or more within 6 h of the diagnostic CT", feedback: "That describes failing the stability inclusion rule, not the excluded groups named here." }, { text: "Patients with a GCS of 14 or less or a pre-bleed mRS above 1", feedback: "GCS ≤14 was an inclusion criterion; this option confuses inclusion thresholds with the exclusions asked about." }, { text: "Patients with expressed care limitations or life-threatening mass effect requiring surgery", feedback: "Correct — these were the stated exclusions." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — these were the stated exclusions.\n\n> _Source:_ “We did not enrol patients …” — Methods, p. 3, ¶2 ; “an intracerebral haemorrhage that remained …” — Methods, p. 3, ¶2 ; “a Glasgow Coma Scale (GCS) …” — Methods, p. 3, ¶2" },
    },
    {
      kind: "Information",
      id: "b9-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "Safety is the reassuring half of the story. Symptomatic bleeding within 72 h of the last dose was uncommon and similar between arms — 6 of 255 (2%) with MISTIE versus 3 of 251 (1%). Brain bacterial infection was rare and not significantly different (2 of 255 versus 0 of 251). The one clear excess was asymptomatic bleeding, markedly more frequent with MISTIE — 81 of 255 (32%) versus 21 of 251 (8%). Set against a neutral functional result, this profile supports the authors' framing: the procedure can be performed safely, even by newly trained surgeons, but pragmatic adoption to improve function cannot be recommended." },
    { kind: "text", value: "> _Source:_ “six [2%] of 255 patients …” — Abstract, p. 2, ¶1 ; “two [1%] of 255 patients …” — Abstract, p. 2, ¶1 ; “The proportion of patients with …” — Results, p. 8, ¶3 ; “The pragmatic use of MISTIE …” — Discussion, p. 12, ¶5" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i10-multiplechoice" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Which adverse event was significantly more frequent in the MISTIE arm than in the standard-care arm?" },
  ],
      options: [{ text: "Symptomatic bleeding: 6 (2%) of 255 versus 3 (1%) of 251", feedback: "Symptomatic bleeding was similar between arms (p=0.33)." }, { text: "Asymptomatic bleeding: 81 (32%) of 255 versus 21 (8%) of 251", feedback: "Correct — the one significant excess (p<0.0001)." }, { text: "Brain bacterial infection: 2 (1%) of 255 versus 0 (0%) of 251", feedback: "Brain infection did not differ significantly between arms (p=0.16)." }],
      correctAnswer: 1,
      feedback: { correct: "Correct — the one significant excess (p<0.0001).\n\n> _Source:_ “The proportion of patients with …” — Results, p. 8, ¶3 ; “six [2%] of 255 patients …” — Abstract, p. 2, ¶1 ; “two [1%] of 255 patients …” — Abstract, p. 2, ¶1" },
    },
    {
      kind: "Information",
      id: "b11-explain" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "Before the mortality reveal, hold the frame the authors themselves impose. Mortality was a secondary outcome, and the statistical analysis plan carried 54 pre-planned analyses with no control of the study-wide type I error rate. So any single significant secondary result is exploratory. It matters, too, that mortality was measured at nested timepoints — 7 days, 30 days, 180 days, 365 days — on the same patients. A death counted at 180 days was already a death in the cohort at 30 days; these are not independent confirmations but successive counts of the same accumulating deaths, read with more power as follow-up lengthens." },
    { kind: "text", value: "> _Source:_ “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “Our mortality analysis was secondary …” — Discussion, p. 9, ¶4 ; “Overall, the statistical analysis plan …” — Methods, p. 6, ¶2 ; “110 (44%) of 249 patients …” — Results, p. 7, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i12-multiplechoice" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Mortality was a secondary, exploratory outcome. At the 365-day timepoint, using the severity-adjusted Cox model, predict the direction and significance of the between-group mortality result." },
  ],
      options: [{ text: "Lower with MISTIE at 30 days: 24 (9%) vs 37 (14%), p=0.066", feedback: "That is the 30-day timepoint, which did not reach conventional significance — not the 365-day adjusted result asked for." }, { text: "Lower with MISTIE at 180 days: 39 (15%) vs 57 (23%), p=0.033", feedback: "That is the 180-day count, again a different timepoint from the 365-day adjusted HR." }, { text: "Lower with MISTIE: severity-adjusted HR 0.67 (95% CI 0.45-0.98), p=0.037", feedback: "Correct: 365-day mortality was significantly lower with MISTIE — though exploratory." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: 365-day mortality was significantly lower with MISTIE — though exploratory.\n\n> _Source:_ “was significantly lower in the …” — Results, p. 7, ¶3" },
    },
    {
      kind: "Information",
      id: "b13-reveal" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "The mortality signal favours MISTIE across the follow-up. At 7 days, 1% died versus 4% with standard care; at 30 days, 24 (9%) versus 37 (14%); at 180 days, 39 (15%) versus 57 (23%); and at 365 days the severity-adjusted hazard ratio was 0.67 (95% CI 0.45-0.98). Read with the caveat above, these are the same deaths counted at successive timepoints, not four independent findings — and the 30-day gap did not reach conventional significance. Over the identical window the functional story stayed flat: mRS 0-3 at 365 days was 45% versus 41% (risk difference 4%, 95% CI -4 to 12), and eGOS 4-8 was 39% versus 36% (risk difference 4.2%, 95% CI -3.3 to 11.8). The trial reported no survivor-restricted disability analysis, so whether the extra survivors carried severe disability cannot be told from these data." },
    { kind: "text", value: "> _Source:_ “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “the number of deaths in …” — Results, p. 8, ¶3 ; “was significantly lower in the …” — Results, p. 7, ¶3 ; “94 (39%) of 244 patients …” — Results, p. 7, ¶2 ; “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b14-reveal" as SectionId,
      title: "At the Bedside",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "One bedside inference the trialists draw, framed as their interpretation rather than a stated endpoint: among patients meeting these enrolment criteria, roughly 43% achieved a good functional outcome and about 80% were living at home or in active rehabilitation at 365 days. They read this as an argument against early nihilism — an active, aggressive approach is defensible for this selected population, even though the procedure itself cannot be recommended pragmatically to improve function. Note the 80% figure is reported for the enrolled cohort, not specifically for survivors." },
    { kind: "text", value: "> _Source:_ “For the entire trial cohort, …” — Discussion, p. 12, ¶5 ; “The pragmatic use of MISTIE …” — Discussion, p. 12, ¶5" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i15-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Given the trial results, which bedside conclusion do the authors actually support?" },
  ],
      options: [{ text: "MISTIE should be adopted because 7-day mortality fell to 1% from 4%", feedback: "A secondary, exploratory mortality signal does not license pragmatic adoption for functional benefit." }, { text: "MISTIE should be adopted because it raised mRS 0-3 to 45% versus 41% at 365 days", feedback: "That 4% difference was not significant (95% CI -4 to 12); it does not support adoption for function." }, { text: "MISTIE cannot be recommended for pragmatic adoption to improve function, though it was safely adopted by newly trained surgeons", feedback: "Correct: neutral primary function, but demonstrated procedural safety." }],
      correctAnswer: 2,
      feedback: { correct: "Correct: neutral primary function, but demonstrated procedural safety.\n\n> _Source:_ “The pragmatic use of MISTIE …” — Discussion, p. 12, ¶5 ; “The mITT primary adjusted efficacy …” — Abstract, p. 2, ¶1 ; “the number of deaths in …” — Results, p. 8, ¶3" },
    },
    {
      kind: "Information",
      id: "b16-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "The surgical aim of ≤15 mL residual haematoma was reached in 146 of 250 (58%) MISTIE patients — a majority, but far from all. Two limitations follow, both inferences the design forces. First, because the surgical aim was not uniformly achieved, the trial cannot establish that the procedure improves function for all eligible patients. Second, the tempting within-arm analysis — patients who cleared more clot did better — cannot establish causal benefit: extent of clot removal was not itself randomised, so it is open to unmeasured confounding, with bleeds amenable to fuller reduction perhaps carrying a better prognosis to begin with." },
    { kind: "text", value: "> _Source:_ “146 (58%) of 250 patients …” — Results, p. 7, ¶1 ; “A limitation of the clot …” — Discussion, p. 9, ¶4 ; “MISTIE cannot be recommended as …” — Discussion, p. 9, ¶3" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i17-noncodingreflection" as SectionId,
      title: "Reason It Through (1)",
      content: [],
      topic: "MISTIE III found that patients who reached the surgical aim of ≤15 mL residual haematoma (58% of the MISTIE arm) tended to have better functional outcomes. Explain why this within-arm association cannot establish that greater clot removal causes better outcomes.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer notes: the degree of clot removal was not itself randomised, so patients who achieved ≤15 mL are a self-selected subgroup; prognostic differences (haemorrhage shape, location, accessibility, baseline severity) may drive both fuller removal and better outcome — unmeasured confounding. The comparison is observational within a randomised trial and so loses the protection randomisation gave the primary contrast. Credit recognition that the honest claim is association, hypothesis-generating, not causal.",
    },
    {
      kind: "NonCodingReflection",
      id: "i18-noncodingreflection" as SectionId,
      title: "Reason It Through (2)",
      content: [],
      topic: "MISTIE III's mortality benefit reached conventional significance at 7, 180 and 365 days but not at 30 days. Explain why this pattern is not evidence that the treatment 'stopped working' at 30 days, and why the mortality result overall should be treated as hypothesis-generating.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer explains: the timepoints are nested counts of the same accumulating deaths in the same patients, not independent tests, so a non-significant 30-day result is the same signal measured with less accumulated power/events, not contradictory evidence. It should also note mortality was a secondary outcome among 54 pre-planned analyses with no study-wide type I error control, raising selective-reporting/over-interpretation risk — hence exploratory, not confirmatory. Do not credit treating the four timepoints as four separate confirmations.",
    },
    {
      kind: "Information",
      id: "b19-explain" as SectionId,
      title: "How It Was Meant to Work (3)",
      content: [
    { kind: "text", value: "Three further constraints bound how far these results travel, each an inference from the trial's design and setting rather than a stated finding. The trial was open-label, and the absence of blinding does not protect against undertreatment or overtreatment bias tied to knowing the assigned arm. The surgical aim was met in only 58% of MISTIE patients, so the procedure's benefit cannot be claimed for all comers. And generalisability is limited: 78 resource-rich tertiary and university sites, 114 surgeons, a surgical core laboratory, and the extra oversight of a phase 3 trial — conditions that may not reproduce in routine practice, even granting that the procedure was safely adopted by a broad group of newly trained neurosurgeons." },
    { kind: "text", value: "> _Source:_ “The absence of blinding did …” — Discussion, p. 9, ¶4 ; “MISTIE cannot be recommended as …” — Discussion, p. 9, ¶3 ; “Study limitations include the open-label …” — Discussion, p. 9, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i20-noncodingreflection" as SectionId,
      title: "Reason It Through (3)",
      content: [],
      topic: "MISTIE III was open-label yet its primary mRS endpoint was scored by a masked independent jury. Reason through what residual biases the open-label design leaves unaddressed, and how the trial's site and surgeon profile limits generalisability to your own practice.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer distinguishes ascertainment bias (mitigated: mRS interviews recorded and scored by a masked jury at Glasgow) from treatment/performance bias (not mitigated: open-label allocation can drive undertreatment or overtreatment differences between arms). On generalisability it should note 78 resource-rich tertiary/university centres, 114 surgeons, a surgical core lab, and phase-3 oversight — conditions that may not hold in routine settings — while acknowledging the procedure was safely adopted by newly trained surgeons. Credit nuanced transfer to the reader's own setting.",
    },
    {
      kind: "Information",
      id: "b21-explain" as SectionId,
      title: "What the Trial Found (5)",
      content: [
    { kind: "text", value: "Turning the 365-day mortality result into a bedside number: the severity-adjusted hazard ratio of 0.67 corresponds to an estimated number needed to treat of about 17 to preserve one life. That figure is easy to quote and hard to defend without its caveat — it is derived from a secondary outcome subject to multiple testing, so it is exploratory. An NNT presented to a patient from a non-primary, multiplicity-uncorrected endpoint should carry that qualification explicitly, not stand alone as if it were the trial's confirmed result." },
    { kind: "text", value: "> _Source:_ “with a number needed to …” — Discussion, p. 12, ¶3 ; “was significantly lower in the …” — Results, p. 7, ¶3 ; “Our mortality analysis was secondary …” — Discussion, p. 9, ¶4" },
  ],
    },
    {
      kind: "FillIn",
      id: "i22-fillin" as SectionId,
      title: "The Result (4)",
      content: [
    { kind: "text", value: "The 365-day mortality benefit (severity-adjusted hazard ratio ___) corresponds to an estimated number needed to treat of about ___ to preserve one life — a figure that must be presented cautiously because it comes from a secondary, exploratory outcome." },
  ],
      body: "The 365-day mortality benefit (severity-adjusted hazard ratio {{hr}}) corresponds to an estimated number needed to treat of about {{nnt}} to preserve one life — a figure that must be presented cautiously because it comes from a secondary, exploratory outcome.",
      blanks: { "hr": { match: "numeric", answer: 0.67, tolerance: 0.01, hintMode: "highLow" }, "nnt": { match: "numeric", answer: 17.0, tolerance: 0.5, hintMode: "highLow" } },
    },
  ],
};

export default lessonData;
