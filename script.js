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
