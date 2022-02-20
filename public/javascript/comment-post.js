let catPics = [
  'https://lh6.googleusercontent.com/proxy/ryCbhztpkAmMggdvnWUA2dhnBoATNQVtKBTzllwnhUhWCf2tTE863JKrM_KuEa3E13ftP1LLd232tGhAlX9WyCA3Il49xcaTxAH0SkuvsF9CXe-yqT8LFaCPcXxs3MP3n5dVQ4E=w1200-h630-p-k-no-nu',
  'https://lh4.googleusercontent.com/proxy/K4ITAyLwuWFGqgNJdx3i8mZkJKhMnPiK0Yql__mttvRX_Fc3z1cuXkUQr9JK84fSfXWIM_52y7k-NHvDqCiT91HFegodVJg1OxlBIaZn8TJoZhEMfKQNeKOT6tD7FIv2ujJOEkA=w1200-h630-p-k-no-nu',
  'https://i0.wp.com/data.whicdn.com/images/342073256/original.jpg',
  'https://i.pinimg.com/474x/80/53/27/805327d9477b489e732e0b0247b7f73f.jpg',
  'https://i0.wp.com/lh5.googleusercontent.com/proxy/Ph-v7Zim4ItrnqCOJ0nIJZbYUN4hD3GF4uK10aMQVQe4SSRW0ie1pPLreEhA8S-Ecjd2ugc7GNyOsofe9-JRphaDZIPcwurlq-QzzQeN14IUwMvmTpCrBj3rC8kvZ8_oVMyW9XQ=w1200-h630-p-k-no-nu',
  'https://www.meme-arsenal.com/memes/ca7b1e49a431e0f28aa5192ec58a6af8.jpg',
  'https://cdn.thisiswhyimbroke.com/thumb/business-cat-tie_400x333.jpg',
  'https://catsandothernonsense.files.wordpress.com/2011/08/tumblr_lisib0zobm1qadbtpo1_500.jpeg?w=584',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZNA8BXp3aJ5jwf2-Q5OEHd2aPmkCQCGg9KX_gR51RFGOyL0sQ7stSmruPRW04vS0WNY&usqp=CAU',
  'https://as2.ftcdn.net/v2/jpg/01/34/16/91/1000_F_134169171_qccPnEEahMus8HHDo1O7UtqDJR07A7Dq.jpg',
  'https://i.kym-cdn.com/photos/images/facebook/000/959/452/436.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhZ85FXvwUphzalo_t-f9cBa640_f_22Psw8qBby9OoofkmMajduBr33MsDKKP4azvCE&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LvbNh-RdRX-pgjI5E0k3fNmwk7AlU9_O4qTM6cH8LbC_TOBpELO_rcO9UnLOAwN8oV8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jvlciRCWXONM02vSqWecOuPmTmvp2GrAghW80oH3HU7qAunQH85f47BaZzs0Pnuilf8&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SswrsJj3Uf0Phs6kaLYvEkgOFP0HXo3Y2RO6xZrETQKPcPh2m2HMwIDIyTG8KwWcVuE&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqYiJIIqPeYbgeYsufHPvvwy-rlsQNCw8BL47VJQRJ3u_zHN_lQ_AzWKHf0oStR1sclc&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sQAJo6TGfeJDhjY5LKzoUsCuZprf-TZpvfDEVQtLAl_a-Ztc5t00B7T3YaUkx2ybGZM&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYZomu4wd1n5FYr8Oh7o1cr9ekpgepuMXew&usqp=CAU',
  'https://s.keepmeme.com/files/en_posts/20200819/4fa40b57d8e0e0883eeff945503d94aecrying-cat-face-meme.jpg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31bc9252-553c-4ed1-ba82-e37be041cb20/de2rvfj-5224bbfe-d439-4882-bd49-7bce0df5a262.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxYmM5MjUyLTU1M2MtNGVkMS1iYTgyLWUzN2JlMDQxY2IyMFwvZGUycnZmai01MjI0YmJmZS1kNDM5LTQ4ODItYmQ0OS03YmNlMGRmNWEyNjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.868tI8ZgQBcoubL5rWo9LcO1mabUGh5dtwPINpMk1u8',
  'https://i.imgur.com/8clFw0e.jpg',
  'https://i.pinimg.com/originals/27/4b/46/274b4622eeae322da2659b61948a97cc.png',
  'https://us.123rf.com/450wm/kubangirl23/kubangirl231803/kubangirl23180300006/98524969-cat-manager-in-a-suit-sitting-in-the-office.jpg?ver=6',
  'https://i.redd.it/05pfumozg5a51.jpg',
  'https://ae01.alicdn.com/kf/HTB1A6zGiLNNTKJjSspkq6yeWFXaV/MPK-Store-Cat-Toy-Cat-Costume-Clip-Tie-for-Cats-and-Dogs-Cat-Collar.jpg',
];

let commentBtn = document.querySelector('.is-info');

onload = catGenerator(catPics);

function catGenerator(catPics) {
  let randomCat = Math.floor(Math.random() * catPics.length);
  document.querySelector('#post-pic').src = catPics[randomCat];

  let moreRandom = Math.floor(Math.random() * randomCat);
  document.querySelector('#comment-pic').src = catPics[moreRandom];

  console.log(moreRandom);
}

commentBtn.addEventListener('click', function () {
  catGenerator(catPics);
});
