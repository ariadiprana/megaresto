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
        </tr></thead>
        <tbody>`
        for(let i in result){
          history+=
          `<tr>
            <td>
              <h4 class="ui image header">
                <div class="content">ID - ${result[i]._id}
                <div class="sub header">${result[i].dtCreated}
                </div></div></h4></td><td>${result[i].total}
                </td><td>${result[i].status}</td></tr>`
        }
          history+=`</tbody></table></center>`
            $("#history").html(history)
          }
  })
})
