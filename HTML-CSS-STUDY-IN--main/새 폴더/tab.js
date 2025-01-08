var button = $('.tab-button');
var content = $('.tab-content');

// for(let i = 0; i < button.length; i++){
//     button.eq(i).on('click', function(){
//         탭열기(i)
//     }) 
// }

function 탭열기(i){
    button.removeClass('orange')
    button.eq(i).addClass('orange')
    content.removeClass('show')
    content.eq(i).addClass('show')
}
$('.list').click(function(e){
    console.log(e.target.dataset.id)
    탭열기(e.target.dataset.id)
})
// swiper 이미지슬라이드 코드를 짜고싶을때 라이브러리
// Aos 스크롤 내리면 요소가 서서히 등장하는 애니메이션을 만들고 싶을 때 쓰면 좋습니다.







//     button.eq(0).on('click', function(){
//     button.removeClass('orange')
//     button.eq(0).addClass('orange')
//     content.removeClass('show')
//     content.eq(0).addClass('show')
// })
// button.eq(1).on('click', function(){
//     button.removeClass('orange')
//     button.eq(1).addClass('orange')
//     content.removeClass('show')
//     content.eq(1).addClass('show')
// })
// button.eq(2).on('click', function(){
//     button.removeClass('orange')
//     button.eq(2).addClass('orange')
//     content.removeClass('show')
//     content.eq(2).addClass('show')
// })


