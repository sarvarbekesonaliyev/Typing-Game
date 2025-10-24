

const words = [
  "salom","kitob","qalam","daftar","maktab","ish","vaqt","odam","havo","suv",
  "tog‘","quyosh","oy","yulduz","daraxt","guldon","shahar","qishloq","uy","deraza",
  "eshik","telefon","kompyuter","sichqoncha","klaviatura","ekran","internet","sayt","o‘yin","bola",
  "qiz","o‘g‘il","aka","opa","ona","ota","buvi","bobo","dars","sinf",
  "doska","rasm","rang","yashil","ko‘k","qizil","sariq","oq","qora","kulrang",
  "tezlik","quvonch","sevgi","muhabbat","sadoqat","do‘st","raqam","soat","daqiqa","soniya",
  "yil","oy","hafta","kun","bugun","kecha","ertaga","non","choy","meva",
  "olma","anor","nok","banan","uzum","shaftoli","gilos","limon","bodring","sabzi",
  "kartoshka","piyoz","guruch","lag‘mon","somsa","palov","osh","shashlik","qovun","tarvuz",
  "baliq","go‘sht","tuxum","sut","yogurt","nonushta","tushlik","kechki","taom","chiroyli",
  "katta","kichik","uzun","qisqa","baland","past","toza","iflos","sovuq","issiq",
  "bahor","yoz","kuz","qish","shamol","yomg‘ir","qor","muz","daryo","ko‘l",
  "cho‘l","orol","dengiz","tabiat","qush","hayvon","mushuk","it","sigir","qo‘y",
  "ot","echki","tovuq","xo‘roz","kaptar","chumchuq","ari","kapalak","hasharot","quyon",
  "sher","yo‘lbars","fil","zebra","jirafa","maymun","tosh","qum","metall","temir",
  "oltin","kumush","tilla","arzon","sovg‘a","o‘yinchoq","futbol","basketbol","tennis","yugurish",
  "suzish","velosiped","mashina","avtobus","samolyot","poyezd","yo‘l","ko‘cha","park","bino",
  "do‘kon","ishchi","o‘qituvchi","shifokor","haydovchi","talaba","universitet","kitobxona","yozuvchi","rassom",
  "musiqa","aktyor","sahna","qo‘shiq","raqs","bayram","sovrin","g‘alaba","omad","baxt"
];


let time = 30;
let score = 0;
let wrong = 0;
let timer;
let currentWord = "";

const wordEl = document.getElementById("word");
const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const correctEl = document.getElementById("correct");
const wrongEl = document.getElementById("wrong");
const startBtn = document.getElementById("start");

function newWord(){
  currentWord = words[Math.floor(Math.random()*words.length)];
  wordEl.textContent = currentWord;
  input.value = "";
  input.focus();
}

function startGame(){
  score = 1;
  wrong = 0;
  time = 30;
  input.disabled = false;
  newWord();
  correctEl.textContent = 0;
  wrongEl.textContent = 0;
  timeEl.textContent = time;
  timer = setInterval(updateTime,1000);
}

function updateTime(){
  time--;
  timeEl.textContent = time;
  if(time<=0){
    clearInterval(timer);
    input.disabled = true;
    wordEl.textContent = `⏰ O'yin tugadi! ✅ ${score} ta to‘g‘ri, ❌ ${wrong} ta noto‘g‘ri.`;
  }
}

input.addEventListener("input", ()=>{
  if(input.value.trim() === currentWord){
    score++;
    correctEl.textContent = score;
    newWord();
  } else if(input.value.length === currentWord.length){
    wrong++;
    wrongEl.textContent = wrong;
    newWord();
  }
});

startBtn.addEventListener("click", startGame);
