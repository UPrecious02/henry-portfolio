/* ==========================================================
   Analytics By Henry — site content
   Edit projects and skills here. Every page reads from this file.
   ========================================================== */

const GITHUB = "https://github.com/adewalehenry14";

/* Filter buttons on the Projects page ("All" must stay first) */
window.PROJECT_FILTERS = ["All", "Excel", "Power BI", "Python"];

/* chart: bars | donut | scatter | hbars | line | area (thumbnail style) */
window.PROJECTS = [
  {
    id: "P-01",
    title: "HR Analytics Dashboard",
    desc: "An interactive dashboard tracking headcount, attrition and department performance, built to show HR where turnover costs the most.",
    tools: ["Power BI", "Excel", "DAX"],
    chart: "bars",
    repo: GITHUB // TODO: replace with repo URL
  },
  {
    id: "P-02",
    title: "E-Commerce Customer Churn Analysis",
    desc: "Explored customer behaviour to find what drives churn, from tenure to complaints to order frequency, and which customers are most at risk.",
    tools: ["Python", "Pandas", "Matplotlib"],
    chart: "donut",
    repo: GITHUB // TODO
  },
  {
    id: "P-03",
    title: "Work Mode and Mental Wellness Analysis",
    desc: "Compared remote, hybrid and on-site workers to see how work arrangement relates to stress, sleep and overall wellbeing.",
    tools: ["Python", "Pandas", "Seaborn"],
    chart: "scatter",
    repo: GITHUB // TODO
  },
  {
    id: "P-04",
    title: "Billionaires Dataset Analysis",
    desc: "Broke down global billionaire wealth by country, industry and age to show where fortunes are made and how concentrated they are.",
    tools: ["Python", "Pandas", "Matplotlib"],
    chart: "hbars",
    repo: GITHUB // TODO
  },
  {
    id: "P-05",
    title: "Ultramarathon Race Analysis",
    desc: "Cleaned and analysed decades of race results to compare speeds across age groups, genders and race distances.",
    tools: ["Python", "Pandas", "Seaborn"],
    chart: "line",
    repo: GITHUB // TODO
  },
  {
    id: "P-06",
    title: "Coffee Sales Analysis",
    desc: "A fully interactive Excel dashboard covering sales trends, top products and best customers, built with pivot tables, XLOOKUP and slicers.",
    tools: ["Excel"],
    chart: "area",
    repo: GITHUB // TODO
  }
];

/* icon: excel | powerbi | mysql | python | pandas | viz | clean | story */
window.SKILLS = [
  { name: "Excel",              icon: "excel",   level: 90, note: "Pivot tables, XLOOKUP, dashboards",     link: GITHUB },
  { name: "Power BI",           icon: "powerbi", level: 85, note: "DAX, data modelling, interactive reports", link: GITHUB },
  { name: "MySQL",              icon: "mysql",   level: 80, note: "Joins, CTEs, window functions",          link: GITHUB },
  { name: "Python",             icon: "python",  level: 75, note: "Analysis scripts and automation",        link: GITHUB },
  { name: "Pandas & NumPy",     icon: "pandas",  level: 75, note: "Cleaning, reshaping, aggregation",       link: GITHUB },
  { name: "Data Visualization", icon: "viz",     level: 85, note: "Matplotlib, Seaborn, chart design",      link: GITHUB },
  { name: "Data Cleaning",      icon: "clean",   level: 90, note: "Missing values, outliers, consistency",  link: GITHUB },
  { name: "Data Storytelling",  icon: "story",   level: 80, note: "Turning findings into clear reports",    link: GITHUB }
];
