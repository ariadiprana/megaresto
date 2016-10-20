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
    }
  })

})
