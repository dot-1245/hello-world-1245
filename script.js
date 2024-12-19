document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('#sideMenu');
    menu.classList.toggle('show'); // メニューの表示/非表示を切り替える
});

document.querySelector('.close-menu').addEventListener('click', function() {
    const menu = document.querySelector('#sideMenu');
    menu.classList.remove('show'); // 閉じるボタンがクリックされたときにメニューを非表示にする
});
