/* ==========================================================
   Analytics By Henry — site content
   Edit projects and skills here. Every page reads from this file.
   ========================================================== */

const GITHUB = "https://github.com/adewalehenry14";

/* Filter buttons on the Projects page ("All" must stay first) */
window.PROJECT_FILTERS = ["All", "Power BI", "Excel", "SQL", "Python"];

/* chart: bars | donut | scatter | hbars | line | area (thumbnail style) */
window.PROJECTS = [
  {
    id: "P-01",
    title: "HR Analytics Dashboard",
    desc: "A Power BI report tracking workforce metrics by gender and department, giving HR a clear view of headcount and staffing distribution.",
    tools: ["Power BI"],
    chart: "bars",
    repo: "https://github.com/adewalehenry14/hr-analytics"
  },
  {
    id: "P-02",
    title: "E-Commerce Customer Churn Analysis",
    desc: "A Power BI dashboard covering 18,000 customers. It surfaces a 27.4% churn rate, purchase trends and lifetime value segments.",
    tools: ["Power BI"],
    chart: "donut",
    repo: "https://github.com/adewalehenry14/powerbi-customer-churn-analysis"
  },
  {
    id: "P-03",
    title: "Work Mode and Mental Wellness Analysis",
    desc: "A Power BI dashboard on how remote, hybrid and on-site work relate to mental wellness, using screen time, device and app usage data.",
    tools: ["Power BI"],
    chart: "scatter",
    repo: "https://github.com/adewalehenry14/work-mode-mental-wellness-analysis"
  },
  {
    id: "P-04",
    title: "Billionaires Dataset Analysis",
    desc: "SQL analysis of global billionaire wealth by industry, country and self-made status, plus links to tax rates and life expectancy.",
    tools: ["MySQL", "SQL"],
    chart: "hbars",
    repo: "https://github.com/adewalehenry14/billionaires-sql-analysis.-"
  },
  {
    id: "P-05",
    title: "Ultramarathon Race Analysis",
    desc: "Exploratory analysis of two centuries of 50km and 50-mile race data, comparing speed by gender, age group and season.",
    tools: ["Python", "Pandas", "NumPy", "Seaborn"],
    chart: "line",
    repo: "https://github.com/adewalehenry14/ultramarathon-race-analysis"
  },
  {
    id: "P-06",
    title: "Coffee Sales Analysis",
    desc: "An interactive Excel dashboard covering 2.5 years of sales across three countries, with top products, roast types and best customers.",
    tools: ["Excel"],
    chart: "area",
    repo: "https://github.com/adewalehenry14/Coffee-Sales-Analysis"
  }
];

/* Skill card links: each points to the most relevant project repo */
const REPO = {
  hr: "https://github.com/adewalehenry14/hr-analytics",
  churn: "https://github.com/adewalehenry14/powerbi-customer-churn-analysis",
  billionaires: "https://github.com/adewalehenry14/billionaires-sql-analysis.-",
  ultra: "https://github.com/adewalehenry14/ultramarathon-race-analysis",
  coffee: "https://github.com/adewalehenry14/Coffee-Sales-Analysis"
};

/* icon: excel | powerbi | mysql | python | pandas | viz | clean | story */
window.SKILLS = [
  { name: "Excel",              icon: "excel",   level: 90, note: "Pivot tables, charts, dashboards",         link: REPO.coffee },
  { name: "Power BI",           icon: "powerbi", level: 85, note: "DAX, data modelling, interactive reports", link: REPO.churn },
  { name: "MySQL",              icon: "mysql",   level: 80, note: "Aggregations, filters, subqueries",        link: REPO.billionaires },
  { name: "Python",             icon: "python",  level: 75, note: "Exploratory analysis in notebooks",        link: REPO.ultra },
  { name: "Pandas & NumPy",     icon: "pandas",  level: 75, note: "Cleaning, reshaping, aggregation",         link: REPO.ultra },
  { name: "Data Visualization", icon: "viz",     level: 85, note: "Seaborn, Power BI visuals, chart design",  link: REPO.hr },
  { name: "Data Cleaning",      icon: "clean",   level: 90, note: "Missing values, outliers, consistency",    link: REPO.ultra },
  { name: "Data Storytelling",  icon: "story",   level: 80, note: "Turning findings into clear reports",      link: REPO.churn }
];