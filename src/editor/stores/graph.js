import { defineStore } from 'pinia'
import { Graph, Scroller, Snapline, Dnd, Transform } from '@antv/x6'
import registerInit from '../nodes/register'
import { usePropertyStore } from './property'

const styleTemp = {
  backgroundColor: '#1e1e1e',
  backgroundImage: null
}

const transformOption = {
  enabled: true,
  minWidth: 1,
  maxWidth: 1000,
  minHeight: 1,
  maxHeight: 1500,
  orthogonal: false,
  restrict: false,
  preserveAspectRatio: false,
}

export const useGraphStore = defineStore('editor-graph', {
  state: () => ({
    el: null,
    graph: null,
    dnd: null,
    style: { ...styleTemp, width: 1920, height: 1080 },
    name: '',
    code: '',
    zoom: 100,
  }),

  getters: {
    hasGraph: (state) => !!state.graph
  },

  actions: {
    init() {
      if (this.el === null) return;
      if (this.graph) {
        this.graph.dispose();
      }
      this.graph = new Graph({
        container: this.el,
        autoResize: true,
        mousewheel: true,
        panning: false,
        scaling: { min: 0.5, max: 2 },
        background: { color: '#000000' },
        grid: {
          size: 10,
          visible: true,
          type: 'doubleMesh',
          args: [
            {
              color: '#4b4b4b', // 主网格线颜色
              thickness: 1 // 主网格线宽度
            },
            {
              color: '#313131', // 次网格线颜色
              thickness: 1, // 次网格线宽度
              factor: 4 // 主次网格线间隔
            }
          ]
        },
        translating: {
          restrict: true
        },
        connecting: {
          snap: true,
          allowLoop: false,
          allowMulti: false
        }
      })

      this.graph.use(
        new Snapline({
          enabled: true
        })
      )
      // Scroller 插件可以使画布支持滚动
      const s = new Scroller({
        pageWidth: this.style.width,
        pageHeight: this.style.height,
        enabled: true,
        pannable: true,
        autoResize: false
      })

      this.graph.use(s)
      this.dnd = new Dnd({
        target: this.graph,
        validateNode() {
          return true;
        },
      });
      this.graph.use(
        new Transform({
          resizing: transformOption,
        }),
      )
      registerInit()
      this.initEvent()
    },

    loadMenu({ name, code, value, style }) {
      if (!this.graph) {
        return
      }
      this.name = name;
      this.code = code;
      this.graph.fromJSON(value || {})
      if (style) {
        this.style = { ...this.style, ...styleTemp, ...style }
      } else {
        this.style = { ...this.style, ...styleTemp };
      }
      setTimeout(() => {
        // const zoomFactor = this.style.width ? 1300 / this.style.width : 0.65;
        this.graph.zoomTo(0.8);
        this.graph.center()
      }, 100)
    },

    setZoom(scale) {
      this.zoom = Number(scale)
    },

    updateSize(width, height, callback) {
      this.style.width = width
      this.style.height = height
      this.init();
      setTimeout(() => {
        if (callback) callback();
      }, 100)
    },

    initEvent() {
      // Initialize any event listeners here if needed
      this.graph.on('scale', ({ sx, sy }) => {
        console.log(sx, sy)
        this.zoom = Number((sx * 100).toFixed(0)) // 转成百分比
      })

      this.graph.on('node:added', ({ node }) => {

      })

      this.graph.on('node:resized', ({ node }) => {
        console.log('Node resized:', node.id, node.size());
      })
      const propertyStore = usePropertyStore()
      this.graph.on('blank:click', ({ e, x, y }) => {
        console.log('Blank click at:', x, y, e);
        propertyStore.setTarget('blank', null)
      });

      this.graph.on('edge:click', ({ e, x, y }) => {
        console.log('Edge click at:', x, y);
        propertyStore.setTarget('edge', e)
      });

      this.graph.on('node:click', ({ e, x, y }) => {
        console.log('Node click at:', x, y);
        propertyStore.setTarget('node', e)
      });
    }
  }
})
