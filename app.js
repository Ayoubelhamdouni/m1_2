function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "السؤال " + currentQuestionNumber + " من " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>النتيجة</h1>";
    gameOverHTML += "<h2 id='score'> " + quiz.score + "/10</h2>";
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
new Question("من صور الجزاء المدني", ["الغرامة", "البطلان", "الإعدام", "الإقامة الجبرية"], "البطلان"),
new Question("يضم القانون العام", ["القانون التجاري", "قانون الشغل", "القانون الدستوري", "مدونة الأسرة"], "القانون الدستوري"),
new Question("يعتبر مصدرا رسميا أساسيا للقاعدة القانونية", ["الفقه", "العرف", "القضاء", "التشريع"], "التشريع"),
new Question("يعتبر ناقص الأهلية", ["الصغير الذي لم يبلغ سن التمييز", "السفيه", "العجوز", "المجنون"], "السفيه"),
new Question("سن الرشد القانوني هو", ["18 سنة قمرية كاملة", "18 سنة شمسية كاملة", "19 سنة قمرية كاملة", "19 سنة شمسية كاملة"], "18 سنة شمسية كاملة"),
new Question("تشرع الحكومة خلال حالة الضرورة بـ", ["مقترح قانون", "مشروع قانون", "مراسيم قوانين", "ظهير شريف"], "مراسيم قوانين"),
new Question("أول دستور في المغرب كان سنة", ["1960", "1972", "1962", "2011"], "1962"),
new Question("من بين الجزاءات الجنائية", ["الفصل التعسفي", "التجريد من الحقوق الوطنية", "الجزاء العيني المباشر", "الفسخ"], "التجريد من الحقوق الوطنية"),
new Question("من الإستثنائات التي ترد في مبدأ عدم رجعية القوانين", ["القانون الأصلح للمتهم", "القوانين الوقتية", "القوانين الجنائية", "القوانين الحديثة"], "القانون الأصلح للمتهم"),
new Question("من مميزات التشريع", ["يطبق على فئة معينة", "لا يحقق وحدة القانون في الدولة", "يخاطب كل شخص بإسمه", "مكتوب"], "مكتوب"),
];


var quiz = new Quiz(questions);


populate();
