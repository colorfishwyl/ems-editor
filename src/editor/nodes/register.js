import { register, getTeleport } from '@antv/x6-vue-shape'
import vueNode from './vueNode.vue'
import svgNode from './svgNode.vue';
import iconNode from './iconfontNode.vue';


const ports = {
    groups: {
        top: {
            position: 'top',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
        right: {
            position: 'right',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
        bottom: {
            position: 'bottom',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
        left: {
            position: 'left',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
    },
    items: [
        {
            group: 'top',
        },
        {
            group: 'right',
        },
        {
            group: 'bottom',
        },
        {
            group: 'left',
        },
    ],
}

const registerInit = () => {
    register({
        shape: 'icon-node',
        width: 50,
        height: 50,
        data: {
            icon: null
        },
        component: iconNode,
    });
    register({
        shape: 'vue-node',
        data: {
            progress: 70,
        },
        component: vueNode,
    });
    register({
        shape: 'svg-node',
        width: 50,
        height: 50,
        data: {
            svg: null
        },
        ports: { ...ports },
        component: svgNode,
    });
};

export default registerInit;
