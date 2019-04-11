export const domain = [
  { key: "apps", text: "Apps" },
  { key: "beo", text: "BEO(Deliver Core Ops" },
  { key: "ba", text: "Business Applcaitions" },
  { key: "cdd", text: "CDD(Cross Domain Delivery)" },
  { key: "dai", text: "Data and AI" },
  { key: "es", text: "Enterprise Services, Non Domain" },
  { key: "prod", text: "Productivity" },
  { key: "si", text: "Secure Infra" }
];
export const timezone = [
  { key: "americas", text: "Americas" },
  { key: "apj", text: "APJ" },
  { key: "emea", text: "EMEA" },
  { key: "igd", text: "IGD" },
  { key: "nott", text: "Not Time Zone Specific" }
];
export const standardTitle = [
  { key: "architect", text: "Architect" },
  { key: "architectmanager", text: "Architect Manager" },
  { key: "bpmmanager", text: "BPM Manager" },
  { key: "bus", text: "Bus Ops & Program Mgmt Leader" },
  { key: "ba", text: "Business Administrator" },
  { key: "bm", text: "Business Manager" },
  { key: "bpm", text: "Business Program Manager" },
  { key: "consultant", text: "Consultant" },
  { key: "dsdm", text: "Data Science Delivery Manager" },
  { key: "dds", text: "Delivery Data Scientist" }
];
export const qualifier = [
  { key: "q1", text: "Qualifier One" },
  { key: "q2", text: "Qualifier Two" },
  { key: "q3", text: "Qualifier Three" },
  { key: "q4", text: "Qualifier Four" },
  { key: "q5", text: "Qualifier Five" },
  { key: "q6", text: "Qualifier Six" }
];

export const careerstage = [
  { key: "career1", text: "Career One" },
  { key: "career2", text: "Career Two" },
  { key: "career3", text: "Career Three" },
  { key: "career4", text: "Career Four" },
  { key: "career5", text: "Career Five" },
  { key: "career6", text: "Career Six" }
];
export const employeetype = [
  { key: "full", text: "Full-Time Employee" },
  { key: "jobshare", text: "Job Share" },
  { key: "part", text: "Part-Time Employee" },
  { key: "temp", text: "Temporary" }
];
export const security = [
  { key: "none", text: "None" },
  { key: "low", text: "Low" },
  { key: "medium", text: "Medium" },
  { key: "high", text: "High" },
  { key: "plus", text: "Plus" }
];
export const travel = [
  { key: "1q", text: "0 - 25" },
  { key: "2q", text: "25 - 50" },
  { key: "3q", text: "50 - 75" },
  { key: "4q", text: "75 - 100" }
];
export const quest = [
  { key: "quest1", text: "Cost center" },
  { key: "quest2", text: "Incentive Plan" },
  { key: "quest3", text: "Qualifier 1" },
  { key: "quest4", text: "Qualifier 2" },
  { key: "quest5", text: "Reports to Manager" },
  { key: "quest6", text: "Standard Title" }
];
export const role = [
  { key: "none", text: "Attrition (Backfill)" },
  { key: "cfo", text: "CFO Forecast" },
  { key: "incremental", text: "Incremental Revenue" },
  { key: "net", text: "Net New" },
  { key: "nte", text: "NTE Budget" },
  { key: "internal", text: "Internam, Domain Transfer" }
];

export const formOption = [
  {
    key: "request",
    text: "Core and Commong: PCN request for offer",
    option: [
      {
        key: "requesttype",
        text: "Request Type",
        value: "Core and Common: PCN Request for Offer",
        type: "d"
      },
      { key: "referencename", text: "Reference Name", type: "t" },
      { key: "domain", text: "Domain", type: "d", options: domain },
      { key: "timezone", text: "Time Zone", type: "d", options: timezone },
      {
        key: "standardtitle",
        text: "Standard Title",
        type: "d",
        options: standardTitle
      },
      { key: "costcenter", text: "Cost Center", type: "t" },
      { key: "qualifier1", text: "Qualifier 1", type: "d", options: qualifier },
      { key: "careerstage", text: "Career Stage", type: "d", options: domain },
      { key: "qualifier2", text: "Qualifier 2", type: "d", options: qualifier },
      { key: "incentiveplan", text: "Incentive Plan", type: "t" },
      {
        key: "reporttomanager",
        text: "Report To Manager",
        type: "d",
        options: domain
      },
      { key: "hirename", text: "Offer/Hire Name", type: "t", options: domain },
      {
        key: "startdate",
        text: "Estimated Start Date",
        type: "d",
        options: domain
      },
      {
        key: "backfill",
        text: "BackFill",
        type: "d",
        options: [{ key: "yes", text: "Yes" }, { key: "no", text: "No" }]
      }
    ]
  },
  {
    key: "parentcreation",
    text: "Core and Common: Parent Creation"
  },
  {
    key: "backfill",
    text: "Core and Common: BackFill"
  },
  {
    key: "standardrecruitment",
    text: "Standard Recruitment"
  },
  {
    key: "internationalassignment",
    text: "International Assignment"
  },
  {
    key: "pcnchangerequest",
    text: "PCN Change Request"
  },
  {
    key: "gtahiringevents",
    text: "GTA Hiring Events"
  },
  {
    key: "specialhiringinitiative",
    text: "Special Hiring Initiative"
  }
];
