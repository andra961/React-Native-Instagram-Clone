import {shuffle} from '../utils';

const searchData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpg'),
      require('../../assets/images/post2.jpg'),
      require('../../assets/images/post3.jpg'),
      require('../../assets/images/post4.jpg'),
      require('../../assets/images/post5.jpg'),
      require('../../assets/images/post6.jpg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpg'),
      require('../../assets/images/post8.jpg'),
      require('../../assets/images/post9.jpg'),
      require('../../assets/images/post10.jpg'),
      require('../../assets/images/post11.jpg'),
      require('../../assets/images/post12.jpg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpg'),
      require('../../assets/images/post14.jpg'),
      require('../../assets/images/post15.jpg'),
    ],
  },
];

for (let data of searchData) {
  shuffle(data.images);
}

export default searchData;
