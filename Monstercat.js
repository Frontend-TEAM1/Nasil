
const indexButtons = document.querySelectorAll("#index > div")
console.log(indexButtons);

const boxs = document.querySelectorAll("#box > div")
console.log(boxs);

indexButtons.forEach((btn, btnIdx)=>{ //박스 아래 버튼 이벤트를 위한 for
    btn.addEventListener("click", ()=>{
        boxs.forEach((box, boxIdx)=>{
            box.style.left = (boxIdx - btnIdx)*100 + '%'
        })
    })
})
// 이중 for문
// 0 -> -100 -> -200 -> -300 
// 0, 100, 200, 300