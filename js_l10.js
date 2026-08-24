us = 0;
cs = 0;
usp = document.querySelector("#us");
csp = document.querySelector("#cs");

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const gencompch = () => {
    const opt = ["rock", "paper", "scissors"];
    const idx=Math.floor(Math.random() * 3);//generate random numbers between 0 to 2 without floating numbers
    return opt[idx];
}
const dg = () => {
    console.log("DRAW");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "yellow";

}
const showwinner = (uw , uch , compch ) => {
    if (uw) {
        us++;
        usp.innerText = us;
        console.log("You won");
        msg.innerText = `You Won! your ${uch} beats ${compch}`;
        msg.style.backgroundColor = "green";
    }
    else {
        cs++;
        csp.innerText = cs;
        console.log("Computer won");
        msg.innerText = `You lost! ${compch} beats your ${uch}`;
        msg.style.backgroundColor = "red";

    }
};

const playgame = (uch) => {
    console.log(uch);
    const compch = gencompch();
    console.log(compch);
    if (uch === compch) {
        dg();
    }
    else {
        uw = true;
        if (uch === "rock") {
            uw = compch === "paper" ? false : true;
        }
        else if (uch === "paper") {
            uw = compch === "scissors" ? false : true;
        }
        else {
            uw = compch === "rock" ? false : true;

        }
        showwinner(uw, uch , compch );
    }
};

choices.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    //console.log("clicked");
    const uch = choice.getAttribute("id");
    //console.log(uc);
    playgame(uch);
  });
});
