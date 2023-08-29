$(function(){
    $.ajax({
        url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-F101A12E-F875-4095-9CB6-5F0192EC29C6&format=JSON&locationName=%E5%A3%AB%E6%9E%97%E5%8D%80&elementName=T,Wx",
        method:"GET",
        dataType:"json",



        success:function(res){
            console.log(res);
            let path = res.records.locations[0].location[0];
            //台北市
            $("#city_name").html(res.records.locations[0].locationsName);
            //士林區
            $("#district").html(path.locationName);
            //平均溫度
            $("#tempture").html(path.weatherElement[0].time[0].elementValue[0].value + "&#176;");

 

            let j = 0;
            for(let i = 0; i < 10; i++){
                if(i % 2 == 0){
                    let wx = path.weatherElement[1].time[i].elementValue[0].value;

                    if(wx.indexOf('晴') > -1){
                        $(".block").eq(j).find("img").attr("src","https://cdn-icons-png.flaticon.com/512/6960/6960944.png");
                    }else if(wx.indexOf('雨') > -1){
                        $(".block").eq(j).find("img").attr("src","https://cdn-icons-png.flaticon.com/512/1248/1248097.png");
                    }else{
                        $(".block").eq(j).find("img").attr("src","https://i.imgur.com/BeWfUuG.png");
                    }

                    $(".day-temperature").eq(j).html(path.weatherElement[0].time[i].elementValue[0].value + "&#176;")

                    j++;
                }
            }
                
                         
            
 
        },

        error:function(){
            console.log('error');
        }
    })
})