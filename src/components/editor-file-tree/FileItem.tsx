import { Input, InputRef } from 'antd';
import { useRef, useState } from 'react';

interface FileItemProps {
  value: string;
}

export default function FileItem({ value }: FileItemProps) {
  const inputRef = useRef<InputRef>(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleDoubleClick = () => {
    setIsEdit(true);
    setTimeout(() => {
      inputRef.current?.focus({ cursor: 'end' });
    }, 0);
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEdit ? (
        <Input
          ref={inputRef}
          defaultValue={value}
          size="small"
          className="h-5 text-sm"
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        value
      )}
    </div>
  );
}
