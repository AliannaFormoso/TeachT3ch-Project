// Global variables (state)
// ===============================================

let questions = [
    {
      question:
        "React is a declarative JavaScript library for building user interfaces",
      answer: true,
      id: "q1"
    },
    {
      question: "It is not possible to render an Element into the DOM with React",
      answer: false,
      id: "q2"
    },
    {
      question:
        "Angular is a component-based framework for building scalable web applications",
      answer: true,
      id: "q3"
    },
    {
      question:
        "Angular is a platform for building just desktop web applications",
      answer: false,
      id: "q4"
    },
    {
      question:
        "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition",
      answer: true,
      id: "q5"
    },
    {
      question:
        "Vue is an open-source model–view–viewmodel back end Java framework",
      answer: false,
      id: "q6"
    },
    {
      question: "React is a free and open-source front-end JavaScript library",
      answer: true,
      id: "q7"
    },
    {
      question:
        "React can't be used as a base in the development of single-page or mobile applications",
      answer: false,
      id: "q8"
    },
    {
      question:
        "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps",
      answer: true,
      id: "q9"
    },
    {
      question: "You don't build Angular applications with components",
      answer: false,
      id: "q10"
    }
  ];
  
  // Linking events
  // =================================================
  document.getElementById("reset").addEventListener("click", reset);
  document.getElementById("submit").addEventListener("click", submit);
  
  // function definition
  // ====================================
  
  function startExam() {
    let examContainer = document.getElementById("examContainer");
    for (const item of questions) {
      examContainer.appendChild(createElement(item));
    }
  }
  
  function createElement(question) {
    //Create a container
    const divQuestion = document.createElement("div");
    divQuestion.className = "questionItem";
    divQuestion.dataset.questionId = question.id;
  
    //Create a paragraph
    const paragraph = document.createElement("p");
    paragraph.innerText = question.question;
  
    //Create a select
    const select = document.createElement("select");
    const trueOption = document.createElement("option");
    trueOption.innerHTML = "true";
    trueOption.value = "true";
    const falseOption = document.createElement("option");
    falseOption.innerHTML = "false";
    falseOption.value = "false";
  
    select.appendChild(trueOption);
    select.appendChild(falseOption);
  
    //Add children to container
    divQuestion.append(paragraph);
    divQuestion.append(select);
  
    return divQuestion;
  }
  
  function submit() {
    // tomar con un selector todas las preguntas contestadas en pantalla
    let questionList = document.querySelectorAll(".questionItem");
  
    let score = 0;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // bucle comparando el valor en el select con el valor del array (answer)
    for (let item of questionList) {
      let questionId = item.dataset.questionId;
  
      for (let i = 0; i < questions.length; i++) {
        if (questionId === questions[i].id) {
          let optionAnswer = item.lastChild.value;
  
          if (optionAnswer === questions[i].answer.toString()) {
            score++;
          }
        }
      }
    }
  
    //mostrar un alert con el nombre diciendo q la calificacin es....
    if (score <= 5) {
      alert(`Your score is ${score} try again ${name}`);
    } else {
      alert(
        `
        Your score is ${score} You pass!
        
        Congratulations ${name}!
  
  
        We will send your certificate to your email ${email}
        `
      );
    }
  }
  
  function reset() {
    //seleccionar el contenedor del juego, eliminar sus hijos y volver a llamar a startExam
    document.querySelector("#examContainer").innerHTML = "";
  
    startExam();
  }
  
  // Calls to functions
  startExam();
  
  //======================================================*****==///////
  