import { register, getTeleport } from '@antv/x6-vue-shape'
import ProgressNode from './testNode.vue'

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
};

export default registerInit;
