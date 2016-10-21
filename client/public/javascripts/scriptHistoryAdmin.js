$(document).ready(function(){
  $("#message").hide()
  $('.ui.accordion').accordion();

  $.ajax({
    url:'http://localhost:3000/API/order',
    type: 'GET',
    success: function(result){
      let history=`
      <center><table class="ui very basic collapsing celled table">
        <thead>
          <tr><th>Order</th>
          <th>Total</th>
          <th>Status</th>
          <th>Action</th>
        </tr></thead>
        <tbody>`
        for(let i in result){
          history+=
          `<tr>
            <td>
              <h4 class="ui image header">
                <div class="content">ID - ${result[i]._id}
                <div class="sub header">${result[i].dtCreated}
                </div></div></h4>
            </td>
            <td>${result[i].total}</td>
            <td>${result[i].status}</td>
            <td>
            <select id="${result[i]._id}" class="ui search dropdown">
              <option value="Order">Order</option>
              <option value="Cook">Cook</option>
              <option value="Delivered">Delivered</option>
            </select>

            </td>

          </tr>
          `
        }
          history+=
          `
          </tbody></table></center>`
            $("#history").html(history)
          }
  })

    $("#btn-submit").click(function(){
      let id = []
      let val = []
        $("select").each(function() {
       let b = $(this).attr('id')
       id.push(b);
        })

        let c = $("select").find('option:selected').each(function() {
          val.push(this.value)
        })

      console.log(id);
      console.log(val);
      console.log(id[0]);
      let iddd = id.length-1
      let ii = val[0];
      let urls = 'http://localhost:3000/API/order/'+id[iddd]+'/'+val[iddd]
      console.log(urls);
      $.ajax({
        url:urls,
        type: 'PUT',
        success: function(result){
          $("#message").show()
          $("#headerContent").html("Your order is successfully being sent...")
          console.log("SUKSES");
          window.location.href = 'http://localhost:4000/historyadmin'

        }
      })



    })
})
