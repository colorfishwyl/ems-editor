import { defineStore } from 'pinia'
import { Graph, Scroller, Snapline, Dnd, Transform, Clipboard, Keyboard, Selection, History, Shape } from '@antv/x6'
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
    id: '',
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
        // virtual: true,
        mousewheel: {
          enabled: true,
          factor: 0.1,
        },
        panning: false,
        scaling: { min: 0.5, max: 2 },
        background: { color: '#000000' },
        grid: {
          size: 5,
          visible: true,
          type: 'mesh',
          args: {
            color: 'rgba(100, 100, 100, 0.6)', // 网格线颜色
            thickness: 1, // 网格线宽度
          },
        },
        translating: {
          restrict: true
        },
        connecting: {
          router: 'orth',
          connector: {
            name: 'normal'
          },
          args: {
            padding: 0,
            direction: 'H',
          },
          anchor: 'center',
          connectionPoint: 'anchor',
          allowBlank: true,
          allowLoop: false,
          allowMulti: false,
          snap: {
            radius: 20,
          },
          createEdge() {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: '#03e6f7ff',
                  strokeWidth: 2,
                  targetMarker: null
                },
              },
              zIndex: 0,
            })
          },
          validateConnection({ targetMagnet }) {
            return !!targetMagnet
          },
        },
        highlighting: {
          magnetAdsorbed: {
            name: 'stroke',
            args: {
              attrs: {
                fill: '#5F95FF',
                stroke: '#5F95FF',
              },
            },
          },
        },
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
          resizing: true,
          rotating: true,
          // resizing: transformOption,
        }),
      )
      this.graph.use(
        new Clipboard({
          enabled: true,
        }),
      )
      this.graph.use(
        new Keyboard({
          enabled: true,
          global: true,
        }),
      ).use(
        new Selection({
          rubberband: true,
          rubberNode: true,
          rubberEdge: true,
          showNodeSelectionBox: true,
          showEdgeSelectionBox: true,
          modifiers: ['meta', 'shift', 'ctrl'],
        }),
      ).use(new History())
      registerInit()
      this.initEvent()
    },

    loadMenu({ name, id, value, style }) {
      if (!this.graph) {
        return
      }
      this.name = name;
      this.id = id;
      this.graph.fromJSON(value || {})
      if (style) {
        this.style = { ...this.style, ...styleTemp, ...style }
      } else {
        this.style = { ...this.style, ...styleTemp };
      }
      setTimeout(() => {
        const zoomFactor = Math.min(1280 / this.style.width, 840 / this.style.height);
        console.log(zoomFactor, this.style.width, this.style.height)
        this.graph.zoomTo(zoomFactor);
        this.graph.center()
        console.log(this.graph.getScrollbarPosition())
        const propertyStore = usePropertyStore()
        propertyStore.setTarget('blank', null)
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
      this.graph.on('node:moving', (a) => {
        // console.log('node:moving', a)
      })
      this.graph.on('scale', ({ sx, sy }) => {
        console.log(sx, sy)
        this.zoom = Number((sx * 100).toFixed(0)) // 转成百分比
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

      this.graph.on('edge:mouseenter', ({ cell }) => {
        // cell.addTools([
        //   {
        //     name: 'vertices',
        //     args: {
        //       attrs: { fill: '#666' },
        //       modifiers: ['meta', 'shift', 'ctrl']
        //     },
        //   },
        //   {
        //     name: 'source-arrowhead',
        //     args: {
        //       attrs: { fill: '#666', 'stroke-width': 0, },
        //     },
        //   },
        //   {
        //     name: 'target-arrowhead',
        //     args: {
        //       attrs: { fill: '#666', 'stroke-width': 0, },
        //     },
        //   }
        // ])
      })

      this.graph.on('edge:mouseleave', ({ cell }) => {
        if (cell.hasTool('vertices')) {
          cell.removeTool('vertices')
        }
        if (cell.hasTool('source-arrowhead')) {
          cell.removeTool('source-arrowhead')
        }
        if (cell.hasTool('target-arrowhead')) {
          cell.removeTool('target-arrowhead')
        }
      })

      this.graph.bindKey(['meta+c', 'ctrl+c'], () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.copy(cells)
        }
        return false
      })
      this.graph.bindKey(['meta+x', 'ctrl+x'], () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.cut(cells)
        }
        return false
      })
      this.graph.bindKey(['meta+v', 'ctrl+v'], () => {
        if (!this.graph.isClipboardEmpty()) {
          const cells = this.graph.paste({ offset: 32 })
          this.graph.cleanSelection()
          this.graph.select(cells)
        }
        return false
      })
      this.graph.bindKey(['meta+z', 'ctrl+z'], () => {
        if (this.graph.canUndo()) {
          this.graph.undo()
        }
        return false
      })
      this.graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
        if (this.graph.canRedo()) {
          this.graph.redo()
        }
        return false
      })
      this.graph.bindKey(['meta+a', 'ctrl+a'], () => {
        const nodes = this.graph.getNodes()
        if (nodes) {
          this.graph.select(nodes)
        }
      })
      this.graph.bindKey('backspace', () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.removeCells(cells)
        }
      })
      const showPorts = (ports, show) => {
        for (let i = 0, len = ports.length; i < len; i += 1) {
          ports[i].style.visibility = show ? 'visible' : 'hidden'
        }
      }
      this.graph.on('node:mouseenter', () => {
        const ports = this.el.querySelectorAll(
          '.x6-port-body',
        )
        showPorts(ports, true)
      })
      this.graph.on('node:mouseleave', () => {
        const ports = this.el.querySelectorAll(
          '.x6-port-body',
        )
        showPorts(ports, false)
      })
    }
  }
})
