var app = new Vue({
  el: '#app',
  data: {
    showInfo: false,
    show: {
      filename: "",
      timestamp: 0,
      path: "",
      url: ""
    },
    his: []
  },
  created() {
    loadHis()
  },
  methods: {
    timeLocal(unix) {
      var t = new Date(unix * 1000)
      var m = t.getMonth()
      var d = t.getDate()
      m = m<10?"0"+m:m
      d = d<10?"0"+d:d
      return t.getFullYear()+"/"+m+"/"+d
       +" "+t.getHours()+":"+t.getMinutes()
    },
    clear() {
      if(confirm("确认要清除历史记录么?")) {
        this.his = []
        saveHis()
      }
    }
  }
})
