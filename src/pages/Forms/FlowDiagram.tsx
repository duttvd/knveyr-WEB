import { useCallback } from 'react';
import {
    ReactFlow, addEdge, Controls, Background, useNodesState, useEdgesState, Node, Connection, Position
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

const initialNodes: Node[] = [
    {
        id: 'website',
        type: 'input',
        data: { label: 'websiteName : Shopify' },
        position: { x: 100, y: 150 },
        sourcePosition: Position.Right,
        style: {
            background: 'linear-gradient(135deg, #08d500 0%, #08d500 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontWeight: '600'
        }
    },
    {
        id: 'categories',
        data: { label: 'categories' },
        position: { x: 350, y: 150 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontWeight: '600'
        }
    },
    {
        id: 'clothing',
        data: {
            label: `id: 2\nname: Clothing`
        },
        position: { x: 600, y: 50 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            whiteSpace: 'pre-wrap',
            fontWeight: '500'
        }
    },
    {
        id: 'electronics',
        data: {
            label: `id: 1\nname: Electronics`
        },
        position: { x: 600, y: 250 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            whiteSpace: 'pre-wrap',
            fontWeight: '500'
        }
    },
    {
        id: 'products1',
        data: { label: 'products1' },
        position: { x: 850, y: 50 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        style: {
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '15px',
            borderRadius: '8px',
            fontSize: '14px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontWeight: '500'
        }
    },
    {
        id: 'products1-details',
        data: {
            label: `id: 201\nname:T-Shirt brand: Nike price: 800`
        },
        position: { x: 1100, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
            background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            whiteSpace: 'pre-wrap',
            fontWeight: '500'
        }
    },
    {
        id: 'products1-price',
        data: {
            label: `id: 202\nname:Jeans brand: Levi's price: 1200`
        },
        position: { x: 1100, y: 150 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
            background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            whiteSpace: 'pre-wrap',
            fontWeight: '500'
        }
    },
    {
        id: 'products2',
        type: 'output',
        data: { label: 'products2' },
        position: { x: 850, y: 250 },
        targetPosition: Position.Left,
        style: {
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontWeight: '600'
        }
    }
];

const initialEdges = [
    {
        id: 'e-website-categories',
        source: 'website',
        target: 'categories',
        style: { stroke: '#6366f1', strokeWidth: 2 },
        animated: true
    },
    {
        id: 'e-categories-clothing',
        source: 'categories',
        target: 'clothing',
        style: { stroke: '#10b981', strokeWidth: 2 },
        animated: true
    },
    {
        id: 'e-categories-electronics',
        source: 'categories',
        target: 'electronics',
        style: { stroke: '#f59e0b', strokeWidth: 2 },
        animated: true
    },
    {
        id: 'e-clothing-products',
        source: 'clothing',
        target: 'products1',
        style: { stroke: '#8b5cf6', strokeWidth: 2 },
        animated: true
    },
    {
        id: 'e-products1-details',
        source: 'products1',
        target: 'products1-details',
        style: { stroke: '#ec4899', strokeWidth: 2 },
        animated: true
    },
    {
        id: 'e-products1-price',
        source: 'products1',
        target: 'products1-price',
        style: { stroke: '#14b8a6', strokeWidth: 2 },
        animated: true
    },
    {
        id: 'e-electronics-products',
        source: 'electronics',
        target: 'products2',
        style: { stroke: '#f97316', strokeWidth: 2 },
        animated: true
    }
];


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
                        defaultEdgeOptions={{
                            type: 'smoothstep',
                            animated: true,
                        }}
                    >
                        <Controls className="bg-white dark:bg-gray-800 rounded-lg shadow-lg" />
                        <Background color="#e5e7eb" gap={16} size={2} bgColor='#070000' />

                    </ReactFlow>
                </div>
            </div>
        </>
    );
}
