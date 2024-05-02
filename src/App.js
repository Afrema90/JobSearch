import './App.css';
import { SearchResults } from './Components/Search_Results/SearchResults';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from './Components/Home/Landing';
import { Login } from "./Components/Loginn.jsx/Login";
import { SignUp } from "./Components/Loginn.jsx/SignUp";
import MainApply from './Components/ApplyJobs/MainApply.jsx'
import { Sucess } from './Components/Sucess/Sucess';
function App() {
    var data = [
        {
            "id": 1,
            "companyName": "Aivee",
            "rating": 4,
            "city": "West Palm Beach",
            "state": "FL",
            "job": "Chemical Engineer",
            "date": 13,
            "language": "Tswana",
            "jobType": "part-time",
            "remote": "Work From Home",
            "education": "matric",
            "skills1": "The British Council builds connections, understanding and trust between people in the UK and other countries through arts",
            "skills2": "Typing speed minimum 35 WPM"
        },
        {
            "id": 2,
            "companyName": "Trilia",
            "rating": 3,
            "city": "Rochester",
            "state": "NY",
            "job": "Payment Adjustment Coordinator",
            "date": 21,
            "language": "Swedish",
            "jobType": "part-time",
            "remote": "Work From Home",
            "education": "matric",
            "skills1": "Excellent communication, interpersonal and managerial skills.",
            "skills2": "Prior experience with the Healthcare sector is preferred."
        },
        {
            "id": 3,
            "companyName": "Fadeo",
            "rating": 4,
            "city": "El Paso",
            "state": "TX",
            "job": "Senior Developer",
            "date": 9,
            "language": "Amharic",
            "jobType": "part-time",
            "remote": "Work From Home",
            "education": "matric",
            "skills1": "In this role, you need to analyze and solve increasingly complex problems.",
            "skills2": "Your day to day interactions is with peers within our Company."
        },
        {
            "id": 4,
            "companyName": "Zoomzone",
            "rating": 3,
            "city": "Norwalk",
            "state": "CT",
            "job": "Director of Sales",
            "date": 21,
            "language": "Korean",
            "jobType": "part-time",
            "remote": "Work From Home",
            "education": "matric",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 5,
            "companyName": "Mita",
            "rating": 2,
            "city": "Redwood City",
            "state": "CA",
            "job": "Speech Pathologist",
            "date": 18,
            "language": "Kashmiri",
            "jobType": "part-time",
            "remote": "Work From Home",
            "education": "matric",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 6,
            "companyName": "Yodel",
            "rating": 5,
            "city": "Providence",
            "state": "RI",
            "job": "Research Nurse",
            "date": 8,
            "language": "Moldovan",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "The British Council builds connections, understanding and trust between people in the UK and other countries through arts",
            "skills2": "Typing speed minimum 35 WPM"
        },
        {
            "id": 7,
            "companyName": "Feedfish",
            "rating": 4,
            "city": "Sacramento",
            "state": "CA",
            "job": "Research Associate",
            "date": 12,
            "language": "Croatian",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "Excellent communication, interpersonal and managerial skills.",
            "skills2": "Prior experience with the Healthcare sector is preferred."
        },
        {
            "id": 8,
            "companyName": "Dazzlesphere",
            "rating": 5,
            "city": "Fort Wayne",
            "state": "IN",
            "job": "Actuary",
            "date": 7,
            "language": "Quechua",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "The British Council builds connections, understanding and trust between people in the UK and other countries through arts",
            "skills2": "Typing speed minimum 35 WPM"
        },
        {
            "id": 9,
            "companyName": "Twitterbridge",
            "rating": 5,
            "city": "Worcester",
            "state": "MA",
            "job": "Account Executive",
            "date": 14,
            "language": "Bosnian",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "Excellent communication, interpersonal and managerial skills.",
            "skills2": "Prior experience with the Healthcare sector is preferred."
        },
        {
            "id": 10,
            "companyName": "Yadel",
            "rating": 5,
            "city": "Kansas City",
            "state": "MO",
            "job": "Analog Circuit Design manager",
            "date": 19,
            "language": "Tswana",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "In this role, you need to analyze and solve increasingly complex problems.",
            "skills2": "Your day to day interactions is with peers within our Company."
        },
        {
            "id": 11,
            "companyName": "Gigashots",
            "rating": 3,
            "city": "Detroit",
            "state": "MI",
            "job": "Financial Advisor",
            "date": 8,
            "language": "Catalan",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 12,
            "companyName": "Yadel",
            "rating": 4,
            "city": "Tulsa",
            "state": "OK",
            "job": "Structural Engineer",
            "date": 21,
            "language": "Hungarian",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "The British Council builds connections, understanding and trust between people in the UK and other countries through arts",
            "skills2": "Typing speed minimum 35 WPM"
        },
        {
            "id": 13,
            "companyName": "Tazzy",
            "rating": 2,
            "city": "Denver",
            "state": "CO",
            "job": "Information Systems Manager",
            "date": 8,
            "language": "Malagasy",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "The British Council buildExcellent communication, interpersonal and managerial skills.",
            "skills2": "Typing speed minimum 35 WPMP"
        },
        {
            "id": 14,
            "companyName": "Flashspan",
            "rating": 2,
            "city": "San Bernardino",
            "state": "CA",
            "job": "Pharmacist",
            "date": 18,
            "language": "Guaraní",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "The British Council buildExcellent communication, interpersonal and managerial skills.",
            "skills2": "Typing speed minimum 35 WPM."
        },
        {
            "id": 15,
            "companyName": "Devpulse",
            "rating": 2,
            "city": "Valdosta",
            "state": "GA",
            "job": "Electrical Engineer",
            "date": 12,
            "language": "Burmese",
            "jobType": "internship",
            "remote": "Onsite",
            "education": "btech",
            "skills1": "Excellent communication, interpersonal and managerial skills.",
            "skills2": "Prior experience with the Healthcare sector is preferred."
        },
        {
            "id": 16,
            "companyName": "Devbug",
            "rating": 5,
            "city": "Milwaukee",
            "state": "WI",
            "job": "Compensation Analyst",
            "date": 12,
            "language": "Belarusian",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "In this role, you need to analyze and solve increasingly complex problems.",
            "skills2": "Your day to day interactions is with peers within our Company."
        },
        {
            "id": 17,
            "companyName": "Topicstorm",
            "rating": 2,
            "city": "Saint Louis",
            "state": "MO",
            "job": "Senior Financial Analyst",
            "date": 17,
            "language": "Hindi",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 18,
            "companyName": "Skyndu",
            "rating": 5,
            "city": "Wilkes Barre",
            "state": "PA",
            "job": "Product Engineer",
            "date": 18,
            "language": "Marathi",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "In this role, you need to analyze and solve increasingly complex problems.",
            "skills1": "The British Council builds connections, understanding and trust between peoYour day to day interactions is with peers within our Company.ple in the UK and other countries through arts",
            "skills2": "Typing speed minimum 35 WPM"
        },
        {
            "id": 19,
            "companyName": "Talane",
            "rating": 4,
            "city": "Saint Paul",
            "state": "MN",
            "job": "Media Manager I",
            "date": 19,
            "language": "Armenian",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Excellent communication, interpersonal and managerial skills.",
            "skills2": "Prior experience with the Healthcare sector is preferred."
        },
        {
            "id": 20,
            "companyName": "Tekfly",
            "rating": 4,
            "city": "Columbus",
            "state": "GA",
            "job": "Programmer Analyst I",
            "date": 13,
            "language": "Swahili",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "In this role, you need to analyze and solve increasingly complex problems.",
            "skills2": "Your day to day interactions is with peers within our Company."
        },
        {
            "id": 21,
            "companyName": "Dabfeed",
            "rating": 4,
            "city": "Madison",
            "state": "WI",
            "job": "Assistant Manager",
            "date": 10,
            "language": "Guaraní",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 22,
            "companyName": "Skinder",
            "rating": 4,
            "city": "Wichita",
            "state": "KS",
            "job": "Project Manager",
            "date": 9,
            "language": "Armenian",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "The British Council builds connections, understanding and trust between people in the UK and other countries through arts",
            "skills2": "Typing speed minimum 35 WPM"
        },
        {
            "id": 23,
            "companyName": "Bubblebox",
            "rating": 3,
            "city": "Little Rock",
            "state": "AR",
            "job": "Help Desk Technician",
            "date": 12,
            "language": "Indonesian",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Excellent communication, interpersonal and managerial skills.",
            "skills2": "Prior experience with the Healthcare sector is preferred."
        },
        {
            "id": 24,
            "companyName": "Kazio",
            "rating": 5,
            "city": "Washington",
            "state": "DC",
            "job": "Research Associate",
            "date": 15,
            "language": "Catalan",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 25,
            "companyName": "Fiveclub",
            "rating": 3,
            "city": "Raleigh",
            "state": "NC",
            "job": "Design Engineer",
            "date": 19,
            "language": "Assamese",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 26,
            "companyName": "Mita",
            "rating": 3,
            "city": "Pasadena",
            "state": "CA",
            "job": "Office Assistant I",
            "date": 14,
            "language": "Hungarian",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 27,
            "companyName": "Twitternation",
            "rating": 2,
            "city": "Reno",
            "state": "NV",
            "job": "Recruiting Manager",
            "date": 15,
            "language": "Kannada",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 28,
            "companyName": "Mynte",
            "rating": 4,
            "city": "Minneapolis",
            "state": "MN",
            "job": "Civil Engineer",
            "date": 16,
            "language": "Gagauz",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 29,
            "companyName": "Einti",
            "rating": 4,
            "city": "Palo Alto",
            "state": "CA",
            "job": "Statistician I",
            "date": 20,
            "language": "Kashmiri",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 30,
            "companyName": "Oyope",
            "rating": 5,
            "city": "Las Vegas",
            "state": "NV",
            "job": "VP Sales",
            "date": 9,
            "language": "Kashmiri",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 31,
            "companyName": "Twitterbeat",
            "rating": 5,
            "city": "Chattanooga",
            "state": "TN",
            "job": "Research Associate",
            "date": 15,
            "language": "West Frisian",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 32,
            "companyName": "Jabberbean",
            "rating": 4,
            "city": "Young America",
            "state": "MN",
            "job": "Marketing Manager",
            "date": 7,
            "language": "Azeri",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 33,
            "companyName": "Blogspan",
            "rating": 2,
            "city": "Minneapolis",
            "state": "MN",
            "job": "Human Resources Assistant I",
            "date": 22,
            "language": "Tamil",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 34,
            "companyName": "Wikizz",
            "rating": 3,
            "city": "Abilene",
            "state": "TX",
            "job": "Account Representative IV",
            "date": 20,
            "language": "Somali",
            "jobType": "fulltime",
            "remote": "Work From Home",
            "education": "btech",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 35,
            "companyName": "Linktype",
            "rating": 2,
            "city": "Fort Lauderdale",
            "state": "FL",
            "job": "Accounting Assistant IV",
            "date": 7,
            "language": "Dhivehi",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 36,
            "companyName": "Buzzdog",
            "rating": 5,
            "city": "Saint Louis",
            "state": "MO",
            "job": "Product Engineer",
            "date": 15,
            "language": "French",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 37,
            "companyName": "Eazzy",
            "rating": 4,
            "city": "Cleveland",
            "state": "OH",
            "job": "Quality Engineer",
            "date": 11,
            "language": "Romanian",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "",
            "skills2": ""
        },
        {
            "id": 38,
            "companyName": "Oyoba",
            "rating": 4,
            "city": "Apache Junction",
            "state": "AZ",
            "job": "Senior Editor",
            "date": 10,
            "language": "Chinese",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 39,
            "companyName": "Feedbug",
            "rating": 2,
            "city": "Des Moines",
            "state": "IA",
            "job": "VP Sales",
            "date": 16,
            "language": "Hebrew",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 40,
            "companyName": "Photolist",
            "rating": 5,
            "city": "Memphis",
            "state": "TN",
            "job": "Desktop Support Technician",
            "date": 11,
            "language": "Tsonga",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 41,
            "companyName": "Tanoodle",
            "rating": 5,
            "city": "Denver",
            "state": "CO",
            "job": "Pharmacist",
            "date": 20,
            "language": "Portuguese",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 42,
            "companyName": "InnoZ",
            "rating": 2,
            "city": "Orange",
            "state": "CA",
            "job": "Senior Quality Engineer",
            "date": 13,
            "language": "Swedish",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 43,
            "companyName": "Kare",
            "rating": 4,
            "city": "Dallas",
            "state": "TX",
            "job": "Account Executive",
            "date": 22,
            "language": "Catalan",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 44,
            "companyName": "Skyba",
            "rating": 4,
            "city": "Baton Rouge",
            "state": "LA",
            "job": "Electrical Engineer",
            "date": 11,
            "language": "Punjabi",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 45,
            "companyName": "Fivespan",
            "rating": 2,
            "city": "Muskegon",
            "state": "MI",
            "job": "Software Consultant",
            "date": 16,
            "language": "Czech",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 46,
            "companyName": "Tagpad",
            "rating": 2,
            "city": "Brooklyn",
            "state": "NY",
            "job": "VP Sales",
            "date": 20,
            "language": "Malay",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 47,
            "companyName": "Babbleblab",
            "rating": 3,
            "city": "Macon",
            "state": "GA",
            "job": "Nuclear Power Engineer",
            "date": 7,
            "language": "Amharic",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 48,
            "companyName": "Mydo",
            "rating": 3,
            "city": "Winston Salem",
            "state": "NC",
            "job": "Design Engineer",
            "date": 15,
            "language": "Spanish",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        },
        {
            "id": 49,
            "companyName": "Buzzster",
            "rating": 4,
            "city": "New York City",
            "state": "NY",
            "job": "Cost Accountant",
            "date": 16,
            "language": "Sotho",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Collaboration and interpersonal skills.",
            "skills2": "Ability to work well in a team."
        },
        {
            "id": 50,
            "companyName": "Yotz",
            "rating": 3,
            "city": "Odessa",
            "state": "TX",
            "job": "Clinical Specialist",
            "date": 7,
            "language": "Kurdish",
            "jobType": "fresher",
            "remote": "Onsite",
            "education": "intermediate",
            "skills1": "Adaptable and flexible and Ability to perform under pressure.",
            "skills2": "Ability to meet deadlines."
        }
    ]
    localStorage.setItem('jobs', JSON.stringify(data))

    return (
        <Router>

            <div className="App">

                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route exact path="/results">

                        <SearchResults />
                    </Route>
                    <Route exact path="/apply">
                        <MainApply />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/sucess">
                        <Sucess />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
