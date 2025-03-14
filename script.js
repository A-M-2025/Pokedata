const Questions = [
    {
        q: "Bulbasaur's type(s) is _____.",
        a: [{text: "Grass & Bug", isCorrect: false},
            {text: "Grass", isCorrect: false},
            {text: "Grass & Poison", isCorrect: true},
            {text: "Poison & Bug", isCorrect: false},
           ]
    },
    {
        q: "Bulbasaur's Gender ratio is (Male% - Female%)_____.",
        a: [{text: "50% - 50%", isCorrect: false},
            {text: "87.5% - 12.5%", isCorrect: true},
            {text: "12.5% - 87.5%", isCorrect: false},
            {text: "70% - 30%", isCorrect: false},
           ]
    },
    {
        q: "Bulbasaur's Base Stat Total is _____.",
        a: [{text: "328", isCorrect: true},
            {text: "317", isCorrect: false},
            {text: "322", isCorrect: false},
            {text: "314", isCorrect: false},
           ]
    },
    {
        q: "Bulbasaur evolves to Ivysaur at what level?",
        a: [{text: "18", isCorrect: false},
            {text: "14", isCorrect: false},
            {text: "15", isCorrect: false},
            {text: "16", isCorrect: true},
           ]
    },
    {
        q: "Bulbasaur Learns what move at Level 15?",
        a: [{text: "Razor Leaf", isCorrect: false},
            {text: "Sleep Powder", isCorrect: true},
            {text: "Sweet Scent", isCorrect: false},
            {text: "Poison Powder", isCorrect: true},
           ]
    },
    {
        q: "Bulbasaur is weak to what types?",
        a: [{text: "Flying, Rock, Bug, Ice", isCorrect: false},
            {text: "Fire, Flying, Psychic, Ice", isCorrect: true},
            {text: "Fire, Ground, Ice, Bug", isCorrect: false},
            {text: "Fire, Flying, Psychic, Bug", isCorrect: true},
           ]
    },
    {
        q: "Bulbasaur can be found naturally in what games?",
        a: [{text: "Gen 3(Hoenn)", isCorrect: false},
            {text: "Gen 1(Kanto)", isCorrect: true},
            {text: "Gen 4(Sinnoh)", isCorrect: false},
            {text: "Gen 7(Alola)", isCorrect: false},
           ]
    },
    {
        q: "What is Bulbasaur's hidden ability?",
        a: [{text: "Solar Power", isCorrect: false},
            {text: "Overgrow", isCorrect: false},
            {text: "Chlorophyll", isCorrect: true},
            {text: "Water Absorb", isCorrect: false},
           ]
    },
    {
        q: "What is Chikorita's hidden ability?",
        a: [{text: "Earth Eater", isCorrect: false},
            {text: "Overgrow", isCorrect: false},
            {text: "Leaf Guard", isCorrect: true},
            {text: "Water Absorb", isCorrect: false},
           ]
    },
    {
        q: "Chikorita is from what generation?",
        a: [{text: "1", isCorrect: false},
            {text: "4", isCorrect: false},
            {text: "2", isCorrect: true},
            {text: "7", isCorrect: false},
           ]
    },
    {
        q: "Chikorita Learns what move at Level 42?",
        a: [{text: "Hyper Beam", isCorrect: false},
            {text: "Giga-Drain", isCorrect: true},
            {text: "Solar Beam", isCorrect: false},
            {text: "Take down", isCorrect: false},
           ]
    },
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `Helloooo there, you scored a ${score} out of ${Questions.length}`;
}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
