
var indexCard = d3.select('body').append('svg')
    .attr('width',725)
    .attr('height',725);

var clicked= true;

indexCard.append('circle')
    .attr('cx', 550)
    .attr('cy', 375)
    .attr('r',125)
    .attr('fill','#D8D6EC')
    .attr('opacity','.3')
    .attr('stroke','black')
.on('click',function(d) {
    if (clicked == true) {
        d3.select(this).attr('fill', 'orange').attr('r', 155);
    }
    else{
            d3.select(this).attr('fill', 'blue').attr('r', 255);
            clicked= true;
        };
})


indexCard.append('circle')
    .attr('cx', 200)
    .attr('cy', 525)
    .attr('r',85)
    .attr('fill','#D8D6EC')
    .attr('opacity','.3');






indexCard.append('rect')
    .attr('x',255)
    .attr('y',155)
    .attr('width',118)
    .attr('height',118)
    .attr('fill','white')
    .attr('stroke','black')
    .attr('strokeWeight','10');

indexCard.append('rect')
    .attr('x',455)
    .attr('y',155)
    .attr('width',118)
    .attr('height',118)
    .attr('fill','white')
    .attr('stroke','black');

indexCard.append('rect')
    .attr('x',255)
    .attr('y',355)
    .attr('width',118)
    .attr('height',118)
    .attr('fill','white')
    .attr('stroke','black');


indexCard.append('rect')
    .attr('x',255)
    .attr('y',555)
    .attr('width',118)
    .attr('height',118)
    .attr('fill','white')
    .attr('stroke','black');

indexCard.append('rect')
    .attr('x',455)
    .attr('y',473)
    .attr('width',118)
    .attr('height',198)
    .attr('fill','white')
    .attr('stroke','black');


indexCard.append('circle')
    .attr('cx', 300)
    .attr('cy', 200)
    .attr('r',45)
    .attr('fill','#AEE0E8');

indexCard.append('circle')
    .attr('cx', 500)
    .attr('cy', 200)
    .attr('r',45)
    .attr('fill','#AEE0E8');

indexCard.append('circle')
    .attr('cx', 300)
    .attr('cy', 400)
    .attr('r',45)
    .attr('fill','#AEE0E8');

indexCard.append('circle')
    .attr('cx', 500)
    .attr('cy', 400)
    .attr('r',45)
    .attr('fill','#AEE0E8');

indexCard.append('circle')
    .attr('cx', 300)
    .attr('cy', 600)
    .attr('r',45)
    .attr('fill','#AEE0E8');

indexCard.append('circle')
    .attr('cx', 500)
    .attr('cy', 600)
    .attr('r',45)
    .attr('fill','#AEE0E8');

indexCard.append('circle')
    .attr('cx', 300)
    .attr('cy', 250)
    .attr('r',23)
    .attr('fill','#D8D6EC');

indexCard.append('circle')
    .attr('cx', 500)
    .attr('cy', 225)
    .attr('r',23)
    .attr('fill','#D8D6EC');

indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 475)
    .attr('r',23)
    .attr('fill','#D8D6EC');

indexCard.append('circle')
    .attr('cx', 550)
    .attr('cy', 378)
    .attr('r',23)
    .attr('fill','#D8D6EC');

indexCard.append('circle')
    .attr('cx', 300)
    .attr('cy', 650)
    .attr('r',23)
    .attr('fill','#D8D6EC');


indexCard.append('circle')
    .attr('cx', 478)
    .attr('cy', 578)
    .attr('r',23)
    .attr('fill','#D8D6EC');

indexCard.append ('line')
    .attr('x1',200)
    .attr('x2',200)
    .attr('y1',300)
    .attr('y2',395)
    .attr('stroke','#AEE0E8');

indexCard.append ('line')
    .attr('x1',175)
    .attr('x2',175)
    .attr('y1',325)
    .attr('y2',445)
    .attr('stroke','#AEE0E8');

indexCard.append ('line')
    .attr('x1',150)
    .attr('x2',150)
    .attr('y1',350)
    .attr('y2',490)
    .attr('stroke','#AEE0E8');










