export class Water{
    // 工厂模式给传入元素配置参数 
    constructor(options){
        this.$options = options
        // 最小高度
        this.miniHeight = []
        // 私有方法 
        this.__init()
    }
    __init() {
        // 获取外层盒子下的所以子元素 也就是图片外层的盒子 
        this.items = document.querySelector(this.$options.el).children
        // 添加列
        this.column = this.$options.column
        this.gap = this.$options.gap
        // 元素宽度减去当前的间距*3除去当前的列得到元素的宽度 也就是根据页面宽度一行可以放几张图片
        this.itemWidth = (document.querySelector(this.$options.el).offsetWidth - this.gap * 3) / this.column
        this.__render()
    }
    __render() { 
        // 把子元素数组化遍历 
        [...this.items].forEach((value,index) => {
            // 把提取的元素宽度赋值 
            value.style.width = this.itemWidth + "px"
            if (index < this.column) {
                value.style.top = "0px"
                // 当前元素的宽度加上边距 * 下标
                value.style.left = (this.itemWidth + this.gap) * index + "px"
                // 把元素的高度push到数组里就是index最小的高度 
                this.miniHeight.push(value.offsetHeight)
            } else {
                // 这部分是第二行
                this.miniIndex = this.__getMiniIndex()
                // 元素的上距离 = 最小上距离 加上边距
                value.style.top = this.miniHeight[this.miniIndex] + this.gap + "px"
                // 左距离=元素宽度加上边距*索引 
                value.style.left = (this.itemWidth + this.gap) * this.miniIndex + "px"
                this.miniHeight[this.miniIndex] = this.miniHeight[this.miniIndex] + value.offsetHeight + this.gap
            }
        })
    }
    __getMiniIndex() {
        return this.miniHeight.indexOf(Math.min(...this.miniHeight))
    }
}