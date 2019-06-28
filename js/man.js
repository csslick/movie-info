/*** 영화정보 데이터 
  0.영화제목
  1.개봉년도
  2.장르
  3.감독
  4.포스터이미지
 ***/
const movie_data = [
  {
    title: "토이스토리 4",
    year: "2019.06.20",
    category: "애니메이션,모험,코미디",
    director: "조시 쿨리",
    img_url: "images/토이스토리.jpg"
  },
  {
    title: "알라딘",
    year: "2019.05.23",
    category: "모험,판타지",
    director: "가이 리치",
    img_url: "images/알라딘.jpg"
  },
  {
    title: "존윅 3",
    year: "2019.06.26",
    category: "액션,범죄,스릴러",
    director: "채드 스타헬스키",
    img_url: "images/존윅3.jpg"
  },
  {
    title: "스파이더맨:파프롬홈",
    year: "2019.07.02",
    category: "액션,모험,코미디,SF",
    director: "존왓츠",
    img_url: "images/스파이더맨.jpg"
  },
];
  
/*** main.js ***/
function update_info(index){

  // 영화정보 DB에서 정보를 가져옴
  var movie_title = movie_data[index].title;
  var year = movie_data[index].year;
  var category = movie_data[index].category;
  var director = movie_data[index].director;
  var img_url = movie_data[index].img_url;

  // 화면에 출력
  $('#info h2').text(movie_title);
  $('#info .year').text(year);
  $('#info .category').text(category);
  $('#info .director').text(director);
  $('#poster').html('<img src="' + img_url + '">');
}

function movie_info() {
  // 영화제목 표시
  var index = $('#movie option:selected').index();
  update_info(index);
}

$(function () {
  // 영화정보 초기값 설정
  var index = $('#movie option').index();
  console.log(index);
  update_info(index);
})