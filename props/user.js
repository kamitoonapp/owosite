export const author = {
    username: 'shaynlink',
    discriminator: '0000',
    id: '45485418549594165',
    avatar: 'me.png',
    banner: '',
    email: 'shaynlink@test.fr',
    token: Buffer.from(String('HeyHey')).toString('base64'),
    activity: [
        {
            type: 'like',
            target: '15619801056159',
        },
        {
            type: 'post',
            target: '5495641524'
        },
    ],
    post: [
        {
            id: '5495641524',
            content: 'Hello world 👋',
            timestamp: Date.now(),
            likedBy: ['45485418549594165', '159419564981941'],
            comments: [{
                author: '45485418549594165',
                content: 'Stonks',
                timestamp: Date.now(),
                spoil: false,
                id: '1541986541411514516'
            }],
        }
    ],
    webtoons: ['15619801056159'],
    subscribes: ['15619801056159'],
};