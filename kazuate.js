// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

    let b1 = document.querySelector('button#blue');
    b1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 第5回課題:テキストボックスの数値をここに代入
    
    
    kaisu = kaisu+1;
    let i = document.querySelector('input[name="yoso"]');
    yoso = Number(i.value);
    

    let li = document.querySelector('span#answer');
    //a.textContent = kaisu;
    
    
    //return;


    
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

        
    
        if(kaisu>4){
            li.textContent="答えは"+kotae+"でした。すでにゲームは終わっています。";
        }else{
            if(4==kaisu && !(kotae===yoso)){
                li.textContent="まちがい。残念でした答えは"+kotae+"です";
            }else if(kaisu<4 && kotae === yoso){
                li.textContent="正解です、おめでとう";
                kaisu =kaisu+4;
            }else if(kaisu<4 && !(kotae === yoso)){
                if(kotae>yoso){
                    li.textContent="まちがい。答えはもっと大きいですよ";
                }else if(kaisu<yoso){
                    li.textContent="まちがい。答えはもっと小さいですよ";
                }
            }
        }

        

        let s = document.querySelector('span#kaisu');
        s.textContent = kaisu;
        
        let t = document.querySelector('p#result');
        s.textContent = li;
    }

