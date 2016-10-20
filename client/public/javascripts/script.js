function con(t,m,jm,f){
  let content =
                            `<tr>
                              <td>
                                <h4 class="ui image header">
                                  <img src="${f}" class="ui mini rounded image">
                                  <div class="content">
                                    ${m}
                                    <div class="sub header">${jm}</div>
                                </div>
                              </h4></td>
                              <td>

                              </td>
                              <td>
                                <a class="ui green label">${t}</a>
                              </td>
                            </tr>`
  return content;
}


$(document).ready(function(){
  let contentArr = ['','','','','','','','']

  let f1 = '/images/f1.jpg'
  let f2 = '/images/f2.jpg'
  let f3 = '/images/f3.jpg'
  let f4 = '/images/f4.jpg'
  let f5 = '/images/f5.jpg'
  let f6 = '/images/f6.jpg'
  let f7 = '/images/f7.jpg'
  let f8 = '/images/f8.jpg'

  let m1 = 'Tomato, Red Wine & Chorizo Risotto'
  let m2 = 'Chicken Milanese with Spaghetti'
  let m3 = 'Individual Vegetarian Lasagnes'
  let m4 = 'Blue Cheese, Ham & Apple Burger'
  let m5 = 'Baked Chicken & Porcini Risotto'
  let m6 = 'Black & Blushing Worcestershire Fillet'
  let m7 = 'Earl Grey Vanila-Infused Ice Cream'
  let m8 = 'Chocolate Lava Guinness Cake'


  let jm1 = 'Appetizer'
  let jm2 = 'Main Course'
  let jm3 = 'Dessert'

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
    content1 = con(t1,m1,jm1,f1)
    $("#p1").html(content1)
    $("#a1").html(t1)
    $("#a1").removeClass("red")
    $("#a1").addClass("green")

  })

  $("#menu2").click(function(){
    t1-=1
    let content1 = con(t1,m1,jm1,f1)
    $("#p1").html(content1)
    if(t1==0){
      $("#p1").html('')
      $("#a1").removeClass("green")
      $("#a1").addClass("red")
      $("#a1").html('')
    }
    else{
      $("#p1").html(content1)
      $("#a1").html(t1)
      $("#a1").removeClass("red")
      $("#a1").addClass("green")
    }
  })

  $("#menu3").click(function(){
    t2+=1
    content2 = con(t2,m2,jm2,f2)
    $("#p2").html(content2)
    $("#a2").html(t2)
    $("#a2").removeClass("red")
    $("#a2").addClass("green")

  })

  $("#menu4").click(function(){
    t2-=1
    let content2 = con(t2,m2,jm2,f2)
    $("#p2").html(content2)
    if(t1==0){
      $("#p2").html('')
      $("#a2").removeClass("green")
      $("#a2").addClass("red")
      $("#a2").html('')
    }
    else{
      $("#p2").html(content2)
      $("#a2").html(t2)
      $("#a2").removeClass("red")
      $("#a2").addClass("green")
    }
  })
})
