import urlConfig from '@/util/urlConfig'
// 柱图
let setBar = (data) => {
  // 找出value中的最大值
  let maxValue = Math.max(...data.map(item => {
    return Number.parseInt(item['110']) + Number.parseInt(item['renmintj']) + Number.parseInt(item['falvzx'])
  }))
  let valueAxis = [{
    type: 'value',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#1194F8'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter: '{value}'
    },
    max: Number.parseInt((1.1 * maxValue)),
    splitLine: {
      show: false
    }
  }]
  let categoryAxis = [{
    type: 'category',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#1194F8'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      formatter: function (value) {
        if (value.length < 6) {
          return value
        }
        return value.substring(0, 6) + '...'
      }
    },
    data: data.map(item => {
      return item.qu
    }),
    splitLine: {
      show: false
    }
  }]
  let option = {
    title: {},
    tooltip: {
      show: true
    },
    color: ['#0847D6', '#1763F2', '#5D9BFF', '#FFFF00'],
    legend: {
      x: 'right',
      top: 20,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 13
      },
      data: ['人民调解', '法律咨询', '110', '历史平均值']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // axisType有两种：vertical，xAxis显示类目，yAxis显示数值；horizon，xAxis显示数值，yAxis显示类目
    // x轴配置项
    xAxis: categoryAxis,
    // y轴配置项
    yAxis: valueAxis,
    // bar配置项
    series: [{
      type: 'bar',
      name: '人民调解',
      stack: 'one',
      barWidth: 30,
      data: data.map(item => {
        return item['renmintj']
      })
    }, {
      type: 'bar',
      name: '法律咨询',
      stack: 'one',
      barWidth: 30,
      data: data.map(item => {
        return item['falvzx']
      })
    }, {
      type: 'bar',
      name: '110',
      stack: 'one',
      barWidth: 30,
      data: data.map(item => {
        return item['110']
      })
    }, {
      type: 'line',
      name: '历史平均值',
      data: data.map(item => {
        return item['pingjunz']
      })
    }]
  }
  return option
}

// 柱图
let setBar2 = (data) => {
  // 找出value中的最大值
  let maxValue = Math.max(...data.map(item => {
    return Number.parseInt(item['110']) + Number.parseInt(item['renmintj']) + Number.parseInt(item['falvzx'])
  }))
  let valueAxis = [{
    type: 'value',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#1194F8'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter: '{value}'
    },
    max: Number.parseInt((1.1 * maxValue)),
    splitLine: {
      show: false
    }
  }]
  let categoryAxis = [{
    type: 'category',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#1194F8'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      formatter: function (value) {
        if (value.length < 6) {
          return value
        }
        return value.substring(0, 6) + '...'
      }
    },
    data: data.map(item => {
      return item.qu
    }),
    splitLine: {
      show: false
    }
  }]
  let option = {
    title: {},
    tooltip: {
      show: true
    },
    color: ['#0847D6', '#1763F2', '#5D9BFF'],
    legend: {
      x: 'right',
      top: 20,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 13
      },
      data: ['人民调解', '法律服务', '110']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // axisType有两种：vertical，xAxis显示类目，yAxis显示数值；horizon，xAxis显示数值，yAxis显示类目
    // x轴配置项
    xAxis: categoryAxis,
    // y轴配置项
    yAxis: valueAxis,
    // bar配置项
    series: [{
      type: 'bar',
      name: '人民调解',
      stack: 'one',
      barWidth: 30,
      data: data.map(item => {
        return item['renmintj']
      })
    }, {
      type: 'bar',
      name: '法律服务',
      stack: 'one',
      barWidth: 30,
      data: data.map(item => {
        return item['falvzx']
      })
    }, {
      type: 'bar',
      name: '110',
      stack: 'one',
      barWidth: 30,
      data: data.map(item => {
        return item['110']
      })
    }]
  }
  return option
}

// 柱图
let setBar3 = (data, color, axisType, dataType, barMaxWidth, portrait, showValueAxis, rotate) => {
  barMaxWidth = barMaxWidth || 43
  // 找出value中的最大值
  let maxValue = Math.max(...data.map(function (obj) { return obj.value }))
  if (portrait) {
    maxValue = data.reduce(function (total, item) {
      return total + item.value
    }, 0)
  }
  let displayValueAxis = function () {
    let result = false
    if (axisType === 'vertical') {
      if (showValueAxis === false) {
        result = false
      } else {
        result = true
      }
    }
    return result
  }
  let valueAxis = [{
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: displayValueAxis(),
      interval: 'auto',
      color: '#4D84FE',
      fontSize: barMaxWidth < 16 ? barMaxWidth : 16,
      formatter: dataType === 'percent' ? '{value} %' : '{value}'
    },
    // value最大值的类型：percent，integer
    // max: Number.parseInt(dataType === 'percent' ? (1.0 * maxValue * 100) : (1.0 * maxValue)),
    max: Number.parseInt(dataType === 'percent' ? (100) : (1.0 * maxValue)),
    splitNumber: 4,
    splitLine: {
      show: false
    }
  }]
  let categoryAxis = [{
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#4D84FE',
      interval: 0,
      rotate: rotate || 0,
      fontSize: 15,
      formatter: function (value) {
        if (axisType === 'horizon') {
          return value
        } else {
          if (value.length <= 6) {
            return value
          } else {
            return value.substring(0, 5) + '..'
          }
        }
      }
    },
    data: data.map(function (obj) {
      return obj.name
    }),
    splitLine: {
      show: false
    }
  }]
  let option = {
    tooltip: {
      show: false
    },
    grid: {
      containLabel: function () { if (axisType === 'horizon') { return true } else { return false } }
    },
    // axisType有两种：vertical，xAxis显示类目，yAxis显示数值；horizon，xAxis显示数值，yAxis显示类目
    // x轴配置项
    xAxis: axisType === 'vertical' ? categoryAxis : valueAxis,
    // y轴配置项
    yAxis: axisType === 'vertical' ? valueAxis : categoryAxis,
    // bar配置项
    series: [{
      type: 'bar',
      name: name,
      stack: 'bar',
      z: 3,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: axisType === 'vertical' ? 0 : 1,
          y2: axisType === 'vertical' ? 1 : 0,
          colorStops: [{
            offset: 0, color: color[0] // 0% 处的颜色
          }, {
            offset: 1, color: color[1] // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      label: {
        show: true,
        position: axisType === 'vertical' ? 'top' : 'right',
        color: color[1],
        fontSize: 13
      },
      data: data.map(function (obj) {
        return dataType === 'percent' ? (Number.parseInt(obj.value * 100)) : (obj.value)
      })
    }]
  }
  if (axisType === 'vertical') {
    option.series.push({
      type: 'bar',
      name: name,
      stack: 'bar',
      itemStyle: {
        color: '#132665'
      },
      data: data.map(function (obj) {
        return dataType === 'percent' ? (Number.parseInt((maxValue - obj.value) * 100)) : (maxValue - obj.value)
      })
    })
  }
  if (barMaxWidth) {
    option.series[0].barMaxWidth = barMaxWidth
    if (axisType === 'vertical') {
      option.series[1].barMaxWidth = barMaxWidth
    }
  }
  if (portrait) {
    option.series.push({
      type: 'bar',
      name: name,
      stack: 'bar',
      itemStyle: {
        color: '#132665'
      },
      barMaxWidth: barMaxWidth,
      data: data.map(function (obj) {
        return dataType === 'percent' ? (Number.parseInt((maxValue - obj.value) * 100)) : (maxValue - obj.value)
      })
    })
  }
  return option
}

// 柱图
let setBar4 = (data) => {
  // 找出value中的最大值
  let maxValue = Math.max(...data.map(function (obj) { return obj.value }))
  let valueAxis = [{
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    max: Number.parseInt(1.0 * maxValue),
    splitLine: {
      show: false
    }
  }]
  let categoryAxis = [{
    type: 'category',
    boundaryGap: true,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#1F3490'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#1194F8',
      fontSize: 12,
      interval: 0,
      rotate: 0,
      formatter: function (value) {
        return value
      }
    },
    data: data.map(function (obj) {
      return obj.name
    }),
    splitLine: {
      show: false
    }
  }]
  let option = {
    // x轴配置项
    xAxis: categoryAxis,
    // y轴配置项
    yAxis: valueAxis,
    // bar配置项
    series: [{
      type: 'bar',
      name: name,
      stack: 'bar',
      z: 3,
      itemStyle: {
        color: '#1F3490'
      },
      label: {
        show: true,
        position: 'top',
        fontSize: 12,
        formatter: '{c|{c}}\n {x|}',
        rich: {
          c: {
            color: '#49EAEE',
            align: 'center'
          },
          x: {
            height: 1,
            width: 15,
            backgroundColor: '#49EAEE',
            align: 'center'
          }
        }
      },
      data: data.map(function (obj) {
        return obj.value
      })
    }]
  }
  option.series[0].barMaxWidth = 1
  return option
}

// 雷达图
let setRadar = (data) => {
  let option = {
    title: {},
    tooltip: {},
    radar: {
      radius: '65%',
      name: {
        textStyle: {
          color: '#1194F8'
        }
      },
      axisLine: {
        show: true
      },
      splitNumber: 2,
      splitLine: {
        show: true
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: 'rgba(255,255,255,0)'
        }
      },
      indicator: data.map(item => {
        return {name: item.mingcheng, max: 10}
      })
    },
    series: [{
      name: 'radar',
      type: 'radar',
      itemStyle: {
        color: '#26CEFF',
        opacity: 1
      },
      areaStyle: {
        color: '#1669EE'
      },
      data: [
        {
          value: data.map(item => {
            return Number(item.shuzhi)
          }),
          name: '处理效率'
        }
      ]
    }]
  }
  return option
}

// 雷达图
let setRadar2 = (data, indicator) => {
  let option = {
    title: {},
    tooltip: {
      show: false
    },
    radar: {
      radius: '65%',
      name: {
        textStyle: {
          color: '#1194F8'
        }
      },
      axisLine: {
        show: true
      },
      splitNumber: 2,
      splitLine: {
        show: true
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: 'rgba(255,255,255,0)'
        }
      },
      indicator: indicator
    },
    series: [{
      name: 'radar',
      type: 'radar',
      itemStyle: {
        color: '#FDCD0F',
        opacity: 0
      },
      areaStyle: {
        color: '#FDCD0F'
      },
      data: data
    }]
  }
  return option
}

// 折线图
let setLine = (data) => {
  let option = {
    title: {},
    tooltip: {
      trigger: 'axis'
    },
    color: ['#FFF225', '#30FF8D', '#26CEFF'],
    legend: {
      x: 'right',
      top: 20,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 13
      },
      data: ['人民调解', '法律服务', '110']
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 10,
      containLabel: true
    },
    toolbox: {},
    xAxis: {
      type: 'category',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#1194F8'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      boundaryGap: false,
      data: data.map(item => {
        let date = item.month.split('-')
        return `${date[0]}年${date[1]}月`
      })
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#1194F8'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: '人民调解',
        type: 'line',
        data: data.map(item => {
          return item['renmintj'] || item['tiaojieaj']
        })
      },
      {
        name: '法律服务',
        type: 'line',
        data: data.map(item => {
          return item['falvzx'] || item['jicengggflfw']
        })
      },
      {
        name: '110',
        type: 'line',
        data: data.map(item => {
          return item['110']
        })
      }
    ]
  }
  return option
}
// 折线图
let setLine2 = (data, showYAxis) => {
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      containLabel: false
    },
    toolbox: {},
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#1194F8'
      },
      splitLine: {
        show: false
      },
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: showYAxis || false,
        color: '#1194F8'
      },
      splitLine: {
        show: false
      }
    },
    series: []
  }
  if (data[0] && data[0]['gankongzs_ls']) {
    option.color = ['#1254C2', '#00FFFF']
    option.xAxis.data = data.map(item => {
      return item['time']
    })
    option.yAxis.splitNumber = 1
    option.yAxis.max = 8
    option.yAxis.min = 6
    option.series[0] = {
      name: '历史同期',
      type: 'line',
      smooth: true,
      symbolSize: 1,
      lineStyle: {
        width: 1
      },
      data: data.map(item => {
        return item['gankongzs_ls']
      })
    }
    option.series[1] = {
      name: '和谐指数',
      type: 'line',
      smooth: true,
      symbolSize: 1,
      lineStyle: {
        width: 1
      },
      areaStyle: {
        opacity: 0.4
      },
      data: data.map(item => {
        return item['gankongzs']
      })
    }
  }
  if (data[0] && data[0]['value']) {
    option.color = ['#00FFFF']
    option.xAxis.data = data.map(item => {
      return item['name']
    })
    option.series[0] = {
      name: '数据',
      type: 'line',
      smooth: true,
      symbolSize: 1,
      lineStyle: {
        width: 1
      },
      areaStyle: {
        opacity: 0.4
      },
      data: data.map(item => {
        return item['value']
      })
    }
  }
  if (data[0] && data[0]['number']) {
    option.color = ['#00FFFF']
    option.xAxis.data = data.map(item => {
      return item['time']
    })
    option.series[0] = {
      name: '数量',
      type: 'line',
      smooth: true,
      symbolSize: 1,
      lineStyle: {
        width: 1
      },
      areaStyle: {
        opacity: 0.4
      },
      data: data.map(item => {
        return item['number']
      })
    }
  }
  return option
}
// 折线图--有area属性
let setLine3 = (data) => {
  let maxValue = data.map(function (item) { return item.value })
  let option = {
    color: ['#1254C2'],
    grid: {
      containLabel: false
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#1194F8'
      },
      splitLine: {
        show: false
      },
      boundaryGap: true,
      data: []
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#1194F8'
      },
      splitLine: {
        show: false
      },
      splitNumber: 7,
      max: maxValue,
      min: 0
    },
    series: [{
      name: name,
      type: 'line',
      smooth: true,
      symbolSize: 8,
      lineStyle: {
        width: 1
      },
      areaStyle: {
        opacity: 0.8,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [{
            offset: 0, color: '#495AFF' // 0% 处的颜色
          }, {
            offset: 1, color: '#0ACFFE' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      label: {
        show: true,
        position: 'top',
        color: '#0AAAD9',
        fontSize: 20
      },
      data: []
    }]
  }
  option.xAxis.data = data.map(function (item) { return item.name })
  option.series[0].data = data.map(function (item) { return item.value })
  return option
}
// 折线图--没有area属性
let setLine4 = (data, dataType, legend, color) => {
  let option = {
    grid: {
      containLabel: false
    },
    color: color || ['#6F9BFD', '#FDCB35', '#A3A3A3'],
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4D84FE'
      },
      splitLine: {
        show: false
      },
      boundaryGap: true,
      data: []
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#4D84FE',
        formatter: dataType === 'integer' ? '{value}' : '{value} %'
      },
      splitLine: {
        show: false
      }
    },
    series: []
  }
  // 设置category对应数据
  data[0].map(item => {
    option.xAxis.data.push(item['name'])
  })
  // 添加系列并设置对应数据
  data.map((series, index) => {
    option.series.push({
      name: legend && legend[index] ? legend[index] : 'seriesname',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 1
      },
      label: {
        show: true,
        fontSize: 18,
        formatter: dataType === 'integer' ? '{c}' : '{c} %'
      },
      data: data[index].map(item => {
        return item['value']
      })
    })
  })
  if (legend && legend.length > 0) {
    option.legend = {
      orient: 'horizontal',
      left: 'center',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16
      },
      data: legend.map(item => {
        return item
      })
    }
  }
  if (data.length === 1) {
    option.series[0].label.color = '#FFC400'
  }
  return option
}

// 折线图--dataZoom属性
let setLine5 = (data, callback) => {
  let date = []
  data.map((item) => {
    date.push(item.name)
    return {name: item.name, value: item.value}
  })
  callback(date)
  let option = {
    tooltip: {
      show: false,
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%']
      }
    },
    title: {
      show: false,
      position: 'left',
      text: '',
      textStyle: {
        color: '#00C6FF',
        fontSize: 16
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date,
      axisLine: {
        lineStyle: {
          color: '#4D84FE'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        // interval: 0,
        color: '#4D84FE'
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        lineStyle: {
          color: '#4D84FE'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#4D84FE'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4D84FE'
      }
    },
    dataZoom: [{
      start: 85,
      end: 100,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#157BD3',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      },
      // 是否显示detail，即拖拽时候显示详细数值信息。
      showDetail: false,
      // 拖动时，是否实时更新系列的视图。如果设置为 false，则只在拖拽结束的时候更新。
      realtime: false,
      fillerColor: '#1F3490',
      dataBackground: {
        lineStyle: {
          color: '#7D7D7D',
          width: 1
        },
        areaStyle: {
          color: '#EEEEEE'
        }
      },
      borderColor: '#1F3490'
    }],
    series: [
      {
        name: '模拟数据',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          normal: {
            color: 'rgb(255, 70, 131)'
          }
        },
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }],
              globalCoord: false
            }
          }
        },
        data: data
      }
    ]
  }
  return option
}

// 折线图
let setLine6 = (data, dataType, title) => {
  let option = {
    grid: {
      containLabel: false
    },
    color: ['#30FF8D'],
    title: {
      show: function () { if (title !== undefined) { return true } else { return false } },
      left: '10%',
      text: title,
      textStyle: {
        color: '#FFC600',
        fontSize: 18
      }
    },
    tooltip: {
      show: true,
      trigger: 'item',
      position: 'right',
      formatter: '{c}',
      backgroundColor: '#FFB20C'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4D84FE'
      },
      splitLine: {
        show: false
      },
      boundaryGap: true,
      data: data.map(item => {
        return item['name']
      })
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        color: '#4D84FE',
        formatter: dataType === 'integer' ? '{value}' : '{value} %'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#295086'
        }
      }
    },
    series: [{
      name: 'seriesname',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 1
      },
      data: data.map(item => {
        return item['value']
      })
    }]
  }
  return option
}

// 折线图
let setLine7 = (data, dataType) => {
  let option = {
    grid: {
      containLabel: false
    },
    color: ['#30FF8D'],
    tooltip: {
      show: true,
      trigger: 'item',
      position: 'right',
      formatter: function (t) {
        return data[t.dataIndex].type
      },
      backgroundColor: '#FFB20C'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4D84FE'
      },
      splitLine: {
        show: false
      },
      boundaryGap: true,
      data: data.map(item => {
        return item['name']
      })
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#4D84FE',
        formatter: dataType === 'integer' ? '{value}' : '{value} %'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#295086'
        }
      }
    },
    series: [{
      name: 'seriesname',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 1
      },
      data: data.map(item => {
        return item['value']
      })
    }]
  }
  return option
}

// 液体填充配置项
let fillOption = (center, data, color, fillData, fillFontSize, borderColor) => {
  color = color || '#3699F1'
  return {
    type: 'liquidFill',
    radius: '75%',
    center: center,
    color: [color],
    itemStyle: {
      opacity: 1
    },
    emphasis: {
      itemStyle: {
        opacity: 0.5
      }
    },
    outline: {
      borderDistance: 1,
      itemStyle: {
        borderColor: borderColor || color,
        borderWidth: 2,
        shadowBlur: 8
      }
    },
    backgroundStyle: {
      color: 'transparent'
    },
    label: {
      color: '#ffffff',
      fontSize: fillFontSize || 13,
      fontWeight: 'normal',
      formatter: function () {
        return data <= 1 ? data * 100 + '%' : data
      }
    },
    animationDuration: 1000,
    animationDurationUpdate: 1000,
    period: 3000,
    data: fillData || [0.25, 0.1]
  }
}

// 液体填充
let setFill = (data, color, text, fillData, fillFontSize, borderColor) => {
  let option = {
    title: {
      text: text,
      // textAlign: 'center',
      textStyle: {
        color: '#1194F8',
        fontSize: 12
      },
      bottom: -5,
      left: 0
    },
    series: [fillOption(['50%', '38%'], data, color, fillData, fillFontSize, borderColor)]
  }
  return option
}

// 圆环图
let setPie = (data1, data2) => {
  let option = {
    color: ['#1C53B3', '#3E79DF', '#FF936D', '#45FFA9', '#FDBF5E', '#FFF281', '#FF7279'],
    series: [
      {
        name: '调解',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data1
      },
      {
        name: '调解',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
          normal: {
            formatter: '{c|{c}}\n {hr|}\n {b|{b}}',
            rich: {
              c: {
                fontSize: 20,
                lineHeight: 21,
                align: 'center'
              },

              hr: {
                borderColor: '#fff',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#1194F8',
                fontSize: 16,
                lineHeight: 20
              }
            }
          }
        },
        data: data2
      }
    ]
  }
  return option
}

// 圆环图
let setPie2 = (data) => {
  let option = {
    color: ['#7DA5FE', '#F24848', '#FFC400', '#0E57FC', '#3674FF'],
    tooltip: {
      show: true
    },
    series: [
      {
        name: '调解',
        type: 'pie',
        radius: ['40%', '55%'],
        avoidLabelOverlap: true,
        label: {
          normal: {
            // formatter: '{c|{c}}\n {hr|}\n {b|{b}}',
            formatter: '{b|{b}}',
            rich: {
              c: {
                color: '#FFC600',
                fontSize: 20,
                lineHeight: 21,
                align: 'center'
              },

              hr: {
                borderColor: '#4D84FE',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#B8CEFF',
                fontSize: 16,
                lineHeight: 20
              }
            }
          }
        },
        labelLine: {
          lineStyle: {
            color: '#4D84FE'
          }
        },
        data: data
      }
    ]
  }
  return option
}

// 圆环图
let setPie3 = (data, showRose) => {
  let option = {
    legend: {
      orient: 'vertical',
      bottom: '35%',
      right: 30,
      textStyle: {
        color: '#7DA5FE',
        fontSize: 16
      },
      data: data.map(item => {
        return item.name
      })
    },
    color: ['#4D84FE', '#F4A869', '#9979CC', '#854DB5', '#EF5665', '#EF5665', '#F77C88'],
    series: [
      {
        name: 'seriesName',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['40%', '55%'],
        roseType: showRose || false,
        avoidLabelOverlap: true,
        label: {
          normal: {
            formatter: '{d|{d}%}\n {hr|}\n',
            rich: {
              c: {
                color: '#FFC600',
                fontSize: 17,
                lineHeight: 12,
                align: 'center'
              },
              d: {
                color: '#FFC600',
                fontSize: 17,
                lineHeight: 12,
                align: 'center'
              },
              hr: {
                borderColor: '#4D84FE',
                width: '100%',
                borderWidth: 1,
                height: 0
              }
            }
          }
        },
        labelLine: {
          lineStyle: {
            color: '#4D84FE'
          }
        },
        data: data
      }
    ]
  }
  return option
}

// 圆环图
let setPie4 = (data, title, bgColorOpacity, titlePosition) => {
  let color = ['#00ECF6', '#0A4179']
  let option = {
    title: {
      x: 'center',
      y: titlePosition || 'bottom',
      // bottom: 6,
      text: title || '标题',
      textStyle: {
        color: '#1194F8',
        fontSize: 12
      }
    },
    color: color,
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['65%', '75%'],
      label: {
        show: false
      },
      data: data
    }, {
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['0%', '65%'],
      data: [{
        value: 0,
        name: data[0] + '%',
        label: {
          show: true,
          position: 'center',
          fontSize: 16,
          color: color[0]
        },
        itemStyle: {
          color: color[1],
          opacity: bgColorOpacity === 0 ? 0 : 1
        }
      }]
    }]
  }
  return option
}

// 圆环图
let setPie5 = (data, color) => {
  color = color ? [`rgba(${color.join(',')},1)`, `rgba(${color.join(',')},0)`] : ['rgba(109,239,39, 1)', 'rgba(109,239,39, 0)']
  let option = {
    title: {
      x: 'center',
      y: 'center',
      text: data,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 44
      },
      subtext: '全年',
      subtextStyle: {
        color: '#1194F8',
        fontSize: 12
      }
    },
    color: color,
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['80%', '85%'],
      clockwise: false,
      label: {
        show: false
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0.6,
          y2: 0,
          colorStops: [{
            offset: 0, color: color[0] // 0% 处的颜色
          }, {
            offset: 1, color: color[1] // 100% 处的颜色
          }],
          globalCoord: false
        }
      },
      data: [{
        name: 'all',
        value: '100'
      }]
    }]
  }
  return option
}

// 圆环图
let setPie6 = (data, dataType, isPie, removePaddingRight, color) => {
  isPie = isPie || false
  removePaddingRight = removePaddingRight || false
  color = color || data.length > 4 ? ['#95B6FF', '#4D84FE', '#EC4050', '#FEC596', '#F59B5B', '#F18D47', '#F77C88'] : ['#FFBB50', '#00E767', '#35C4F9', '#FF4240']
  let option = {
    legend: {
      orient: 'center',
      top: 'middle',
      right: removePaddingRight === true ? 0 : '25%',
      textStyle: {
        color: '#7DA5FE',
        fontSize: 16
      },
      data: data.map(item => {
        return item.name
      })
    },
    tooltip: {
      show: true,
      formatter: function (params) {
        if (dataType === 'percent') {
          return params.name + ': ' + params.percent + '%'
        } else {
          return params.name + ': ' + params.value + '件'
        }
      }
    },
    color: color,
    series: [
      {
        name: '饼图',
        type: 'pie',
        center: ['35%', '50%'],
        radius: isPie ? ['0', '80%'] : ['65%', '80%'],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  }
  return option
}

// 漏斗图
let setFunnel = (data) => {
  let option = {
    color: ['rgba(11,83,243,1)', 'rgba(11,83,243,0.8)', 'rgba(11,83,243,0.6)', 'rgba(11,83,243,0.4)', 'rgba(11,83,243,0.2)'],
    series: [
      {
        name: '1',
        type: 'funnel',
        maxSize: '55%',
        label: {
          position: 'right',
          formatter: function (t) {
            return `{b|${t.data.name}}\n{c|${t.data.other}}`
          },
          padding: [5, 5, 5, 5],
          rich: {
            b: {
              fontSize: 19,
              align: 'center',
              color: '#0134A5'
            },
            c: {
              fontSize: 25,
              align: 'center',
              color: '#001F77'
            }
          },
          width: 120,
          heitht: 60,
          backgroundColor: {
            image: 'static/renmintj/icon_label.png'
          }
        },
        labelLine: {
          show: true,
          length: 40,
          lineStyle: {
            color: '#5C8EFE',
            type: 'dotted'
          }
        },
        data: data
      },
      {
        name: '2',
        type: 'funnel',
        maxSize: '55%',
        label: {
          position: 'inside',
          formatter: '{b}',
          color: '#B1C5FF',
          fontSize: 16
        },
        data: data
      }
    ]
  }
  console.log(option)
  return option
}

let setWordcloud = (data, maskImage) => {
  let option = {
    series: [{
      type: 'wordCloud',

      // The shape of the "cloud" to draw. Can be any polar equation represented as a
      // callback function, or a keyword present. Available presents are circle (default),
      // cardioid (apple or heart shape curve, the most known polar equation), diamond (
      // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

      shape: 'diamond',
      maskImage: maskImage,

      // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
      // Default to be put in the center and has 75% x 80% size.

      width: '100%',
      height: '100%',

      // Text size range which the value in data will be mapped to.
      // Default to have minimum 12px and maximum 60px size.

      sizeRange: [10, 40],

      // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

      rotationRange: [-60, 60],
      rotationStep: 30,

      // size of the grid in pixels for marking the availability of the canvas
      // the larger the grid size, the bigger the gap between words.

      gridSize: 2,

      // Global text style
      textStyle: {
        normal: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')'
          }
        }
      },

      // Data is an array. Each array item must have name and value property.
      data: data
    }]
  }
  return option
}

// 地图--2d
let setMap = (pointData) => {
  let geoCoordMap = {
    '闵行': [121.394878, 31.072511],
    '奉贤': [121.555854, 30.8803],
    '黄浦': [121.491, 31.237],
    '宝山': [121.440296, 31.401281],
    '虹口': [121.512, 31.27],
    '长宁': [121.43, 31.227],
    '青浦': [121.07968, 31.141832],
    '杨浦': [121.541702, 31.270352],
    '浦东': [121.736377, 31.088346],
    '静安': [121.454, 31.234],
    '嘉定': [121.20573, 31.372673],
    '松江': [121.178709, 30.992306],
    '徐汇': [121.43452, 31.170563],
    '崇明': [121.563184, 31.631849],
    '金山': [121.233758, 30.816867]
  }
  let convertData = function (data) {
    let res = []
    for (var i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  let getPointDataByTime = function (time) {
    return pointData.filter((item) => {
      if (item.riqi === time) {
        return true
      }
    }).map((item) => {
      return {
        name: item.diqu,
        value: item.shuliang
      }
    })
  }

  let maxAndMin = function (list) {
    list = list.map(item => {
      return parseInt(item.value)
    })
    return {max: list.reduce((v1, v2) => {
      return v1 < v2 ? v2 : v1
    }),
    min: list.reduce((v1, v2) => {
      return v1 < v2 ? v1 : v2
    })}
  }

  let date = Array.from(new Set(pointData.map(item => {
    return item.riqi
  }))).reverse()

  let option = {
    baseOption: {
      timeline: {
        bottom: 15,
        data: date,
        axisType: 'category',
        lineStyle: {
          width: 3,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: '#1678CE'
            }, {
              offset: 1, color: '#005BFF'
            }]
          },
          opacity: 0.9
        },
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFBQjlCMEU4NTk3MTExRThCMkZEREU2MzkzOEUyNzg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFBQjlCMEU5NTk3MTExRThCMkZEREU2MzkzOEUyNzg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUFCOUIwRTY1OTcxMTFFOEIyRkRERTYzOTM4RTI3ODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCOUIwRTc1OTcxMTFFOEIyRkRERTYzOTM4RTI3ODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Or62fAAABBklEQVR42rzSvWoCQRDA8b3LIQi29wYSbUVjoiApRBFfwVpBJBAUfIgQQZRAsPchkjRa+QGa1oBvYCsBweTyX5iT9WIRUjjwY2/3ZnaXZSzP85QZsXflMNRwhz4GHwm1N3Mss4iCPEMPYUyQxScaFI6OikiO8v2AW7xhZWwcRwFjtCleW5dLTyfXZecZvtTvuMCNeNJF+n4dbCXBRhJpzLHAt/yLoOXIxC/Q1yzClXkZV3jF2s+zA9eoGAV+uLJ+CFv9I85fFJFxiE0gZyPrhzxHnruKqTzxM1K4ljX95BYy0iEdsyMekftTRwR6ryQnh+RUfdoOTZJfTjZsoMvv0T3V5T8CDADeNVMn4qZDZQAAAABJRU5ErkJggg==',
        symbolSize: [13, 15],
        label: {
          color: '#1194F8',
          fontSize: 14,
          padding: [1, 0, 0, 0]
        },
        emphasis: {
          label: {
            color: '#FFF225',
            fontSize: 14
          },
          controlStyle: {
            color: '#00F6FF',
            borderColor: '#00F6FF'
          }
        },
        checkpointStyle: {
          symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyMTUzODA2NjU2MjExRTg5QUEzQTM0ODU2NUFFNkUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyMTUzODA3NjU2MjExRTg5QUEzQTM0ODU2NUFFNkUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTIxNTM4MDQ2NTYyMTFFODlBQTNBMzQ4NTY1QUU2RTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTIxNTM4MDU2NTYyMTFFODlBQTNBMzQ4NTY1QUU2RTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4S76/kAAABPElEQVR42rySMUvDQBiGc5czpdi14Co4uKttKYiDKOJfcFYQEUTBH1FaEMVBd3+EuujUGnB3KDoqdC1K4iXncyWp8ejQyQ8eLt+X94XjvlcYY7xivX1UFMceHMIFXM/PDXVRI4omDOsc51KYslK6q7VqpkZ8MjvA+PDHhHiB75YQZm1G6Xt4yQXfWi3ChjHikfYUc1+8vs+2aPaVn3SDIH4Snpd4TnEXP46Dhk78Bu2lNZlyKepImQ4zjYQlqEEIz5DaH2kqK19R6USNVL8Ge81NqGb9NqzAHfRznXRuslMw5FXN5uNyTVPVP5vsq2T9DQwczSCbj3X2yducu+ypx55CMVqLtwx16NknZyDYU409Nemviolok4jVqRLhZG+Lo0P2ArIXkr062YuYHSO+nRhYJ+VHcDYp5T8CDACVXJMdqdwOTQAAAABJRU5ErkJggg==',
          symbolSize: [21, 25]
        },
        autoPlay: true,
        playInterval: 5000,
        controlStyle: {
          showPlayBtn: true,
          showPrevBtn: true,
          showNextBtn: true,
          position: 'left',
          color: '#1194F8',
          borderColor: '#1194F8',
          borderWidth: 0
        }
      },
      geo: {
        map: 'shanghai',
        zoom: 1.2,
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#1A3DAC',
            borderColor: '#031652',
            borderWidth: 1,
            shadowColor: 'rgba(255, 255, 255, 0.35)',
            shadowBlur: 5
          },
          emphasis: {
            areaColor: '#1A3DAC'
          }
        }
      },
      series: [{
        name: '散点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
          scale: 1.8
        },
        hoverAnimation: true,
        animationDuration: 3000,
        label: {
          normal: {
            formatter: function (component) {
              return component.value[2]
            },
            top: 'center',
            left: 'center',
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: '#FDCD0F',
            shadowBlur: 10,
            shadowColor: '#FDCD0F'
          }
        },
        zlevel: 1,
        tooltip: {
          formatter: function (component) {
            return component.data.name + ':' + component.value[2]
          }
        }
      }],
      tooltip: {
        show: true,
        showContent: true
      }
    },
    options: []
  }
  date.map(item => {
    option.options.push({
      series: [{
        symbolSize: function (val) {
          let denominator = maxAndMin(getPointDataByTime(item)).max === maxAndMin(getPointDataByTime(item)).min ? 1 : maxAndMin(getPointDataByTime(item)).max - maxAndMin(getPointDataByTime(item)).min
          let numerator = val[2] === maxAndMin(getPointDataByTime(item)).min ? 1 : val[2] - maxAndMin(getPointDataByTime(item)).min
          return numerator / denominator * 30 + 2
        },
        data: convertData(getPointDataByTime(item))
      }
      ]
    })
  })
  return option
}

// 地图--3d
let setMap2 = (data) => {
  data = data.filter(function (dataItem) {
    return dataItem[2] > 0
  }).map(function (dataItem) {
    return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])]
  })
  let option = {
    geo3D: {
      map: 'shanghai',
      // 三维地理坐标系组件组件在三维场景中的宽度。
      boxWidth: 100,
      // 三维地理坐标系组件组件在三维场景中的高度。
      boxHeight: 10,
      // 三维地理坐标系组件组件在三维场景中的深度。
      boxDepth: 'auto',
      // 三维地图每个区域的高度。
      regionHeight: 2,
      // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
      groundPlane: {
        show: false,
        color: '#999'
      },
      // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
      itemStyle: {
        color: '#00467F',
        borderColor: '#111111',
        shadowColor: 'rgba(255, 255, 255, 0.3)',
        shadowBlur: 20
      },
      // 三维地理坐标系组件中三维图形的着色效果
      shading: 'lambert',
      // 光照相关的设置。
      light: {
        // 场景主光源的设置
        main: {
          intensity: 5,
          shadow: true,
          shadowQuality: 'high',
          alpha: 40
        },
        // 全局的环境光设置。
        ambient: {
          intensity: 0
        }
      },
      // 后处理特效的相关配置，后处理特效可以为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果。可以让整个画面更富有质感。
      postEffect: {
        enable: true,
        // 高光特效。
        bloom: {
          enable: false
        },
        // 景深效果。
        depthOfField: {
          enable: false,
          focalRange: 10,
          blurRadius: 10,
          fstop: 1
        },
        // 环境光遮蔽
        SSAO: {
          radius: 1,
          intensity: 1,
          enable: true
        }
      },
      // 用于鼠标的旋转，缩放等视角控制。
      viewControl: {
        distance: 150,
        panMouseButton: 'left',
        rotateMouseButton: 'right'
      },
      temporalSuperSampling: {
        enable: true
      }
    },
    series: [{
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      shading: 'lambert',
      data: data,
      barSize: 1.5,
      minHeight: 0,
      silent: true,
      itemStyle: {
        color: 'orange',
        opacity: 1
      }
    }]
  }
  return option
}

let setMapbox = (mapData) => {
  const osmUrl = urlConfig.osmUrl
  const option = {
    visualMap: [{
      type: 'continuous',
      show: false,
      max: 600,
      calculable: true,
      realtime: false,
      inRange: {
        color: ['#1122a5', '#2939f8', '#2737ff', '#2c3dfd', '#408bff', '#3180ff', '#89ffff', '#e6ffff']
      },
      outOfRange: {
        colorAlpha: 0
      },
      seriesIndex: [0]
    }],

    mapbox: {
      // style: 'mapbox://styles/mapbox/dark-v9',
      style: {
        'version': 8,
        'glyphs': `${osmUrl}/fonts/{fontstack}/{range}.pbf`,
        'sources': {
          'osm-tiles': {
            'type': 'raster',
            'tiles': [
              `${osmUrl}/styles/dark-matter/{z}/{x}/{y}.png`
            ],
            'tileSize': 256
          }
        },
        'layers': [{
          'id': 'dark-matter',
          'type': 'raster',
          'source': 'osm-tiles',
          'minzoom': 0,
          'maxzoom': 22
        }]
      },
      // 地图中心经纬度。经纬度用数组
      center: [121.5193, 31.163070],
      // 地图的缩放等级
      zoom: 9.5,
      // 视角俯视的倾斜角度
      pitch: 50,
      // 地图的旋转角度
      bearing: -10,
      boxHeight: 6,
      // 后处理特效的相关配置
      postEffect: {
        enable: true,
        // 环境光遮蔽
        SSAO: {
          enable: true,
          // 质量，支持'low', 'medium', 'high', 'ultra'
          quality: 'medium',
          // 采样半径。半径越大效果越自然，但是需要设置较高的'quality'。
          radius: 2,
          // 强度。值越大颜色越深。
          intensity: 1.5
        }
      },
      // 光照相关的设置
      light: {
        // 场景主光源的设置
        main: {
          // 主光源的强度
          intensity: 1,
          // 主光源是否投射阴影
          shadow: false,
          // 阴影的质量
          shadowQuality: 'medium'
        },
        // 全局的环境光设置。
        ambient: {
          // 环境光的强度。
          intensity: 0
        },
        ambientCubemap: {
          texture: './static/data-1491896094618-H1DmP-5px.hdr',
          exposure: 1,
          diffuseIntensity: 0.5
        }
      }
    },
    series: [{
      name: '分布',
      type: 'bar3D',
      coordinateSystem: 'mapbox',
      // 三维柱状图中三维图形的着色效果：'color' 只显示颜色，不受光照等其它因素的影响。'lambert' 通过经典的 lambert 着色表现光照带来的明暗。'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升。
      shading: 'realistic',
      barSize: 0.4,
      minHeight: 2,
      data: mapData,
      silent: false,
      emphasis: {
        label: {
          show: false,
          zIndex: 10,
          formatter: function (component) {
            return `名称: ${component.name}\n数量: ${component.value[2]}件`
          },
          textStyle: {
            color: '#000000',
            borderWidth: 0,
            fontSize: 20,
            fontWeight: 'bold'
          }
        }
      }
    },
    {
      name: '重点事件',
      type: 'bar3D',
      coordinateSystem: 'mapbox',
      shading: 'realistic',
      barSize: 0.5,
      data: [
        // {name: '重点事件1', value: [121.642938, 30.880678, 100000], type: '类别', date: '日期', address: '地址'},
        // {name: '重点事件2', value: [121.542938, 30.880678, 100000], type: '类别', date: '日期', address: '地址'},
        // {name: '重点事件3', value: [121.442938, 30.880678, 100000], type: '类别', date: '日期', address: '地址'},
        // {name: '重点事件4', value: [121.342938, 30.880678, 100000], type: '类别', date: '日期', address: '地址'},
        // {name: '重点事件5', value: [121.242938, 30.880678, 100000], type: '类别', date: '日期', address: '地址'}
      ],
      // symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAABRCAYAAABcxs+uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyMDNFQkVDNzlCOTExRThCMDgxRDE1NjA0MUE5NzQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyMDNFQkVENzlCOTExRThCMDgxRDE1NjA0MUE5NzQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTIwM0VCRUE3OUI5MTFFOEIwODFEMTU2MDQxQTk3NDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTIwM0VCRUI3OUI5MTFFOEIwODFEMTU2MDQxQTk3NDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5eA6HCAAAMvUlEQVR42qxZ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',
      // symbolSize: [64, 128],
      silent: false
    }]
  }
  return option
}

export default {setBar, setBar2, setBar3, setBar4, setRadar, setRadar2, setLine, setLine2, setLine3, setLine4, setLine5, setLine6, setLine7, setFill, setPie, setPie2, setPie3, setPie4, setPie5, setPie6, setFunnel, setWordcloud, setMap, setMap2, setMapbox}
