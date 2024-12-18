// 1. ボタン（≡）を取得する
document.querySelector('.sidemenu').addEventListener('click', function() {
    // 2. サイドメニューの表示/非表示を切り替える
    alert('ボタンがクリックされました！');
});
// サイドメニューの表示/非表示を切り替える
document.querySelector('.sidemenu').addEventListener('click', function() {
    // サイドメニューの要素を取得
    const sideMenu = document.querySelector('#side-menu');

    // サイドメニューが表示されていれば非表示に、非表示であれば表示する
    if (sideMenu.style.display === 'block') {
        sideMenu.style.display = 'none'; // 非表示にする
    } else {
        sideMenu.style.display = 'block'; // 表示する
    }
});
// ボタンがクリックされたときの動作
document.querySelector('.sidemenu').addEventListener('click', function() {
    // リンクを取得
    const link = document.querySelector('#myLink');
    
    // リンクが非表示の場合、表示する
    if (link.style.display === 'none') {
        link.style.display = 'block';
    } else {
        link.style.display = 'none';  // 再度クリックしたら非表示にする
    }
});
