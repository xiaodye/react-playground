import { Button, Space } from '@arco-design/web-react';
import { AuroraText } from '../magicui/aurora-text';
import reactLogo from '@/assets/react.svg';
import {
  DownloadOutlined,
  FundProjectionScreenOutlined,
  MoonOutlined,
  ShareAltOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Toggle } from '@/components/ui/toggle';

export default function Header() {
  return (
    <header className="flex h-16 min-h-16 items-center justify-between border-b-[0.5px] pl-6 pr-6">
      <Space>
        <img src={reactLogo} className="h-8 w-8" alt="" />
        <h1 className="text-2xl font-bold tracking-tighter">
          <AuroraText>MDX-Doc-Generator</AuroraText>
        </h1>
      </Space>
      <Space size="mini" className="ml-auto mr-10 rounded-xl border-[0.5px] p-1">
        <Toggle aria-label="Toggle italic" size="sm">
          <SunOutlined />
        </Toggle>
        <Toggle aria-label="Toggle italic" size="sm" defaultPressed={true}>
          <MoonOutlined />
        </Toggle>
        <Toggle aria-label="Toggle italic" size="sm">
          <FundProjectionScreenOutlined />
        </Toggle>
      </Space>
      <Space>
        <Button icon={<MoonOutlined />} />
        <Button icon={<SunOutlined />} />
        <Button icon={<ShareAltOutlined />} />
        <Button icon={<DownloadOutlined />} />
      </Space>
    </header>
  );
}
