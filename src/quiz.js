/*class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
      }
        // 2. getQuestion()
      getQuestion() {
        return this.questions[this.currentQuestionIndex];
      }
      moveToNextQuestion() {
        this.currentQuestionIndex += 1;
      }
      shuffleQuestions() {
          for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
      }
      checkAnswer(answer) {
        if (answer) {
          if (this.questions[this.currentQuestionIndex - 1].answer === answer) {
            this.correctAnswers++;
            console.log("correct answer!")
          }
        } else {
          alert("Please provide an answer");
        }
      }
      hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
          return false;
        } else {
          return true;
        }
      }
    }
 
    filterQuestionsByDifficulty(difficulty) {
        if (question.difficulty >= 1 && question.difficulty <= 3 ){
            this.question = this.question.filter ((question)=> {
              return  question.difficulty === difficulty
        })
    }
}

filterQuestionsByDifficulty(difficulty) {
  if (difficulty >= && difficulty <=3) {
    this.question = this.questions.filter(questions => questions.difficulty === difficulty)
  }
}




averageDifficulty(){
    const avgTotal = this.question.reduce((acc, questions) => {
      return acc + question.difficulty;
    }, 0);
    return avgTotal / this.questions.length;
}


filterQuestionsByDifficulty(difficulty);
{
  if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
    this.questions = this.questions.filter(
      (question) => questions.difficulty === difficulty
    );
  }
}
averageDifficulty();
{
  let totalDifficulty = this.difficulty.reduce((acc, question) => {
    return acc + question.difficulty;
  }, 0);
  let average = totalDifficulty / this.questions.length;
  return average;
}

*/

class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }
  checkAnswer(answer) {
    if (answer) {
      if (this.questions[this.currentQuestionIndex - 1].answer === answer) {
        this.correctAnswers++;
        console.log("correct answer!");
      }
    } else {
      alert("Please provide an answer");
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }
}
filterQuestionsByDifficulty(difficulty) {
  if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
    this.questions = this.questions.filter(
      (question) => questions.difficulty === difficulty
    );
  }
  
}
averageDifficulty() {
  let totalDifficulty = this.difficulty.reduce((acc, question) => {
    return acc + question.difficulty;
  }, 0);
  let average = totalDifficulty / this.questions.length;
  return average;
}






