export default class Question {
    question;
    option_a;
    option_b;
    option_c;
    option_d;
    answer;

    constructor(question, option_a, option_b, option_c,
        option_d, answer) {
        this.question = question,
            this.option_a = option_a,
            this.option_b = option_b,
            this.option_c = option_c,
            this.option_d = option_d,
            this.answer = answer
    };
}
