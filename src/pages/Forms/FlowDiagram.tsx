import { useCallback } from 'react';
import {
    ReactFlow,
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Node,
    Edge,
    Connection
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Vishnu' },
        position: { x: 250, y: 50 },
    },
    {
        id: '2',
        data: { label: 'knveyr' },
        position: { x: 100, y: 150 },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'web' },
        position: { x: 400, y: 150 },
    },
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', label: 'Connection 1' },
    { id: 'e1-3', source: '1', target: '3', label: 'Connection 2' },
];

const nodeClassName = (node: Node) => {
    return node.type || 'default';
};

export default function FlowDiagram() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        []
    );

    return (
        <>
            <PageMeta
                title="Flow Diagram | TailAdmin - React.js Admin Dashboard Template"
                description="Interactive flow diagram with nodes and edges"
            />
            <PageBreadcrumb pageTitle="Flow Diagram" />

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <div className="h-[calc(100vh-250px)] w-full min-h-[500px]">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                        attributionPosition="top-right"
                        style={{ backgroundColor: "" }}
                    >
                        <MiniMap
                            zoomable
                            pannable
                            nodeClassName={nodeClassName}
                            nodeColor={(node) => {
                                switch (node.type) {
                                    case 'input': return '#6ede87';
                                    case 'output': return '#ff0072';
                                    default: return '#1a192b';
                                }
                            }}
                        />
                        <Controls />
                        <Background color="#aaa" gap={7} />
                    </ReactFlow>
                </div>
            </div>
        </>
    );
}
