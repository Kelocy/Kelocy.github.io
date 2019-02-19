const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'ようこそジャパリパークへ ～orgel ver.～',
            artist: '立山秋航',
            url: 'http://music.163.com/song/media/outer/url?id=482636126.mp3',
            cover: 'https://p1.music.126.net/MHybsF1cYicn5ZvZeeDIyQ==/18876415625828578.jpg',
            //lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        },
        {
            name: 'La Pucelle',
            artist: '横山克',
            url: 'http://music.163.com/song/media/outer/url?id=550136123.mp3',
            cover: 'https://p1.music.126.net/5bYjKsyhzVEUbcyIZOGD1Q==/109951163233185474.jpg',
            theme: '#46718b'
        },
		{
            name: '天喜楽',
            artist: '衣笠道雄',
            url: 'http://music.163.com/song/media/outer/url?id=408440290.mp3',
            cover: 'https://p1.music.126.net/q02DE15HNbHXFjQxzPLLag==/1369991492501805.jpg',
            theme: '#46718b'
        },
		{
            name: '意にそぐわぬリターニー (向こう侧の月)',
            artist: '凋叶棕',
            url: 'http://music.163.com/song/media/outer/url?id=850696.mp3',
            cover: 'https://p2.music.126.net/K5mEFBN154OnprfMbkvUaQ==/891703930126687.jpg',
            theme: '#46718b'
        },
		{
            name: 'エピローグ',
            artist: '岩田恭明',
            url: 'http://music.163.com/song/media/outer/url?id=1309814675.mp3',
            cover: 'https://p1.music.126.net/sHMTWM6Z0zXlqz98Wdbl3A==/109951163555243264.jpg',
            //lrc: '/./dist/music/lrc/38689229.lrc',
	    theme: '#46718b'
        },
		{
            name: 'From Here To Eternity',
            artist: '牛尾憲輔',
            url: 'http://music.163.com/song/media/outer/url?id=528271318.mp3',
            cover: 'https://p2.music.126.net/RfEL_aOz9l8JsKn45wuSew==/109951163102122525.jpg',
            //lrc: '/./dist/music/lrc/38689234.lrc',
	    theme: '#46718b'
        },
		{
            name: '天空を駆ける風の都',
            artist: '狐の工作室',
            url: 'http://music.163.com/song/media/outer/url?id=28977339.mp3',
            cover: 'https://p2.music.126.net/rB0kylh0QSgxfhBb6MBUCg==/8988507557108693.jpg',
            theme: '#46718b'
        },
		{
            name: '都絵巻',
            artist: '松岡純也',
            url: 'http://music.163.com/song/media/outer/url?id=408440284.mp3',
            cover: 'https://p1.music.126.net/q02DE15HNbHXFjQxzPLLag==/1369991492501805.jpg',
            theme: '#46718b'
        },
		{
            name: 'Karma',
            artist: '阿保剛',
            url: 'http://music.163.com/song/media/outer/url?id=4993317.mp3',
            cover: 'https://p1.music.126.net/AsPH-WlzIw7lkvwT-3lSHA==/5978044720410513.jpg',
            theme: '#46718b'
        },
		{
            name: 'フラワリングナイト',
            artist: '黄昏フロンティア',
            url: 'http://music.163.com/song/media/outer/url?id=22765910.mp3',
            cover: 'https://p2.music.126.net/F_uagwWsPXs3JXSymunFUQ==/804842511556161.jpg',
            theme: '#46718b'
        },
		{
            name: 'Night Cruising',
            artist: '牛尾憲輔',
            url: 'http://music.163.com/song/media/outer/url?id=29357490.mp3',
            cover: 'https://p1.music.126.net/0FBLzAB2AyjQMmlwSpiAmA==/18723583509513196.jpg',
			//lrc: '/./dist/music/lrc/湘南乃風-Just Live More.lrc',
            theme: '#46718b'
        }
    ]
});