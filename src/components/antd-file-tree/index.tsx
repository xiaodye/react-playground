import React, { useMemo, useState, useEffect } from 'react';
import { Tree, TreeProps, Space, Button, Popconfirm } from 'antd';
import {
  FileOutlined,
  FolderOutlined,
  DeleteOutlined,
  FileAddOutlined,
  FolderAddOutlined,
} from '@ant-design/icons';
import { useSandpack } from '@codesandbox/sandpack-react';
import type { DataNode } from 'antd/es/tree';
import { cn } from '@/lib/utils';

interface FileTreeProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 文件树组件
 */
export default function AntdFileTree({ className, style }: FileTreeProps) {
  const { sandpack } = useSandpack();
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['components']);

  // 初始化选中当前活动文件
  useEffect(() => {
    if (sandpack.activeFile) {
      setSelectedKeys([sandpack.activeFile]);
    }
  }, [sandpack.activeFile]);

  /**
   * 将SandpackFiles转换为antd Tree所需的数据结构
   */
  const treeData = useMemo(() => {
    const files = sandpack.files;
    const treeMap: Record<string, DataNode> = {};
    const result: DataNode[] = [];
    const expandKeys: React.Key[] = [];

    // 排序文件路径，确保文件夹先于文件处理
    const filePaths = Object.keys(files).sort();

    // 处理每个文件路径
    filePaths.forEach((path) => {
      // 去除开头的斜杠，分割路径
      const parts = path.replace(/^\//, '').split('/');
      let parentKey = '';

      // 处理路径的每一部分
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isFile = i === parts.length - 1;
        const currentKey = parentKey ? `${parentKey}/${part}` : part;

        // 如果是文件夹，添加到展开列表
        if (!isFile && !expandKeys.includes(currentKey)) {
          expandKeys.push(currentKey);
        }

        // 如果节点已存在，跳过
        if (treeMap[currentKey]) {
          parentKey = currentKey;
          continue;
        }

        // 使用正确的路径格式作为key
        const nodeKey = currentKey.startsWith('/') ? currentKey : `/${currentKey}`;

        // 创建新节点
        const node: DataNode = {
          title: part,
          key: nodeKey,
          icon: isFile ? <FileOutlined /> : <FolderOutlined />,
          isLeaf: isFile,
        };

        // 添加到树结构
        if (parentKey) {
          // 作为子节点添加到父节点
          if (!treeMap[parentKey].children) {
            treeMap[parentKey].children = [];
          }
          treeMap[parentKey].children!.push(node);
        } else {
          // 作为根节点
          result.push(node);
        }

        // 添加到映射表
        treeMap[currentKey] = node;

        // 更新父键
        parentKey = currentKey;
      }
    });

    // 更新默认展开的节点
    if (expandKeys.length > 0) {
      setExpandedKeys((prev) => [...new Set([...prev, ...expandKeys])]);
    }

    return result;
  }, [sandpack.files]);

  /**
   * 处理点击节点事件
   */
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    if (!info.node || selectedKeys.length === 0) return;

    // 更新选中状态
    setSelectedKeys(selectedKeys);

    // 只有文件节点才打开文件
    if (info.node.isLeaf) {
      const filePath = info.node.key as string;

      // 设置活动文件
      sandpack.setActiveFile(filePath);

      // 如果文件不在可见列表中，添加到可见列表
      if (!sandpack.visibleFiles.includes(filePath)) {
        // 直接修改visibleFiles数组
        sandpack.visibleFiles.push(filePath);
      }
    }
  };

  /**
   * 处理展开/折叠事件
   */
  const onExpand: TreeProps['onExpand'] = (keys) => {
    setExpandedKeys(keys);
  };

  /**
   * 添加新文件（示例函数，实际未实现）
   */
  const handleAddFile = () => {
    // 此处可以实现添加文件的逻辑
    console.log('添加文件');
  };

  /**
   * 添加新文件夹（示例函数，实际未实现）
   */
  const handleAddFolder = () => {
    // 此处可以实现添加文件夹的逻辑
    console.log('添加文件夹');
  };

  /**
   * 删除选中的文件/文件夹（示例函数，实际未实现）
   */
  const handleDelete = () => {
    // 此处可以实现删除文件/文件夹的逻辑
    console.log('删除文件/文件夹', selectedKeys);
  };

  return (
    <div className={cn('flex h-full flex-col', className)} style={style}>
      <Space size={2} className="flex h-10 justify-end border-b-[0.5px] px-2">
        <Button type="text" size="small" icon={<FileAddOutlined />} onClick={handleAddFile} />
        <Button type="text" size="small" icon={<FolderAddOutlined />} onClick={handleAddFolder} />
        <Popconfirm
          title="删除"
          description="确认删除选中的文件/文件夹吗？"
          okText="确认"
          cancelText="取消"
          okButtonProps={{ danger: true }}
          onConfirm={handleDelete}
        >
          <Button type="text" size="small" icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>

      <Tree
        className="flex-1 pt-2"
        showIcon
        expandedKeys={expandedKeys}
        selectedKeys={selectedKeys}
        treeData={treeData}
        onSelect={onSelect}
        onExpand={onExpand}
      />
    </div>
  );
}
