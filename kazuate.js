// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 1;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    for(let n of kaisu){
        if(kaisu=>4){
            let answer='回目の予想';
            result=答えは4でした.すでにゲームは終わっています
            let s = document.querySelector('p#result');
s.textContent = result;
        }
        else if(kaisu==3 && yoso!=kotae){
            console.log('３回目の予想');
            result=まちがい.残念でした答えは4です
            let result = document.querySelector('p#result');
s.textContent = result;
        }
        else if(kaisu<1 && yoso!=kotae){
            if(yoso<kotae){
                console.log(kaisu+'回目の予想');
                result=まちがい.答えはもっと大きいですよ
                let result = document.querySelector('p#result');
s.textContent = result;
            }
            if(yoso>kotae){
                console.log(kaisu+'回目の予想');
                result=まちがい.答えはもっと小さいですよ
                let result = document.querySelector('p#result');
s.textContent = result;
            }
        }
        if(kaisu>=3 && yoso==kotae){
            result=正解です.おめでとう
            let result = document.querySelector('p#result');
s.textContent = result;
        }
        let s = document.querySelector('span#kaisu');
        s.textContent = kaisu;
        
        let t = document.querySelector('p#result');
        s.textContent = kaisu;
    }
}
