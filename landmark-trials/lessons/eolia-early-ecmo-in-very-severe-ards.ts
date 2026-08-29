import type { Lesson, LessonId, SectionId } from "../../../../../thoughtful-coding.github.io/src/types/data";

const lessonData: Lesson = {
  guid: "1d270a2e-6a41-4961-9839-5e29eca5993a" as LessonId,
  title: "EOLIA: Early ECMO in Very Severe ARDS",
  description: "A blueprint-driven walk through EOLIA — who counted as \"very severe ARDS,\" why ECMO's benefit was genuinely uncertain, the negative primary result, and why crossover, early stopping, and a composite endpoint make that result hard to read.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Combes A, et al. *N Engl J Med*. 2018." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Before EOLIA could ask whether ECMO helps, it had to fix who is sick enough to consider it — and the entry rule is worth carrying as a bedside definition of 'very severe.' A patient qualified only if intubated and ventilated fewer than 7 days and already on optimized ventilation: FiO2 >= 0.80, tidal volume 6 ml/kg predicted body weight, PEEP >= 10 cm H2O. On that floor of support, they had to meet one of three thresholds despite it — PaO2:FiO2 < 50 mm Hg for more than 3 hours, PaO2:FiO2 < 80 mm Hg for more than 6 hours, or arterial pH < 7.25 with PaCO2 >= 60 mm Hg for more than 6 hours. The exclusions matter as much as the inclusions: ventilated 7 days or longer, under 18, or a decision to withhold or withdraw life-sustaining therapy all kept a patient out. The design is deliberately catching a narrow, early, refractory window — not the broad Berlin category of severe ARDS." },
    { kind: "text", value: "> _Source:_ “Patients were eligible for enrollment …” — Methods, p. 2, ¶7 ; “a ratio of partial pressure …” — Abstract, p. 1, ¶9 ; “Exclusion criteria were an age …” — Methods, p. 2, ¶8" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i1-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "A 40-year-old has been intubated for 9 days for pneumonia. On FiO2 0.9, tidal volume 6 ml/kg, PEEP 12, his PaO2:FiO2 sits at 70 mm Hg for the past 8 hours. By EOLIA's criteria, is he eligible for enrollment?" },
  ],
      options: [{ text: "No — he has been ventilated for 7 days or longer, which is an exclusion regardless of how his gas exchange looks now." }, { text: "Yes — his PaO2:FiO2 < 80 for more than 6 hours on optimized ventilation meets a severity threshold, so he qualifies." }, { text: "Yes — a PaO2:FiO2 of 70 places him in the severe ARDS category of the Berlin definition, which is what EOLIA enrolled." }],
      correctAnswer: 0,
      feedback: { correct: "Correct.\n\n> _Source:_ “a ratio of partial pressure …” — Abstract, p. 1, ¶9 ; “Patients were eligible for enrollment …” — Methods, p. 2, ¶7 ; “Exclusion criteria were an age …” — Methods, p. 2, ¶8" },
    },
    {
      kind: "Information",
      id: "b2-motivate" as SectionId,
      title: "Against the Prior Evidence",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The equipoise going into EOLIA was real and it was specific. Whether early venovenous ECMO lowers mortality in very severe ARDS stayed unsettled because every prior signal had a hole in it. The first two randomized trials of ECMO were disappointing — but they were run decades ago, on technology and management that no longer resemble modern practice. The encouraging recent randomized trial, CESAR, was methodologically limited: not all patients assigned to ECMO actually received it, and control-group ventilation was never standardized, so a 'referral-to-an-ECMO-center' effect could not be separated from ECMO itself. The other reason for optimism, the H1N1 experience, came only from non-randomized cohorts. So the open question was not whether ECMO can support gas exchange — it plainly can — but whether committing patients to it early leaves more of them alive. EOLIA was built to close that gap, with 98% of the ECMO group actually receiving ECMO." },
    { kind: "text", value: "> _Source:_ “The efficacy of venovenous extracorporeal …” — Abstract, p. 1, ¶8 ; “The results of the first …” — Discussion, p. 8, ¶5 ; “The results of the most …” — Discussion, p. 8, ¶5" },
  ],
    },
    {
      kind: "Information",
      id: "b3-explain" as SectionId,
      title: "The Comparator",
      content: [
    { kind: "text", value: "The word 'control' invites a misreading here, so name what that arm actually got. Control patients received conventional low-volume, low-pressure ventilation with proven adjuncts pushed hard: 90% were placed prone, 100% received neuromuscular blocking agents after randomization, and 83% received inhaled nitric oxide or prostacyclin. ECMO was available to them, but only as rescue for refractory hypoxemia. The ECMO arm, by contrast, went to immediate percutaneous venovenous cannulation — 98% cannulated, at a mean of 3.3 hours after randomization. So the contrast EOLIA draws is early ECMO versus an aggressively optimized conventional strategy that still holds ECMO in reserve — not ECMO versus neglect. That framing is essential for reading the crossover: because the control arm could reach for rescue ECMO, a deviation from assigned treatment is baked into the design, and 28% of control patients ended up receiving rescue ECMO." },
    { kind: "text", value: "> _Source:_ “In the control group, 113 …” — Results, p. 4, ¶8 ; “In the control group, 113 …” — Results, p. 4, ¶8 ; “Of the 121 patients in …” — Results, p. 4, ¶7 ; “the 28% rate of crossover …” — Discussion, p. 9, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b4-reveal" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "How ECMO was actually delivered is worth pinning down, with one caveat about what the available facts do and do not establish. Cannulation was immediate and percutaneous: 98% of assigned patients were on venovenous ECMO at a mean of 3.3 hours after randomization, and support ran a mean of 15 days. Anticoagulation used unfractionated heparin titrated to an aPTT of 40 to 55 seconds or anti-Xa activity of 0.2 to 0.3 IU/mL. Patients enrolled at non-ECMO centers were cannulated and transported on ECMO to ECMO centers — arguably a strength, since most patients for whom ECMO is an option first present where it is not available. What the approved facts do not establish is the cannulation-site distribution (for example, a specific femoral-jugular percentage); that detail is inferred at best and should not be stated as a finding." },
    { kind: "text", value: "> _Source:_ “Of the 121 patients in …” — Results, p. 4, ¶7 ; “Anticoagulation was achieved with unfractionated …” — Methods, p. 3, ¶4 ; “The inclusion of patients at …” — Discussion, p. 9, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i5-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "The primary endpoint was 60-day mortality. Given that EOLIA compared early ECMO against an aggressively optimized control arm that could still cross over to rescue ECMO, predict what the trial found for the primary endpoint." },
  ],
      options: [{ text: "Mortality was essentially identical between the arms, with no numerical separation in either direction." }, { text: "Mortality was significantly lower with ECMO, establishing that early ECMO reduces death in very severe ARDS." }, { text: "Mortality was numerically lower with ECMO (roughly 35% vs 46%) but the difference did not reach statistical significance (P around 0.09)." }],
      correctAnswer: 2,
      feedback: { correct: "Correct.\n\n> _Source:_ “At 60 days, 44 of …” — Abstract, p. 1, ¶10" },
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "At 60 days, mortality was 35% in the ECMO group versus 46% in the control group: a relative risk of 0.76 (95% CI 0.55 to 1.04, P = 0.09). Numerically lower, statistically nonsignificant. The confidence interval crosses 1, so on its own primary endpoint EOLIA did not demonstrate that early ECMO reduces mortality. The 11-percentage-point separation is the kind of effect a clinician would want to be real — which is exactly why the next questions are about what the design permits you to conclude from a result that landed just short of significance." },
    { kind: "text", value: "> _Source:_ “At 60 days, 44 of …” — Abstract, p. 1, ¶10" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i7-noncodingreflection" as SectionId,
      title: "Risk of Bias",
      content: [
    { kind: "text", value: "Reason through how the crossover in the control arm should change your reading of the nonsignificant primary result." },
  ],
      topic: "In EOLIA, 28% of control patients crossed over to rescue ECMO a mean of 6.5 days after randomization; they were extremely ill at crossover (median PaO2:FiO2 51 mm Hg, median SaO2 77%) and had 60-day mortality of 57% versus 41% in other control patients. Explain how this crossover affects interpretation of the intention-to-treat primary result, and state clearly what the trial can and cannot conclude about ECMO as a result.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer explains that: (1) allowing the sickest control patients to receive rescue ECMO is a deviation from assigned treatment that moves effective ECMO into the control arm, blurring the assigned-treatment contrast; (2) this dilutes the estimated ECMO effect toward the null, which plausibly contributes to the nonsignificant primary result; (3) therefore the negative primary result cannot be read as evidence that ECMO does not help — the trial cannot draw a definitive conclusion about ECMO's usefulness. Credit explicit attribution that this is inferred reasoning about design, not a stated finding of the trial. Do not require the learner to defend that ECMO works or does not work.",
    },
    {
      kind: "NonCodingReflection",
      id: "i8-noncodingreflection" as SectionId,
      title: "Reason It Through",
      content: [
    { kind: "text", value: "Reason through why a nonsignificant primary result in EOLIA does not equal 'no benefit,' given how the trial was designed and stopped." },
  ],
      topic: "EOLIA used a sequential triangular-test design and was stopped per protocol after only 75% of the maximum calculated sample size. It was powered to detect a 20-percentage-point lower mortality with ECMO; the observed result was 35% vs 46% (RR 0.76, 95% CI 0.55 to 1.04, P = 0.09). Explain why this nonsignificant result should not be read as demonstrating absence of benefit.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer explains that: (1) stopping at 75% of the planned maximum sample size reduces power to detect the effect the trial was designed around; (2) allowing crossover to rescue ECMO in controls further erodes power; (3) a wide confidence interval that includes a clinically meaningful benefit (RR down to 0.55) means the trial was probably underpowered, so failure to reach significance is not the same as showing ECMO does not work — absence of evidence is not evidence of absence. Credit explicit attribution that this is inferred reasoning; note that the exact enrolled/planned counts and the specific stopping boundary crossed are not established by the available facts and should not be asserted.",
    },
    {
      kind: "MultipleChoice",
      id: "i9-multiplechoice" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "Control-group patients who crossed over to rescue ECMO were extremely ill (median PaO2:FiO2 51 mm Hg, median SaO2 77% at crossover, a mean of 6.5 days after randomization) and had 60-day mortality of 57%, versus 41% in other control patients. Which conclusion does this comparison actually support?" },
  ],
      options: [{ text: "It confirms that ECMO is harmful, because patients who received it as rescue had the highest mortality in the trial." }, { text: "It proves that late rescue ECMO causes higher mortality than early ECMO, since the crossover patients died more often." }, { text: "It suggests — but does not establish — that deferring ECMO until refractory hypoxemia may be too late, because this is an observational comparison within a self-selected, sicker subgroup." }],
      correctAnswer: 2,
      feedback: { correct: "Correct.\n\n> _Source:_ “Crossover to ECMO occurred a …” — Abstract, p. 1, ¶10 ; “At the time that they …” — Results, p. 7, ¶2 ; “Mortality at 60 days was …” — Results, p. 7, ¶4" },
    },
    {
      kind: "Information",
      id: "b10-explain" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "The secondary composite of treatment failure — death in the ECMO group, or death OR crossover to ECMO in the control group — favored ECMO strongly: relative risk 0.62 (95% CI 0.47 to 0.82, P < 0.001). It is tempting to let that significant result rescue the negative primary, and that temptation is the trap. Counting crossover as a 'failure' only for the control arm structurally penalizes controls: a control patient who crossed to ECMO and survived is scored as a failure, while the identical intervention in the ECMO arm is not. The endpoint therefore builds in a bias against the control group and cannot be read as a mortality benefit, especially standing next to a nonsignificant primary result on death itself." },
    { kind: "text", value: "> _Source:_ “The relative risk of treatment …” — Results, p. 4 ; “The prespecified secondary composite end …” — Discussion, p. 8, ¶6 ; “At 60 days, 44 of …” — Abstract, p. 1, ¶10" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i11-multiplechoice" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "How should the significant treatment-failure composite (RR 0.62, P < 0.001) be interpreted alongside the nonsignificant primary mortality result?" },
  ],
      options: [{ text: "It cannot be read as a mortality benefit, because counting crossover as a failure only in the control arm structurally biases the endpoint against controls." }, { text: "It overrides the primary endpoint and establishes that early ECMO reduces death in severe ARDS." }, { text: "It confirms that ECMO improves outcomes, since a P < 0.001 result is more robust than the borderline primary." }],
      correctAnswer: 0,
      feedback: { correct: "Correct.\n\n> _Source:_ “The relative risk of treatment …” — Results, p. 4 ; “The prespecified secondary composite end …” — Discussion, p. 8, ¶6 ; “At 60 days, 44 of …” — Abstract, p. 1, ¶10" },
    },
    {
      kind: "Information",
      id: "b12-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The safety picture is a genuine trade, not a one-sided cost. ECMO brought more bleeding requiring transfusion (46% vs 28%) and more severe thrombocytopenia below 20,000/mm3 (27% vs 16%) — the expected price of a heparinized extracorporeal circuit. Against that, ischemic stroke was less frequent with ECMO (0% vs 5%), plausibly because gas exchange and hemodynamics were stabilized. Several feared complications were a wash: pneumothorax, ventilator-associated pneumonia, and massive bleeding occurred at similar rates in both arms, and exactly one patient in each group died from cannulation-related complications. So the harm profile is a bleeding-and-platelet cost weighed against fewer ischemic strokes, not a catalogue of ECMO-specific catastrophes." },
    { kind: "text", value: "> _Source:_ “there were more bleeding events …” — Abstract, p. 1, ¶10 ; “more cases of severe thrombocytopenia …” — Abstract, p. 1, ¶10 ; “fewer cases of ischemic stroke …” — Abstract, p. 1, ¶10 ; “Rates of pneumothorax, ventilator-associated pneumonia, …” — Results, p. 8, ¶2 ; “One patient in each group …” — Results, p. 8, ¶2" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "i13-multipleselection" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Select every statement that correctly describes the EOLIA safety findings." },
  ],
      options: [{ text: "Ischemic stroke was less frequent with ECMO (0% vs 5%)." }, { text: "Bleeding events leading to transfusion were more frequent with ECMO (46% vs 28%)." }, { text: "Severe thrombocytopenia was more frequent with ECMO (27% vs 16%)." }, { text: "Pneumothorax and ventilator-associated pneumonia were similar between the arms." }, { text: "ECMO's harms were offset by a clear mortality reduction, proving net benefit." }, { text: "The composite treatment-failure endpoint confirms ECMO improved survival despite the harms." }],
      correctAnswers: [0, 1, 2, 3],
      feedback: { correct: "> _Source:_ “there were more bleeding events …” — Abstract, p. 1, ¶10 ; “more cases of severe thrombocytopenia …” — Abstract, p. 1, ¶10 ; “fewer cases of ischemic stroke …” — Abstract, p. 1, ¶10 ; “Rates of pneumothorax, ventilator-associated pneumonia, …” — Results, p. 8, ¶2 ; “One patient in each group …” — Results, p. 8, ¶2" },
    },
  ],
};

export default lessonData;
