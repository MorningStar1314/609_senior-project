var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = 1920,
		ch = 1080,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 1000,
    fallingCharArr = [],
    fontSize = 10,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();








 window.addEventListener('load', () => {
      // 获取元素
      const codeItem = document.querySelectorAll('.code-item')
      const codeInput = document.querySelector('.code-input')

      // 循环显示input中的值到code-item中
      const showNum = () => {
        // 获取到当前input的值
        const curVal = codeInput.value
        // 循环显示到code-item中
        Array.from(codeItem).map((item, index) => {
          curVal[index] ?
            item.innerText = curVal[index] :
            item.innerText = ''
        })
      }

      // 处理active类的增删
      const cutAct = (type) => {
        // 获取当前input中值的长度
        const valLenth = codeInput.value.length
        // 首先清除之前的active类名
        Array.from(codeItem).map(item => {
          item.className = 'code-item'
        })
        // 当type为focus时 进行计算active位置 否则只清除
        if (type === 'focus') {
          // 计算出当前应该active的code-item 并且给他添加active类名
          // 因为input的值有4个长度，他的长度是从1开始的； 
          // 而codeItem位数组，下标为0，从0开始的，所以当input长度为4时，对应的codeItem其实是不存在的 所以我们需要减一
          codeItem[valLenth === 4 ? valLenth - 1 : valLenth].className = 'code-item active'
        }
      }

      // 为输入框添加事件
      codeInput.addEventListener('focus', () => {
        // 聚焦时 计算active的code-item
        cutAct('focus')
      })

      codeInput.addEventListener('blur', () => {
        // 失去焦点时 移除当前的active
        cutAct('blur')
      })

      codeInput.addEventListener('input', () => {
        // 当输入值时，调用循环显示函数
        showNum()
        cutAct('focus')
      })
      
    })

var myInput = document.getElementById("pw");
var myValue = myInput.value;
var pw = 1234;


var wrong = document.getElementById("wrong");
var correct = document.getElementById("correct");

myInput.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
    myInput = document.getElementById("pw");
    myValue = myInput.value;
    if(myValue == pw){
      wrong.style.visibility="hidden";
      correct.style.visibility="visible";
      window.alert(myValue);
    }
    else if(myValue != pw){
      correct.style.visibility="hidden";
      wrong.style.visibility="visible";
      window.alert(myValue);
    }
  }
});