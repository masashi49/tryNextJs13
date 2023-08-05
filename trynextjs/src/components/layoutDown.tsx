import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const LayoutDown = ({ children }: Props) => {
  return (
    <div>
      <ul>
        <li>リスト</li>
      </ul>
      {children}
      <dl>
        <dt>タイトル</dt>
        <dd>内容</dd>
      </dl>
    </div>
  );
};
