export type FAQItem = {
  q: string;
  a: string;
};

export type TreatmentPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  whoItsFor: string[];
  howWeHelp: string[];
  whatToExpect: string[];
  proof: {
    reviewerName: string;
    reviewerTitle: string;
    reviewDate: string;
    testimonial: string;
    testimonialAttribution: string;
  };
  faqs: FAQItem[];
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    secondaryNote: string;
  };
  relatedLinks: { label: string; href: string }[];
  conditions: string[];
};

const DEFAULT_REVIEW = {
  reviewerName: "STC Clinical Team",
  reviewerTitle: "Licensed Clinicians",
  reviewDate: "March 8, 2026",
  testimonial:
    "The dual-track program helped me address both my mental health and my recovery. It was the first time my treatment felt complete.",
  testimonialAttribution: "Former client, Mental Health Track",
};

const CTA = {
  primaryLabel: "Call for a Free Consultation",
  primaryHref: "tel:8774991354",
  secondaryLabel: "Request an Assessment",
  secondaryHref: "https://treatmentsolutions.org/contact-us/",
  secondaryNote: "Prefer a form? Use our secure contact page and we will follow up within one business day.",
};

const RELATED = {
  mentalHealthHub: { label: "Mental Health Treatment", href: "/treatment/mental-health" },
  addictionHub: { label: "Addiction Treatment", href: "/treatment/addiction" },
  dualDiagnosisHub: { label: "Dual Diagnosis Treatment", href: "/treatment/dual-diagnosis" },
  relationshipsHub: { label: "Relationships & Abuse Support", href: "/treatment/relationships" },
  mentalHealthGroup: {
    label: "Anxiety, Depression, PTSD, Trauma, Grief & Identity",
    href: "/treatment/mental-health/anxiety-depression-ptsd-trauma-grief-identity",
  },
  addictionGroup: {
    label: "Alcohol, Drug, Prescription, Process & Gambling Addictions",
    href: "/treatment/addiction/alcohol-drug-prescription-process-gambling-sexual",
  },
  relationshipsGroup: {
    label: "Codependency & Emotional Abuse",
    href: "/treatment/relationships/codependency-emotional-abuse",
  },
  anxiety: { label: "Anxiety Treatment", href: "/treatment/mental-health/anxiety" },
  depression: { label: "Depression Treatment", href: "/treatment/mental-health/depression" },
  ptsdTrauma: { label: "PTSD & Trauma Treatment", href: "/treatment/mental-health/ptsd-trauma" },
  alcohol: { label: "Alcohol Use Treatment", href: "/treatment/addiction/alcohol" },
};

export const pages: Record<string, TreatmentPage> = {
  "mental-health-hub": {
    slug: "/treatment/mental-health",
    title: "Mental Health Treatment in New Mexico",
    metaTitle: "Mental Health Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient mental health treatment in New Mexico with intensive outpatient (IOP) options. Evidence-based care for anxiety, depression, PTSD, trauma, and more.",
    intro: [
      "Solutions Treatment Center provides outpatient mental health treatment in New Mexico with intensive outpatient (IOP) options for people who need structured care while staying connected to work and family.",
      "Our dual-track model integrates evidence-based therapy with practical coping skills to stabilize symptoms, build resilience, and restore daily routines.",
      "We support anxiety, depression, PTSD, trauma, grief and loss, identity issues, anger, shame, low self-esteem, disordered eating, chronic pain, and major life transitions.",
    ],
    whoItsFor: [
      "Persistent anxiety, panic, or racing thoughts that disrupt work, sleep, or relationships",
      "Depression, low motivation, or emotional numbness that makes daily life feel heavy",
      "PTSD or trauma responses such as hypervigilance, flashbacks, or avoidance",
      "Grief, shame, identity-related distress, or overwhelming life transitions",
      "Co-occurring substance use or process addiction that complicates recovery",
    ],
    howWeHelp: [
      "Comprehensive assessment to clarify symptoms, triggers, and care priorities",
      "Evidence-based therapy including CBT and DBT skills in individual and group settings",
      "Trauma-informed care focused on safety, stabilization, and nervous-system regulation",
      "Family support and education to strengthen the recovery environment",
    ],
    whatToExpect: [
      "Schedule a confidential call and complete a clinical intake",
      "Receive a personalized plan with outpatient or IOP scheduling",
      "Attend structured therapy sessions and skills groups with licensed clinicians",
      "Ongoing progress check-ins and plan adjustments as your needs change",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "What is the difference between outpatient and IOP?",
        a: "Outpatient care typically meets one to two times per week, while IOP provides a higher level of support with multiple sessions each week. We will recommend the level that fits your needs.",
      },
      {
        q: "Do you treat trauma, PTSD, and grief?",
        a: "Yes. We use trauma-informed approaches that focus on safety, stabilization, and long-term healing, including support for grief and loss.",
      },
      {
        q: "Can I work while in treatment?",
        a: "Many clients continue working or caregiving. We offer day and evening options to fit real schedules.",
      },
      {
        q: "Do you accept insurance?",
        a: "We work with many PPO plans and can verify your benefits quickly during intake.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.mentalHealthGroup,
      RELATED.anxiety,
      RELATED.depression,
      RELATED.ptsdTrauma,
      RELATED.dualDiagnosisHub,
    ],
    conditions: [
      "Anxiety",
      "Depression",
      "PTSD",
      "Trauma",
      "Grief & Loss",
      "Identity Issues",
      "Sexual Identity Issues",
      "Anger",
      "Shame",
      "Low Self-Esteem",
      "Life Transitions",
      "Disordered Eating",
      "Chronic Pain",
    ],
  },
  "addiction-hub": {
    slug: "/treatment/addiction",
    title: "Addiction Treatment in New Mexico",
    metaTitle: "Addiction Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient addiction treatment in New Mexico with intensive outpatient (IOP) options. Evidence-based care for alcohol, drugs, prescription misuse, and process addictions.",
    intro: [
      "Solutions Treatment Center provides outpatient addiction treatment in New Mexico with intensive outpatient (IOP) options for people who need structured recovery support without inpatient stays.",
      "We treat addiction alongside the mental health factors that can drive it, using a dual-track approach that addresses both substance use and emotional wellbeing.",
      "Support is available for alcohol use disorder, drug addiction, prescription misuse, process addictions, gambling addiction, and sexual compulsion.",
    ],
    whoItsFor: [
      "Alcohol or drug use that is difficult to control or causing ongoing problems",
      "Prescription misuse, opioid dependency, or risky medication patterns",
      "Process addictions such as gambling or compulsive sexual behavior",
      "Relapse concerns or a need for stronger accountability",
      "Co-occurring anxiety, depression, PTSD, or trauma alongside substance use",
    ],
    howWeHelp: [
      "Structured outpatient and IOP schedules with clinical oversight",
      "Individual therapy and relapse prevention planning",
      "Group therapy focused on accountability, coping, and recovery skills",
      "Family education and support to stabilize the home environment",
    ],
    whatToExpect: [
      "Confidential intake focused on substance use history and goals",
      "Customized plan with recommended frequency and track",
      "Ongoing therapy and recovery support with licensed clinicians",
      "Progress reviews and step-down planning as stability improves",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Do I need to stop using before starting treatment?",
        a: "We will meet you where you are. Your care team will help you determine the safest first step.",
      },
      {
        q: "What addictions do you treat?",
        a: "We treat alcohol use disorder, drug addiction, prescription misuse, gambling addiction, and other process addictions, including sexual compulsion.",
      },
      {
        q: "Can I attend IOP while working?",
        a: "Yes. We offer day and evening tracks to fit work and family responsibilities.",
      },
      {
        q: "Do you provide family support?",
        a: "Yes. Family education and counseling are available to support long-term recovery.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.addictionGroup,
      RELATED.alcohol,
      RELATED.dualDiagnosisHub,
      RELATED.mentalHealthHub,
    ],
    conditions: [
      "Alcoholism",
      "Substance Abuse",
      "Drug Addiction",
      "Prescription Addiction",
      "Process Addiction",
      "Gambling Addiction",
      "Sexual Compulsion",
    ],
  },
  "dual-diagnosis-hub": {
    slug: "/treatment/dual-diagnosis",
    title: "Dual Diagnosis Treatment in New Mexico",
    metaTitle: "Dual Diagnosis Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Dual diagnosis treatment in New Mexico with outpatient and IOP options. Integrated care for mental health and substance use together.",
    intro: [
      "Dual diagnosis treatment addresses mental health and substance use together. When anxiety, depression, PTSD, or trauma overlap with addiction, integrated care leads to stronger outcomes.",
      "Our outpatient and intensive outpatient (IOP) programs combine clinical therapy with recovery support to address both sides at once.",
      "You will work with a team that understands co-occurring conditions and builds a plan that fits your life in New Mexico.",
    ],
    whoItsFor: [
      "Substance use paired with anxiety, depression, PTSD, or trauma",
      "Relapse after treatment that addressed only addiction or only mental health",
      "Emotional distress that drives substance use as a coping tool",
      "Need for structured care while maintaining work or caregiving",
    ],
    howWeHelp: [
      "Integrated assessment across mental health and substance use",
      "Evidence-based therapy combined with recovery-focused support",
      "Skills for stress regulation, relapse prevention, and emotional resilience",
      "Coordinated care that aligns treatment goals across both tracks",
    ],
    whatToExpect: [
      "A full clinical assessment that identifies both diagnoses and priorities",
      "A blended treatment plan tailored to mental health and recovery goals",
      "Regular progress reviews to keep treatment aligned and effective",
      "Step-down planning and aftercare support for continued stability",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "What does dual diagnosis mean?",
        a: "Dual diagnosis refers to having both a mental health condition and a substance use disorder. Treating both together improves outcomes.",
      },
      {
        q: "Is dual diagnosis treatment outpatient?",
        a: "Yes. We offer outpatient and IOP schedules that provide structured support without requiring inpatient stays.",
      },
      {
        q: "What if I am not sure which issue is primary?",
        a: "We help you clarify what is driving symptoms and create a plan that addresses both sides.",
      },
      {
        q: "Do you treat PTSD, depression, and anxiety alongside addiction?",
        a: "Yes. Our dual diagnosis program integrates care for anxiety, depression, PTSD, trauma, and substance use together.",
      },
      {
        q: "Can family be involved?",
        a: "Yes. Family support and education are available when appropriate.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.mentalHealthHub,
      RELATED.addictionHub,
      RELATED.anxiety,
      RELATED.alcohol,
    ],
    conditions: [
      "Dual Diagnosis",
      "Anxiety",
      "Depression",
      "PTSD",
      "Trauma",
      "Alcoholism",
      "Drug Addiction",
      "Prescription Addiction",
    ],
  },
  "relationships-hub": {
    slug: "/treatment/relationships",
    title: "Relationships & Abuse Support in New Mexico",
    metaTitle: "Relationships & Abuse Support in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient counseling in New Mexico for codependency, emotional abuse recovery, and relationship healing. Confidential, trauma-informed support.",
    intro: [
      "Relational wounds can shape how we cope, connect, and care for ourselves. We provide outpatient support in New Mexico for people working through codependency, emotional abuse, and the impact of unhealthy relationships.",
      "Our clinicians use trauma-informed therapy to rebuild boundaries, confidence, and emotional safety.",
      "If you are navigating emotional abuse, sexual abuse, or the aftermath of relationship trauma, we offer a clear path forward with compassion and structure.",
    ],
    whoItsFor: [
      "Codependency or difficulty setting healthy boundaries",
      "Emotional abuse or manipulation that impacts self-esteem",
      "Relationship trauma that connects with anxiety, shame, or depression",
      "Survivors of sexual abuse who want trauma-informed care",
      "Family conflict that affects recovery or mental health",
    ],
    howWeHelp: [
      "Trauma-informed therapy focused on safety and stabilization",
      "Skills for boundaries, communication, and self-advocacy",
      "Supportive group work to reduce isolation and shame",
      "Family counseling when appropriate",
    ],
    whatToExpect: [
      "Private intake to understand your history and goals",
      "A care plan centered on safety, coping tools, and recovery",
      "Flexible outpatient scheduling that fits your life",
      "Ongoing reviews to support long-term healing",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Can I get support if I am still in a difficult relationship?",
        a: "Yes. We focus on safety, options, and coping strategies that meet you where you are.",
      },
      {
        q: "Do you treat sexual abuse or assault trauma?",
        a: "Yes. Our therapists use trauma-informed approaches that prioritize safety and choice.",
      },
      {
        q: "Is this therapy only for couples?",
        a: "No. These services are for individuals seeking healthier patterns and recovery from relational harm.",
      },
      {
        q: "Can this be part of dual diagnosis treatment?",
        a: "Yes. We can integrate relationship-focused therapy into a broader care plan.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.relationshipsGroup,
      RELATED.mentalHealthHub,
      RELATED.dualDiagnosisHub,
    ],
    conditions: [
      "Codependency",
      "Emotional Abuse",
      "Sexual Abuse",
      "Sexual Assault/Trauma",
    ],
  },
  "mental-health-group": {
    slug: "/treatment/mental-health/anxiety-depression-ptsd-trauma-grief-identity",
    title:
      "Anxiety, Depression, PTSD, Trauma, Grief & Identity Treatment in New Mexico",
    metaTitle:
      "Anxiety, Depression, PTSD & Trauma Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient mental health treatment in New Mexico for anxiety, depression, PTSD, trauma, grief, and identity issues. IOP options available.",
    intro: [
      "If anxiety, depression, trauma, or grief are affecting your life, you do not have to manage it alone. We provide outpatient and intensive outpatient care across New Mexico.",
      "Our clinicians address a wide range of concerns including shame, low self-esteem, anger, identity stress, life transitions, and chronic pain.",
      "Treatment is designed to stabilize symptoms, build coping skills, and support long-term recovery.",
    ],
    whoItsFor: [
      "Anxiety, panic, or persistent worry that disrupts daily life",
      "Depression, low energy, or emotional numbness",
      "PTSD or trauma symptoms including hypervigilance or flashbacks",
      "Grief, shame, or identity-related distress",
      "Anger, low self-esteem, or life transitions that feel overwhelming",
    ],
    howWeHelp: [
      "Individual therapy and skills groups using CBT and DBT approaches",
      "Trauma-informed care focused on safety and regulation",
      "Support for identity issues, shame, and self-worth",
      "Structured outpatient and IOP schedules to match your needs",
    ],
    whatToExpect: [
      "Clinical intake to understand symptoms, history, and goals",
      "A personalized care plan with frequency and track recommendations",
      "Ongoing therapy and skills practice with licensed clinicians",
      "Regular check-ins to adjust treatment over time",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Can you treat multiple mental health concerns at once?",
        a: "Yes. We commonly treat overlapping concerns like anxiety, depression, and trauma together.",
      },
      {
        q: "Do you offer care for identity or self-esteem issues?",
        a: "Yes. We provide support for identity stress, shame, and low self-esteem as part of a broader care plan.",
      },
      {
        q: "What if I also struggle with substance use?",
        a: "We can integrate dual diagnosis care when mental health and substance use overlap.",
      },
      {
        q: "Is IOP available for mental health treatment?",
        a: "Yes. We offer structured IOP schedules with day and evening options.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.mentalHealthHub,
      RELATED.anxiety,
      RELATED.depression,
      RELATED.ptsdTrauma,
      RELATED.dualDiagnosisHub,
    ],
    conditions: [
      "Anxiety",
      "Depression",
      "PTSD",
      "Trauma",
      "Grief & Loss",
      "Identity Issues",
      "Sexual Identity Issues",
      "Anger",
      "Shame",
      "Low Self-Esteem",
      "Life Transitions",
      "Chronic Pain",
      "Disordered Eating",
    ],
  },
  "addiction-group": {
    slug: "/treatment/addiction/alcohol-drug-prescription-process-gambling-sexual",
    title:
      "Alcohol, Drug, Prescription, Process & Gambling Addiction Treatment in New Mexico",
    metaTitle:
      "Alcohol, Drug & Prescription Addiction Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient addiction treatment in New Mexico for alcohol, drug, prescription, process, gambling, and sexual compulsions. IOP options available.",
    intro: [
      "Addiction looks different for everyone, but it often comes with isolation, shame, and lost control. We offer outpatient and intensive outpatient treatment across New Mexico.",
      "Support is available for alcohol, drugs, prescription misuse, gambling addiction, process addictions, and sexual compulsion.",
      "Our dual-track model addresses substance use while also treating the underlying emotional and mental health factors.",
    ],
    whoItsFor: [
      "Alcohol use that is hard to stop or causing health and relationship problems",
      "Drug addiction or unsafe patterns of substance use",
      "Prescription misuse or dependence on medications",
      "Gambling addiction or other process addictions",
      "Compulsive sexual behavior that feels out of control",
    ],
    howWeHelp: [
      "Structured outpatient and IOP programs with clinical oversight",
      "Relapse prevention planning and coping skills development",
      "Group therapy for accountability and support",
      "Integrated mental health treatment when needed",
    ],
    whatToExpect: [
      "Confidential intake to understand use patterns and goals",
      "Personalized treatment plan with track recommendations",
      "Therapy sessions and recovery support with licensed clinicians",
      "Ongoing progress reviews and step-down planning",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Do you treat behavioral or process addictions?",
        a: "Yes. We treat gambling addiction, process addiction, and sexual compulsion with evidence-based therapy and recovery planning.",
      },
      {
        q: "Is outpatient treatment enough for addiction?",
        a: "Many people benefit from outpatient or IOP care. We will recommend the level of support that matches your needs.",
      },
      {
        q: "Do you offer dual diagnosis care?",
        a: "Yes. We integrate mental health treatment when anxiety, depression, or trauma is part of the picture.",
      },
      {
        q: "Can family be involved in treatment?",
        a: "Yes. Family counseling and education are available when appropriate.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.addictionHub,
      RELATED.alcohol,
      RELATED.dualDiagnosisHub,
      RELATED.mentalHealthHub,
    ],
    conditions: [
      "Alcoholism",
      "Drug Addiction",
      "Substance Abuse",
      "Prescription Addiction",
      "Process Addiction",
      "Gambling Addiction",
      "Sexual Compulsion",
    ],
  },
  "relationships-group": {
    slug: "/treatment/relationships/codependency-emotional-abuse",
    title: "Codependency & Emotional Abuse Recovery in New Mexico",
    metaTitle:
      "Codependency & Emotional Abuse Recovery in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient counseling in New Mexico for codependency, emotional abuse, and relationship trauma. Confidential, trauma-informed care.",
    intro: [
      "Codependency and emotional abuse can erode confidence, boundaries, and emotional safety. We provide outpatient counseling that helps you rebuild stability and self-trust.",
      "Our clinicians support people healing from emotional abuse, relational trauma, and the effects of unhealthy patterns.",
      "If sexual abuse or assault is part of your history, we offer trauma-informed support within a safe, confidential setting.",
    ],
    whoItsFor: [
      "Codependency and difficulty setting healthy boundaries",
      "Emotional abuse or manipulation that has impacted self-esteem",
      "Relationship trauma that fuels anxiety, shame, or depression",
      "Survivors of sexual abuse or assault seeking support",
      "Family dynamics that interfere with recovery or wellbeing",
    ],
    howWeHelp: [
      "Trauma-informed therapy focused on safety and stabilization",
      "Skills for boundaries, communication, and self-advocacy",
      "Group therapy to reduce isolation and build support",
      "Integration with mental health or dual diagnosis treatment when needed",
    ],
    whatToExpect: [
      "Private intake focused on safety, goals, and history",
      "A care plan with clear next steps and a realistic schedule",
      "Regular sessions with licensed clinicians",
      "Ongoing reviews to support long-term healing",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Do you help with sexual abuse trauma?",
        a: "Yes. We provide trauma-informed therapy that prioritizes safety and choice.",
      },
      {
        q: "Is codependency a treatable issue?",
        a: "Yes. Therapy can help you build healthier boundaries, communication, and self-worth.",
      },
      {
        q: "Can I receive support while still in a difficult relationship?",
        a: "Yes. We focus on immediate coping tools and safety planning.",
      },
      {
        q: "Do you offer group therapy for these concerns?",
        a: "Yes. Groups can reduce isolation and build practical skills.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.relationshipsHub,
      RELATED.mentalHealthHub,
      RELATED.dualDiagnosisHub,
    ],
    conditions: [
      "Codependency",
      "Emotional Abuse",
      "Sexual Abuse",
      "Sexual Assault/Trauma",
      "Shame",
      "Low Self-Esteem",
    ],
  },
  "anxiety": {
    slug: "/treatment/mental-health/anxiety",
    title: "Anxiety Treatment in New Mexico",
    metaTitle: "Anxiety Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient anxiety treatment in New Mexico with IOP options. Evidence-based care for panic, worry, and anxiety-related symptoms.",
    intro: [
      "Anxiety can show up as constant worry, panic, or a sense that something is always wrong. Our outpatient and intensive outpatient programs provide structured support to reduce symptoms and restore stability.",
      "We focus on practical tools, nervous-system regulation, and evidence-based therapy to help you regain control.",
    ],
    whoItsFor: [
      "Persistent worry, panic attacks, or physical anxiety symptoms",
      "Avoidance of work, school, or social situations",
      "Sleep disruption or racing thoughts that never quiet down",
      "Anxiety that overlaps with depression or substance use",
    ],
    howWeHelp: [
      "CBT and DBT skills to manage anxious thoughts and reactions",
      "Trauma-informed approaches when anxiety is rooted in past experiences",
      "Structured outpatient and IOP schedules to create consistency",
      "Relapse prevention and stress-reduction planning",
    ],
    whatToExpect: [
      "A clinical intake focused on triggers and daily impact",
      "A treatment plan tailored to your symptoms and goals",
      "Weekly therapy sessions with licensed clinicians",
      "Progress reviews to adjust treatment as you improve",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Is anxiety treated differently than depression?",
        a: "Yes. We tailor treatment to your symptoms, even when anxiety and depression overlap.",
      },
      {
        q: "Do you treat panic attacks?",
        a: "Yes. We provide tools to reduce panic symptoms and address the underlying causes.",
      },
      {
        q: "Can I work while in treatment?",
        a: "Yes. We offer day and evening schedules to fit real-life demands.",
      },
      {
        q: "Is anxiety ever part of dual diagnosis care?",
        a: "Yes. We integrate treatment if substance use is also a concern.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.mentalHealthHub,
      RELATED.mentalHealthGroup,
      RELATED.depression,
      RELATED.ptsdTrauma,
      RELATED.dualDiagnosisHub,
    ],
    conditions: ["Anxiety"],
  },
  "depression": {
    slug: "/treatment/mental-health/depression",
    title: "Depression Treatment in New Mexico",
    metaTitle: "Depression Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient depression treatment in New Mexico with IOP options. Compassionate, evidence-based care for mood and motivation challenges.",
    intro: [
      "Depression can make even simple tasks feel impossible. Our outpatient and intensive outpatient programs provide structure, therapy, and support so you are not facing it alone.",
      "We focus on practical tools, emotional regulation, and restoring daily routines in a way that fits your life.",
    ],
    whoItsFor: [
      "Low mood, lack of motivation, or loss of interest in daily life",
      "Sleep changes, fatigue, or difficulty concentrating",
      "Feelings of shame, low self-esteem, or hopelessness",
      "Depression that overlaps with anxiety or substance use",
    ],
    howWeHelp: [
      "Evidence-based therapy focused on mood, thoughts, and behaviors",
      "Skills-based groups to rebuild routine and confidence",
      "Trauma-informed care when depression connects to loss or trauma",
      "Outpatient and IOP schedules to match the level of support you need",
    ],
    whatToExpect: [
      "A confidential assessment of symptoms and daily impact",
      "A personalized plan with the right frequency of care",
      "Ongoing therapy and skill-building with licensed clinicians",
      "Regular progress check-ins to measure improvement",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "How long does depression treatment take?",
        a: "Every person is different. We will help you set goals and evaluate progress regularly.",
      },
      {
        q: "Do you treat grief-related depression?",
        a: "Yes. We provide support for grief and loss as part of depression care.",
      },
      {
        q: "Can I receive IOP for depression?",
        a: "Yes. We offer intensive outpatient options for deeper support.",
      },
      {
        q: "What if I also struggle with addiction?",
        a: "We can integrate dual diagnosis care when both are present.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.mentalHealthHub,
      RELATED.mentalHealthGroup,
      RELATED.anxiety,
      RELATED.ptsdTrauma,
      RELATED.dualDiagnosisHub,
    ],
    conditions: ["Depression"],
  },
  "ptsd-trauma": {
    slug: "/treatment/mental-health/ptsd-trauma",
    title: "PTSD & Trauma Treatment in New Mexico",
    metaTitle: "PTSD & Trauma Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Trauma-informed outpatient treatment in New Mexico for PTSD, sexual assault, and trauma recovery. IOP options available.",
    intro: [
      "Trauma can affect the body, relationships, and sense of safety. Our outpatient and intensive outpatient care provides trauma-informed treatment that prioritizes stabilization and healing.",
      "We support people living with PTSD, sexual assault or abuse trauma, and the lingering effects of painful experiences.",
    ],
    whoItsFor: [
      "PTSD symptoms such as flashbacks, hypervigilance, or avoidance",
      "Trauma from sexual assault, abuse, or domestic violence",
      "Sleep disruption, emotional numbness, or intense reactivity",
      "Trauma that overlaps with anxiety, depression, or substance use",
    ],
    howWeHelp: [
      "Trauma-informed therapy focused on safety and regulation",
      "Skills to manage triggers and restore a sense of control",
      "Group support that reduces isolation and shame",
      "Outpatient and IOP scheduling based on your needs",
    ],
    whatToExpect: [
      "A confidential intake focused on safety and symptoms",
      "A trauma-informed care plan tailored to your pace",
      "Ongoing therapy with licensed clinicians",
      "Regular check-ins to ensure treatment remains supportive",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Do you treat sexual assault or abuse trauma?",
        a: "Yes. We provide trauma-informed care that centers safety and choice.",
      },
      {
        q: "Is PTSD treated in outpatient care?",
        a: "Yes. Many clients benefit from outpatient or IOP support for PTSD.",
      },
      {
        q: "Will I have to talk about details of my trauma?",
        a: "No. We move at your pace and focus on safety and stability first.",
      },
      {
        q: "Can trauma be part of dual diagnosis treatment?",
        a: "Yes. We integrate treatment when trauma and substance use overlap.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.mentalHealthHub,
      RELATED.mentalHealthGroup,
      RELATED.anxiety,
      RELATED.depression,
      RELATED.dualDiagnosisHub,
    ],
    conditions: ["PTSD", "Trauma", "Sexual Assault/Trauma"],
  },
  "alcohol": {
    slug: "/treatment/addiction/alcohol",
    title: "Alcohol Treatment in New Mexico",
    metaTitle: "Alcohol Treatment in New Mexico | Solutions Treatment Center",
    metaDescription:
      "Outpatient alcohol treatment in New Mexico with IOP options. Evidence-based support for alcohol use disorder and recovery.",
    intro: [
      "Alcohol use can gradually erode health, relationships, and daily stability. Our outpatient and intensive outpatient programs provide structured support for lasting change.",
      "We focus on recovery skills, relapse prevention, and the mental health factors that often drive alcohol use.",
    ],
    whoItsFor: [
      "Alcohol use that feels hard to control or stop",
      "Recurring conflicts at work or home tied to drinking",
      "Withdrawal concerns or repeated relapse",
      "Alcohol use that overlaps with anxiety, depression, or trauma",
    ],
    howWeHelp: [
      "Evidence-based therapy and relapse prevention planning",
      "Group support focused on accountability and recovery skills",
      "Dual diagnosis care when mental health is part of the picture",
      "Flexible outpatient and IOP schedules to fit your life",
    ],
    whatToExpect: [
      "Confidential intake and assessment of alcohol use patterns",
      "A personalized care plan with track recommendations",
      "Ongoing therapy and recovery support",
      "Progress reviews to maintain momentum and stability",
    ],
    proof: DEFAULT_REVIEW,
    faqs: [
      {
        q: "Do you treat alcohol use disorder outpatient?",
        a: "Yes. Many clients benefit from outpatient or IOP care depending on severity and support needs.",
      },
      {
        q: "What if I also struggle with anxiety or depression?",
        a: "We integrate mental health treatment through our dual diagnosis approach.",
      },
      {
        q: "Can family be involved in alcohol treatment?",
        a: "Yes. Family education and counseling are available when appropriate.",
      },
      {
        q: "How quickly can I start?",
        a: "We aim to schedule assessments quickly. Call to speak with our admissions team.",
      },
    ],
    cta: CTA,
    relatedLinks: [
      RELATED.addictionHub,
      RELATED.addictionGroup,
      RELATED.dualDiagnosisHub,
      RELATED.mentalHealthHub,
    ],
    conditions: ["Alcoholism"],
  },
};

export const pageOrder = [
  pages["mental-health-hub"],
  pages["addiction-hub"],
  pages["dual-diagnosis-hub"],
  pages["relationships-hub"],
  pages["mental-health-group"],
  pages["addiction-group"],
  pages["relationships-group"],
  pages["anxiety"],
  pages["depression"],
  pages["ptsd-trauma"],
  pages["alcohol"],
];
