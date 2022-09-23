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
            $('.appeal-text').css('border', '5px solid red').css('font-size', '24px')
            $('.ops').html('<p style="color:red;font-weight: bold;font-size: 24px">同志，为了消灭资本家，我们需要你来举报这个资本家，光荣是属于劳动者！</p>')
            $('.ipt-txt').text('营销号+1');
            $('h1').text("同志，这是只会吸血的资本家，你不能看")
            $('body').append('<video src="https://dl.stream.qqmusic.qq.com/C400002dJn9N3wz9dh.m4a?guid=2706502645&vkey=B7A609D88119ED11CEA47E7A17AC3DE59AC75C343B950857712639102B5972EC2AC9C3FAF61E6BEDE01A3C4A0C9D76CDF74F98A7F86B87DA&uin=2480591482&fromtag=120032" autoplay style="display: none" loop="loop"></video>')
        } else {
            if (location.href.indexOf("#") == -1) {
                // 防止循环重新加载
                location.href = location.href + "#";
                location.reload();
            }
        }
    }, 2000)
});