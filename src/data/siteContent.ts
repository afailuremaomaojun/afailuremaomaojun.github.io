// 日常维护只需编辑本文件：个人资料、新闻、教育经历、研究主题和论文。
// 新增论文时，在 publications 数组中复制一个对象并修改字段；统计数据会自动更新。

export const profile = {
  name: 'Wentao Chen',
  initials: 'WC',
  role: 'Ph.D. Student · Computer Science and Technology',
  headline: 'I study how open-source software ecosystems can become more reliable, secure, and sustainable.',
  bio: 'I am a Ph.D. student in the Department of Computer Science and Engineering at East China University of Science and Technology, advised by Huiqun Yu. I received my B.Eng. degree from ECUST in 2024.',
  institution: 'East China University of Science and Technology',
  advisor: 'Huiqun Yu',
  location: 'Shanghai, China',
  email: 'wentaochen@mail.ecust.edu.cn',
  repository: 'https://github.com/afailuremaomaojun/afailuremaomaojun.github.io',
  researchIntro: 'From SCA and SBOM to model supply chains, my work examines the artifacts, processes, and collaborations that sustain open-source software.',
  researchInterests: [
    'Open-Source Software Ecosystem Governance',
    'AI for Software Engineering',
    'Empirical Software Engineering',
  ],
  footerHeading: 'Let’s talk about software engineering research.',
}

export const news = [
  {
    date: 'Oct 2026',
    text: 'RealAIGC received the ACM SIGSOFT Distinguished Paper Award at ASE 2026.',
  },
  {
    date: 'Jul 2026',
    text: 'One paper was accepted to the ASE 2026 Industry Showcase Track.',
  },
  {
    date: 'Jun 2026',
    text: 'One paper was directly accepted to ASE 2026.',
  },
  {
    date: 'Jun 2026',
    text: 'Congratulations to Kaiwen Zhi — one paper was accepted to ISSTA 2026 after major revision.',
  },
]

export const education = [
  {
    date: '2024.09 — Present',
    degree: 'Ph.D. in Computer Science and Technology',
    institution: 'East China University of Science and Technology',
    location: 'Shanghai, China',
  },
  {
    date: '2020.09 — 2024.06',
    degree: 'B.Eng.',
    institution: 'East China University of Science and Technology',
    location: 'Shanghai, China',
  },
]

export type TopicId =
  | 'components'
  | 'reliability'
  | 'licensing'
  | 'maintenance'
  | 'models'

export interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  venueShort: string
  year: number
  type: 'Conference' | 'Journal'
  rank: 'CCF-A' | 'CCF-B' | 'CCF-C'
  topic: TopicId
  url: string
  doi?: string
  firstAuthor?: boolean
  award?: string
}

export const topics: Array<{
  id: TopicId
  title: string
  description: string
  color: string
}> = [
  {
    id: 'components',
    title: 'SCA & SBOM',
    description: 'Fine-grained source SCA and evaluation of software composition analysis tools.',
    color: '#003b8f',
  },
  {
    id: 'reliability',
    title: 'Reliability & Security',
    description: 'Just-in-time defect prediction, bug reports, and vulnerability-fixing identification.',
    color: '#b53a2c',
  },
  {
    id: 'licensing',
    title: 'Licensing & Compliance',
    description: 'License compatibility detection for open-source Java projects.',
    color: '#855700',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Sustainability',
    description: 'Software evolution, AI-agent collaboration, AIGC detection, and developer output.',
    color: '#007d77',
  },
  {
    id: 'models',
    title: 'Model Supply Chain',
    description: 'Intellectual property protection across open-source model supply chains.',
    color: '#1c304c',
  },
]

export const researchOverview = {
  eyebrow: 'Research overview',
  title: 'Toward Trustworthy and Sustainable Open-Source Software Ecosystems',
  description: 'My research investigates how software artifacts, development processes, and human–AI collaboration shape open-source software. By combining empirical software engineering with AI for software engineering, I develop and evaluate methods that make software ecosystems more reliable, secure, compliant, and sustainable.',
  inputsLabel: 'Research objects',
  inputs: ['Code & Changes', 'Components & SBOMs', 'Issues & Bug Reports', 'Licenses', 'Model Artifacts'],
  directionsLabel: 'Research directions',
  methodsLabel: 'Cross-cutting methods',
  methods: ['Empirical Software Engineering', 'AI for Software Engineering'],
  outcomesLabel: 'Research goals',
  outcomes: ['Reliable Software', 'Secure Ecosystems', 'License Compliance', 'Sustainable Maintenance', 'Protected Model IP'],
}

export const publications: Publication[] = [
  {
    id: 'jdetect',
    title: 'JDetect: A Fine-Grained Detecting Method for Java Source SCA by Fusing Behavioral and Code Features',
    authors: 'Guisheng Fan, Shulin Liu, Wentao Chen, Huiqun Yu, Huan Wang, Diwen Shi',
    venue: 'FSE 2026 · Industry Track',
    venueShort: 'FSE 2026',
    year: 2026,
    type: 'Conference',
    rank: 'CCF-A',
    topic: 'components',
    url: 'https://doi.org/10.1145/3803437.3805233',
    doi: '10.1145/3803437.3805233',
  },
  {
    id: 'tool-or-toy',
    title: 'Tool or Toy: Are SCA Tools Ready for Challenging Scenarios?',
    authors: 'Congyan Shu, Wentao Chen, Guisheng Fan, Huiqun Yu, Zijie Huang, Yuguo Liang',
    venue: 'Computers & Security · 2025',
    venueShort: 'Computers & Security',
    year: 2025,
    type: 'Journal',
    rank: 'CCF-B',
    topic: 'components',
    url: 'https://www.sciencedirect.com/science/article/pii/S016740482500313X',
  },
  {
    id: 'revisiting-jit',
    title: 'Revisiting Pre-Trained Models and Feature Fusion Strategies for Just-In-Time Defect Prediction',
    authors: 'Yuguo Liang, Guisheng Fan, Huiqun Yu, Wentao Chen, Chengcheng Wu, Zijie Huang',
    venue: 'Information and Software Technology · 2026',
    venueShort: 'IST 2026',
    year: 2026,
    type: 'Journal',
    rank: 'CCF-B',
    topic: 'reliability',
    url: 'https://www.sciencedirect.com/science/article/pii/S095058492600159X',
  },
  {
    id: 'extrinsic-bugs',
    title: 'Automatic Identification of Extrinsic Bug Reports for Just-in-Time Bug Prediction',
    authors: 'Guisheng Fan, Yuguo Liang, Longfei Zu, Huiqun Yu, Zijie Huang, Wentao Chen',
    venue: 'Science of Computer Programming · 2026',
    venueShort: 'SCP 2026',
    year: 2026,
    type: 'Journal',
    rank: 'CCF-B',
    topic: 'reliability',
    url: 'https://doi.org/10.1016/j.scico.2025.103410',
    doi: '10.1016/j.scico.2025.103410',
  },
  {
    id: 'jit-align',
    title: 'JIT-Align: A Semantic Alignment-Based Ranking Framework for Just-In-Time Defect Prediction',
    authors: 'Yujie Ye, Huiqun Yu, Guisheng Fan, Yuguo Liang, Jianan Dong, Wentao Chen',
    venue: 'COMPSAC 2025',
    venueShort: 'COMPSAC 2025',
    year: 2025,
    type: 'Conference',
    rank: 'CCF-C',
    topic: 'reliability',
    url: 'https://ieeexplore.ieee.org/abstract/document/11126559/',
  },
  {
    id: 'jit-coka',
    title: 'JIT-Coka: An Improved Framework for Just-in-Time Defect Prediction and Localization Using Fused Features of Code Change',
    authors: 'Yuguo Liang, Chengcheng Wu, Wentao Chen, Guisheng Fan, Huiqun Yu',
    venue: 'CollaborateCom 2025',
    venueShort: 'CollaborateCom 2025',
    year: 2025,
    type: 'Conference',
    rank: 'CCF-C',
    topic: 'reliability',
    url: 'https://link.springer.com/chapter/10.1007/978-3-032-21168-2_10',
  },
  {
    id: 'vfprober',
    title: 'VFProber: A Vulnerability-Fixing Identification Framework Based on Code Changes and Semantic Adjustment',
    authors: 'Jianan Dong, Guisheng Fan, Yueming Yu, Yuguo Liang, Yujie Ye, Huiqun Yu, Wentao Chen',
    venue: 'COMPSAC 2025',
    venueShort: 'COMPSAC 2025',
    year: 2025,
    type: 'Conference',
    rank: 'CCF-C',
    topic: 'reliability',
    url: 'https://ieeexplore.ieee.org/abstract/document/11126599/',
  },
  {
    id: 'license-compatibility',
    title: 'License Compatibility Detection for OpenJavaWorks Open-Source Projects Based on Code Similarity',
    authors: 'Xiaotong Wang, Huiqun Yu, Guisheng Fan, Yuguo Liang, Wentao Chen, Jingyi Liu',
    venue: 'COMPSAC 2025',
    venueShort: 'COMPSAC 2025',
    year: 2025,
    type: 'Conference',
    rank: 'CCF-C',
    topic: 'licensing',
    url: 'https://ieeexplore.ieee.org/abstract/document/11126811/',
  },
  {
    id: 'financial-evolution',
    title: 'A Longitudinal Analysis of Software Development Evolution in a Financial Organization',
    authors: 'Wentao Chen, Zehong Zhang, Huiqun Yu, Guisheng Fan, Huan Wang, Kaiwen Zhi',
    venue: 'ASE 2026 · Industry Showcase',
    venueShort: 'ASE 2026 Industry',
    year: 2026,
    type: 'Conference',
    rank: 'CCF-A',
    topic: 'maintenance',
    url: 'https://doi.org/10.1145/3832783.3834515',
    doi: '10.1145/3832783.3834515',
    firstAuthor: true,
  },
  {
    id: 'ai-agent-collaboration',
    title: 'Unpacking AI Agent Participation in Issue-Centered Collaboration in Open-Source Software Development',
    authors: 'Kaiwen Zhi, Guisheng Fan, Wentao Chen',
    venue: 'ISSTA 2026',
    venueShort: 'ISSTA 2026',
    year: 2026,
    type: 'Conference',
    rank: 'CCF-A',
    topic: 'maintenance',
    url: 'https://doi.org/10.1145/3832206',
    doi: '10.1145/3832206',
  },
  {
    id: 'realaigc',
    title: 'RealAIGC: Towards More Realistic Evaluation of AI-Generated Code Detection in Real-World Code Repository',
    authors: 'Wentao Chen, Yufei Chen, Huiqun Yu, Guisheng Fan, Kaiwen Zhi, Peite Guo, Jianyuan Yu',
    venue: 'ASE 2026',
    venueShort: 'ASE 2026',
    year: 2026,
    type: 'Conference',
    rank: 'CCF-A',
    topic: 'maintenance',
    url: 'https://doi.org/10.1145/3832783.3834411',
    doi: '10.1145/3832783.3834411',
    firstAuthor: true,
    award: 'ACM SIGSOFT Distinguished Paper Award',
  },
  {
    id: 'developer-output',
    title: 'Usage Patterns of Software Product Metrics in Assessing Developers’ Output: A Comprehensive Study',
    authors: 'Wentao Chen, Huiqun Yu, Guisheng Fan, Zijie Huang, Yuguo Liang',
    venue: 'Information and Software Technology · 2025',
    venueShort: 'IST 2025',
    year: 2025,
    type: 'Journal',
    rank: 'CCF-B',
    topic: 'maintenance',
    url: 'https://www.sciencedirect.com/science/article/pii/S0950584925002745',
    firstAuthor: true,
  },
  {
    id: 'federated-watermarking',
    title: 'A Federated Watermarking Method for Intellectual Property Protection in Model Supply Chain',
    authors: 'Xiao Yi, Huiqun Yu, Hengrun Zhang, Guisheng Fan, Wentao Chen',
    venue: 'SEKE 2026',
    venueShort: 'SEKE 2026',
    year: 2026,
    type: 'Conference',
    rank: 'CCF-C',
    topic: 'models',
    url: 'https://doi.org/10.18293/SEKE2026-009',
    doi: '10.18293/SEKE2026-009',
  },
]

export function getBibtex(paper: Publication) {
  const entryType = paper.type === 'Journal' ? 'article' : 'inproceedings'
  const venueField = paper.type === 'Journal' ? 'journal' : 'booktitle'
  const venueName = paper.venue.replace(/ · \d{4}/, '').replace(/ · .+$/, '')
  const doiLine = paper.doi ? `,\n  doi = {${paper.doi}}` : ''
  return `@${entryType}{chen-${paper.id}-${paper.year},
  title = {${paper.title}},
  author = {${paper.authors.split(', ').join(' and ')}},
  ${venueField} = {${venueName}},
  year = {${paper.year}},
  url = {${paper.url}}${doiLine}
}`
}
