const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "Remember Greeting!",
    post_text:
      "Please ensure your audited staff are using the correct greeting when answering the calls!",
    user_id: 1,
  },
];
const seedposts = () => Post.bulkCreate(postData);

module.exports = seedposts;
