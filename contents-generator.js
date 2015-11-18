var fs = require('fs')

function Generator(file) {
  this.file = file
  this.read()
  this.parse()
  this.write()
}

Generator.prototype.read = function() {
  this.content = fs.readFileSync(this.file, 'utf-8')
}

Generator.prototype.parse = function() {
  this.orders = []
  this.contents = []
  this.content = this.content.replace(/(#{2,})\s*([\d\.\s]*)(.*)/g, this._replacer.bind(this))

  this.contentsStr = ''
  this._renderContents(this.contents, 0)
  this.content = this.content.replace(/\n[\s\S]*?##/, '\n\n' + this.contentsStr + '\n##')
}

Generator.prototype._replacer = function(match, level, order, title) {
  if (level.length < 5) {
    _level = level.length - 2
    if (this.orders.length !== _level + 1) {
      this.orders.length = _level + 1
      this.orders[_level] || (this.orders[_level] = 0)
    }
    this.orders[_level]++

    var host = this.contents
    var i = 1
    while (this.orders[i]) {
      host = host[this.orders[i - 1] - 1]
      host.children || (host.children = [])
      host = host.children
      i++
    }

    host.push({
      orders: this.orders.concat(),
      title: title
    })
    return level + ' ' + this.orders.join('.') + ' ' + title
  }
  return level + ' ' + title
}

Generator.prototype._renderContents = function(list, level) {
  list.forEach(function(item) {
    this.contentsStr += Array(level + 1).join(' ') + '* [' + item.orders.join('.') + ' ' + item.title + '](' + item.orders.join('') + '-' + item.title + ')\r\n'
    item.children && this._renderContents(item.children, level + 2)
  }, this)
}

Generator.prototype.write = function() {
  fs.writeFileSync(this.file, this.content)
}

new Generator('JavaScript.md')