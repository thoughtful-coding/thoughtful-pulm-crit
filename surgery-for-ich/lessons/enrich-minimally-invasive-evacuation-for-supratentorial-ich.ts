import type { Lesson, LessonId, SectionId } from "../../../../src/types/data";

const lessonData: Lesson = {
  guid: "c139d107-1a31-4b26-9062-e741f85f534f" as LessonId,
  title: "ENRICH: Minimally Invasive Evacuation for Supratentorial ICH",
  description: "A claim-grounded lesson on the ENRICH trial of trans-sulcal parafascicular hematoma evacuation, teaching the open question, the intervention, the headline and safety findings, and what the trial can and cannot establish.",
  sections: [
    {
      kind: "Information",
      id: "source" as SectionId,
      title: "Source",
      content: [
    { kind: "text", value: "Pradilla G, et al. *New England Journal of Medicine*. 2024." },
  ],
    },
    {
      kind: "Information",
      id: "b0-motivate" as SectionId,
      title: "The Open Question",
      content: [
    { kind: "text", value: "The role of surgery in spontaneous supratentorial intracerebral hemorrhage stayed genuinely open for a reason: prior randomized trials of surgical evacuation generally showed no functional benefit, with a tantalizing exception in some trials of superficially located lobar hemorrhages. MISTIE-III then tested a minimally invasive route — catheter-based evacuation combined with thrombolysis — and did not improve modified Rankin scale scores at one year. So the question ENRICH inherited was narrow and specific: not whether a clot can be removed, but whether removing it early, by a different minimally invasive technique, buys a functional outcome that medical management alone does not. That framing matters for how you read the result — this is a test of one approach, at one time window, not a verdict on surgery in general." },
    { kind: "text", value: "> _Source:_ “Trials of surgical evacuation of …” — Abstract, p. 2, ¶8 ; “Minimally invasive, catheter-based evacuation with …” — Abstract, p. 3, ¶2" },
  ],
    },
    {
      kind: "Information",
      id: "b1-explain" as SectionId,
      title: "The Intervention",
      content: [
    { kind: "text", value: "The surgery arm received minimally invasive trans-sulcal parafascicular evacuation under general anesthesia through a small craniotomy and durotomy, using the BrainPath access port and the Myriad aspiration device under imaging guidance, added to guideline-based medical management. The intervention was fast: the median time from randomization to surgery was 1.5 hours. The comparator arm received guideline-based medical management alone, and crossover to surgery was prohibited, though lifesaving conventional craniotomy or decompressive hemicraniectomy could still be performed as needed. Keep this contrast distinct from the earlier surgical literature: this is neither open craniotomy nor catheter-based thrombolysis. STICH-I and STICH-II, which suggested surgical results may differ by hemorrhage location, shaped that design choice — a hint ENRICH was built to interrogate at the lobar location." },
    { kind: "text", value: "> _Source:_ “Patients were randomly assigned, in …” — Methods, p. 4, ¶3 ; “The median number of hours …” — Results, p. 8, ¶4 ; “to receive guideline-based medical management …” — Methods, p. 4, ¶3 ; “The STICH-I2 and STICH-II3 trials …” — Discussion, p. 12, ¶4" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i2-multiplechoice" as SectionId,
      title: "The Result (1)",
      content: [
    { kind: "text", value: "The trial prespecified that superiority of surgery on the primary efficacy end point — the mean utility-weighted modified Rankin scale at 180 days — would be declared only if the posterior probability of superiority reached a fixed threshold. Predict: what posterior probability threshold did the protocol require?" },
  ],
      options: [{ text: "0.981", feedback: "0.981 was the observed posterior probability of superiority, not the prespecified threshold it had to clear." }, { text: "0.975", feedback: "Correct — the prespecified posterior probability threshold for declaring superiority was 0.975 or higher." }],
      correctAnswer: 1,
      feedback: { correct: "Correct — the prespecified posterior probability threshold for declaring superiority was 0.975 or higher.\n\n> _Source:_ “The mean score on the …” — Abstract, p. 2, ¶10 ; “The primary efficacy end point …” — Abstract, p. 2, ¶9" },
    },
    {
      kind: "Information",
      id: "b3-reveal" as SectionId,
      title: "What the Trial Found (1)",
      content: [
    { kind: "text", value: "The headline read out in surgery's favor. The mean utility-weighted modified Rankin scale at 180 days was 0.458 in the surgery group versus 0.374 in controls — a between-group difference of 0.084 (95% Bayesian credible interval, 0.005 to 0.163), with a posterior probability of superiority of 0.981, clearing the prespecified 0.975 threshold. Read as a bedside statement: for acute intracerebral hemorrhage that can be surgically addressed within 24 hours of last known well, minimally invasive evacuation plus medical management yielded better functional outcomes at 180 days than medical management alone. The number to hold onto is that the credible interval excludes zero only narrowly at its lower bound — the effect is positive, but not large." },
    { kind: "text", value: "> _Source:_ “The mean score on the …” — Abstract, p. 2, ¶10 ; “The primary efficacy end point …” — Abstract, p. 2, ¶9 ; “Among patients in whom surgery …” — Abstract, p. 2, ¶11" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i4-multiplechoice" as SectionId,
      title: "The Result (2)",
      content: [
    { kind: "text", value: "ENRICH prespecified a lobar-location stratum. Predict where the treatment effect on the 180-day uw-mRS was concentrated: what was the between-group difference in the mean uw-mRS score in the lobar stratum specifically?" },
  ],
      options: [{ text: "0.658", feedback: "0.658 is the ordinal-mRS posterior mean odds ratio, a different metric, not the lobar mean-score difference." }, { text: "0.127", feedback: "Correct — in the lobar stratum the difference was 0.127 (surgery 0.513 vs. control 0.371), larger than the pooled effect." }, { text: "0.084", feedback: "0.084 was the pooled (overall-population) difference, not the lobar-stratum difference." }],
      correctAnswer: 1,
      feedback: { correct: "Correct — in the lobar stratum the difference was 0.127 (surgery 0.513 vs. control 0.371), larger than the pooled effect.\n\n> _Source:_ “The mean between-group difference was …” — Abstract, p. 2, ¶10 ; “The mean score on the …” — Abstract, p. 2, ¶10" },
    },
    {
      kind: "Information",
      id: "b5-reveal" as SectionId,
      title: "What the Trial Found (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "In the prespecified lobar stratum the effect was larger than overall: a difference of 0.127 (surgery 0.513 vs. control 0.371; 95% credible interval 0.035 to 0.219), and the investigators concluded the benefit appeared attributable to intervention for lobar hemorrhages. Treat this as an attributed inference, not a demonstrated location-specific fact. Enrollment of anterior basal ganglia patients was halted for futility after 175 patients — 58% of the anticipated sample — leaving few such patients, and the secondary and subgroup credible intervals were not adjusted for multiple comparisons. So the apparent lack of benefit in basal ganglia is not established as a true absence of effect; no specific basal ganglia effect estimate is documented, and the lobar concentration is a signal to hypothesize from, not a subgroup conclusion to bank." },
    { kind: "text", value: "> _Source:_ “The mean between-group difference was …” — Abstract, p. 2, ¶10 ; “After 175 patients had been …” — Discussion, p. 12, ¶2 ; “Because there was no prespecified …” — Methods, p. 7, ¶3" },
  ],
    },
    {
      kind: "Information",
      id: "b6-reveal" as SectionId,
      title: "Weighing the Harms (1)",
      content: [
    { kind: "text", value: "The safety signal ran the same direction. The primary safety end point, death by 30 days after enrollment, occurred in 9.3% (14 of 150) of surgery patients versus 18.0% (27 of 150) of controls (estimated difference, -8.7 percentage points; 95% credible interval, -16.4 to -1.0). Serious adverse events were also less frequent with surgery, 63.3% versus 78.7%. Read this as an inference to hold loosely rather than a mortality claim: all-cause death at 180 days was similar between groups, 20% versus 23%. The early separation in death narrows over the follow-up, so the 30-day safety advantage should not be reported as a durable survival benefit." },
    { kind: "text", value: "> _Source:_ “A primary safety end point …” — Abstract, p. 2, ¶9 ; “In the surgery group, one …” — Results, p. 9, ¶4 ; “Death from any cause at …” — Results, p. 9, ¶3" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i7-multiplechoice" as SectionId,
      title: "Weighing the Harms (2)",
      content: [
    { kind: "text", value: "For the primary safety end point — death by 30 days after enrollment — in the surgery arm, what proportion of patients died?" },
  ],
      options: [{ text: "20%", feedback: "20% was all-cause death at the 180-day final follow-up in the surgery arm, not death by 30 days." }, { text: "63.3%", feedback: "63.3% was the proportion with one or more serious adverse events in the surgery arm, not 30-day death." }, { text: "9.3%", feedback: "Correct — death by 30 days occurred in 9.3% (14 of 150) of surgery patients." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — death by 30 days occurred in 9.3% (14 of 150) of surgery patients.\n\n> _Source:_ “A primary safety end point …” — Abstract, p. 2, ¶9 ; “Death from any cause at …” — Results, p. 9, ¶3 ; “In the surgery group, one …” — Results, p. 9, ¶4" },
    },
    {
      kind: "Information",
      id: "b8-reveal" as SectionId,
      title: "What the Trial Found (3)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The procedure hit its technical target. Mean hematoma volume reduction from baseline to 24 hours was 73.2±37.8%, with a mean residual volume of 14.9±21.7 ml, and a residual volume of 15 ml or less was achieved in 109 of 150 surgery patients (72.7%) — though that volume threshold was not a prespecified end point and had no control-group comparator. Read these as measures of surgical target attainment, not as a demonstrated mechanism. The proposed mediators of benefit — early volume reduction, hemostasis, intracranial-pressure control, and reduced secondary inflammation minimizing white-matter injury — are plausible but were not directly tested in the trial. The clot came out; why that helped remains an inference." },
    { kind: "text", value: "> _Source:_ “Among patients in the surgery …” — Results, p. 8, ¶7 ; “A volume of 15 ml …” — Results, p. 8, ¶7 ; “Early reduction in hematoma volume, …” — Discussion, p. 12, ¶4 ; “300 patients at 37 centers …” — Results, p. 8, ¶4" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i9-multiplechoice" as SectionId,
      title: "The Result (3)",
      content: [
    { kind: "text", value: "Among surgery patients, what was the mean percent reduction in hematoma volume from baseline to 24 hours?" },
  ],
      options: [{ text: "6.9 days", feedback: "6.9 days was the mean ICU length of stay in the surgery arm, not a volume reduction." }, { text: "72.7%", feedback: "72.7% was the proportion of surgery patients reaching a residual volume of 15 ml or less, a different figure." }, { text: "73.2%", feedback: "Correct — the mean 24-hour reduction from baseline was 73.2±37.8%." }],
      correctAnswer: 2,
      feedback: { correct: "Correct — the mean 24-hour reduction from baseline was 73.2±37.8%.\n\n> _Source:_ “Among patients in the surgery …” — Results, p. 8, ¶7 ; “The mean length of stay …” — Results, p. 8 ; “A volume of 15 ml …” — Results, p. 8, ¶7" },
    },
    {
      kind: "Information",
      id: "b10-explain" as SectionId,
      title: "Who Was Enrolled (1)",
      content: [
    { kind: "text", value: "Who counted as a candidate is the operational core of the result. Patients had to be 18 to 80 years of age, with a Glasgow Coma Scale of 5 to 14 and an NIH stroke scale score above 5, and a pre-hemorrhage modified Rankin scale of 0 to 1 — little or no prior disability. The trial excluded uncorrectable coagulopathy, need for long-term anticoagulation, primary thalamic or infratentorial hemorrhage, and intraventricular hemorrhage involving more than 50% of either lateral ventricle. It further restricted hematoma volume to 30 to 80 ml and required surgery to be feasible within 24 hours of last known well. The generalizability caveat follows directly: the findings cannot be applied to hematomas outside that volume range or in the excluded locations. This is a bedside rule with sharp edges, not a general endorsement of evacuation." },
    { kind: "text", value: "> _Source:_ “Persons 18 to 80 years …” — Methods, p. 3, ¶6 ; “a score on the Glasgow …” — Methods, p. 3, ¶6 ; “a score before the hemorrhage …” — Methods, p. 3, ¶6 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “The generalizability of these results …” — Discussion, p. 10, ¶3 ; “Among patients in whom surgery …” — Abstract, p. 2, ¶11" },
  ],
    },
    {
      kind: "MultipleChoice",
      id: "i11-multiplechoice" as SectionId,
      title: "Who Was Enrolled (2)",
      content: [
    { kind: "text", value: "For the age eligibility criterion, patients could enroll only within a fixed age band. What were the age bounds for eligibility?" },
  ],
      options: [{ text: "18 to 80 years", feedback: "Correct — eligibility required an age of 18 to 80 years." }, { text: "More than 50% of a lateral ventricle involved", feedback: "That is the intraventricular-hemorrhage exclusion threshold, not the age criterion." }, { text: "More than 50% intraventricular extension or thalamic location", feedback: "Those are exclusion criteria (IVH extent, thalamic hemorrhage), not the age band." }],
      correctAnswer: 0,
      feedback: { correct: "Correct — eligibility required an age of 18 to 80 years.\n\n> _Source:_ “Persons 18 to 80 years …” — Methods, p. 3, ¶6 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “were excluded if they had …” — Methods, p. 4, ¶2" },
    },
    {
      kind: "MultipleChoice",
      id: "i12-multiplechoice" as SectionId,
      title: "Who Was Enrolled (3)",
      content: [
    { kind: "text", value: "For the Glasgow Coma Scale eligibility window, patients qualified only within a fixed GCS range. What was that range?" },
  ],
      options: [{ text: "More than 50% of a lateral ventricle involved", feedback: "That is the IVH exclusion threshold, not the GCS window." }, { text: "GCS 5 to 14", feedback: "Correct — eligible patients had a GCS between 5 and 14 (and an NIHSS above 5)." }, { text: "Primary thalamic or infratentorial hemorrhage", feedback: "That is an anatomic exclusion criterion, not the GCS window." }],
      correctAnswer: 1,
      feedback: { correct: "Correct — eligible patients had a GCS between 5 and 14 (and an NIHSS above 5).\n\n> _Source:_ “a score on the Glasgow …” — Methods, p. 3, ¶6 ; “were excluded if they had …” — Methods, p. 4, ¶2 ; “were excluded if they had …” — Methods, p. 4, ¶2" },
    },
    {
      kind: "Information",
      id: "b13-explain" as SectionId,
      title: "How It Was Meant to Work (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "The adaptive design is what makes the basal ganglia story readable. ENRICH allowed a sample size of 150 to 300 patients, with prespecified interim analyses at 150, 175, 200, 225, 250, and 275 randomizations, and rules to adapt enrollment criteria by hemorrhage location. Those rules fired: enrollment of anterior basal ganglia patients was halted for futility after 175 patients — 58% of the anticipated sample. That leaves few basal ganglia patients in the dataset, and the consequence is inferential, not just administrative: the trial cannot support conclusions about the potential benefit of minimally invasive surgery in the basal ganglia location. A futility stop is not evidence of no effect; it is evidence the trial stopped looking." },
    { kind: "text", value: "> _Source:_ “The adaptive trial design allowed …” — Methods, p. 7, ¶4 ; “Because recruitment of patients with …” — Discussion, p. 13, ¶2 ; “After 175 patients had been …” — Discussion, p. 12, ¶2" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i14-noncodingreflection" as SectionId,
      title: "Reason It Through (1)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "A colleague reads ENRICH and concludes that minimally invasive evacuation does not help anterior basal ganglia hemorrhages. Using the trial's adaptive design and the futility stop, explain why that conclusion is not supported by the data.",
      minLength: 150,
      extraContext: "Assess trial-appraisal reasoning, not code. A strong answer should note: the adaptive design prespecified interim analyses and rules to adapt enrollment by location; anterior basal ganglia enrollment was halted for futility after 175 patients (58% of anticipated sample); this leaves few basal ganglia patients so the subgroup is underpowered; a futility stop reflects a low predicted probability of showing benefit at interim, not a demonstrated true absence of effect; and no specific basal ganglia effect estimate is documented. Credit explicit recognition that 'no benefit shown' differs from 'benefit absent.'",
    },
    {
      kind: "Information",
      id: "b15-explain" as SectionId,
      title: "How It Was Meant to Work (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
    { kind: "text", value: "Even where the benefit is real, its cause is not pinned down. ENRICH included no arm comparing different surgical techniques, and the comparator was medical management alone — not open craniotomy, not catheter thrombolysis. So the observed benefit cannot be attributed specifically to the trans-sulcal parafascicular technique, and no conclusion can be drawn about that technique's superiority over other surgical approaches. Layer onto that the untested mechanisms — early volume reduction, hemostasis, intracranial-pressure control, reduced secondary inflammation — and what you have is a bundled intervention that worked, not a mechanism that was isolated. The right claim is 'this package beat medical management,' not 'this port and this device are why.'" },
    { kind: "text", value: "> _Source:_ “We can make no conclusions …” — Discussion, p. 12, ¶4 ; “to receive guideline-based medical management …” — Methods, p. 4, ¶3 ; “Early reduction in hematoma volume, …” — Discussion, p. 12, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i16-noncodingreflection" as SectionId,
      title: "Reason It Through (2)",
      content: [
    { kind: "text", value: "_Inferred from the discussion, not stated as a finding in the paper._" },
  ],
      topic: "ENRICH showed a functional benefit for the surgery arm over medical management. Explain why the trial cannot attribute that benefit specifically to the trans-sulcal parafascicular technique or to any single physiologic mechanism.",
      minLength: 150,
      extraContext: "Assess appraisal reasoning, not code. A strong answer should note: there was no arm comparing surgical techniques and no comparison against open craniotomy or catheter thrombolysis, so superiority of this specific technique over alternatives is not established; the comparator was medical management alone, making surgery-vs-no-surgery the only contrast the design supports; and the hypothesized mechanisms (early volume reduction, hemostasis, ICP control, reduced secondary inflammation) were not individually tested, so the benefit is attributable to the bundled intervention rather than an isolated mechanism. Credit distinguishing 'the package worked' from 'this component/mechanism is why.'",
    },
    {
      kind: "Information",
      id: "b17-explain" as SectionId,
      title: "How Much to Trust It",
      content: [
    { kind: "text", value: "ENRICH was a prospective, multicenter, adaptive, randomized, open-label trial with end-point adjudication. Open-label matters for a functional outcome scored by interview: site personnel knew group assignment. The design mitigated the resulting detection-bias risk by having the modified Rankin scale interviews adjudicated centrally by an independent neuropsychologist working from audio recordings that a third party had redacted to remove identifying information and group assignment. That protects the scoring step. It does not, however, protect the interview content itself — an unblinded site interviewer or a caregiver could still shape what was said before the recording was redacted, and the trial did not assess that residual channel." },
    { kind: "text", value: "> _Source:_ “Site personnel were aware of …” — Methods, p. 4, ¶8 ; “ENRICH was a prospective, multicenter, …” — Methods, p. 3, ¶4" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i18-noncodingreflection" as SectionId,
      title: "Risk of Bias",
      content: [],
      topic: "ENRICH was open-label but had central, blinded adjudication of the modified Rankin scale from redacted audio recordings. Explain what source of detection bias this design mitigates and what residual bias it does not address.",
      minLength: 150,
      extraContext: "Assess risk-of-bias reasoning, not code. A strong answer should note: the trial was open-label so site personnel knew allocation; the central adjudication by an independent neuropsychologist from third-party-redacted audio removes group assignment at the scoring step, mitigating detection bias in outcome measurement; but redaction protects the scoring, not the interview content, so an unblinded site interviewer or caregiver could still influence what is said during the interview, and the trial did not assess this residual bias. Credit recognizing that blinding the adjudicator is not the same as blinding the interview.",
    },
    {
      kind: "Information",
      id: "b19-reveal" as SectionId,
      title: "What the Trial Found (4)",
      content: [
    { kind: "text", value: "The primary end point itself carries a caveat worth naming. It was the mean utility-weighted modified Rankin scale (range 0 to 1) at 180 days, which differed by 0.084 between groups (95% credible interval, 0.005 to 0.163; posterior probability of superiority 0.981, clearing the 0.975 threshold). This scale has been used in ischemic stroke trials that enrolled some intracerebral hemorrhage patients, but it has not been validated specifically for intracerebral hemorrhage. From that one may reasonably infer — though the paper does not state it — that the clinical interpretability of a 0.084 utility difference is uncertain. A statistically clean signal on an unvalidated metric is still a signal you should translate to the bedside cautiously." },
    { kind: "text", value: "> _Source:_ “The modified Rankin scale is …” — Discussion, p. 13, ¶2 ; “The mean score on the …” — Abstract, p. 2, ¶10 ; “The primary efficacy end point …” — Abstract, p. 2, ¶9" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i20-noncodingreflection" as SectionId,
      title: "Reason It Through (3)",
      content: [],
      topic: "The primary end point was a between-group difference of 0.084 on the utility-weighted modified Rankin scale, which crossed the prespecified probability threshold. Explain why the choice of this scale tempers how confidently you can translate that 0.084 difference into a clinical benefit.",
      minLength: 150,
      extraContext: "Assess interpretive appraisal, not code. A strong answer should note: the uw-mRS has been used in ischemic stroke trials that included some ICH patients but is not validated specifically for intracerebral hemorrhage; therefore the clinical meaning of a 0.084 utility difference on a 0-to-1 scale is uncertain even though the posterior probability (0.981) exceeded the 0.975 threshold; and the reader should distinguish statistical superiority on the chosen metric from a validated, clinically interpretable functional benefit. This inference (that interpretability is uncertain) is reasonable but not explicitly stated by the paper — credit answers that flag it as inference.",
    },
    {
      kind: "Information",
      id: "b21-reveal" as SectionId,
      title: "What the Trial Found (5)",
      content: [
    { kind: "text", value: "The secondary end points all lean the same way, which is exactly why discipline is needed. The Bayesian ordinal logistic-regression analysis gave a posterior mean odds ratio of 0.658 (95% credible interval, 0.433 to 0.957) favoring surgery; the dichotomized modified Rankin scale of 0 to 3 was reached by 50.3% of surgery patients versus 41.0% of controls; and the mean ICU length of stay was shorter with surgery, 6.9±6.8 versus 9.7±7.6 days (difference -2.832 days; 95% credible interval, -4.527 to -1.134). But the trial had no prespecified plan to adjust the credible intervals for multiple comparisons across these secondary and exploratory end points, so no definite conclusions can be drawn from them. They corroborate the direction of the primary result; they do not independently establish anything." },
    { kind: "text", value: "> _Source:_ “Because there was no prespecified …” — Methods, p. 7, ¶3 ; “Calculation of odds ratios for …” — Results, p. 8, ¶7 ; “In the surgery group, 74 …” — Results, p. 8, ¶7 ; “The mean length of stay …” — Results, p. 8" },
  ],
    },
    {
      kind: "NonCodingReflection",
      id: "i22-noncodingreflection" as SectionId,
      title: "The Result (4)",
      content: [],
      topic: "ENRICH's secondary end points (ordinal mRS odds ratio 0.658, dichotomized mRS 0-3 rate 50.3% vs 41.0%, ICU stay shorter by 2.832 days) all favored surgery. Explain why these results do not independently establish benefit, despite pointing the same way as the primary end point.",
      minLength: 150,
      extraContext: "Assess multiplicity/appraisal reasoning, not code. A strong answer should note: the trial had no prespecified plan to adjust the Bayesian credible intervals (or frequentist CIs) for multiple comparisons across secondary and exploratory end points; therefore no definite conclusions can be drawn from these interval estimates; concordance in direction with the primary end point is corroborative and hypothesis-supporting but not confirmatory; and each unadjusted interval carries inflated false-positive risk. Credit distinguishing 'consistent with' from 'independently establishes.'",
    },
    {
      kind: "NonCodingReflection",
      id: "i23-noncodingreflection" as SectionId,
      title: "Who Was Enrolled (4)",
      content: [],
      topic: "A patient presents with a 95 ml primary thalamic hemorrhage 30 hours after last known well, with a pre-hemorrhage modified Rankin scale of 3. Explain, point by point, why the ENRICH result does not apply to this patient.",
      minLength: 150,
      extraContext: "Assess generalizability reasoning, not code. A strong answer should map the patient against the trial's boundaries: hematoma volume was restricted to 30-80 ml (95 ml is outside), primary thalamic hemorrhage was an explicit exclusion, surgery had to be feasible within 24 hours of last known well (30 hours is outside), and pre-hemorrhage modified Rankin had to be 0-1 (a score of 3 is outside). Credit recognizing that the ENRICH findings are limited to the restricted entry population and cannot be extrapolated to hematomas of these volumes or locations or to patients with worse baseline function or later presentation.",
    },
  ],
};

export default lessonData;
