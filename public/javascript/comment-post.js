let catPics = ['https://nomorsiapa.com/images/v/th/id/OIP.6ZK7C_vrhQryClBmmL1ZFQHaJR?w=145&h=182&c=7&r=0&o=5&pid=1.7',
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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYZomu4wd1n5FYr8Oh7o1cr9ekpgepuMXew&usqp=CAU'
]

let commentBtn = document.querySelector('.is-info');

onload = catGenerator(catPics);

function catGenerator(catPics) {
    let randomCat = Math.floor(Math.random() * catPics.length);
    document.querySelector('#post-pic').src = catPics[randomCat];
    document.querySelector('#comment-pic').src = catPics[randomCat];
}

commentBtn.addEventListener('click', function() {
    catGenerator(catPics);
})