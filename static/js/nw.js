var gui = require('nw.gui')
var fs = require("fs")
var path = require('path')

var menu = new nw.Menu()
var clipboard = nw.Clipboard.get()

menu.append(new nw.MenuItem({
  label: '复制当前图片链接',
  click: function(){
    clipboard.set(app.show.url, 'text')
  }
}))
menu.append(new nw.MenuItem({ type: 'separator' }))
menu.append(new nw.MenuItem({
  label: '退出',
  click: function(){
    gui.App.quit()
  }
}))
document.body.addEventListener('contextmenu', function(ev) {
  // Prevent showing default context menu
  ev.preventDefault()
  // Popup the native context menu at place you click
  menu.popup(ev.x, ev.y)

  return false
}, false)


window.ondragover = (e) => { e.preventDefault(); return false }
window.ondrop = (e) => {
  e.preventDefault()

  var file = e.dataTransfer.files[0]

  let formData = new FormData()
  formData.append('smfile',file)
  // console.log(file);
  fetch("https://sm.ms/api/upload", {
      method: "POST",
      body: formData
  }).then(res => res.json())
  .then(data => {
    app.his.push(data.data)
    saveHis()
  })
  .catch(e => this.$message.error(e))

  return false
}

let hisPath = path.join(path.resolve(process.execPath,".."),"his.json")

function loadHis() {
  fs.readFile(hisPath, function(err, data) {
    app.his = JSON.parse(data.toString())
  })
}

function saveHis() {
  fs.writeFile(hisPath, JSON.stringify(app.his),(err) => {})
}
