import React from 'react';

// styling
import { Header, Body } from '../components/Styles/StyledMonocLINK';

// bg?
import LoremBG from '../components/LoremBG';

const Skills = () => {
    // list of my skills
    const skills = [
        "Java",
        "Python",
        "Javascript",
        "HTML",
        "CSS",
        "SQL",
        "C++",
        "C#",
        "OOP",
        "REST",
        "Virtualization",
        "Networking",
        "MongoDB",
        "Azure",
        "ReactJS",
        "JQuery",
        "Bootstrap",
        "Cyber Security",
        "Github",
        "UML",
        "ERD",
        "ASP.NET"
    ];

    const randomSpacing = () => {
        const maxSpaces = 200;
        return Math.floor(Math.random() * (maxSpaces));

    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            // random index from 0 to i
            let j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]];
        };
    };

    // shuffle skills to be random
    shuffleArray(skills);
    console.log(randomSpacing(skills[3]))
    
    // put randomized skills into div
    let skillsDiv = [];
    for(let i = 0; i < skills.length; i++){
        //push div, random # of spaces, skills[i], then /div
        skillsDiv.push(<div style={{whiteSpace: "pre-wrap"}}>{' '.repeat(randomSpacing()) + skills[i]}</div>);
    };

    return (
        <div>
            <LoremBG />
            <Header>monoc.link.getSkills();</Header>
            <Body>
            {skillsDiv}
            </Body>
        </div>
    );
};

export default Skills;

