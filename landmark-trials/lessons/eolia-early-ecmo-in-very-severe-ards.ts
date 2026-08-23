import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "5b4b1996-ac25-4810-931f-a9581420e247" as LessonId,
  title: "EOLIA: Early ECMO in Very Severe ARDS",
  description: "A trial-appraisal lesson on EOLIA — reasoning through its primary result, its optimized control arm, crossover, and why an 11-point absolute mortality difference read out nonsignificant.",
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
      title: "The Open Question",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "When EOLIA began, the role of venovenous ECMO in the most severe ARDS was genuinely open — its efficacy was described as controversial, and the stakes were not academic: in the most severe forms of ARDS, mortality may exceed 60%. The single prior randomized trial, CESAR, had not settled it. Its design left too much unfixed to draw firm conclusions: not all patients allocated to ECMO actually received it, and ventilation in the control arm was never standardized, so a survival difference could as easily reflect where patients were treated as what they received. That is the specific uncertainty EOLIA was built to close — not whether an oxygenator can correct gas exchange, which no one doubted, but whether committing the sickest patients to ECMO early changes whether they live. Note that this framing is an inference about the trial's motivation from the design and background claims, not a stated finding of the trial itself." },
    { kind: "text", value: "> _Source:_ “The efficacy of venovenous extracorporeal …” — Abstract, p. 1, ¶2 ; “not all patients in the …” — Discussion, p. 8, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The mechanistic case for early ECMO is inferred from its physiology rather than demonstrated by EOLIA. Extracorporeal gas exchange decouples oxygenation and CO2 clearance from the lung, which means the ventilator no longer has to do the impossible work of oxygenating a consolidated lung at any cost. Freed from that, you can drop tidal volume, plateau pressure, and driving pressure below what a patient on conventional support could tolerate — the same quantities that drive ventilator-induced lung injury — while hypoxemia and hypercapnia are corrected in the circuit. The intended benefit, then, is not oxygenation per se but lung rest: less stress and strain over an already injured field. Keep this as rationale, not proof — it is the reason to expect benefit, not evidence of it." },
    { kind: "text", value: "> _Source:_ “Patients in the ECMO group …” — Abstract, p. 4, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b2-explain" as SectionId,
      title: "The Comparator",
      content: [
    { kind: "text", value: "The design decision that shapes everything downstream is the control arm. It was not \"no ECMO.\" Controls received an optimized conventional strategy: standardized low-volume, low-pressure ventilation with strong encouragement of neuromuscular blockade — used in all control patients — and prolonged prone positioning, used in 90%. Crucially, the protocol also permitted rescue: a control patient with refractory hypoxemia could cross over to ECMO, and 28% did, a mean of 6.5 days after randomization. So EOLIA did not compare ECMO against its absence. It compared early ECMO against best conventional care with ECMO held in reserve for the patients who deteriorated despite it. This is inferred from the design and delivery claims; hold onto it, because it is what makes the primary result hard to read." },
    { kind: "text", value: "> _Source:_ “In the control group, 113 …” — Abstract, p. 4, ¶1 ; “Crossover to ECMO occurred a …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i3-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "Given that the control arm was optimized conventional care with ECMO available as rescue for the 28% who deteriorated, what do you predict EOLIA found for the primary endpoint of 60-day mortality?" },
  ],
      options: [{ text: "Mortality was numerically lower with early ECMO but the difference did not reach statistical significance.", feedback: "Correct — 35% vs 46%, RR 0.76 (95% CI 0.55 to 1.04, P=0.09). Directionally favorable, not significant." }, { text: "Mortality was identical in both arms." }, { text: "Early ECMO significantly increased mortality relative to conventional care." }, { text: "Early ECMO significantly reduced 60-day mortality, proving ECMO's survival benefit." }],
      correctAnswer: 0,
      feedback: { correct: "Correct — 35% vs 46%, RR 0.76 (95% CI 0.55 to 1.04, P=0.09). Directionally favorable, not significant.\n\n> _Source:_ “At 60 days, 44 of …” — Abstract, p. 1, ¶2 ; “Among patients with very severe …” — Abstract, p. 1, ¶2" },
    },
    {
      kind: "Information",
      id: "b4-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "At 60 days, mortality was 35% (44 of 124) with ECMO versus 46% (57 of 125) with conventional care — relative risk 0.76, 95% CI 0.55 to 1.04, P=0.09, an absolute reduction of about 11 percentage points. The direction favors ECMO; the confidence interval crosses one. So the bedside conclusion EOLIA licenses is narrow and specific: among patients with very severe ARDS, 60-day mortality was not significantly lower with early ECMO than with a conventional strategy that included ECMO as rescue for refractory hypoxemia. That is a statement about a comparison, not a verdict on ECMO." },
    { kind: "text", value: "> _Source:_ “At 60 days, 44 of …” — Abstract, p. 1, ¶2 ; “Among patients with very severe …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b5-reveal" as SectionId,
      title: "The Intervention (1)",
      content: [
    { kind: "text", value: "The intervention itself was delivered fast and delivered nearly universally — a point that matters for interpreting the null. Patients randomized to ECMO underwent immediate percutaneous venovenous cannulation with unfractionated heparin anticoagulation, started a mean of 3.3 hours after randomization, and remained on support a mean of 15 days. Unlike CESAR, this was early, protocolized ECMO actually given to the group assigned to it. The precise cannulation configuration and anticoagulation targets are not established by the verified claims, so treat those specifics as beyond what the trial reports; what is established is the timing and duration of the delivered intervention." },
    { kind: "text", value: "> _Source:_ “Patients assigned to the ECMO …” — Abstract, p. 3, ¶1 ; “In an international clinical trial, …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "FillIn",
      id: "i6-fillin" as SectionId,
      title: "The Intervention (2)",
      content: [
    { kind: "text", value: "Fill in the delivered-intervention figures from EOLIA." },
  ],
      body: "In the ECMO group, venovenous support was started a mean of {{start}} hours after randomization and lasted a mean of {{duration}} days.",
      blanks: { "start": { match: "numeric", answer: 3.3, tolerance: 0.2, hintMode: "highLow" }, "duration": { match: "numeric", answer: 15.0, tolerance: 1.0, hintMode: "highLow" } },
    },
    {
      kind: "Information",
      id: "b7-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who was eligible frames how far the null generalizes. EOLIA enrolled intubated patients with very severe ARDS who, despite ventilator optimization, met one of three physiologic criteria: a PaO2:FiO2 below 50 mm Hg for more than 3 hours; a PaO2:FiO2 below 80 mm Hg for more than 6 hours; or an arterial pH under 7.25 with a PaCO2 of at least 60 mm Hg for more than 6 hours. Exclusions kept the population early and salvageable: mechanical ventilation for 7 days or longer, age under 18, cardiac failure requiring venoarterial ECMO, and any decision to withhold or withdraw life-sustaining therapy. This is a floor of severity most trials never reach — not the Berlin severe-ARDS population, but a far sicker subset. The precise optimization thresholds and additional exclusions are not established by the verified claims and would need confirmation." },
    { kind: "text", value: "> _Source:_ “a ratio of partial pressure …” — Abstract, p. 1, ¶2 ; “Exclusion criteria were an age …” — Abstract, p. 2, ¶1" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i8-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "A colleague says EOLIA's result applies to \"anyone meeting the Berlin definition of severe ARDS.\" Why is that an overreach?" },
  ],
      options: [{ text: "Entry required refractory physiology such as PaO2:FiO2 <50 for >3 h, far below the Berlin severe cutoff.", feedback: "Right — the thresholds define a much sicker subset than Berlin-severe." }, { text: "It applies to all ARDS patients regardless of oxygenation." }, { text: "The Berlin definition and EOLIA's entry criteria are the same set." }, { text: "It applies to every severe-ARDS patient with PaO2:FiO2 under 100." }],
      correctAnswer: 0,
      feedback: { correct: "Right — the thresholds define a much sicker subset than Berlin-severe.\n\n> _Source:_ “a ratio of partial pressure …” — Abstract, p. 1, ¶2" },
    },
    {
      kind: "Information",
      id: "b9-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Now the interpretive problem the design created. Because 28% of control patients crossed over to rescue ECMO — and 57% of those crossover patients died — the control arm did not represent a pure conventional-ventilation strategy. The patients most likely to die on conventional care were precisely the ones who received the intervention under test. This is inferred, not a stated finding, but the logic is direct: crossover moves the sickest controls onto ECMO, which pulls the two arms toward each other and dilutes any true ECMO effect on the primary endpoint. It is also why definitive conclusions about ECMO's usefulness are hard to draw from this comparison — the contrast was blunted by design." },
    { kind: "text", value: "> _Source:_ “This crossover rate makes it …” — Discussion, p. 8, ¶1 ; “Crossover to ECMO occurred a …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i10-multiplechoice" as SectionId,
      title: "Risk of Bias",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "28% of control patients crossed over to rescue ECMO for refractory hypoxemia. Predict the direction this crossover most plausibly pushed the intention-to-treat estimate of the ECMO effect on 60-day mortality." },
  ],
      options: [{ text: "No effect, because intention-to-treat ignores what treatment was actually received." }, { text: "It made ECMO look harmful by adding deaths to the ECMO arm." }, { text: "Away from the null, exaggerating ECMO's apparent benefit." }, { text: "Toward the null, diluting any true benefit, since the sickest controls received the tested therapy.", feedback: "Correct — crossover of high-risk controls onto ECMO narrows the between-arm difference." }],
      correctAnswer: 3,
      feedback: { correct: "Correct — crossover of high-risk controls onto ECMO narrows the between-arm difference.\n\n> _Source:_ “Crossover to ECMO occurred a …” — Abstract, p. 1, ¶2 ; “This crossover rate makes it …” — Discussion, p. 8, ¶1" },
    },
    {
      kind: "Information",
      id: "b11-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "So the crossover is not a footnote — it is the reason the primary comparison is a contrast between early ECMO and delayed-if-needed ECMO, rather than ECMO versus none. That framing is what a careful reader carries away from the null: the trial does not show ECMO fails to help; it shows that committing everyone early was not clearly better than reserving it for those who declared themselves. This remains an inference about interpretation, drawn from the crossover structure, not an explicit conclusion of the paper." },
    { kind: "text", value: "> _Source:_ “This crossover rate makes it …” — Discussion, p. 8, ¶1" },
  ],
    },
    {
      kind: "Information",
      id: "b12-explain" as SectionId,
      title: "How It Was Meant to Work (3)",
      content: [
    { kind: "text", value: "The effect estimate is fragile for a second, independent reason: the trial stopped early. Per protocol, enrollment ended after 75% of the maximum calculated sample size was reached, which left it probably underpowered to detect the 20-percentage-point mortality reduction its design had assumed. An underpowered trial that reads out nonsignificant has not excluded a clinically important benefit — it has failed to have the resolution to find one. Combine that with crossover dilution and the P=0.09 stops looking like evidence of no effect and starts looking like a wide confidence interval on a directionally favorable result. This power reasoning is an inference from the stopping rule, not a stated finding." },
    { kind: "text", value: "> _Source:_ “it was stopped per protocol …” — Discussion, p. 8, ¶1" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i13-noncodingreflection" as SectionId,
      title: "Reason It Through",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Appraise the fragility of EOLIA's effect estimate." },
  ],
      topic: "EOLIA stopped after 75% of its planned sample and 28% of controls crossed over to rescue ECMO. Explain how each of these separately limits what the nonsignificant primary result can conclude, and state what the 95% CI (0.55 to 1.04) does and does not permit you to say about ECMO.",
      minLength: 180,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer: (1) recognizes early stopping left the trial underpowered for its assumed 20-point reduction, so a null does not exclude a clinically important benefit; (2) recognizes crossover of high-risk controls to ECMO dilutes the ITT contrast toward the null; (3) reads the CI correctly — it is compatible with a substantial mortality reduction (RR down to 0.55) and with no benefit or slight harm (up to 1.04), so 'no difference' is not proven, only 'not significantly different'; (4) does not claim EOLIA proved or disproved ECMO's benefit. Penalize any statement that P=0.09 proves ECMO does not work.",
    },
    {
      kind: "Information",
      id: "b14-explain" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "The key secondary endpoint reads out significant, and it is worth seeing exactly why that does not rescue the primary conclusion. Treatment failure — defined as death in the ECMO group, and crossover to ECMO or death in the control group — occurred in 35% of the ECMO arm versus 58% of the control arm (RR 0.62, 95% CI 0.47 to 0.82, P<0.001). But look at the construction: crossover counts as a failure only in the control arm. The very event the trial permitted as rescue is scored against the group that used it. By contrast, the primary endpoint of 60-day mortality — the outcome that counts deaths symmetrically — was not significantly different (35% vs 46%). Reading the significant composite as proof of a survival benefit is the trap this asymmetry sets; that this composite is biased against control is an interpretive judgment, not an explicit claim of the paper." },
    { kind: "text", value: "> _Source:_ “The relative risk of treatment …” — Abstract, p. 4, ¶1 ; “At 60 days, 44 of …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i15-multiplechoice" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "Treatment failure favored ECMO significantly (RR 0.62, P<0.001) while 60-day mortality did not (RR 0.76, P=0.09). Which reasoning best explains the discrepancy?" },
  ],
      options: [{ text: "The two endpoints measured the same thing, so one must be an error." }, { text: "Treatment failure is a harder endpoint than death, so significance there is stronger." }, { text: "The composite scores crossover as a failure only in the control arm, an asymmetry mortality does not share.", feedback: "Correct — the significant endpoint is built on an asymmetric definition, so it cannot stand in for survival." }, { text: "The significant treatment-failure result confirms ECMO improves survival." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — the significant endpoint is built on an asymmetric definition, so it cannot stand in for survival.\n\n> _Source:_ “The relative risk of treatment …” — Abstract, p. 4, ¶1 ; “At 60 days, 44 of …” — Abstract, p. 1, ¶2" },
    },
    {
      kind: "Information",
      id: "b16-explain" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The harm profile is what you would expect from an anticoagulated extracorporeal circuit, and it is not one-directional. ECMO increased bleeding events leading to transfusion (46% vs 28%; absolute risk difference 18 points, 95% CI 6 to 30) and severe thrombocytopenia below 20,000/mm3 (27% vs 16%; ARD 11 points, 95% CI 0 to 21). Against that, ischemic stroke was less frequent with ECMO (0% vs 5%; ARD -5 points, 95% CI -10 to -2) — plausibly because stable extracorporeal gas exchange avoids the hypoxemic and hemodynamic crises that a failing conventional strategy courts. So the trade is real: circuit-related bleeding and platelet consumption bought against fewer ischemic neurologic events." },
    { kind: "text", value: "> _Source:_ “there were more bleeding events …” — Abstract, p. 1, ¶2 ; “more cases of severe thrombocytopenia …” — Abstract, p. 1, ¶2 ; “fewer cases of ischemic stroke …” — Abstract, p. 1, ¶2" },
  ],
    },
    {
      kind: "MultipleSelection",
      id: "i17-multipleselection" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "Select every outcome that was MORE frequent in the ECMO group than in the control group in EOLIA." },
  ],
      options: [{ text: "60-day mortality (35% vs 46%)", feedback: "Mortality was numerically lower, not higher, with ECMO." }, { text: "Ischemic stroke (0% vs 5%)", feedback: "Ischemic stroke was LESS frequent with ECMO." }, { text: "Bleeding events leading to transfusion (46% vs 28%)", feedback: "Yes — ARD 18 points." }, { text: "Severe thrombocytopenia, <20,000/mm3 (27% vs 16%)", feedback: "Yes — ARD 11 points." }],
      correctAnswers: [2, 3],
      feedback: { correct: "> _Source:_ “there were more bleeding events …” — Abstract, p. 1, ¶2 ; “more cases of severe thrombocytopenia …” — Abstract, p. 1, ¶2 ; “fewer cases of ischemic stroke …” — Abstract, p. 1, ¶2" },
    },
    {
      kind: "FillIn",
      id: "i18-fillin" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Reason about the absolute difference and its precision. Using the 60-day mortality of 35% (ECMO) versus 46% (control), compute the absolute risk reduction in percentage points, and the number needed to treat implied by that ARR." },
  ],
      body: "The absolute risk reduction is {{arr}} percentage points, giving a number needed to treat of about {{nnt}} patients. That this ~11-point difference read out nonsignificant reflects that the trial stopped early and was probably {{power}} to detect its assumed 20-point reduction.",
      blanks: { "arr": { match: "numeric", answer: 11.0, tolerance: 1.0, unit: "percentage points", hintMode: "highLow" }, "nnt": { match: "numeric", answer: 9.0, tolerance: 1.5, unit: "patients", hintMode: "highLow" }, "power": { match: "text", answers: ["underpowered", "under-powered"], caseSensitive: false, hintMode: "none" } },
    },
  ],
};

export default lessonData;
