function buyFunction(){
    alert("Payment details have been sent to your email");
}

function displayHint(clicked_id){
    let id = clicked_id.slice(-1);
    let hint_id = '#hint' + id;
    let arrow_id = '#arrow' +  id;
    document.querySelector(arrow_id).classList.toggle('hint__show-arrow');
    document.querySelector(hint_id).classList.toggle('hint__show');

}

function displayAnswer(clicked_id){
    let id = clicked_id.slice(-1);
    let answer_id = "#anw" + id;
    let question_id = '#ask' + id;
    document.querySelector(answer_id).classList.toggle('answer__show');
    document.querySelector(question_id).classList.toggle('answer__show-arrow');
}