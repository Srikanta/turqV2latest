// Errors
export const TOKEN_ERROR_CODE = 401
// Stripe
export const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
// Data API Links 
const BASE_URL = process.env.REACT_APP_API_BASE_URL
export const CONTEST_DATA_URL = `${BASE_URL}/contest`
export const LEGISLATION_DATA_URL = `${BASE_URL}/legislation`
export const LOGIN_URL = `${BASE_URL}/login`
export const REGISTER_URL = `${BASE_URL}/register`
export const PAYMENTS_URL = `${BASE_URL}/payments`
// Local Links
export const ABOUT_PAGE_URL = '/about'
export const CONTEST_PAGE_URL = '/contest'
export const LEGISLATION_PAGE_URL = '/legislation'
export const DRAFTER_PAGE_URL = 'https://app.gitbook.com/@turqtim/s/turq-io/'
export const SPONSOR_PAGE_URL = '/sponsor'
export const HOME_PAGE_URL = '/'
export const EDITOR_PAGE_URL = '/editor'
export const LOGIN_PAGE_URL = '/login'
export const REGISTER_PAGE_URL = '/register'
export const CHECKOUT_PAGE_URL = '/checkout'
export const THANKYOU_URL = `/thankyou`
export const POST_ISSUE_URL = '/editor/contest?new'

// Default Text
export const DEFAULT_CONTEST_RULES = 'American citizens and permanent residents are eligible to draft Legislation to address this Issue..\n\nSee the terms and conditions [here](/terms/Terms_Conditions.pdf).\n\n Noncompliance with these rules or the terms and conditions may be disqualified from receiving funds for any participation.'
export const DEFAULT_CONTEST_CRITERIA = `
**Initial Screening**\n\n
All legislation submissions will be put through an initial screening to ensure compliance with terms and conditions.\n\n
**Evaluation and Selection**\n\n
Decisions will be based on the following factors:\n\n\n\n
* **Technical Merit**\n\n  * Has the submission presented a clear understanding of the associated problems being addressed?\n  * Has the submission developed a logical and workable solution and approach to solving the problem(s)?\n  * What are the most significant aspects of this concept?\n  * Has the submission clearly described the breadth of impact of the change?\n\n\n\n
* **Originality**\n\n  * To what extent is this concept new, or in what way is this a variation of an existing idea?\n  * How is this concept unique?\n  * Does the concept use technical solutions rather than traditional approaches that often rely on enforcement?\n    * (Aim to create a law like the one that requires cars to include seatbelt reminder alerts, not like seatbelt laws that require traffic stops to enforce.)\n\n\n\n
* **Practicality**\n\n  * Who directly benefits from this concept?\n  * Can the improvements and the related activities be implemented in a practical manner?\n  * To what extent does the concept demonstrate a reasonable path for implementation?\n  * How likely is the concept to be accepted and easily used by the public sector?\n  * What are the costs anticipated to be incurred and the costs saved by executing this concept compared to the benefit to the public.\n\n
`
export const LEGISLATION_SUBTEXT = 'Be it enacted by the Senate and House of Representatives in General Court assembled, and by the authority of the same, as follows:'
// Editor Text
// Contest
export const LEGISLATION_TITLE = 'Official Title'
export const LEGISLATION_TITLE_HINT = 'The name of the legislation. Ex. An Act Establishing Financial Literacy Education In Massachusetts'
export const LEGISLATION_CHAPTER = 'What Chapter of the General Laws Do You Want to Modify?'
export const LEGISLATION_CHAPTER_HINT = 'Ex. Chapter 69 of the General Law is hereby amended by inserting the following after section 1Q the following section:'
export const LEGISLATION_SECTION = 'GENERAL LAWS SECTION'
export const LEGISLATION_SECTION_HINT = 'If you want to modify a Section of that Chapter, provide the number below. If you want to add a Section to the Chapter, give it a number below. Provide a Title for the new Section. Ex. Section 1R. Financial Literacy Education in Massachusetts'
export const LEGISLATION_ACCOMPLISHES = 'Describe what this bill accomplishes in 1-2 sentences'
export const LEGISLATION_ACCOMPLISHES_HINT = 'Ex. This document specifies minimum requirements for the implementation of a financial literacy education program in the public schools of the Commonwealth of Massachusetts.'
export const LEGISLATION_TERMS = 'Define the terms you will be using in this legislation'
export const LEGISLATION_TERMS_HINT = 'Ex. Public School - A school that is located in the Commonwealth of Massachusetts and maintained at public expense...\nPrivate School - A school that is located in the Commonwealth of Massachusetts and privately funded through parent paid tuition charges or sponsored by organizations...'
export const LEGISLATION_PURPOSE = 'Statement of Purpose (expand and go deeper on Bill description)'
export const LEGISLATION_PURPOSE_HINT = 'Ex. This legislation commissions the creation of an opt-in voluntary study..  allow the ongoing, long-term collection of financial health and satisfaction metrics as defined by the study authors...'
export const LEGISLATION_PROVISIONS = 'Provisions'
export const LEGISLATION_PROVISIONS_HINT = 'Ex. This legislation applies to all Massachusetts Public and Charter Schools that receive public federal funding in the Commonwealth of Massachusetts...'
export const LEGISLATION_EXCEPTIONS = 'Special Exceptions'
export const LEGISLATION_EXCEPTIONS_HINT = 'Ex. Private Schools are exempt from this legislation.Special Education curriculum and instruction are exempt from this legislation.'
export const LEGISLATION_OTHER = 'Other Provisions'
export const LEGISLATION_OTHER_HINT = 'Ex. A position on the Massachusetts State Board of Education shall be created to act as a liaison between the United States Department of Education and other State Boards of Education as it pertains to the education of financial literacy...'
// Legislation
export const CONTEST_TITLE = 'Title'
export const CONTEST_TITLE_HINT = 'Name of the Contest'
export const CONTEST_END_DATE = 'End Date'
export const CONTEST_END_DATE_HINT = 'Date the competition will close'
export const CONTEST_PRIZES = 'Prizes'
export const CONTEST_PRIZES_HINT = 'Cash prize (USD) to be awarded for this project'
export const CONTEST_DESCRIPTION = 'Description'
export const CONTEST_DESCRIPTION_HINT = 'Description of the purpose, background, and need for this legislation'
export const CONTEST_RULES = 'Rules'
export const CONTEST_RULES_HINT = 'Rules that you would like to set for this competition'
export const CONTEST_CRITERIA = 'Judging Criteria'
export const CONTEST_CRITERIA_HINT = 'Criteria that you will be using to select the winning legislation such as practicality, impact, technical merit, originality, etc'

// Social Media
export const TWITTER_SHARE_TEXT = "Hi everyone! I care about this issue on turq.io a lot, but it needs more funding to get turned into legislation. Check it out and maybe add some support! "
