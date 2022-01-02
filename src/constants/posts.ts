import {shuffle} from '../utils';

const postInfo = [
  {
    postTitle: 'mr shermon',
    postPersonImage: require('../../assets/images/userProfile.jpg'),
    postImage: require('../../assets/images/post1.jpg'),
    likes: 765,
    isLiked: false,
  },
  {
    postTitle: 'chillhouse',
    postPersonImage: require('../../assets/images/profile2.jpg'),
    postImage: require('../../assets/images/post2.jpg'),
    likes: 345,
    isLiked: false,
  },
  {
    postTitle: 'Tom',
    postPersonImage: require('../../assets/images/profile5.jpg'),
    postImage: require('../../assets/images/post3.jpg'),
    likes: 734,
    isLiked: false,
  },
  {
    postTitle: 'interesting title',
    postPersonImage: require('../../assets/images/profile3.jpg'),
    postImage: require('../../assets/images/post4.jpg'),
    likes: 875,
    isLiked: false,
  },
  {
    postTitle: 'nice',
    postPersonImage: require('../../assets/images/profile1.jpg'),
    postImage: require('../../assets/images/post5.jpg'),
    likes: 754,
    isLiked: false,
  },
  {
    postTitle: 'working',
    postPersonImage: require('../../assets/images/profile3.jpg'),
    postImage: require('../../assets/images/post6.jpg'),
    likes: 173,
    isLiked: false,
  },
  {
    postTitle: 'incredibly awesome',
    postPersonImage: require('../../assets/images/profile4.jpg'),
    postImage: require('../../assets/images/post7.jpg'),
    likes: 234,
    isLiked: false,
  },
];

shuffle(postInfo);

export default postInfo;
