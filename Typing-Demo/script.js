console.log("Every thing is OK");

const typingSentence = [
    "If you lack the self-confidence to be able to overcome hardships, then everything is worthless. Naruto once said, “I am a nobody, but I never gave up.” Naruto was the first to accept that hard work pays off.",
    "It is always better to challenge yourself to do better instead of dwelling on other people's comments about your skills like Naruto. Remember, they don't define your future. You do.",
    "In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love",
    "Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.",
    "Rejection is a part of any man's life. If you can't accept and move past rejection, or at least use it as writing material - you're not a real man",
    "A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own",
    "Even I can tell that hatred is spreading. I wanted to do something about it…but I don’t know what. I believe… that someday the day will come when people truly understand one another!",
    "If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be",
    "The pain of being alone is completely out of this world, isn’t it? I don’t know why, but I understand your feelings so much, it actually hurts",
    "Forget about revenge. The fate of those who seek revenge is grim. It’s tragic, You will end up suffering and hurting yourself even more. Even if you do succeed in getting revenge, the only thing that remains is emptiness",
    "Some people want power and they get mad when they don’t get it. They take their fury out on everyone else. You don’t want it, it becomes you.",
    "A smile is the best way to get oneself out of a tight spot, even if it is a fake one. Surprisingly enough, everyone takes it at face value",
    "t may be hard right now… But you must silence those thoughts! Stop counting only those things that you have lost! What is gone, is gone",
    "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
    "Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing.",
    "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit.",
    "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the drug store, but that's just peanuts to space.",
    "Look for yourself, and you will find in the long run only hatred, loneliness, despair, rage, ruin, and decay. But look for Christ, and you will find Him, and with Him everything else thrown in.",
    "Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for you to do.",
    "Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.",
    "No matter what you're going through, there's a light at the end of the tunnel and it may seem hard to get to it but you can do it and just keep working towards it and you'll find the positive side of things.",
];

let displayMsg = document.getElementById("arraySentence");
let startBtn = document.getElementById("startBtn");
let typedWord = document.getElementById("userInput");
let shuffle = document.getElementById("btnShuffle");
let startTime, endTime;
let timer = "";
let givenTime = 60;
let mistake = 0;


const startTyping = () => {
    let randomSen = Math.floor(Math.random() * typingSentence.length);
    displayMsg.innerText = typingSentence[randomSen];
    timer = "";
    mistake = 0;
    showTimer();
    startBtn.innerText = "Done";

};

const compareWords = (text1, text2) => {
    let givenInput = text1.split(" ");
    let userInput = text2.split(" ");
    let cnt = 0;

    givenInput.forEach((CurrnetElement, index) => {
        if (CurrnetElement == userInput[index]) {
            cnt++;
        }
    });

    let error = givenInput.length - cnt;
    document.getElementById("mistakes").innerText = error;
    document.getElementById("accuracy").innerText =
        Math.round(((typedWord.value.length - error) / typedWord.value.length) * 100) + " %";





};

const wordCounter = (words) => {
    let word = words.split(" ").length;
    console.log(word);
    return word;
};

const stopTyping = () => {

    let totalTypedWords = typedWord.value;
    let wordCount = wordCounter(totalTypedWords);
    let result = "";
    result += compareWords(displayMsg.innerText, totalTypedWords);
    console.log(result);


};

const updateTimer = () => {
    if (givenTime == 0) {
        //End test if timer reaches 0
        displayResult();
    } else {
        document.getElementById("timer").innerText = --givenTime + "s";
    }
};

// timer
const showTimer = () => {
    givenTime = 60;
    timer = setInterval(updateTimer, 1000);
};

const displayResult = () => {
    clearInterval(timer);
    typedWord.disabled = true;
    let timeTaken = 1;
    if (givenTime != 0) {
        timeTaken = (60 - timeTaken) / 100;
    }
    document.getElementById("speed").innerText =
        Math.round(typedWord.value.length / 5 / timeTaken) + " wpm ";



};

startBtn.addEventListener("click", function () {
    console.log(this);
    if (this.innerText == "Start") {
        typedWord.disabled = false;
        typedWord.value = "";
        startTyping();
    } else if (this.innerText == "Done") {
        typedWord.disabled = true;
        startBtn.innerText = "Start";
        stopTyping();
    }
});
