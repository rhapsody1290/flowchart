// JavaScript Document
$(document).ready(function(){	

	//横坐标（时间）
	var date = [];
    var dataBT=[];
	var dataEBT=[];
	//realTimeTotalReceivedBytes
	var dataRD = [];
	var optionRD = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			left: 'center',
			text: 'Real Time Total Received Bytes',
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: date
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%']
		},
		dataZoom: [{
			type: 'inside',
		   // start: 0,
			//end: 100
		}, {
			start: 0,
			end: 10,
			handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			handleSize: '80%',
			handleStyle: {
				color: '#fff',
				shadowBlur: 3,
				shadowColor: 'rgba(0, 0, 0, 0.6)',
				shadowOffsetX: 2,
				shadowOffsetY: 2
			}
		}],
		series: [
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(255, 158, 68)'
						}, {
							offset: 1,
							color: 'rgb(255, 70, 131)'
						}])
					}
				},
				data: dataRD
			},
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(255, 158, 68)'
						}, {
							offset: 1,
							color: 'rgb(255, 70, 131)'
						}])
					}
				},
				data: dataBT
			},
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(255, 158, 68)'
						}, {
							offset: 1,
							color: 'rgb(255, 70, 131)'
						}])
					}
				},
				data: dataEBT
			}
		]
	};
	var myChartRD = echarts.init(document.getElementById('echartRD'));
	myChartRD.setOption(optionRD);

	//realTimeTotalPacketNum
	var dataPN = [];
	var optionPN = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		title: {
			left: 'center',
			text: 'Real Time Total Packet Number',
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: date
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%']
		},
		dataZoom: [{
			type: 'inside',
		   // start: 0,
			//end: 100
		}, {
			start: 0,
			end: 10,
			handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			handleSize: '80%',
			handleStyle: {
				color: '#fff',
				shadowBlur: 3,
				shadowColor: 'rgba(0, 0, 0, 0.6)',
				shadowOffsetX: 2,
				shadowOffsetY: 2
			}
		}],
		series: [
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(255, 158, 68)'
						}, {
							offset: 1,
							color: 'rgb(255, 70, 131)'
						}])
					}
				},
				data: dataPN
			},
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(255, 158, 68)'
						}, {
							offset: 1,
							color: 'rgb(255, 70, 131)'
						}])
					}
				},
				data: dataBT
			},
			{
				name:'模拟数据',
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgb(255, 158, 68)'
						}, {
							offset: 1,
							color: 'rgb(255, 70, 131)'
						}])
					}
				},
				data: dataEBT
			}
		]
	};
	var myChartPN = echarts.init(document.getElementById('echartPN'));
	myChartPN.setOption(optionPN);
	//新图表在此添加!!!!
	//暂停接收
	var quit=false;
	$("#quit").click(function(){
		quit = !quit;
		if(quit){
			$("#quit").text('开始更新数据');
		}else{
			$("#quit").text('暂停数据更新');
		}
	})    
	
	//从后端接收数据
	setInterval(
		//function(){ $.getJSON("http://qianmingxs.nat123.net:45883/?",function(getdata){
		function(){ $.getJSON("http://localhost:8000",function(getdata){

			dataRD.push(getdata.realTimeTotalReceivedBytes);
			dataPN.push(getdata.realTimeTotalPacketNum);
			dataBT.push(getdata.realTimeTotalReceivedBytesThreshold);
			dataEBT.push(getdata.averageTotalReceivedBytesThreshold);

			//横坐标
			date.push(getdata.strCurrentTime);
			if(date.length>86400){
				dataPN.shift();
				dataRD.shift();
				dataBT.shift();
				dataEBT.shift();
				date.shift();
			}
			//localStorage.setItem(getdata.strCurrentTime, getdata.realTimeTotalReceivedBytes);
			//localStorage.setItem(getdata.strCurrentTime, getdata.realTimeTotalPacketNum);
			if(!quit){
				myChartRD.setOption(optionRD);
				myChartPN.setOption(optionPN);		
			}
		})
	}, 1000);	
});
