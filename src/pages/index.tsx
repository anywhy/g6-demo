import React from 'react';
import G6 from '@antv/g6';
import { ModelConfig } from '@antv/g6/lib/types';
import '@/assets/iconfont/iconfont.css';

G6.registerNode('test-node', {
    // 默认配置信息
    options: {
      size: [120, 80],
      wrapperStyle: {
          lineWidth: 1.2,
          radius: [3],
          fill: '#fff',
          stroke: '#2da9fa',
      },
  },
  draw(cfg: ModelConfig, group: any) {
    const { size, wrapperStyle } = this.options as any;
    const shape = group.addShape('rect', {
        name: 'wrapper',
        draggable: true,
        attrs: {
            x: 0,
            y: -  2,
            width: size[0],
            height: size[1] +  2,
            ...wrapperStyle,
        },
    });
    return shape;

  },
  afterDraw(cfg: ModelConfig, group: any) {
    const { size } = this.options as any;
    // 图标
    group.addShape('text', {
      name: 'iconfont',
      draggable: true,
      attrs: {
        x: size[0] / 2, y: size[1] / 2,
        fontFamily: 'iconfont',
        fontSize: 25,
        text: '\ue612',
        fill: '#0c0',
        textAlign: 'center',
        textBaseline: 'middle',
      },
    });
  }

}, 'single-node');

export default () => {

  const initGGraph = () => {
    const graph = new G6.Graph({
      container: 'mountNode',  
      width: 800,             
      height: 500,
      modes: {
        default: ['drag-node', 'drag-canvas',],
      }             
    });

    graph.read({
      nodes: [{
        id: 'node1', 
        type: 'test-node',
        x: 100,      
        y: 200       
      }, {
        id: 'node2', 
        x: 300,      
        y: 200       
      }],
      // 边集
      edges: [{
        source: 'node1', 
        target: 'node2' 
      }]
    });
  }

  React.useEffect(() => initGGraph(), []);

  return (
    <div id="mountNode">

    </div>
  );
}
