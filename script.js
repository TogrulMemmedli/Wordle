let dailyWord = "ZEHRA";
let arr = [[], [], [], [], [], []];
for (let x = 0; x <= 5; x++) {
       for (let i = 1; i <= 5; i++) {
              arr[x][i - 1] = document.getElementById(`${x}${i}`);
       }
};
let vertical = 0;
let horizontal = 0;
let horiArr = [];
function fillBox(letter) {
       arr[vertical][horizontal].innerHTML = letter;
       horizontal++;
       horiArr.push(letter);
       if (horizontal == 5 && vertical != 6) {
              // horiArr.join('');
              if (dailyWord == horiArr.join('')) {
                     let result = document.getElementById('result').innerHTML = "You Win!";
                     for (let el in dailyWord) {
                            for (let key in horiArr.join()) {
                                   if (dailyWord[el] == horiArr[key]) {
                                          if (el == key) {
                                                 arr[vertical][key].style.background = 'green';
                                                 arr[vertical][key].style.color = 'white';
                                          }
                                          else {
                                                 arr[vertical][key].style.background = 'yellow';
                                                 arr[vertical][key].style.color = 'white';
                                          }
                                   }
                            }
                     }
              } else {
                     colorChanger();
                     horiArr = [];
              };

              vertical++;
              horizontal = 0;
       }


}

function colorChanger() {
       for (let key in horiArr.join()) {
              for (let el in dailyWord) {
                     if (dailyWord[el] == horiArr[key]) {
                            if (el == key) {
                                   arr[vertical][key].style.background = 'green';
                                   arr[vertical][key].style.color = 'white';
                            }
                            else {
                                   arr[vertical][key].style.background = 'yellow';
                                   arr[vertical][key].style.color = 'white';
                            }
                     }
              }
       }
}