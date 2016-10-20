$(document).ready(function(){

  $("#p1").hide()
  $("#p2").hide()
  $("#p3").hide()
  $("#p4").hide()
  $("#p5").hide()
  $("#p6").hide()
  $("#p7").hide()
  $("#p8").hide()
  $("#order").hide()

  let h1=90000
  let h2=120000
  let h3=110000
  let h4=125000
  let h5=135000
  let h6=225000
  let h7=95000
  let h8=75000

  let t1 = 0
  let t2 = 0
  let t3 = 0
  let t4 = 0
  let t5 = 0
  let t6 = 0
  let t7 = 0
  let t8 = 0


  $("#menu1").click(function(){
    t1+=1
    $("#order").show()
    $( "#p1" ).show()
    $("#tot1").html(t1)
    $("#a1").html(t1)
    $("#a1").removeClass("red")
    $("#a1").addClass("green")
    $("#htot1").html(`IDR ${t1*h1}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu2").click(function(){
    t1-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t1<=0){
      $("#tot1").html(t1)
      $("#a1").removeClass("green")
      $("#a1").addClass("red")
      $("#a1").html('')
      $("#htot1").html(`IDR ${t1*h1}`)
      $("#p1").hide()
      t1=0
    }
    else{
      $("#p1").show()
      $("#tot1").html(t1)
      $("#a1").html(t1)
      $("#a1").removeClass("red")
      $("#a1").addClass("green")
      $("#htot1").html(`IDR ${t1*h1}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu3").click(function(){
    t2+=1
    $("#order").show()
    $( "#p2" ).show()
    $("#tot2").html(t2)
    $("#a2").html(t2)
    $("#a2").removeClass("red")
    $("#a2").addClass("green")
    $("#htot2").html(`IDR ${t2*h2}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
  })

  $("#menu4").click(function(){
    t2-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t2<=0){
      $("#tot2").html(t2)
      $("#a2").removeClass("green")
      $("#a2").addClass("red")
      $("#a2").html('')
      $("#htot2").html(`IDR ${t2*h2}`)
      $("#p2").hide()
      t2=0
    }
    else{
      $("#p2").show()
      $("#tot2").html(t2)
      $("#a2").html(t2)
      $("#a2").removeClass("red")
      $("#a2").addClass("green")
      $("#htot2").html(`IDR ${t2*h2}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu5").click(function(){
    t3+=1
    $("#order").show()
    $( "#p3" ).show()
    $("#tot3").html(t3)
    $("#a3").html(t3)
    $("#a3").removeClass("red")
    $("#a3").addClass("green")
    $("#htot3").html(`IDR ${t3*h3}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu6").click(function(){
    t3-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t3<=0){
      $("#tot3").html(t3)
      $("#a3").removeClass("green")
      $("#a3").addClass("red")
      $("#a3").html('')
      $("#htot3").html(`IDR ${t3*h3}`)
      $("#p3").hide()
      t3=0
    }
    else{
      $("#p3").show()
      $("#tot3").html(t3)
      $("#a3").html(t3)
      $("#a3").removeClass("red")
      $("#a3").addClass("green")
      $("#htot3").html(`IDR ${t3*h3}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu7").click(function(){
    t4+=1
    $("#order").show()
    $( "#p4" ).show()
    $("#tot4").html(t4)
    $("#a4").html(t4)
    $("#a4").removeClass("red")
    $("#a4").addClass("green")
    $("#htot4").html(`IDR ${t4*h4}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu8").click(function(){
    t4-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t4<=0){
      $("#tot4").html(t4)
      $("#a4").removeClass("green")
      $("#a4").addClass("red")
      $("#a4").html('')
      $("#htot4").html(`IDR ${t4*h4}`)
      $("#p4").hide()
      t4=0
    }
    else{
      $("#p4").show()
      $("#tot4").html(t4)
      $("#a4").html(t4)
      $("#a4").removeClass("red")
      $("#a4").addClass("green")
      $("#htot4").html(`IDR ${t4*h4}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu9").click(function(){
    t5+=1
    $("#order").show()
    $( "#p5" ).show()
    $("#tot5").html(t5)
    $("#a5").html(t5)
    $("#a5").removeClass("red")
    $("#a5").addClass("green")
    $("#htot5").html(`IDR ${t5*h5}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu10").click(function(){
    t5-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t5<=0){
      $("#tot5").html(t5)
      $("#a5").removeClass("green")
      $("#a5").addClass("red")
      $("#a5").html('')
      $("#htot5").html(`IDR ${t5*h5}`)
      $("#p5").hide()
      t5=0
    }
    else{
      $("#p5").show()
      $("#tot5").html(t5)
      $("#a5").html(t5)
      $("#a5").removeClass("red")
      $("#a5").addClass("green")
      $("#htot5").html(`IDR ${t5*h5}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu11").click(function(){
    t6+=1
    $("#order").show()
    $( "#p6" ).show()
    $("#tot6").html(t6)
    $("#a6").html(t6)
    $("#a6").removeClass("red")
    $("#a6").addClass("green")
    $("#htot6").html(`IDR ${t6*h6}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu12").click(function(){
    t6-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t6<=0){
      $("#tot6").html(t6)
      $("#a6").removeClass("green")
      $("#a6").addClass("red")
      $("#a6").html('')
      $("#htot6").html(`IDR ${t6*h6}`)
      $("#p6").hide()
      t6=0
    }
    else{
      $("#p6").show()
      $("#tot6").html(t6)
      $("#a6").html(t6)
      $("#a6").removeClass("red")
      $("#a6").addClass("green")
      $("#htot6").html(`IDR ${t6*h6}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu13").click(function(){
    t7+=1
    $("#order").show()
    $( "#p7" ).show()
    $("#tot7").html(t7)
    $("#a7").html(t7)
    $("#a7").removeClass("red")
    $("#a7").addClass("green")
    $("#htot7").html(`IDR ${t7*h7}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu14").click(function(){
    t7-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t7<=0){
      $("#tot7").html(t7)
      $("#a7").removeClass("green")
      $("#a7").addClass("red")
      $("#a7").html('')
      $("#htot7").html(`IDR ${t7*h7}`)
      $("#p7").hide()
      t7=0
    }
    else{
      $("#p7").show()
      $("#tot7").html(t7)
      $("#a7").html(t7)
      $("#a7").removeClass("red")
      $("#a7").addClass("green")
      $("#htot7").html(`IDR ${t7*h7}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

  $("#menu15").click(function(){
    t8+=1
    $("#order").show()
    $( "#p8" ).show()
    $("#tot8").html(t8)
    $("#a8").html(t8)
    $("#a8").removeClass("red")
    $("#a8").addClass("green")
    $("#htot8").html(`IDR ${t8*h8}`)
    $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))

  })

  $("#menu16").click(function(){
    t8-=1
    if(t1==0&&t2==0&&t3==0&&t4==0&&t5==0&&t6==0&&t7==0&&t8==0){
      $("#order").hide()
    }
    if(t8<=0){
      $("#tot8").html(t8)
      $("#a8").removeClass("green")
      $("#a8").addClass("red")
      $("#a8").html('')
      $("#htot8").html(`IDR ${t8*h8}`)
      $("#p8").hide()
      t8=0
    }
    else{
      $("#p8").show()
      $("#tot8").html(t8)
      $("#a8").html(t8)
      $("#a8").removeClass("red")
      $("#a8").addClass("green")
      $("#htot8").html(`IDR ${t8*h8}`)
      $("#totalAkhir").html('IDR '+(t1*h1+t2*h2+t3*h3+t4*h4+t5*h5+t6*h6+t7*h7+t8*h8))
    }
  })

})
