import { register, getTeleport } from '@antv/x6-vue-shape'
import ProgressNode from './testNode.vue'
import svgNode from './svgNode.vue';

const registerInit = () => {
    register({
        shape: 'custom-vue-node',
        width: 128,
        height: 128,
        data: {
            progress: 70,
        },
        component: ProgressNode,
    });
    register({
        shape: 'svg-node',
        width: 50,
        height: 50,
        data: {
            svg: null
        },
        component: svgNode,
    });
};

export default registerInit;
