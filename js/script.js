function buyFunction(){
    alert("Payment details have been sent to your email");
}

function displayHint(clicked_id){
    let id = clicked_id.slice(-1);
    let hint_id = '#hint' + id;
    let arrow_id = '#arrow' +  id;
    if ($(hint_id).hasClass('hint__show')){
        $(hint_id).fadeOut(500);
    }
    else {
        $(hint_id).fadeIn(1000);
    }
    document.querySelector(arrow_id).classList.toggle('hint__show-arrow');
    document.querySelector(hint_id).classList.toggle('hint__show');

}

function displayAnswer(clicked_id){
    let id = clicked_id.slice(-1);
    let answer_id = "#anw" + id;
    let question_id = '#ask' + id;
    if($(answer_id).hasClass('answer__show')){
        $(answer_id).fadeOut(400);
    }
    else {
        $(answer_id).fadeIn(700);
    }
    document.querySelector(answer_id).classList.toggle('answer__show');  
    document.querySelector(question_id).classList.toggle('answer__show-arrow'); 

}