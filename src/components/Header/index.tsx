import { Button, Space } from '@arco-design/web-react';
import { AuroraText } from '../magicui/aurora-text';
import reactLogo from '@/assets/react.svg';
import { DownloadOutlined, ShareAltOutlined, SunOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <header className="flex h-16 min-h-16 items-center justify-between border-b-[0.5px] pl-6 pr-6">
      <Space>
        <img src={reactLogo} className="h-8 w-8" alt="" />
        <h1 className="text-2xl font-bold tracking-tighter">
          <AuroraText>React Playground</AuroraText>
        </h1>
      </Space>
      <Space>
        {/* <Button icon={<MoonOutlined />} onClick={() => setTheme("dark")} */}
        <Button icon={<SunOutlined />} />
        <Button icon={<ShareAltOutlined />} />
        <Button icon={<DownloadOutlined />} />
      </Space>
    </header>
  );
}
