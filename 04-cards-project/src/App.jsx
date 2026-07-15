import Card from "./component/Card";

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "DHA Phase 8, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React.js Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Clifton, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Gulshan-e-Iqbal, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$56/hr",
    location: "PECHS, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Cloud Solutions Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Bahadurabad, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "North Nazimabad, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Korangi, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    companyName: "OpenAI",
    datePosted: "3 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Shahrah-e-Faisal, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Software Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$64/hr",
    location: "Malir Cantt, Karachi",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    companyName: "Intel",
    datePosted: "5 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Saddar, Karachi",
  },
];

console.log(jobOpenings);

  

  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx) {
        return  <div key={idx}>
          <Card company={elem.companyName} post={elem.post} logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} Dateposted={elem.datePosted}/>
        </div>
      })}
    </div>
  );
};

export default App;
