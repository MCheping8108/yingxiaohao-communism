chrome.extension.sendRequest({ action: "getBlackList" }, function(response) {
    const blackList = response.blackList;
    console.info('blackList', blackList);
    let username;
    setInterval(() => {
        let newUsername = $('.username').text().trim();
        if (newUsername === username) {
            return;
        }
        username = newUsername;
        if (blackList.includes(username)) {
            // $('html').css('filter', 'invert(1)');

            // $('p, span, a').each((index, item) => {
            //         $(item).text('营销号');
            //     }
            // )

            alert('同志，为了消灭资本家，我们需要你来举报这个资本家，光荣是属于劳动者！');
            document.title = '同志，这是个只会吸血的资本家！你可不兴看！';
            $('.follow-btn').text('我是只会吸血的资本家');
            $('.follow-btn').css('background', 'red');
            $('.follow-btn').css('color', 'white')
            $('.following-charge-btn').text('你不能充电')
            $('.following-charge-btn').css('background', 'red')
            $('.appeal-text').css('border', '5px solid red').css('font-size', '24px')
            $('.ops').html('<p style="color:red;font-weight: bold;font-size: 24px">同志，为了消灭资本家，我们需要你来举报这个资本家，光荣是属于劳动者！</p>')
            // $('textarea').text('把资本家枪毙了！');
            $('h1').text("同志，这是只会吸血的资本家，你不能看")
            $('.item-text').text("资本家不配有禁止转载")
            $('.manuscript-report').css('font-size', '48px')
            $('.manuscript-report').text('枪毙资本家')
            $('.info-text').text('你不能三连')
            // 国际歌俄语版
            $('body').append('<video src="https://m10.music.126.net/20220924101029/3ed1f8dcdbf7986c88d525e64c6bfb98/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3015968597/dab5/0ea6/76a7/9aef541d190478aad1000a2b353e6278.m4a" autoplay style="display: none" loop="loop"></video>')
        } else {
            if (location.href.indexOf("#") == -1) {
                // 防止循环重新加载
                location.href = location.href + "#";
                location.reload();
            }
        }
    }, 2000)
});