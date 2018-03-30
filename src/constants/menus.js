export const menus = [
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', },
	{
        key: '/app/search/SearchTable', title: '搜索', icon: 'search',
    },
    {
        key: '/app/animation', title: '推荐', icon: 'bell',
        sub: [
            { key: '/app/recommend/RecDay', title: '今日推荐', icon: '', },
        ],
    },
    {
        key: '/app/submit', title: '订阅', icon: 'mail',
        sub: [
            { key: '/app/submit/ModuleSubmit', title: '模块选择', icon: '', },
            { key: '/app/submit/SubDay', title: '今日订阅', icon: '', },
        ],
    },
    {
        key: '/app/savestars', title: '收藏', icon: 'edit',
        sub: [
            { key: '/app/savestars/HisPages', title: 'Ta的网页', icon: '', },
        ],
    },
    {
        key: '/app/stars', title: '书签', icon: 'tags',
        sub: [
            { key: '/app/stars/AddStars', title: '书签夹一', icon: '', },

        ],
    },
	{
        key: '/app/my', title: '我的', icon: 'user',
        sub: [
            { key: '/app/my/wysiwyg', title: '编辑', icon: '', },
            { key: '/app/my/drags', title: '拖拽', icon: '', },
            { key: '/app/my/gallery', title: '画廊', icon: '', },
        ],
    },
    {
        key: '/app/download', title: '下载', icon: 'download',
        sub: [
            { key: '/app/download/Downloading', title: '正在下载', icon: '', },
            { key: '/app/download/Downloaded', title: '已完成', icon: '', },
			{ key: '/app/download/Rubbish', title: '垃圾箱', icon: '', },
        ],
    },
    {
        key: '/app/cloud', title: '云盘', icon: 'cloud-o',
    },
];