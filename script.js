$(document).ready(function () {

    $.getJSON("fiction.json", function (data) {
        let fiction_data = '';

        $.each(data, function (key, value) {
            fiction_data += '<tr>';
            fiction_data += '<td>' + value.name + '</td>';
            fiction_data += '<td>' + value.Occupation + '</td>';
            fiction_data += '<td>' + value.age + '</td>';
            fiction_data += '<td>' + value.gender + '</td>';
            fiction_data += '</tr>';
        });
   
        $('#fiction_table').append(fiction_data);
        //console.log(fiction_data);
        

    });


    
    
    
        
        $("th").each(function(column){
        
       // $(this).hover(function(){
       //     $(this).addClass("clickable");
      //  },
        //    function(){
       //     $(this).removeClass("clickable");
     //   });
        
        $(this).contents().wrap('<a href="#"></a>');
        $(this).data("type", $(this).attr("class"));
        
        $(this).click(function(){
            var type = $(this).data("type");
            
            if($(this).not('.decending .ascending'))
            {
                var $records = $("table").find("tbody > tr");
         
              
                $records.sort(function(a,b){
                    if(type =="num"){
                     
                       
                        var value1 = $(a).children("td").eq(column).text();
                        var value2 = $(b).children("td").eq(column).text();
                        console.log(value1);
                        
                        
                        value1 = value1.split("-");
                         value2 = value2.split("-");
                        var values = [];

                        for(var i = 0, l = value1.length; i < l; i++) {
                            values.push(value1[i]);
                        }
                        console.log(values);
                       
                        console.log(`date is :${value1}`);
                        console.log(`date is :${value2}`);
                       
                        
                        value1 *=1;
                        value2 *=1;
                        return (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    }
                   
                    
                var value1 = $(a).children("td").eq(column).text();
                var value2 = $(b).children("td").eq(column).text();
                //console.log(value1);
                //console.log(value2);
                    
                
                
                return (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    
              
            });
              
            $.each($records, function(index,row){
                   $("tbody").append(row);
                });
                  $(this).addClass(".ascending");
            }
            
            //  is ascendet and should be reversed
            
            else if ($(this).is('.ascending')){
                
                console.log('shahrad');
              
                var $records = $("table").find("tbody > tr");
                console.log($records);
              
                $records.sort(function(a,b){
                var value1 = $(a).children("td").eq(column).text();
                var value2 = $(b).children("td").eq(column).text();
                //console.log(value1);
                //console.log(value2);
                
                
                return (value1 < value2) ? 1 : (value1 > value2) ? -1 : 0; 
             
               });
                $.each($records, function(index,row){
                   $("tbody").append(row);
                });
                
                  $(this).removeClass('ascending');
                  $(this).addClass(".decending");
              
        }
            
            //($(this).hasClass('.decending'))
          else {
                
                window.location.reload();
              console.log('refresh');
            }
            
          
                   
               
            
            

                
            
        });                       
            
            

                
            
    
       
        
        
        
          
      
    });



});
   