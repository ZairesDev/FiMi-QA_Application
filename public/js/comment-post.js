let catPics = new Array('https://nomorsiapa.com/images/v/th/id/OIP.6ZK7C_vrhQryClBmmL1ZFQHaJR?w=145&h=182&c=7&r=0&o=5&pid=1.7',
    'https://lh6.googleusercontent.com/proxy/ryCbhztpkAmMggdvnWUA2dhnBoATNQVtKBTzllwnhUhWCf2tTE863JKrM_KuEa3E13ftP1LLd232tGhAlX9WyCA3Il49xcaTxAH0SkuvsF9CXe-yqT8LFaCPcXxs3MP3n5dVQ4E=w1200-h630-p-k-no-nu',
    'https://lh4.googleusercontent.com/proxy/K4ITAyLwuWFGqgNJdx3i8mZkJKhMnPiK0Yql__mttvRX_Fc3z1cuXkUQr9JK84fSfXWIM_52y7k-NHvDqCiT91HFegodVJg1OxlBIaZn8TJoZhEMfKQNeKOT6tD7FIv2ujJOEkA=w1200-h630-p-k-no-nu',
    'https://i0.wp.com/data.whicdn.com/images/342073256/original.jpg',
    'https://i.pinimg.com/474x/80/53/27/805327d9477b489e732e0b0247b7f73f.jpg')

onload = catGenerator();

function catGenerator(catPics) {
    let randomCat = Math.floor(Math.random() * catPics.length);
    document.querySelector('#comment-pic').src = catPics[randomCat];
}