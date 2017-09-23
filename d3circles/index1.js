

var indexCard = d3.select('body').append('svg')
    .attr('width',600)
    .attr('height',400);

var clicked= true;


var circle1= indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 200)
    .attr('r',10)
    .attr('fill','blue')
    .on('click',function(d){
        if(clicked==true){
            d3.select(this).attr('fill','orange').attr('r',40);
            clicked= false;
            //do something

        }
        else{ //(if clicked==false
              //do something else

            d3.select(this).attr('fill','blue').transition().attr('r',10);
            clicked= true;
        }
        console.log(clicked);
    })
    .on('mouseover',function(d){
        d3.select(this).attr('stroke','red');
    })
    .on('mouseover',function(d){
        d3.select(this).attr('stroke','green');
    });

indexCard.append('rect')
    .attr('x',100)
    .attr('y',150)
    .attr('width',20)
    .attr('height',20);

indexCard.append ('line')
    .attr('x1',10)
    .attr('x2',20)
    .attr('y1',150)
    .attr('y2',250)
    .attr('stroke','purple');

circle1.attr('stroke',"purple");


indexCard.append('circle')
    .attr('cx', 450)
    .attr('cy', 250)
    .attr('r',40)
    .attr('fill','green');