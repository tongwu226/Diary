var components1 = ['1.乾', '11.泰', '43.夬', '26.大畜', '12.否', '2.坤', '45.萃', '23.剝', '10.履', '19.臨', '58.兌', '41.損', '33.遯', '15.謙', '31.咸', '52.艮'];
var components2 = ['14.大有', '5.需', '34.大壯', '9.小畜', '35.晉', '8.比', '16.豫', '20.觀', '38.睽', '60.節', '54.歸妹', '61.中孚', '56.　旅', '39.　蹇', '62.小過', '53.漸'];
var components3 = ['13.同人', '36. 明夷', '49.革', '22.賁', '6.訟', '7.師', '47.困', '4.蒙', '25. 无妄', '24.復', '17.隨', '27.頤', '44.姤', '46.升', '28. 大過', '18.蠱'];
var components4 = ['30.離', '63. 既濟', '55.豐', '37. 家人', '64. 未濟', '29.坎', '40.解', '59.渙', '21. 噬嗑', '3.屯', '51.震', '42.益', '50.鼎', '48.井', '32.恒', '57.巽'];

var fontCollection = ['Hanyi Senty Yongle Encyclopedia','HYChunRanShouShuW','HYGuoQiangXingShuW','HYHeiLiZhiTiJ','HYLeMiaoTiW','HYPPTiJ','HYQiLinJ','HYQingKongTiW','HYShiGuangTiW','HYSunWanMinCaoShu','HYTangTangTiJ','HYTiaoTiaoTiJ','HYTieShanLiShuJ','HYWaiWaiTiJ','HYXiaoMaiTiJ','HYYanRuiMinXingKaiW','HYYouRanTiJ','HYZhangNaiRenXingShuW']
var result1;
var result2;
var result3;
var result4;


var p1, p2, p3, p4;

var canvas, text;


function setup() {
  canvas = createCanvas(550,700);
  canvas.parent('sketch-holder');
  pixelDensity(1);
  //reset the sketch for a new run of divination
  // createDiv
  var button1 = createButton('');
  button1.class('click');
  button1.id('shuaxin');
  button1.parent('clickB');
  button1.mousePressed(resetSketch);

  //take the sketch and calculate the porpotion of each section, generate a number from 0-8
  var button2 = createButton('开启');
  button2.class('click');
  button2.id('jisuan');
  button2.parent('clickB');
  button2.mouseClicked(CalcPic);

  //generate the reading results
  var button3 = createButton('阅读');
  button3.class('click');
  button3.id('gushi');
  button3.parent('clickB');

  button3.mouseClicked(ShowResult);
  //
  //background(74, 189, 172);//green
  background(0);


  p1 = createP('');
  p2 = createP('');
  p3 = createP('');
  p4 = createP('');

  p1.class('readresult');
  p1.parent('resultstyling')
  p2.class('readresult');
  p2.parent('resultstyling')
  p3.class('readresult');
  p3.parent('resultstyling')
  p4.class('readresult');
  p4.parent('resultstyling')


function draw() {
  //内置的长方形框
  strokeWeight(8);
  stroke(241, 239, 224);
  noFill();
  rect(10, 10, width - 20, height - 20);

};

$(() => {
  $('#gushi').hide();

  $('#jisuan').click(e => {
    e.preventDefault();
    setTimeout(() => {
      $('#gushi').show();
    }, 1500);
  });
  $('#shuaxin').click(e => {
    e.preventDefault();
    $('#gushi').hide();
    $('#jisuan').hide();
    setTimeout(() => {
      $('#jisuan').show();
    }, 1500);

  });
  $('gushi').click(
    e => {

  });

});

};


//create the button to reset
function resetSketch() {
  clear();
  //background(74, 189, 172);green

  //background(252, 248, 244);
  background(0);
};
//Let the querent draw the sketch
function touchMoved() {
  strokeWeight(10);
  stroke(252, 74, 26);

  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
};

function CalcPic() {
  loadPixels();


  var off;
  var sumIndex = 0;
  for (var y = 0; y < height / 2; y++) {
    for (var x = 0; x < width / 2; x++) {
      off = (y * width + x) * 4;
      sumIndex += (0.2126 * pixels[off + 0] + 0.7152 * pixels[off + 1] + 0.0722 * pixels[off + 2]) / (255 * 45);
    }
  };



  var sumSecond = 0;
  for (var y = 0; y < height / 2; y++) {
    for (var x = width / 2; x < width; x++) {
      off = (y * width + x) * 4;
      sumSecond += (0.2126 * pixels[off + 0] + 0.7152 * pixels[off + 1] + 0.0722 * pixels[off + 2]) / (255 * 45);
    }
  };


  var sumThird = 0;
  for (var y = height / 2; y < height; y++) {
    for (var x = 0; x < width / 2; x++) {
      off = (y * width + x) * 4;
      sumThird += (0.2126 * pixels[off + 0] + 0.7152 * pixels[off + 1] + 0.0722 * pixels[off + 2]) / (255 * 45);
    }
  };


  var sumFourth = 0;
  for (var y = height / 2; y < height; y++) {
    for (var x = width / 2; x < width; x++) {
      off = (y * width + x) * 4;
      sumFourth += (0.2126 * pixels[off + 0] + 0.7152 * pixels[off + 1] + 0.0722 * pixels[off + 2]) / (255 * 45);
    }
  };

  result1 = floor(map(sumIndex, 17, 150, 0, 15));
  result2 = floor(map(sumSecond, 17, 150, 0, 15));
  result3 = floor(map(sumThird, 17, 150, 0, 15));
  result4 = floor(map(sumFourth, 17, 150, 0, 15));



  console.log(result1, components1[result1]);
  console.log(result2, components2[result2]);
  console.log(result3, components3[result3]);
  console.log(result4, components4[result4]);
  resSum = result1+result2+result3+result4;


  console.log(resSum);

  updatePixels();

  // p1.html(components1[result1]);
  // p2.html(components2[result2]);
  // p3.html(components3[result3]);
  // p4.html(components4[result4]);

};
//显示故事
var secrets;
var d;

function ShowResult() {


  var riji = document.getElementById('defaultCanvas0');
  var context = riji.getContext('2d');

  var maxWidth = 400;
  var lineHeight = 30;
  var x = (riji.width - maxWidth) / 3;
  var y = 60;

  fontResult = Math.floor(Math.random()*18);
  context.font= '20px'+' '+fontCollection[fontResult];;
  context.fillStyle = '#ffffff';

  d = Math.floor(Math.random()*4);
  text = diary[d].mimi;


  wrapText(context, text, x, y, maxWidth, lineHeight),500;

};
// //故事做处理
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
};
