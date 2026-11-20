
import React from 'react'
import Card from './component/Card';

const App = () => {


const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://imgs.search.brave.com/pw-iFxvWWPNXLVEcHxz-QiyqdZatr91Zby9NXatuKQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1sb2dv/LW1lYW5pbmctNTAw/eDI1MC5qcGc",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://imgs.search.brave.com/HtLUpo9cKS86qgBH3Kpw0AfEiQfh91PXbjj5hurBYVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/bWFrZXJyLmFpL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDEvZ29vZ2xl/LWxvZ28tMTAyNHg2/MTUucG5n",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://imgs.search.brave.com/wW-WHvhNF4rD_mEyUbSQSAD3wdBLFh1ldVtZuTLEmHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Yi53aWtpbWVkaWEu/b3JnL3dpa2lwZWRp/YS9jb21tb25zL3Ro/dW1iLzQvNDQvTWlj/cm9zb2Z0X2xvZ28u/c3ZnLzk2MHB4LU1p/Y3Jvc29mdF9sb2dv/LnN2Zy5wbmc_dXRt/X3NvdXJjZT1jb21t/b25zLndpa2ltZWRp/YS5vcmcmdXRtX2Nh/bXBhaWduPWluZGV4/JnV0bV9jb250ZW50/PXRodW1ibmFpbCZf/PTIwMjEwNzI5MDIx/MDQ5",
    posted: "1 day ago",
    role: "Backend Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://imgs.search.brave.com/rMnR5sjoVtayX1xFEoY8tp2df_v39govovxz9yFGbjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL25ldGZsaXgt/YmFja2dyb3VuZC1y/cjR2Z3JkZTdmbzZ6/YzB0LmpwZw",
    posted: "3 days ago",
    role: "Product Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$85/hr",
    location: "Remote"
  },
  {
    id: 5,
    company: "Adobe",
    logo: "https://imgs.search.brave.com/pez2il7wkl3vqwSae6ga2tkQ-L9NYcwvIDm9lPgroWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZF9Lc3lLN0o5/L3cvMTgwL2gvMTgw/L3RoZW1lL2Rhcmsv/aWRjVG5yWW5RNC5w/bmc_Yz0xYnhpZDY0/TXVwN2FjemV3U0FZ/TVgmdD0xNzgzOTI2/NzIwNDgz",
    posted: "4 days ago",
    role: "Software Engineer",
    type: "Full Time",
    level: "Entry Level",
    salary: "$75/hr",
    location: "Noida, India"
  },
  {
    id: 6,
    company: "Spotify",
    logo: "https://imgs.search.brave.com/lLnJ5T2ahJx7pia_L9D6-cjbwNY6Rlxtnj42IxYPVGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHVyYm9sb2dv/LmNvbS9ibG9nL2Vu/LzIwMjEvMDcvMjAw/NDU2NDEvU3BvdGlm/eV9sb2dvX3N5bWJv/bC5wbmc",
    posted: "6 days ago",
    role: "Data Analyst",
    type: "Part Time",
    level: "Mid Level",
    salary: "$70/hr",
    location: "Pune, India"
  },
  {
    id: 7,
    company: "Tesla",
    logo: "https://imgs.search.brave.com/XKfo7WU1rUewVEnsiCdOQfdH2QpJMwV4ar1R-mUcylk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQw/MTEwMTUzODA5L0Js/YWNrLXRlc2xhLWxv/Z28tNjAweDYwMC5w/bmc",
    posted: "2 days ago",
    role: "Machine Learning Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Remote"
  },
  {
    id: 8,
    company: "Meta",
    logo: "https://imgs.search.brave.com/16Y93CiI5cTG1Nb4s3P4sgVX-DNmDt2FaH1KlKDZ3uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY2NDAzNTg3/Nm5ldy1tZXRhLWxv/Z28ucG5n",
    posted: "1 week ago",
    role: "React Developer",
    type: "Full Time",
    level: "Entry Level",
    salary: "$80/hr",
    location: "Gurgaon, India"
  },
  {
    id: 9,
    company: "Apple",
    logo: "https://imgs.search.brave.com/GdbHE2yUUex21ygKamZh6GbN8TV1P5KrgmNjiX7AVsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRp/ZWdyb3VuZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDMvaW5kaWVibG9n/LWFwcGxlLWxvZ28t/NS5qcGc",
    posted: "3 days ago",
    role: "iOS Developer",
    type: "Contract",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India"
  },
  {
    id: 10,
    company: "IBM",
    logo: "https://imgs.search.brave.com/VnRv6lduskChJTNZsFBClNJwQud1HLtlghrpe_peJP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/JHNfIUx3a0QhLHdf/MTQ1NixjX2xpbWl0/LGZfYXV0byxxX2F1/dG86Z29vZCxmbF9w/cm9ncmVzc2l2ZTpz/dGVlcC9odHRwczov/L2J1Y2tldGVlci1l/MDViYmM4NC1iYWEz/LTQzN2UtOTUxOC1h/ZGIzMmJlNzc5ODQu/czMuYW1hem9uYXdz/LmNvbS9wdWJsaWMv/aW1hZ2VzLzQwNmUw/ZWFjLTQ4MDktNDhi/Ny1hY2Q5LWZmMjBm/MTEyYjcyZV8xMDgw/eDEwODAuanBlZw",
    posted: "5 days ago",
    role: "Cloud Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Chennai, India"
  }
];


  return (
    <div className="parent">
      {jobs.map((elem)=>{
        return <Card company={elem.company} logo={elem.logo} posted={elem.posted} role={elem.role} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location} />
      })}
    </div>
  )
}

export default App
