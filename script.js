document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('#sideMenu');
    menu.classList.toggle('show'); // サイドメニューの表示/非表示を切り替える
});
